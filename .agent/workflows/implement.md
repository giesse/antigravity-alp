---
description: This workflow enforces the "Docs-First" ALP guardrail. Use this whenever you are ready to translate a specification from the root into code in `src/`.
---

# Workflow: Implementation (/implement)

This workflow enforces the "Docs-First" ALP guardrail. Use this whenever you are ready to translate a specification from the root into code in `src/`.

## Step 1: Spec Review
Read the relevant Markdown file in the project root.
- If the spec doesn't exist: Stop and ask the user to brainstorm the module first.
- If the spec is outdated: Propose the necessary updates to the Markdown file *before* touching code.

## Step 2: Implementation Plan
Draft an `implementation_plan.md` (or update an existing one) based *only* on the current state of the Spec. 
- **Requirement**: Separate the "Doc Changes" from the "Code Changes".

## Step 3: Execution (TDD)
Proceed with the implementation in `src/`.
- Follow the TDD lifecycle: Red -> Green -> Refactor.
- Ensure all public APIs and logic match the Spec exactly.

## Step 4: Verification & Sync
1. Run the test suite.
2. Final Review: Open both the Root Spec and the generated Code in a split view. Verify they are perfectly synchronized.
3. If any implementation decisions were made that weren't in the spec, **update the spec now**.
