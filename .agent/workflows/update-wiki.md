---
description:  This workflow formalizes the proactive maintenance of the project's institutional memory, following the Andrej Karpathy "LLM Wiki" blueprint.
---

# Workflow: Update Wiki (/update-wiki)

This workflow formalizes the proactive maintenance of the project's institutional memory, following the Andrej Karpathy "LLM Wiki" blueprint.

## Step 1: Source Discovery
Identify the raw information to be distilled. This includes:
- Files in `wiki/sources/` that haven't been processed.
- Uncaptured decisions or "lessons learned" from the current conversation history.
- Context from the `implementation_plan.md` or `walkthrough.md`.

## Step 2: Intellectual Extraction
For each identified source, act as a "Refiner":
- **Entities**: Identify specific models, tools, or personas.
- **Concepts**: Identify core philosophies (e.g., ALP, 3-tier swarm, context engineering).
- **Contradictions**: Flag where new information supersedes or challenges older wiki entries.

## Step 3: Graph Update
Act as a "Programmer" of the Wiki:
- **Create**: New `.md` files in `wiki/` for unrepresented entities or themes.
- **Refactor**: Update existing wiki pages with the refined knowledge.
- **Interlink**: Use `[[wiki-links]]` to create a dense, navigable knowledge graph.

## Step 4: Bookkeeping
Ensure the Wiki's navigation remains healthy:
1. **Update `wiki/index.md`**: Add the new pages to the thematic catalog with a one-line summary.
2. **Update `wiki/log.md`**: Append a chronological entry (Format: `## [YYYY-MM-DD] ingest | Description`).
3. **Lint**: Check for orphaned pages or broken links.
