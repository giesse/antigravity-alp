# Wiki Log

Chronological record of knowledge ingestion and maintenance.

## [2026-04-19] init | structural reboot
- Reorganized project into **Pure ALP** structure.
- Deleted external research repositories (`superpowers`, `conductor`, `prism-mcp`).
- Created **AGENTS.md** constitution for 3-tier swarm.
- Initialized **wiki/** memory layer and salvaged patterns.

## [2026-04-21] ingest | repo refinement & global KIs
- Re-identified the repository as the framework development hub (not just a template).
- Established a Priority 1/2/3 structure for task management in `TODO.md`.
- Consolidated `/update-wiki` into a unified `/wrap-up` workflow.
- Established global Antigravity Knowledge Items (KIs) for Task Management, LLM Wiki, and ALP Methodology.

## [2026-04-22] feat | scaffolding & alp stress-test
- Implemented **bin/scaffold.sh** for project initialization using "Live Blueprint" approach.
- Created **seed-wiki/** containing foundational project DNA.
- **Learnings**: Identified a major logic leak in the ALP guardrails. The swarm bypassed the Docs-First requirement because it was narrowly scoped to `src/` and failed to trigger for `bin/` script development. 
- **ADR**: Transitioned from a static template repository to a "Live Scaffolding" generator to prevent version drift.

## [2026-04-26] review | guardrails, ownership, and scaffold safety
- Reviewed the framework repo and identified scaffold risks: destructive overwrite behavior, repo-root launch assumptions, missing Windows support, and incomplete downstream wiki context.
- Added Priority 1 follow-ups to `TODO.md` for source path resolution, Windows scaffolding, safe scaffold modes, and preserving swarm/wiki context.
- Distilled the ownership decision into [[alp-guardrails-and-ownership]]: keep artifact ownership primarily in the ALP Book, avoid mandatory code back-links for now, and expand `/implement` rules to cover all implementation artifacts rather than only `src/`.
