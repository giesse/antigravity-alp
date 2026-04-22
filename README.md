# Antigravity ALP Framework

The core repository for the **AI-Assisted Literate Programming (ALP)** framework. This project defines the workflows, agent rules, and architectural patterns used to build software where documentation is the source of truth.

## What is this?

This is the development hub for the Antigravity ALP methodology. It contains the primary definitions for the 3-tier agentic swarm (Flash → Pro → Opus) and the automated workflows that maintain project integrity.

- **Docs-First**: Markdown files in the root define *what* the software does.
- **Tangled Code**: Code in `src/` is generated/synchronized from these specs.
- **System 2 Memory**: A `wiki/` layer ensures the AI maintains long-term architectural context.

See [AGENTS.md](AGENTS.md) for the full workflow orchestration rules.

## Project Structure

| Directory | Purpose |
|---|---|
| `/` (root `.md` files) | The "Book" — prescriptive specs and pseudocode |
| `src/` | Generated code artifacts |
| `wiki/` | AI memory — architecture decisions, patterns, lessons |
| `.agent/` | Antigravity IDE workflows |
| `TODO.md` | Active task management (Priority 1, 2, 3) |

## Starting a New Project

Antigravity includes a scaffolding generator to instantly initialize new, clean projects with the latest workflows and a pre-seeded AI knowledge base.

**⚠️ WARNING: Destructive Operation**  
The scaffolding script should **only be used to initialize empty directories**. It will blindly overwrite project-specific files like `README.md`, `TODO.md`, and `wiki/log.md`. Do not use this script to update an existing downstream project unless you are completely wiping it.

To create a new project:
```bash
./bin/scaffold.sh <ProjectName> ../path-to-new-project
```

This will:
1. Mirror the `.agent/` workflows.
2. Initialize a `wiki/` with foundational ALP knowledge.
3. Generate personalized boilerplate (`README.md`, `TODO.md`, etc.).

## Contributing

This is the framework development hub. If you want to use my workflows in Google Antigravity, generate a new project using the scaffolding tool above.
