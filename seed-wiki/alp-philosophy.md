# ALP Philosophy (Docs-First)

**AI-Assisted Literate Programming (ALP)** is the core development discipline of this project. It treats documentation as the prescriptive source of truth (the "Book") and code as a derivative artifact.

## 📖 The Core Idea

In traditional development, documentation is often an after-thought that drifts away from the code. In ALP:
1. **Specs Come First**: Before any code is written, the behavior is defined in a Markdown file in the project root.
2. **Docs-First Guardrail**: The AI is forbidden from editing the codebase without first verifying or updating the corresponding root-level Spec.
3. **Synchronization**: The final state of the code must map 1:1 to the behavior described in the "Book". If logic changes, the Book must be updated before the code.

---

## 🏗️ Structural Mapping

- **The Book (Root `/*.md`)**: The "Prescriptive" layer. Contains the *what* and the *why*.
- **The Code**: The "Implemented" layer (e.g., `src/`). Contains the *how*.
- **The Memory (`wiki/`)**: The "Descriptive" layer. Contains the *history* and *lessons*.

---

## 🛠️ Enforcement Workflows

We use native Antigravity workflows to keep this discipline alive:
- **[/brainstorm](.agent/workflows/brainstorm.md)**: Logic extraction before planning.
- **[/implement](.agent/workflows/implement.md)**: Ensuring the Spec-to-Code loop remains closed.

## 🧠 Why it Works for LLMs
LLMs perform significantly better when they have a fixed, human-authored context to ground their reasoning. By keeping the Spec at the root, we provide a constant "Anchor" that prevents the AI from getting lost in implementation details during long sessions.
