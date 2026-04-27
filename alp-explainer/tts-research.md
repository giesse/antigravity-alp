# Gemini 3.1 Flash TTS Research Notes

Checked: 2026-04-26

Sources:

- Google AI for Developers, Text-to-speech generation: https://ai.google.dev/gemini-api/docs/speech-generation
- Google Keyword launch post: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/

## Model

Use:

```text
gemini-3.1-flash-tts-preview
```

The Google AI docs list Gemini 3.1 Flash TTS Preview as supporting both single-speaker and multi-speaker TTS.

## Availability

The launch post says Gemini 3.1 Flash TTS is available in preview through:

- Gemini API
- Google AI Studio
- Vertex AI
- Google Vids

For this project, likely paths are:

1. Manual iteration in AI Studio for voice/style selection.
2. API generation once the script and voice choices are stable.

## Audio Tags

Gemini TTS supports inline audio tags in square brackets.

The docs describe tags as modifiers that affect tone, pace, emotional delivery, or non-verbal interjections.

Examples from the docs include:

- `[whispers]`
- `[laughs]`
- `[short pause]`
- `[excitedly]`
- `[bored]`
- `[reluctantly]`
- `[very fast]`
- `[very slow]`
- `[sighs]`
- `[gasp]`
- `[serious]`

The docs say there is no exhaustive list of working tags, so production should include a short voice test phase before generating all final slide audio.

## Prompt Structure

The docs recommend combining inline tags with broader performance direction.

Useful sections:

- Audio Profile
- Scene
- Director's Notes
- Sample context
- Transcript
- Audio tags

For this presentation, use a restrained version:

```text
# AUDIO PROFILE
Single calm technical narrator, warm and thoughtful, natural pacing, mildly enthusiastic, not promotional.

# DIRECTOR'S NOTES
Speak as if explaining a practice to experienced developers. Keep the pace conversational. Avoid sales energy. Use pauses to let conceptual turns land.

# TRANSCRIPT
...
```

## Single Speaker vs Multi Speaker

Single speaker:

- simpler
- best for most slides
- likely more consistent

Multi-speaker:

- supported with up to 2 speakers
- each speaker must be named in the transcript
- useful for short FAQ moments

Recommendation:

Start with one narrator. If the FAQ moments feel flat, test one second voice only on the FAQ slide.

## Candidate Voices

The docs list 30 built-in voice options. Candidate voices to audition:

- `Charon`: informative
- `Iapetus`: clear
- `Rasalgethi`: informative
- `Sadaltager`: knowledgeable
- `Sulafat`: warm
- `Kore`: firm
- `Puck`: upbeat, possible second voice only

Final voice choice should be made by listening in AI Studio or the Voice Library.

## Production Constraints

Important limitations from the docs:

- TTS accepts text-only input and generates audio-only output.
- TTS does not support streaming.
- A TTS session has a 32k token context window.
- Longer outputs may drift in speech quality and consistency after a few minutes.
- Gemini 3.1 Flash TTS Preview can occasionally return text tokens instead of audio tokens, producing a server error.
- Vague prompts can be rejected or can cause the model to read style instructions aloud.

Production implications:

- Generate audio per slide, not as one full-talk file.
- Use a clear preamble telling the model to synthesize speech.
- Explicitly label the transcript section.
- Add retry logic if using the API.
- Keep tags very sparse and coherent with the selected voice. In the first sample, frequent `[short pause]` tags made the delivery feel too slow even though the files were only about 33-37 seconds.
- Listen to every generated slide audio file before assembly.

## Pacing Notes From First Samples

Initial generated samples:

- Slide 1: 37.16 seconds
- Slide 5: 35.08 seconds
- Slide 8: 32.96 seconds

Listening impression:

- pacing felt slow because the script used too many explicit pause tags
- durations were short enough that the problem is delivery rhythm, not total runtime
- next iteration should remove most inline pauses and rely on punctuation plus a global delivery direction

Updated delivery target:

```text
Speak at a natural conference-talk pace for experienced developers. Keep momentum. Do not add long dramatic pauses. Use brief natural pauses only at paragraph breaks or after major conceptual turns.
```

Script expansion:

- The clean script was expanded to about 2,550 words after the first audio samples.
- At a natural 145-165 words per minute, this should land around 15-18 minutes before slide-transition padding.
- Re-test Slide 5 first, because it is a central conceptual slide and should now indicate whether the expanded script plus leaner pause policy feels right.

## API Shape

The Google AI docs show `response_modalities=["AUDIO"]` with `speech_config`.

Single-speaker generation needs:

- model: `gemini-3.1-flash-tts-preview`
- response modality: audio
- `voice_config`
- `prebuilt_voice_config.voice_name`

Multi-speaker generation needs:

- `multi_speaker_voice_config`
- up to 2 `speaker_voice_configs`
- speaker names matching the transcript labels

## Open Questions Before Production

- Which voice best matches the desired narrator?
- Should the FAQ slide use a second speaker, or should the narrator simply quote the objection?
- Should final generation happen manually in AI Studio first, then automated later?
- Do we want WAV intermediates only, or also compressed audio exports for review?
