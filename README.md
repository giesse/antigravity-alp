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

## Integrating ALP into Your Project

To add these workflows and agent rules to an existing project:

1. **Copy Workflows**: Copy the `.agent/` directory to your project root.
2. **Setup Rules**: Copy `AGENTS.md` and customize the model preferences if needed.
3. **Initialize Memory**: Create an empty `wiki/` directory.
4. **Adopt the Book**: Start moving high-level logic into Markdown files at the root and use the `/implement` workflow to generate code.

## Contributing

This is the "work" repository. If you are looking for a clean starting point, use the Antigravity ALP Template repository.
