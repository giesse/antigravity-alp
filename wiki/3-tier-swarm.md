# 3-Tier Agentic Swarm

The project uses a structured model escalation strategy to balance reasoning power, speed, and cost-efficiency within the Antigravity IDE.

## 🤖 Tier Definitions

| Tier | Model | Core Responsibility |
|---|---|---|
| **Executor** | `gemini-3-flash-preview` | Implementation, testing, file I/O, and terminal work. |
| **Advisor** | `gemini-3.1-pro-preview` | Intermediate planning, structural debugging, and code review. |
| **Genius** | `claude-opus-4.6` | Frontier-level reasoning, deep architectural shifts, and complex logic review. |

---

## ⚖️ Role Discipline

A critical rule for maintaining swarm health:
- **Planners (Advisor/Genius)**: These models should strictly produce **Implementation Plans**, **Task Lists**, and **ADRs**. They should *not* be used for routine file editing or terminal execution.
- **Doers (Executor)**: The Executor translates the plans created by the higher tiers into actual code artifacts. This ensures the best models are used for thinking, not bookkeeping.

## 🤝 Manual Handoff Protocol

Due to current programmatic limitations, model switching is a user-mediated process:
1. An agent declares its intent to escalate (e.g., "I need an Architectural Review from the Advisor").
2. The agent ensures the conversation history contains all necessary context.
3. The USER manually switches the model in the IDE dropdown.
4. The new tier picks up the task by reading the recent history.

---

## 🔄 Lifecycle
This swarm is most effective when combined with [ALP Philosophy](alp-philosophy.md), where the high-tier models refine the "Book" and the local-tier models "tangle" the code.
