# ALP Guardrails and Ownership

This page captures the April 2026 review lessons about making [[alp-philosophy]] reliable in practice without turning it into heavy ceremony.

## Core Distinction

ALP is related to spec-driven development, but it is not identical.

- Spec-driven development says desired behavior should be written before implementation.
- ALP says the durable human-facing "Book" is the source of truth, and implementation artifacts are synchronized from it.

The practical value is strongest in agentic workflows: the repository should teach future agents intent, not just mechanics.

## Ownership Model

The current preferred model is Book-side ownership.

Each ALP chapter may declare which implementation artifacts it governs, for example:

```md
---
alp_artifacts:
  - client/document-extractor.py
  - tests/test_document_extractor.py
---
```

This keeps ownership visible to humans and toolable for agents without requiring every source file to carry process metadata.

## Avoid Premature Bidirectionality

Implementation files do not need mandatory back-links to their governing ALP chapter yet. A short code comment such as `ALP: governed by client.md` may be useful for generated or heavily governed files, but mandatory bidirectional links create another graph that can drift.

The Book should remain the canonical map. Code-side links should be introduced only if repeated failures show that agents cannot reliably find the governing chapter from the Book, table of contents, and wiki.

## Multi-Chapter Modules

A module can have one canonical owner chapter while later chapters extend it.

Recommended convention:

- The canonical chapter declares the governed file.
- Later chapters explicitly say they extend that file and reference the canonical chapter.
- If a later chapter changes reader-important behavior, the canonical chapter should gain a short forward pointer.

This preserves human exposition order while keeping implementation ownership discoverable.

## Guardrail Fix

The `/implement` workflow and [[3-tier-swarm]] rules must apply to any implementation artifact, not only `src/`.

The previous `src/`-specific wording allowed `bin/scaffold.sh` to be created without a corresponding root spec. Future workflow language should say: before editing any implementation artifact, identify the governing ALP chapter first, regardless of directory.

## Scaffolding Lessons

The scaffold command is now understood as a high-risk bootstrap path because it writes framework-owned project files.

Desired behavior:

- Safe default: fail when the target path already exists.
- Explicit destructive mode: require a flag such as `--force`.
- Automation mode: provide a narrower update mode for template repository CI/CD.
- Future ownership manifest: record framework-owned files in a machine-readable manifest so update mode touches only managed artifacts.

Scaffolded projects should also preserve core wiki context. `AGENTS.md` contains operating rules, but the wiki supplies institutional memory, so downstream projects should receive the swarm/ADR baseline needed to understand those rules.

