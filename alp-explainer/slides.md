# Slides Draft

## 1. Programming In The Language Of Intent

A practical introduction to Agentic Literate Programming.

Speaker intent:

- Introduce the frame as a practice I am converging on.
- Signal that this is about writing software with agents without losing human intent.

## 2. The Problem Is Not Just Code Generation

AI agents are increasingly good at local code changes.

The harder problem is preserving intent across time, files, sessions, and handoffs.

## 3. Literate Programming, Very Briefly

Literate programming asks a different question:

What if the program is written for humans first, and machine artifacts follow?

## 4. The AI Shift

In classic literate programming, the tangle step extracts compilable code.

In ALP, an LLM can perform that tangle step.

## 5. The Precision Spectrum

The source can be:

- plain English
- precise prose
- contracts
- examples
- declarative rules
- pseudocode
- partial code
- target-language code

The point is not to avoid code. The point is to choose the right precision for each part.

## 6. What ALP Is

Agentic Literate Programming is literate programming where the tangle operation is performed by an AI agent.

```text
ALP = Literate Programming + LLM-powered tangle
```

## 7. A Tiny Example

Refund eligibility.

The human-first source defines intent, contract, and logic.

```markdown
### Contract

- It MUST approve a refund when the order is less than 30 days old.
- It MUST reject automatic refund when the item has already shipped.
- It MUST reject automatic refund when the customer has 3 or more refunds in the last 90 days.
- It MUST create a support review ticket when automatic refund is rejected.
- It MUST raise an exception if the order total is negative.
```

## 8. Contracts Become Tests

The contract section is not decorative.

It gives the agent a testable surface:

- expected approvals
- expected rejections
- edge cases
- exceptions
- fallback behavior

## 9. Logic Can Stay Human-Shaped

The boilerplate can live in Markdown:

- function name
- parameters
- types
- return value
- exceptions
- decorators

The logic can live in pseudocode, prose, or rules.

## 10. The Agentic Tangle

The agent translates the human-first source into:

- implementation code
- unit tests
- integration details
- supporting boilerplate

The output is still normal code and must still be tested.

## 11. The Rules Are For The Agent

ALP is not bureaucracy for the human.

The discipline is simple: write for other humans first.

The workflows and guardrails exist because agents tend to skip directly to code unless we make the human-first layer operational.

## 12. Why I Am Converging On This

It lets me move quickly without throwing away explanation.

It also lets me vary precision:

- strict where correctness matters
- loose where the details are boring
- exploratory where the shape is still emerging

## 13. Antigravity As One Implementation

ALP is a way to work with any capable AI agent.

This repository is one Antigravity-oriented setup:

- root Markdown as the Book
- `/brainstorm` before non-trivial plans
- `/implement` before source edits
- wiki memory
- advisor handoffs

## 14. Advisor Strategy

The day-to-day agent executes.

Higher-reasoning models review architecture, logic, and risky plans.

This is useful in Antigravity because it preserves quota while still giving hard problems the attention they deserve.

## 15. Project Memory Is A Bonus

Once the Book exists, a wiki layer can preserve lessons, ADRs, patterns, and project-specific knowledge.

This is not the core of ALP, but it compounds the value.

## 16. FAQ Moment

Skeptic: Is this just more docs?

Narrator: It can be, if the docs are passive.

In ALP, the docs are part of the build path. They drive implementation, tests, and review.

## 17. When To Keep It Light

Not every script, spike, or experiment needs the full treatment.

Use more precision where the cost of misunderstanding is high.

Use less precision where the details are cheap, obvious, or disposable.

## 18. Closing

The goal is not to make projects heavier.

The goal is to make important projects explainable enough for humans and agents to continue.
