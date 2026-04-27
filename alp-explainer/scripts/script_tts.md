# TTS Narration Draft

Target model:

```text
gemini-3.1-flash-tts-preview
```

Style direction:

```text
Audio profile: single calm technical narrator, warm and thoughtful, natural conference-talk pacing, mildly enthusiastic, not promotional.
Optional second voice: thoughtful skeptical developer, used only on FAQ-style moments.
Delivery: keep momentum for experienced developers; do not add long dramatic pauses; use brief natural pauses only at paragraph breaks or after major conceptual turns.
```

Use tags very sparingly. Most pacing should come from punctuation and the global delivery direction.

## Slide 1. Programming In The Language Of Intent

Narrator: [warm, engaged] I want to talk about a practice I am converging on for working with AI agents.

I call it Agentic Literate Programming, or ALP.

The short version is this: instead of treating code as the only real source, I try to write the intent of the program in a human-first form, then let the agent translate that into conventional implementation artifacts.

Not because I want more process. Mostly the opposite. I want the important parts of a project to remain understandable after the agent has moved very fast.

So this is not a pitch for a framework so much as an explanation of a working style: how to keep using agents aggressively without letting the project forget what it is supposed to mean.

## Slide 2. The Problem Is Not Just Code Generation

Narrator: [calm] AI agents have become very good at local code generation.

Give them a file, a failing test, or a small feature request, and they can often produce useful code quickly.

But the harder problem is not always the next edit. It is preserving intent across time.

Why does this module exist? Which behavior is accidental, and which behavior is part of the contract? What did we decide last week, and should the next change respect it?

Those questions are easy to lose in a fast agent loop, because the agent is optimized to act. It sees code, it edits code, and the conversation keeps moving.

That is powerful, but it also means the durable explanation of the system can fall behind. The code changes, the chat scrolls away, and the next agent session has to infer the design from artifacts that were never meant to carry all of that meaning.

That is the gap ALP is trying to address.

## Slide 3. Literate Programming, Very Briefly

Narrator: [steady, explanatory] The idea starts from literate programming.

Literate programming asks us to invert the usual relationship between explanation and implementation.

Instead of writing code first and then adding comments around it, the programmer writes the program as an explanation for humans. The machine-readable code is then derived from that human-readable source.

I am not going to give a history lesson here, and I do not want to turn this into a lecture about tools. But that inversion matters.

The program is not only instructions to a computer. It is also a written artifact that another person should be able to understand.

That is also why literate programming is easy to misunderstand. It is not just notebooks, and it is not just putting prose near code. The deeper idea is that explanation can be the primary source, and implementation can be an artifact derived from it.

## Slide 4. The AI Shift

Narrator: [curious] Classic literate programming has a tangle step.

The human-authored source is transformed into compilable code.

Traditionally, that tangle step had to be quite mechanical. The source could be beautifully explained, but the extraction still needed to follow rules the tool understood.

What changes with AI agents is that the tangle step no longer has to be a rigid extraction.

An LLM can translate intent into code. It can read prose, contracts, examples, pseudocode, partial code, or domain rules, and produce a normal implementation in the target language.

That does not mean the agent is always right. It means the source language can become much more flexible.

You can write the part that matters in the form that makes the behavior clearest, and let the agent handle the mechanical translation into Python, TypeScript, C, or whatever the project actually runs.

That is the practical opening.

## Slide 5. The Precision Spectrum

Narrator: [engaged] This means the source does not have to look the same everywhere.

For one part of the system, plain English might be enough: update the record in DynamoDB, send the notification, refresh the cache.

For another part, you might want precise prose, because the behavior has edge cases and the words matter.

For a risky part, you might write contract bullets: this function MUST reject negative amounts, MUST preserve idempotency, MUST return a review state instead of throwing for ordinary business-rule failures.

For a tricky algorithm, you might write pseudocode that is almost code. And sometimes the clearest expression is just the target-language code itself.

That spectrum is the point.

ALP is not about avoiding code. It is about choosing the precision level that matches the risk, the ambiguity, and the importance of that part of the system.

You can be loose where the details are boring. You can be strict where correctness matters. You can invent a tiny domain language for one module if that is the clearest way to express the rules.

The LLM becomes the translator across that spectrum.

## Slide 6. What ALP Is

Narrator: [clear, confident] So the core definition is simple.

Agentic Literate Programming is literate programming where the tangle operation is performed by an AI agent.

Or even shorter:

ALP equals literate programming plus an LLM-powered tangle step.

That is the center. The human-first source drives the generated implementation.

Everything else can help. Project memory can help. Agent rules can help. Workflows can help. Model handoffs can help.

But those things are support structures. They are not the essence of ALP.

The essence is that you are allowed to program in the language of intent, and the agent is responsible for translating that intent into conventional software artifacts.

## Slide 7. A Tiny Example

Narrator: [practical] Here is a small example: refund eligibility.

The human-first source can describe the intent, the contract, and the logic.

The intent might say: automatically refund simple, low-risk orders, and route ambiguous or risky cases to support review.

The contract might say: approve when the order is less than thirty days old, reject automatic refund if the item has already shipped, reject if the customer has three or more recent refunds, create a support review ticket when automatic refund is rejected, and raise an exception if the order total is negative.

That is not a giant specification. It is a compact behavioral source.

Then the logic can stay simple: if every automatic-refund condition passes, return approved. Otherwise, create a support review ticket and return needs review.

From there, the agent has enough structure to create a function, choose reasonable types, wire supporting calls, and generate tests from the contract.

## Slide 8. Contracts Become Tests

Narrator: [slightly more energetic] The contract section is not decorative.

It is a test surface.

Each expectation can become a unit test, or at least a test case the agent must consider.

This is one of the most practical patterns I have found. The contract says what must be true, and the implementation has to satisfy it.

If the contract says negative totals must raise an exception, that becomes a test.

If the contract says shipped items must not be refunded automatically, that becomes a test.

If the contract says rejected automatic refunds create support tickets, that becomes a test.

That changes the role of Markdown. It is not just explaining what the code already does. It is telling the agent what the implementation must prove.

And because the contract is written for humans, it is also reviewable before the code exists.

## Slide 9. Logic Can Stay Human-Shaped

Narrator: [calm] Another useful pattern is separating boilerplate from logic.

The Markdown can define the function name, arguments, types, return value, decorators, exceptions, ownership, and the target implementation file.

That gives the agent enough scaffolding to produce code that fits the project.

But the logic does not have to be written in the target language immediately.

Sometimes the clearest logic is pseudocode. Sometimes it is a rule table. Sometimes it is a paragraph. Sometimes it is a list of examples and counterexamples.

The important part is that the behavior is expressed in a form another human can inspect and argue with.

The agent can take care of the mechanical translation, while the human keeps control over the behavior that matters.

## Slide 10. The Agentic Tangle

Narrator: [steady] When the agent performs the tangle, it turns the human-first source into implementation code, unit tests, integration details, and supporting boilerplate.

But this is not magic and it is not a free pass.

The output is still normal code. It should still be reviewed. It should still run tests. It should still fit the project.

The difference is that the implementation has a durable source of intent to return to.

If the generated code looks wrong, you can ask whether the source was unclear or whether the translation failed.

If the behavior changes, you update the human-first source first, then regenerate or repair the implementation.

That creates a healthier loop: design intent, implementation, tests, and review all point back to the same written source.

## Slide 11. The Rules Are For The Agent

Narrator: [thoughtful] This is an important point: ALP is not bureaucracy for the human.

When I started doing this, the discipline was not complicated. It was just the literate programming discipline: write for another human first.

The extra rules and workflows are mostly for the agent.

Agents are trained to be helpful, and helpful often means editing the code immediately. If you ask for a change, the agent wants to make the change.

That is usually good. But in ALP, some files are meant to own intent, and some files are implementation artifacts.

The rules keep the agent from skipping the human-first layer when that layer is supposed to own the design.

So the process is not there to make the human ask permission from the repository. It is there to make the agent respect the structure the human chose.

## Slide 12. Why I Am Converging On This

Narrator: [warm, quietly enthusiastic] The reason I am converging on this practice is that it gives me speed without throwing away explanation.

I can be strict where correctness matters.

I can be loose where the details are boring.

I can stay exploratory where the shape is still emerging.

That range is the interesting part. ALP is not one rigid notation. It is a way to decide how precisely to express intent before asking the agent to implement it.

It also changes how I think about high-level programming.

For years, the cost of inventing a higher-level notation was that you had to build the compiler, runtime, tooling, and escape hatches.

With an LLM in the loop, you can sometimes get the benefit of a local, human-readable notation without building a whole language around it.

That does not replace engineering judgment. But it does make a much wider range of expression practical.

## Slide 13. Antigravity As One Implementation

Narrator: [grounded] ALP is not tied to a specific IDE.

You can use the practice with any capable AI agent.

This repository is just one Antigravity-oriented setup.

In this setup, root Markdown files act as the Book. The agent checks the Book before source edits. Non-trivial work goes through brainstorming. Implementation work goes through the implementation workflow. The wiki preserves lessons, decisions, and patterns.

A typical loop is: start with the relevant Book page, brainstorm if the change has real logic or architectural risk, update the human-first source, implement from that source, run tests, and then record anything durable that the project should remember.

That is not the definition of ALP. It is one practical way to make ALP stick inside Google Antigravity.

The important distinction is portability: ALP is the practice. This repo is one set of rails for that practice.

## Slide 14. Advisor Strategy

Narrator: [practical] The advisor strategy is another practical layer.

The day-to-day agent handles ordinary implementation.

When the work needs stronger architectural judgment, structural debugging, or a higher-risk plan, you hand off to a more capable reasoning model.

In Antigravity, that can also help manage quotas. The fast model does most of the execution, while the expensive reasoning gets used where it actually changes the outcome.

For example, the executor can run tests, edit files, and follow a plan. The advisor can review whether the plan is coherent, whether the architecture is drifting, or whether the spec is missing an important case.

Some tools may eventually make this feel native. Some teams may not care about quota at all. That is fine.

The useful idea is role discipline: execution and architectural judgment are not always the same task.

## Slide 15. Project Memory Is A Bonus

Narrator: [reflective] Once you have a human-first source of intent, project memory becomes much more valuable.

A wiki can preserve architectural decisions, lessons learned, patterns, and recurring mistakes.

That is not the core of ALP. The core is still literate programming plus an agentic tangle.

But memory compounds the practice. The agent is not only reading the current task. It is reading what the project has learned.

This matters because chat history is not a reliable institutional memory. It is long, noisy, and shaped by whatever happened in the moment.

A maintained wiki can be much smaller and more deliberate. It can say: here are the decisions we made, here are the patterns that worked, here are the mistakes we do not want to repeat.

That makes future agent work less dependent on lucky context.

## Slide 16. FAQ Moment

Skeptic: [curious, skeptical] Is this just more docs?

Narrator: [warm] It can be, if the docs are passive.

The difference is that ALP makes the docs part of the build path.

They do not merely describe the implementation after the fact. They drive the implementation, the tests, and the review.

Skeptic: [curious] Does this slow you down?

Narrator: Sometimes, yes, at the beginning of a change. But the bet is that it saves time when the project gets revisited, when another agent enters the loop, or when a rule needs to change without breaking the original intent.

And when the work is disposable, you keep it light.

That is why I keep coming back to the phrase: the explanation becomes operational.

## Slide 17. When To Keep It Light

Narrator: [measured] Of course, not every script or experiment needs this treatment.

If I am throwing something away in an hour, I do not need a miniature constitution around it.

The practice should stay proportional.

Use more precision where misunderstanding is expensive.

Use less precision where the details are cheap, obvious, or disposable.

For a prototype, a paragraph of intent may be enough.

For a business rule, contracts and examples may be worth it.

For a core subsystem, the Book might need ownership, invariants, workflows, and explicit implementation expectations.

The goal is not ceremony. The goal is preserving the intent that future humans and future agents will need.

## Slide 18. Closing

Narrator: [calm, resolved] So this is the practice I am converging on.

Write the important parts of the program in the language of intent.

Let the agent translate that intent into conventional code.

Then use tests, review, workflows, and memory to keep the translation honest.

I am not trying to make projects heavier.

I am trying to make important projects explainable enough for humans and agents to continue.

That, to me, is the promise of Agentic Literate Programming: not that the agent writes everything for us, but that we get to write for humans again, and still ship real software.
