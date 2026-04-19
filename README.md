# Antigravity ALP Template

A template for **AI-Assisted Literate Programming (ALP)** projects, with a 3-tier agentic workflow for Antigravity IDE.

## What is this?

This is a project template where **documentation is the source of truth**. Markdown files in the root define *what* the software does. Code in `src/` is generated from those specs.

The project uses three AI agent tiers (Flash → Pro → Opus) to balance speed, quality, and cost. See [AGENTS.md](AGENTS.md) for the full workflow rules.

## Project Structure

| Directory | Purpose |
|---|---|
| `/` (root `.md` files) | The "Book" — prescriptive specs and pseudocode |
| `src/` | Generated code artifacts |
| `wiki/` | AI memory — architecture decisions, patterns, lessons |
| `.agent/` | Antigravity IDE workflows |

## Using This Template

1. Create a new repo from this template (GitHub → "Use this template")
2. Edit `AGENTS.md` to adjust model preferences and project-specific rules
3. Start writing specs as Markdown files in the root
4. Use `/brainstorm` before planning any non-trivial feature
