---
description: This workflow formalizes the end-of-session housekeeping, including wiki distillation and TODO list curation.
---

# Workflow: Wrap Up (/wrap-up)

This workflow formalizes the proactive maintenance of the project's institutional memory and task tracking at the end of a session.

## Step 1: Wiki Distillation
Follow the "LLM Wiki" blueprint to capture institutional memory:
- **Source Discovery**: Identify uncaptured decisions, "lessons learned", or context from `implementation_plan.md` and `walkthrough.md`.
- **Extraction**: Identify entities, concepts, and contradictions.
- **Update**: Create or refactor `.md` files in `wiki/`. Interlink with `[[wiki-links]]`.
- **Bookkeeping**: Update `wiki/index.md` and `wiki/log.md`.

## Step 2: TODO Curation
Refine the `TODO.md` file based on the session's work:
- **Mark Complete**: Check off `[ ]` tasks that have been finished.
- **Graduate Tasks**: Move items from **Priority 2** to **Priority 1** if they are next in line.
- **Clean Up**: Remove or move irrelevant tasks to **Priority 3**.
- **Alignment**: Ensure the `TODO.md` accurately reflects the current state of the project.

## Step 3: Verification
- Ensure `wiki/` links are healthy.
- Confirm `TODO.md` is updated and properly categorized.
