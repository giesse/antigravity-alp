# Production Notes

## Output Goal

Create a narrated video from:

1. Markdown slide source
2. generated slide images
3. per-slide voice-over audio
4. final video assembly

No baked-in subtitles for the first version.

Current narration target:

- clean script: about 2,550 words
- generated audio runtime: about 16:29 before slide transitions
- desired delivery: natural conference-talk pace, not slow dramatic narration

See `production-manifest.md` for per-slide audio durations and readiness status.

## Suggested Workflow

1. Lock the narrative outline.
2. Draft clean narration per slide in `scripts/`.
3. Draft TTS-tagged narration per slide after the clean script is stable.
4. Generate 2-3 visual style samples before producing all slides.
5. Generate final slide images.
6. Generate per-slide audio.
7. Assemble images and audio into one video.
8. Review pacing, audio transitions, and slide readability.

Current draft assembly command:

```powershell
& 'C:\Users\PC\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' 'C:\Dev\AntigravityALP\alp-explainer\tools\render-video-webm.mjs'
```

This uses Chrome headless and writes `video/alp-explainer-draft.webm`.

## TTS Notes

Target model:

```text
gemini-3.1-flash-tts-preview
```

Current source notes are captured in `tts-research.md`.

Google's documentation and launch materials describe inline audio tags such as:

- `[short pause]`
- `[whispers]`
- `[excited]`
- `[serious]`

Use tags very sparingly. The first sample pass felt too pause-heavy, even though the runtime was short. Prefer a natural conference-talk rhythm and reserve explicit pause tags for major conceptual turns.

Maintain two script layers:

- `script_clean.md`: human-readable narration
- `script_tts.md`: narration with audio tags and direction

## Voice Strategy

Default to one narrator.

Use a second voice only for short FAQ-style interruptions where it improves clarity:

- "Is this just more docs?"
- "Doesn't this slow you down?"
- "What if I am only prototyping?"

The second voice should sound like a thoughtful teammate, not a strawman.

## Visual Style

Explore a hybrid style:

- editorial book/source imagery for literate programming
- compiler or translation pipeline imagery for the tangle step
- practical workflow diagrams for Antigravity usage

Avoid generic AI futurism.

The visuals should feel technical, warm, and precise.

## Generated Assets

Draft generated media is ignored by git:

- `images/`
- `audio/`
- `video/`

Commit final generated assets only if they become part of the public artifact.

## Open Decisions

- Final visual system
- Whether to use one voice or a limited two-voice format
- Exact TTS generation path: AI Studio manual export, Gemini API, or Vertex AI
- Final video assembly tooling
- Whether final media belongs in git, Git LFS, or external hosting
