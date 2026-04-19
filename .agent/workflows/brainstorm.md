---
description: This workflow formalizes the ideation phase before any planning or implementation begins.
---

# Workflow: Brainstorming (/brainstorm)

This workflow formalizes the ideation phase before any planning or implementation begins.

## Step 1: Inquisition
Research the user's prompt and ask 3-5 clarifying questions. Focus on:
- Success criteria (How do we know it works?)
- Integration points (What existing code does this touch?)
- Anticipated constraints (Performance, security, UX).

## Step 2: Risk Analysis
Analyze the proposed feature for:
- "Gotchas" or hidden complexity.
- Potential breaking changes.
- Scaling or concurrency concerns.

## Step 3: Propose Refinements
Based on the answers, propose 2-3 alternative approaches or specific refinements to the original idea.

## Step 4: Record Brainstorm
Save the brainstorm summary as an Antigravity artifact. This serves as input for the `implementation_plan.md` in the next phase. Do not commit brainstorming artifacts to the repo — they are ephemeral working documents.
