# Production Manifest

Updated: 2026-04-26

## Audio Status

All 18 slide audio files are present in `audio/`.

Format across all files:

- WAV
- mono
- 24 kHz
- 16-bit

Total narration runtime:

- audio only: 16:29
- with 0.5 second transitions between slides: about 16:37
- with 1 second transitions between slides: about 16:46

## Slide Audio

| Slide | Title | Audio File | Duration | Status | Notes |
|---:|---|---|---:|---|---|
| 1 | Programming In The Language Of Intent | `audio/slide-01-programming-in-the-language-of-intent.wav` | 00:46 | ready | Good cover-slide length. |
| 2 | The Problem Is Not Just Code Generation | `audio/slide-02-the-problem-is-not-just-code.wav` | 01:04 | ready | Filename is shorter than title, but stable. |
| 3 | Literate Programming, Very Briefly | `audio/slide-03-literate-programming-very-briefly.wav` | 00:58 | ready |  |
| 4 | The AI Shift | `audio/slide-04-the-ai-shift.wav` | 01:00 | ready |  |
| 5 | The Precision Spectrum | `audio/slide-05-the-precision-spectrum.wav` | 01:14 | ready | Central concept slide; longer duration is intentional. |
| 6 | What ALP Is | `audio/slide-06-what-alp-is.wav` | 00:49 | ready |  |
| 7 | A Tiny Example | `audio/slide-07-a-tiny-example.wav` | 01:03 | ready |  |
| 8 | Contracts Become Tests | `audio/slide-08-contracts-become-tests.wav` | 00:51 | ready |  |
| 9 | Logic Can Stay Human-Shaped | `audio/slide-09-logic-can-stay-human-shaped.wav` | 00:49 | ready |  |
| 10 | The Agentic Tangle | `audio/slide-10-the-agentic-tangle.wav` | 00:53 | ready |  |
| 11 | The Rules Are For The Agent | `audio/slide-11-the-rules-are-for-the-agent.wav` | 00:52 | ready |  |
| 12 | Why I Am Converging On This | `audio/slide-12-why-am-i-converging-on-this.wav` | 01:01 | ready |  |
| 13 | Antigravity As One Implementation | `audio/slide-13-antigravity-as-one-implementation.wav` | 01:01 | ready |  |
| 14 | Advisor Strategy | `audio/slide-14-advisor-strategy.wav` | 00:55 | ready |  |
| 15 | Project Memory Is A Bonus | `audio/slide-15-project-memory-is-a-bonus.wav` | 00:56 | ready |  |
| 16 | FAQ Moment | `audio/slide-16-faq-moment.wav` | 00:42 | ready | Shorter than expected; review by ear before final assembly. |
| 17 | When To Keep It Light | `audio/slide-17-when-to-keep-it-light.wav` | 00:49 | ready |  |
| 18 | Closing | `audio/slide-18-closing.wav` | 00:39 | ready | Good closing length if it feels resolved by ear. |

## Next Production Steps

1. Watch the full draft for pacing, visual consistency, audio glitches, and text fidelity.
2. Decide which individual slides, if any, need regenerated images or audio.
3. If a shareable final is needed, convert the WebM draft to MP4 with `ffmpeg` or another encoder.

## Image Status

All 18 generated slide images are present in `images/`.

The contact sheet is available at:

```text
images/contact-sheet.png
```

Visual QA from the contact sheet:

- overall visual system is coherent
- warm editorial/source-to-code style held across the deck
- main slide titles are readable
- some generated pseudo-text is small or imperfect, but acceptable for a first full draft

## Draft Video

Draft video:

```text
video/alp-explainer-draft.webm
```

Size:

```text
16,309,189 bytes
```

Assembly method:

```text
node tools/render-video-webm.mjs
```

Notes:

- The local machine did not have `ffmpeg` on PATH.
- The draft was rendered with local Chrome headless, Canvas, Web Audio, and `MediaRecorder`.
- The current renderer outputs WebM, not MP4.
