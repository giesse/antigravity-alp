# Programming In The Language Of Intent

A companion presentation about Agentic Literate Programming.

This folder is a production workspace for a 12-20 minute narrated video presentation. The source materials are intended to be commit-friendly: Markdown slides, narration drafts, image prompts, TTS prompts, and assembly notes. Generated media is ignored by default until a final export is worth preserving.

## Working Thesis

Agentic Literate Programming is literate programming where the tangle operation is performed by an AI agent.

The human writes the source of intent at the precision level the problem deserves. The agent translates that source into conventional code, tests, and implementation artifacts.

## Folder Layout

| Path | Purpose |
|---|---|
| `outline.md` | Narrative arc, audience, and open decisions |
| `slides.md` | Simple Markdown slide source |
| `production-notes.md` | Workflow, style, TTS, and assembly notes |
| `scripts/` | Clean narration and TTS-tagged narration per slide |
| `image-prompts/` | Image generation prompts per slide |
| `images/` | Generated slide images, ignored by git by default |
| `audio/` | Generated voice-over audio, ignored by git by default |
| `video/` | Final assembled video exports, ignored by git by default |

## Commit Policy

Commit source materials:

- Markdown outline and slides
- Narration scripts
- Image prompts
- TTS prompts
- Assembly scripts and notes

Do not commit draft generated media by default:

- Slide images
- Audio files
- Video renders

Final generated assets can be committed later if we decide they are part of the public artifact.
