# TODO

## Priority 1: What we are working on right now
- [x] Update README and project structure (Current Task).
- [x] Establish global Knowledge Items for ALP patterns.
- [x] Implement scaffolding generator (`bin/scaffold.sh`) and `seed-wiki/`.
- [ ] Backfill the ALP Root Spec for the 'bin/scaffold.sh' logic (Technical Debt).
- [ ] Fix `bin/scaffold.sh` source path resolution so it works when launched outside the repo root.
- [ ] Add Windows-compatible scaffolding support.
- [ ] Add safe scaffold modes: fail on existing targets by default, plus explicit `--force` / update mode for template repo automation.
- [ ] Ensure scaffolded projects preserve core swarm/wiki context, including 3-tier role discipline and ADR baseline.
- [x] Create and enforce role-switching workflows (/executor, /advisor, /genius) to strengthen the 3-tier swarm discipline.
- [ ] Enforce ALP rules better; user MUST use /implement instead of proceed on implementation plan; also remove the references to src dir as that is project dependent (and in here we ended up putting code in bin/ !)
- [ ] Implement Knowledge Retrieval checkpoint validations in workflows.
- [ ] Refine auto-updating logic for `wiki/log.md`.

## Priority 2: What we'll work on next
- [ ] Create a separate Antigravity Demo repository (batteries-included example).
- [ ] Build an upgrade/sync mechanism for existing downstream projects (selective merge).
- [ ] Draft advanced integration tutorials for complex project architectures.
- [ ] Add support for multiple concurrent ALP modules in large repos.

## Priority 3: For future consideration
- [ ] Build a CLI tool for automated ALP scaffolding.
- [ ] Integrate linting and testing pre-checks into the `/implement` workflow.
