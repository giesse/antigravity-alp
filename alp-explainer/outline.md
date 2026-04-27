# Outline

## Audience

Developers already using AI agents, especially developers using Google Antigravity IDE who want a practical way to make agentic work more durable and explainable.

## Length

12-20 minutes.

Expected pacing: 14-18 slides at roughly 45-75 seconds per slide.

## Tone

Curious, practical, and personally enthusiastic without sounding like a sales pitch.

Framing:

> This is the practice I am converging on.

Avoid:

- universal claims
- "everyone should do this" language
- presenting the Antigravity setup as the definition of ALP

## Title

Programming In The Language Of Intent

Subtitle:

> A practical introduction to Agentic Literate Programming

## Core Definition

```text
ALP = Literate Programming + an LLM-powered tangle step
```

Everything else is support infrastructure:

- project memory
- advisor strategy
- workflows
- guardrails
- wiki checkpoints

These are useful, especially in Antigravity, but they are not the essence.

## Narrative Arc

1. Programming has usually forced intent into the target language first.
2. Literate programming inverted that: write the program for humans first.
3. AI agents make that inversion more practical because the tangle step can now be performed by an LLM.
4. That means the source can be prose, contracts, pseudocode, declarative rules, examples, diagrams, partial code, or target-language code.
5. The programmer chooses the precision level per part of the system.
6. The generated implementation is still real code, with tests, review, and normal engineering discipline.
7. Antigravity workflows, model handoffs, and wiki memory make the practice easier to sustain.

## Key Claims

- The hard problem is not only generating code. It is preserving intent.
- ALP makes the explanation operational.
- The "source language" can be whatever is clear enough for a human and an agent to translate responsibly.
- The ALP Book records durable intent. Code is the implementation artifact.
- Rules and workflows are mostly for the agent. They keep the agent from skipping the human-first layer.
- The practice should stay proportional. Not every experiment needs ceremony.

## Example Direction

Use a tiny refund eligibility feature, not a large fictional project.

Why this example:

- familiar domain
- small enough for one or two slides
- domain rules are easy to understand
- contracts can naturally become tests
- implementation details can be delegated to the agent

Example source shape:

```markdown
## Refund Eligibility

### Intent

Automatically refund simple, low-risk orders. Route ambiguous or risky cases to support review.

### Contract

- It MUST approve a refund when the order is less than 30 days old.
- It MUST reject automatic refund when the item has already shipped.
- It MUST reject automatic refund when the customer has 3 or more refunds in the last 90 days.
- It MUST create a support review ticket when automatic refund is rejected.
- It MUST raise an exception if the order total is negative.

### Logic

If every automatic-refund condition passes, return `approved`.
Otherwise create a support review ticket and return `needs_review`.
```

## FAQ To Integrate

- Is this just more documentation?
- Does this slow you down?
- What happens when code and docs disagree?
- Is the source always prose?
- Is this only for greenfield work?
- What about quick prototypes?
- How is this different from agent rules like `AGENTS.md`?
- Where do tests fit?
- Why use an advisor strategy?
- What is Antigravity-specific and what is portable?

## Visual Direction To Explore Later

Hybrid visual language:

- book/editorial/literate for the human-first source
- compiler/pipeline/translation for the agentic tangle
- concrete workflow diagrams for Antigravity practice

Avoid generic AI futurism. Prefer warm technical clarity.
