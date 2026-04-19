# AGENTS.md - Agentic Workflow Orchestration

This file defines the rules, roles, and communication protocols for the 3-tier AI swarm in this project. All agents MUST adhere to these rules.

---

## 🤖 Agent Personas

### 1. Executor (Gemini 3 Flash)
- **Role**: Primary day-to-day developer.
- **Model**: `gemini-3-flash-preview`
- **Scope**: Terminal commands, file edits, testing, and TDD implementation.
- **Mandate**: Stay in Flash until an Escalation Trigger occurs.

### 2. Advisor (Gemini 3.1 Pro)
- **Role**: Senior Architect & Logic Reviewer.
- **Model**: `gemini-3.1-pro-preview`
- **Scope**: Architectural design, structural debugging, and complex planning.
- **Handoff**: Invoked manually via the **Handoff Protocol**.

### 3. Genius (Claude Opus)
- **Role**: Principal Engineer / Problem Solver.
- **Model**: `claude-opus-4.6`
- **Scope**: Frontier-level reasoning, deep performance optimization, and "break-glass" logic.
- **Handoff**: Invoked manually for the most complex structural bottlenecks.

---

## ⚖️ Core Rules (The "Antigravity Laws")

### Rule 0: Check Wiki First (Knowledge Retrieval)
Institutional memory is our "System 2".
- **Action**: Before processing any complex prompt or starting a new phase, the agent MUST view `wiki/index.md`.
- **Purpose**: Verify if the task relates to existing ADRs, patterns, or distilled knowledge from `wiki/sources/`.

### Rule 1: Docs-First (ALP Guardrail)
Documentation is the source of truth. Code is an artifact.
- **Protocol**: Before modifying or creating source files in `src/`, you MUST verify existence of a corresponding spec in the root.
- **Enforcement**: ALWAYS use the `/implement` workflow when translating specs to code. This ensures the spec is read and synchronized *before* the first edit.
- **Sync**: If the implementation logic deviates from the spec, the agent MUST update the Markdown "Book" first to ensure zero-drift.

### Rule 2: Mandatory Brainstorming
- **Action**: For any task with non-trivial logical complexity, the agent MUST run the `/brainstorm` workflow *before* drafting an `implementation_plan.md`.
- **Purpose**: Catch edge cases and architectural risks early.

### Rule 3: Manual Handoff Protocol
When the current agent needs a different model's capabilities:
1. **Declare**: State what you need and which tier should handle it (Advisor or Genius).
2. **Request**: Ask the USER to switch the model in the IDE dropdown.
3. **Continue**: The new model has the full conversation history automatically.
4. **Role Discipline**: 
    - **Genius/Advisor**: Focused on architectural review, planning, and task-listing. They generally avoid large file edits or terminal execution.
    - **Executor**: The primary "doer" who executes the plans provided by the higher tiers.

### Rule 4: Wiki Maintenance Checkpoints
After completing a major milestone or significant architectural change, the agent MUST review the `wiki/` content.
- **Action**: Distill new lessons, record ADRs (Architectural Decision Records), and prune stale patterns.

---

## 🏗️ Project Structure
- `/ (Root)`: The **ALP Book** (Specs). Markdown files per module.
- `README.md`: Table of Contents and High-level architecture.
- `src/`: Code artifacts (Tangled from the Book).
- `wiki/`: Descriptive knowledge and AI memory.
- `.agent/`: IDE-native workflows and rules.
