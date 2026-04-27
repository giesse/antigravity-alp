import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = join(root, "images");
const audioDir = join(root, "audio");
const videoDir = join(root, "video");
const outFile = join(videoDir, "alp-explainer-draft.webm");
const renderHtml = join(videoDir, "render-video.html");
const userDataDir = join(videoDir, ".chrome-render-profile");
const downloadDir = videoDir;

const chromeCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];

const chromePath = chromeCandidates.find(existsSync);
if (!chromePath) {
  throw new Error("Could not find Chrome or Edge. Install Chrome/Edge or update chromeCandidates.");
}

mkdirSync(videoDir, { recursive: true });
if (existsSync(outFile)) rmSync(outFile);
if (existsSync(userDataDir)) rmSync(userDataDir, { recursive: true, force: true });

const imageFiles = readdirSync(imagesDir)
  .filter((name) => /^slide-\d+-.+\.png$/i.test(name))
  .sort();
const audioFiles = readdirSync(audioDir)
  .filter((name) => /^slide-\d+-.+\.wav$/i.test(name))
  .sort();

if (imageFiles.length !== 18 || audioFiles.length !== 18) {
  throw new Error(`Expected 18 images and 18 audio files, found ${imageFiles.length} images and ${audioFiles.length} audio files.`);
}

const slideNum = (name) => Number(name.match(/^slide-(\d+)/)?.[1]);
const slides = imageFiles.map((image) => {
  const number = slideNum(image);
  const audio = audioFiles.find((candidate) => slideNum(candidate) === number);
  if (!audio) throw new Error(`Missing audio for ${image}`);
  return {
    number,
    image: pathToFileURL(join(imagesDir, image)).href,
    audio: pathToFileURL(join(audioDir, audio)).href,
    imageName: image,
    audioName: audio,
  };
});

const html = String.raw`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>ALP Explainer Render</title>
  <style>
    html, body { margin: 0; width: 100%; height: 100%; background: #111; overflow: hidden; }
    canvas { display: block; width: 100vw; height: 100vh; }
  </style>
</head>
<body>
  <canvas id="stage" width="1920" height="1080"></canvas>
  <script>
    const slides = ${JSON.stringify(slides)};
    const canvas = document.getElementById("stage");
    const ctx = canvas.getContext("2d");
    const transitionMs = 500;
    const fps = 30;

    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function loadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    }

    async function playAudio(audioContext, destination, src) {
      const res = await fetch(src);
      const bytes = await res.arrayBuffer();
      const buffer = await audioContext.decodeAudioData(bytes);
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(destination);
      source.start();
      await new Promise((resolve) => source.onended = resolve);
    }

    function drawSlide(img) {
      ctx.fillStyle = "#f6f2e8";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    async function main() {
      const audioContext = new AudioContext({ sampleRate: 48000 });
      const destination = audioContext.createMediaStreamDestination();
      const canvasStream = canvas.captureStream(fps);
      const stream = new MediaStream([
        ...canvasStream.getVideoTracks(),
        ...destination.stream.getAudioTracks(),
      ]);

      const mime = MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")
        ? "video/webm;codecs=vp9,opus"
        : "video/webm;codecs=vp8,opus";
      const recorder = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 6500000 });
      const chunks = [];
      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size) chunks.push(event.data);
      };

      const done = new Promise((resolve) => recorder.onstop = resolve);
      recorder.start(1000);

      for (const slide of slides) {
        console.log("Rendering slide", slide.number, slide.imageName, slide.audioName);
        const img = await loadImage(slide.image);
        drawSlide(img);
        await playAudio(audioContext, destination, slide.audio);
        await wait(transitionMs);
      }

      recorder.stop();
      await done;
      const blob = new Blob(chunks, { type: "video/webm" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "alp-explainer-draft.webm";
      document.body.appendChild(a);
      a.click();
      console.log("RENDER_DONE", blob.size);
    }

    main().catch((error) => {
      console.error("RENDER_FAILED", error && (error.stack || error.message || error));
    });
  </script>
</body>
</html>`;

writeFileSync(renderHtml, html, "utf8");

const port = 9223;
const chrome = spawn(chromePath, [
  "--headless=new",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  "--allow-file-access-from-files",
  "--autoplay-policy=no-user-gesture-required",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "about:blank",
], { stdio: ["ignore", "pipe", "pipe"] });

chrome.stderr.on("data", (data) => process.stderr.write(data));

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForChrome() {
  for (let i = 0; i < 80; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return;
    } catch {
      await delay(250);
    }
  }
  throw new Error("Chrome did not start remote debugging in time.");
}

async function cdpConnect() {
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const tab = tabs.find((item) => item.type === "page") || tabs[0];
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });
  let id = 0;
  const pending = new Map();
  ws.addEventListener("message", (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === "Runtime.consoleAPICalled") {
      const text = msg.params.args.map((arg) => arg.value ?? arg.description ?? "").join(" ");
      console.log(text);
    }
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const msgId = ++id;
    pending.set(msgId, { resolve, reject });
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
  return { ws, send };
}

try {
  await waitForChrome();
  const { ws, send } = await cdpConnect();
  await send("Page.enable");
  await send("Runtime.enable");
  try {
    await send("Browser.setDownloadBehavior", { behavior: "allow", downloadPath: downloadDir });
  } catch {
    await send("Page.setDownloadBehavior", { behavior: "allow", downloadPath: downloadDir });
  }
  await send("Page.navigate", { url: pathToFileURL(renderHtml).href });

  for (let i = 0; i < 1400; i++) {
    if (existsSync(outFile)) break;
    await delay(1000);
  }

  if (!existsSync(outFile)) {
    throw new Error(`Render did not produce ${outFile}`);
  }

  console.log(`Wrote ${outFile}`);
  ws.close();
} finally {
  chrome.kill();
}
