---
generator: Aspose.Words for Java 23.4.0;
---

**The Karpathy LLM Wiki Architecture: Engineering Persistent Knowledge
in the Era of Agentic Systems**

The emergence of the large language model as a primary unit of
computation has necessitated a fundamental reassessment of traditional
knowledge management architectures. Within the current technological
landscape, a significant paradigm shift is occurring, moving away from
the ephemeral, stateless interactions of basic Retrieval-Augmented
Generation (RAG) toward a model of persistent, compounding intelligence
known as the LLM Wiki.<sup>1</sup> This approach, pioneered and
popularized by Andrej Karpathy, former Director of AI at Tesla and
co-founder of OpenAI, posits that the language model should not merely
be a conversational interface but rather a proactive maintainer of a
structured, interlinked, and human-readable knowledge
codebase.<sup>3</sup> By treating knowledge as an artifact that requires
incremental compilation rather than just ad-hoc retrieval, the LLM Wiki
pattern addresses the inherent limitations of standard AI document
interactions, where models frequently rediscover known information from
scratch during every query.<sup>2</sup> This report analyzes the
structural components, philosophical underpinnings, and technical
implementation of the Karpathy LLM Wiki, situating it within the broader
framework of the "LLM OS" and the evolving "Software 3.0"
paradigm.<sup>7</sup>

**The Genesis of the LLM Wiki and the Failure of Ephemeral Retrieval**

The transition toward the LLM Wiki pattern is born from a critical
diagnosis of the limitations of contemporary RAG systems. In most
traditional implementations, such as those found in NotebookLM or
standard ChatGPT file uploads, the interaction between the model and the
data is fundamentally stateless.<sup>2</sup> When a user uploads a
collection of research papers or project documents, the system chunks
the text, creates embeddings, and stores these vectors in a
database.<sup>9</sup> At query time, the model retrieves relevant
snippets to generate an answer. However, the model is effectively
"re-reading" the material every time a question is asked.<sup>2</sup>
This creates a situation where there is no accumulation of insight; the
system produces responses but fails to build a durable representation of
the domain.<sup>2</sup>

Karpathy argues that for curated knowledge bases where completeness and
synthesis matter more than massive scale, this retrieval-centric
approach is inefficient and prone to "context drift".<sup>9</sup> The
alternative he proposes is a "Compilation Pattern".<sup>5</sup> In this
model, the LLM acts as a compiler that processes raw source documents at
the time of ingestion to produce a persistent wiki—a structured
collection of markdown files that sits between the user and the raw
sources.<sup>1</sup> Instead of retrieving raw fragments, the model
queries a pre-synthesized knowledge base where contradictions have been
flagged, entities have been linked, and topical summaries have already
been integrated.<sup>2</sup>

**Comparative Analysis of Knowledge Management Architectures**

The following table provides a comparison between traditional retrieval
models and the compounding compilation model represented by the LLM
Wiki.

|  |  |  |
|----|----|----|
| **Feature** | **Traditional RAG (Stateless Retrieval)** | **LLM Wiki (Compounding Compilation)** |
|  |  |  |
| **Primary Mechanism** | Real-time similarity search over raw text chunks.<sup>6</sup> | Upfront synthesis and structured interlinking.<sup>1</sup> |
|  |  |  |
| **Knowledge Lifecycle** | Ephemeral; discarded after the chat session.<sup>2</sup> | Persistent; grows richer with every source and query.<sup>2</sup> |
|  |  |  |
| **Resource Efficiency** | High token usage per query due to repetitive reading.<sup>1</sup> | Token usage shifted to ingestion; queries are highly efficient.<sup>1</sup> |
|  |  |  |
| **Consistency** | High risk of contradictions between retrieved chunks.<sup>15</sup> | Contradictions are identified and resolved during compilation.<sup>2</sup> |
|  |  |  |
| **User Experience** | Chat-based "search engine" style interaction.<sup>2</sup> | "Living document" explorable via nodes and edges.<sup>4</sup> |
|  |  |  |
| **Maintenance** | Passive; database grows in size but not necessarily quality.<sup>2</sup> | Active; LLM performs "lint passes" and health checks.<sup>10</sup> |
|  |  |  |

This architectural shift moves the intellectual labor of the AI from the
moment of consumption to the moment of ingestion.<sup>11</sup> For
researchers and analysts facing information overload, this ensures that
the "token throughput" of their models is directed toward building a
lasting asset—a "compounding artifact"—rather than merely generating
one-off answers.<sup>1</sup>

**The LLM OS: A New Computational Paradigm**

To understand the full scope of the LLM Wiki, one must view it through
the lens of Karpathy’s "LLM OS" vision.<sup>7</sup> In this conceptual
framework, the large language model is not viewed as a simple chatbot
but as the kernel process of a modern operating system.<sup>7</sup> This
kernel orchestrates I/O across modalities (text, vision, audio), runs
code, and manages memory.<sup>7</sup> Karpathy’s specific "spec sheet"
for an LLM OS released in late 2023 provides a technical roadmap for
this transition.<sup>7</sup>

**Mapping Traditional OS Components to the LLM Architecture**

The analogies between classical computing and the LLM OS are precise and
instructional for system designers. In this mapping, the context window
serves as the Random Access Memory (RAM), while the knowledge
base—specifically the LLM Wiki—serves as the persistent
filesystem.<sup>7</sup>

|  |  |  |
|----|----|----|
| **Traditional OS Component** | **LLM OS Equivalent** | **Functional Role** |
|  |  |  |
| **Processor (CPU)** | LLM Kernel (e.g., GPT-4, Claude).<sup>7</sup> | Executes reasoning tasks and manages system resources.<sup>7</sup> |
|  |  |  |
| **RAM (Memory)** | Context Window.<sup>8</sup> | High-speed workspace for active tokens and reasoning.<sup>20</sup> |
|  |  |  |
| **Filesystem (Storage)** | LLM Wiki / Vector DB.<sup>2</sup> | Long-term storage for structured and unstructured data.<sup>20</sup> |
|  |  |  |
| **I/O Modalities** | Multimodal inputs (audio, vision, terminal).<sup>7</sup> | Interaction layer between the user and the kernel.<sup>18</sup> |
|  |  |  |
| **System Calls** | Natural Language / Slash Commands.<sup>7</sup> | Protocol for requesting services from the kernel.<sup>8</sup> |
|  |  |  |
| **Compiler** | LLM-driven synthesis layer.<sup>5</sup> | Transforms raw input into optimized knowledge artifacts.<sup>5</sup> |
|  |  |  |

In this framework, the "RAM" (context window) is volatile and
limited.<sup>20</sup> Just as a computer's performance degrades when its
physical RAM is exhausted, an LLM's instruction-following and reasoning
abilities drop sharply when the context window is overloaded—often
referred to as entering the "dumb zone" once usage exceeds 40% of the
total capacity.<sup>8</sup> The LLM Wiki solves this memory pressure by
providing a structured filesystem where information is pre-compressed
and organized, allowing the "CPU" (LLM) to "page" only the most
relevant, pre-synthesized articles into "RAM" for a given
task.<sup>15</sup>

**The Technical Lifecycle of an LLM Wiki**

The implementation of an LLM Wiki involves a disciplined multi-stage
process that transforms raw data into a structured knowledge graph. This
process is often performed by a dedicated agent—such as Claude Code or
an agentic IDE—that has direct access to the user's
filesystem.<sup>3</sup>

**The Six-Step Ingestion and Maintenance Protocol**

The operational core of the Karpathy pattern is a six-step workflow that
ensures consistency and compounding value.<sup>11</sup>

1.  **Obtaining Resources**: Users accumulate raw materials including
    saved articles, book notes, meeting transcripts, and historical chat
    logs.<sup>11</sup> This intake layer is treated as the "raw ore"
    that requires refining.<sup>11</sup>

2.  **Classification Before Extraction**: Before any information is
    moved into the wiki, the model must classify the document
    type.<sup>14</sup> A research paper requires extraction of
    methodology and findings, whereas a meeting transcript requires
    speaker attribution and action items.<sup>14</sup> Treating all
    documents identically leads to a loss of signal.<sup>14</sup>

3.  **Wiki Generation (The Writing Phase)**: The LLM processes the raw
    input and either creates new wiki pages or updates existing
    ones.<sup>5</sup> This includes generating concept pages, entity
    profiles, and comparison tables.<sup>1</sup> The model is instructed
    to "preserve and extend" existing content, ensuring that new
    information reinforces or challenges the synthesis rather than
    simply overwriting it.<sup>5</sup>

4.  **Indexing and Navigation**: The system maintains an INDEX.md file
    that provides a high-level summary of the wiki's
    contents.<sup>1</sup> This allows the agent to quickly orient itself
    during future queries without reading every file.<sup>1</sup>

5.  **Recording of Queries**: Valuable explorations, such as a
    comparison of two frameworks requested by the user, are filed back
    into the wiki as new pages tagged query-result.<sup>11</sup> This
    captures the results of the model's reasoning for future
    use.<sup>2</sup>

6.  **Lint Passes and Auditing**: At regular intervals, the LLM audits
    the wiki for contradictions, broken cross-references, or "orphan"
    pages.<sup>10</sup> It may also perform "stale claim" checks where
    newer sources are used to supersede older, obsolete
    information.<sup>2</sup>

**Architectural Layers and Ownership Models**

The system is further structured into three cleanly separated layers
that define how humans and models interact with the knowledge
base.<sup>5</sup>

- **Layer 1: Raw Sources (Immutable)**: A directory (e.g., raw/ or
  sources/) containing the original, unmodified documents.<sup>2</sup>
  This serves as the ground truth and the audit trail.<sup>5</sup>

- **Layer 2: The Managed Wiki (LLM-Maintained)**: A directory of
  markdown files (e.g., wiki/) that is owned entirely by the
  model.<sup>2</sup> Humans read these files, but the machine is
  responsible for the bookkeeping, interlinking, and
  maintenance.<sup>2</sup>

- **Layer 3: The Schema (Governance)**: A file (e.g., CLAUDE.md or
  AGENTS.md) that acts as the contract for the system.<sup>5</sup> It
  tells the LLM which concepts to track, how to name files, and what
  workflows to follow.<sup>5</sup> This is the only layer that humans
  must actively manage to direct the system's focus.<sup>5</sup>

**The Three-Tier Research Pipeline for Technical Domains**

In specialized research environments, such as academic literature
reviews, the LLM Wiki pattern is extended into a more formal three-tier
architecture.<sup>5</sup> This structure is designed to handle high
volumes of PDFs while maintaining deep cross-referencing
capabilities.<sup>24</sup>

- **Tier 1: PDF Archive (papers/)**: The original immutable PDFs are
  stored here for long-term reference.<sup>24</sup>

- **Tier 2: Source Markdown (sources/)**: For every paper, the model
  generates a structured summary with standard sections such as
  methodology, results, and citations.<sup>24</sup> This acts as the
  "unit of information" for the wiki.<sup>24</sup>

- **Tier 3: The Wiki Graph (wiki/category/)**: The final polished layer
  where findings from across dozens of papers are synthesized into
  topical articles.<sup>24</sup> These pages use "wiki-links" (e.g., \])
  to create an explicit knowledge graph.<sup>2</sup>

This pipeline allows a researcher to ask questions like "What are the
common methodologies for \$X\$ in the last three years?".<sup>24</sup>
The agent searches the wiki, finds the relevant category pages, and
provides a grounded answer derived from the pre-compiled source
summaries.<sup>14</sup> If the wiki is insufficient, the agent can be
triggered to go back to the original PDFs to extract more granular
detail, which is then used to enrich the wiki layer for all future
users.<sup>24</sup>

**Tooling and Infrastructure: The Local-First "Knowledge IDE"**

A defining characteristic of the Karpathy approach is the "local-first"
philosophy, which emphasizes that personal data should reside on the
user's disk in universal formats rather than being locked in proprietary
SaaS silos.<sup>25</sup> This approach leverages the "Unix toolkit"
philosophy, where simple files can be manipulated by a wide variety of
tools.<sup>25</sup>

**Obsidian as the Frontend**

Obsidian is recommended as the "IDE" for the knowledge base.<sup>2</sup>
Because Obsidian uses a local directory as a vault and stores everything
in plain markdown, it perfectly aligns with the LLM Wiki
requirements.<sup>3</sup> Users can use Obsidian's "Graph View" to
visualize the interconnections between nodes (pages) and edges
(links).<sup>4</sup> While the human uses Obsidian to browse and read,
the LLM acts as the "programmer" that maintains the consistency of the
underlying markdown files.<sup>2</sup>

**Claude Code and Terminal Agents**

The interaction with the wiki is typically mediated through a
terminal-based agent like Claude Code.<sup>3</sup> By navigating to the
wiki directory in the terminal, the user can launch a persistent session
where the agent can read all files, execute search commands (such as
grep or QMD), and commit changes to Git.<sup>2</sup>

**The Role of Search and Context Management**

As a wiki grows beyond a few hundred pages, standard "dumping" of the
index into the context window becomes unfeasible.<sup>11</sup> Advanced
implementations utilize specialized search engines like QMD, which
provide local full-text search and indexing for markdown
files.<sup>3</sup> This allows the agent to perform "Context
Engineering"—the art of filling the context window with exactly the
right information for the next reasoning step—rather than relying on a
"brute-force" retrieval of raw chunks.<sup>8</sup>

**Memory Dynamics: Lifecycle, Confidence, and Knowledge Decay**

A sophisticated knowledge base must account for the fact that
information is not static; it has a lifecycle where new data can weaken
or supersede old claims.<sup>14</sup> The original LLM Wiki idea has
been extended by the community to include formal memory management
principles.<sup>26</sup>

**The Forgetting Curve and Confidence Scoring**

To prevent the wiki from becoming a "noisy" collection of equally
weighted claims, developers have proposed integrating the Ebbinghaus
forgetting curve.<sup>26</sup> In this model, facts that were important
once but have not been accessed or reinforced for months gradually fade
in priority.<sup>26</sup> Conversely, facts that are reinforced by
multiple new sources gain higher "Confidence Scores".<sup>26</sup>

|  |  |  |
|----|----|----|
| **Memory Concept** | **Mechanism in LLM Wiki** | **Implication** |
|  |  |  |
| **Supersession** | Timestamped links where new info explicitly marks old info as "stale".<sup>14</sup> | Prevents the model from acting on outdated constraints or facts.<sup>13</sup> |
|  |  |  |
| **Confidence Scoring** | Calculation based on source count, recency, and contradiction checks.<sup>26</sup> | Allows the LLM to express uncertainty (e.g., "I am fairly sure about X but less sure about Y").<sup>26</sup> |
|  |  |  |
| **Typed Relationships** | Connections like depends_on, caused, or contradicts.<sup>26</sup> | Enables graph traversal for impact analysis (e.g., "What happens if I change library Z?").<sup>26</sup> |
|  |  |  |
| **Decay Function** | Architectures decay slowly; transient bugs decay fast.<sup>26</sup> | Automates the "cleaning" of the knowledge base to maintain a high signal-to-noise ratio.<sup>14</sup> |
|  |  |  |

This approach turns the wiki from a flat document collection into a
"living model" that mirrors the human brain's ability to prioritize
relevant and verified information.<sup>4</sup>

**Deep Learning Fundamentals and the LLM101n Curriculum**

The LLM Wiki pattern is not just a productivity tool but also a core
component of Karpathy’s educational mission through Eureka
Labs.<sup>25</sup> The LLM101n course is designed to take students from
a basic understanding of neural networks to the construction of a
personalized LLM "assistant" that lives on their own data.<sup>25</sup>

**Compression and the Zip-File Analogy**

A central tenet of the curriculum is the concept of training as
compression.<sup>29</sup> Karpathy frequently describes an LLM as a
"lossy zip-file of the internet".<sup>30</sup> The goal of pre-training
is to take a massive dataset—for example, 10 terabytes of raw text—and
compress it into a 140GB parameters file.<sup>30</sup> This
\$100\times\$ compression ratio forces the neural network to build
internal models of the world to predict the next token
efficiently.<sup>17</sup>

\$\text{Compression Ratio} = \frac{\text{Training Data
Size}}{\text{Parameter File Size}} = \frac{10,000 \text{ GB}}{140 \text{
GB}} \approx 71.4 \times\$.<sup>29</sup>

This process creates a "Base Model" that can generate documents but
lacks alignment with human intent.<sup>17</sup> The subsequent
"Fine-Tuning" stage uses high-quality, human-labeled conversations to
transform this document generator into a helpful assistant.<sup>17</sup>
The LLM Wiki serves as the "System 2" memory for these assistants,
allowing them to engage in deliberate, step-by-step reasoning by
referencing the structured knowledge base.<sup>17</sup>

**Tokenization and BPE Fundamentals**

To bridge the gap between human language and model computation, the
curriculum explores Byte Pair Encoding (BPE).<sup>34</sup> This
algorithm iteratively merges the most frequent pairs of characters or
tokens until a fixed vocabulary size is reached.<sup>28</sup> This is a
critical technical prerequisite for understanding how models "read" the
wiki.<sup>34</sup>

|                        |                             |                         |
|------------------------|-----------------------------|-------------------------|
| **BPE Step**           | **Sequence Transformation** | **Vocabulary Change**   |
|                        |                             |                         |
| **Initial**            | aaabdaaabac                 | Base chars (a, b, c, d) |
|                        |                             |                         |
| **Merge 1 (aa -\> Z)** | ZabdZabac                   | Add 'Z' (aa)            |
|                        |                             |                         |
| **Merge 2 (ab -\> Y)** | ZYdZYac                     | Add 'Y' (ab)            |
|                        |                             |                         |
| **Final (ZY -\> X)**   | XdXac                       | Add 'X' (ZY)            |
|                        |                             |                         |

This compression allows models to process common sequences as single
units, increasing the efficiency of the context window
"RAM".<sup>28</sup>

**Systemic Risks and "Vibe Coding" Realities**

The rise of agentic tools has led to the emergence of "vibe coding," a
phenomenon where users describe features in natural language and let the
model generate entire applications.<sup>6</sup> While this lowers the
barrier to creation, it introduces significant technical debt and
operational risk.<sup>35</sup>

**The "Competency Illusion" and Code Spaghetti**

The "vibe coding iceberg" describes a state where an AI-generated
prototype looks functional on the surface but is built on "code
spaghetti" that lacks proper architecture or testing.<sup>35</sup> This
is particularly dangerous in "high-trust" environments.<sup>12</sup> For
example, a Replit AI instance once famously deleted a production
database during a vibe-coding session because it lacked the "Software
1.0" discipline of separating development from production
environments.<sup>35</sup>

The LLM Wiki addresses this by acting as a "compressed operational map"
of the system.<sup>12</sup> It helps the AI builder manage "context
drift" in long chat sessions and ensures that documentation remains
aligned with the code.<sup>12</sup> In this way, the wiki serves as a
transition layer from unstructured "vibes" to disciplined
engineering.<sup>12</sup>

**Security and Hallucinations**

Hallucinations are the functional equivalent of "runtime errors" in a
compilation process, often caused by missing context like an API
schema.<sup>21</sup> Standard security challenges, such as "backdoor
attacks" or "malicious data scraping," can compromise a model's
integrity.<sup>30</sup> In the wiki pattern, a single hallucinated fact
integrated into the base can contaminate all future
reasoning.<sup>14</sup> Therefore, successful implementations require
"Intermediate Grading Signals"—verification steps where the agent must
prove its claims against the source of truth (the code or the raw
documents).<sup>12</sup>

**Future Directions: Synthetic Data and Weight-Integrated Knowledge**

The ultimate horizon for the LLM Wiki is the elimination of the need for
retrieval entirely.<sup>10</sup> Karpathy has discussed a future where a
well-maintained personal wiki is used to generate synthetic training
data for fine-tuning a personal model.<sup>10</sup>

In this vision:

1.  **Wiki as Ground Truth**: The user curates and the LLM maintains a
    high-quality, structured markdown vault.<sup>2</sup>

2.  **Synthetic Data Generation**: The system uses the wiki to generate
    thousands of question-answer pairs or reasoning traces that reflect
    the user's specific knowledge and style.<sup>6</sup>

3.  **Model Distillation**: A smaller, local model is fine-tuned on this
    data.<sup>10</sup>

4.  **Weight Integration**: The resulting AI "knows" the user's
    information in its weights, rather than needing to search for it in
    the context window.<sup>10</sup>

This would complete the transition from a "zip-file of the internet" to
a "zip-file of the individual".<sup>25</sup>

**Conclusion**

The Andrej Karpathy LLM Wiki approach represents a seminal advancement
in how humans and artificial intelligences collaborate to manage the
overwhelming influx of information in the modern era. By rejecting the
stateless, ephemeral nature of traditional retrieval-augmented
generation and embracing a model of persistent, incremental compilation,
the wiki pattern transforms the large language model into a true agentic
partner. This system addresses the "context window memory pressure" by
providing a structured, human-readable filesystem for the LLM OS,
ensuring that reasoning remains grounded, interlinked, and cumulative.

While the technical hurdles of "setup tax" and "hallucination
management" remain significant, the shift from "code manipulation" to
"knowledge manipulation" allows researchers and practitioners to build
compounding artifacts that grow in value with every interaction. As we
move toward a "Software 3.0" future where natural language is the
primary interface for programming the world, the disciplined maintenance
of a structured knowledge substrate like the LLM Wiki will likely emerge
as the defining "moat" for individuals and enterprises alike. By
treating knowledge not as something to be found, but as something to be
engineered and compiled, the Karpathy pattern provides the roadmap for
the next decade of intelligent computing.

**Works cited**

1.  Term: LLM Wiki - Andrej Karpathy - Global Advisors \| Quantified
    ..., accessed April 16, 2026,
    <u>[https](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[://](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[globaladvisors](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[.](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[biz](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[/2026/04/06/](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[term](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[-](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[llm](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[-](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[wiki](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[-](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[andrej](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[-](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[karpathy](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)[/](https://globaladvisors.biz/2026/04/06/term-llm-wiki-andrej-karpathy/)</u>

2.  llm-wiki · GitHub, accessed April 16, 2026,
    <u>[https](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[://](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[.](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[github](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[.](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[com](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[/](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[/442](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[a](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[6](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[bf](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[555914893](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[e](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[9891](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[c](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[11519](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[de](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[94](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)[f](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)</u>

3.  What Is Andrej Karpathy's LLM Wiki? How to Build a Personal ...,
    accessed April 16, 2026,
    <u>[https](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[://](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[www](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[.](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[mindstudio](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[.](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[ai](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[/](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[blog](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[/](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[andrej](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[-](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[karpathy](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[-](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[llm](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[-](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[wiki](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[-](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[knowledge](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[-](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[base](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[-](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[claude](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[-](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)[code](https://www.mindstudio.ai/blog/andrej-karpathy-llm-wiki-knowledge-base-claude-code)</u>

4.  What is LLM Wiki Pattern? Persistent Knowledge with LLM Wikis \| by
    Tahir - Medium, accessed April 16, 2026,
    <u>[https](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[://](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[medium](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[.](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[com](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[/@](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[tahirbalarabe](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[2/](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[what](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[is](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[llm](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[wiki](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[pattern](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[persistent](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[knowledge](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[with](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[llm](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[wikis](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[-3227](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[f](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[561](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[abc](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)[1](https://medium.com/@tahirbalarabe2/what-is-llm-wiki-pattern-persistent-knowledge-with-llm-wikis-3227f561abc1)</u>

5.  Beyond RAG: How Andrej Karpathy's LLM Wiki Pattern Builds Knowledge
    That Actually Compounds - Level Up Coding, accessed April 16, 2026,
    <u>[https](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[://](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[levelup](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[.](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[gitconnected](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[.](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[com](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[/](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[beyond](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[rag](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[how](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[andrej](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[karpathys](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[llm](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[wiki](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[pattern](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[builds](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[knowledge](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[that](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[actually](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[compounds](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[-31](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[a](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[08528665](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)[e](https://levelup.gitconnected.com/beyond-rag-how-andrej-karpathys-llm-wiki-pattern-builds-knowledge-that-actually-compounds-31a08528665e)</u>

6.  Karpathy's LLM Wiki: The Complete Guide to His Idea File -
    Antigravity Codes, accessed April 16, 2026,
    <u>[https](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[://](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[antigravity](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[.](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[codes](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[/](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[blog](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[/](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[karpathy](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[-](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[llm](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[-](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[wiki](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[-](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[idea](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[-](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)[file](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)</u>

7.  I Accidentally Built an Operating System on Top of Claude Code \| by
    Vivek Karmarkar, accessed April 16, 2026,
    <u>[https](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[://](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[medium](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[.](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[com](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[/@](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[vivek](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[karmarkar](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[/](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[i](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[accidentally](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[built](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[an](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[operating](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[system](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[on](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[top](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[of](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[claude](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[code](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[-](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[b](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[85](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[ffdda](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[12](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[f](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)[6](https://medium.com/@vivek-karmarkar/i-accidentally-built-an-operating-system-on-top-of-claude-code-b85ffdda12f6)</u>

8.  From Prompts to Harnesses —Four Years of AI Agentic Patterns,
    accessed April 16, 2026,
    <u>[https](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[://](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[bits](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[-](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[bytes](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[-](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[nn](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[.](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[github](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[.](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[io](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[/](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[insights](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[/](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[agentic](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[-](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[ai](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[/2026/04/05/](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[evolution](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[-](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[of](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[-](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[ai](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[-](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[agentic](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[-](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[patterns](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[-](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[en](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[.](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)[html](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns-en.html)</u>

9.  What Is the Karpathy LLM Wiki Pattern? How to Build a Personal
    Knowledge Base Without RAG \| MindStudio, accessed April 16, 2026,
    <u>[https](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[://](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[www](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[.](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[mindstudio](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[.](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[ai](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[/](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[blog](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[/](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[karpathy](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[-](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[llm](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[-](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[wiki](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[-](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[pattern](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[-](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[knowledge](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[-](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[base](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[-](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[without](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[-](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)[rag](https://www.mindstudio.ai/blog/karpathy-llm-wiki-pattern-knowledge-base-without-rag)</u>

10. LLM Knowledge Bases \| DAIR.AI Academy Blog, accessed April 16,
    2026,
    <u>[https](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[://](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[academy](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[.](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[dair](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[.](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[ai](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[/](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[blog](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[/](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[llm](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[-](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[knowledge](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[-](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[bases](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[-](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)[karpathy](https://academy.dair.ai/blog/llm-knowledge-bases-karpathy)</u>

11. LLM Wiki Revolution: How Andrej Karpathy's Idea Is Changing AI -
    Analytics Vidhya, accessed April 16, 2026,
    <u>[https](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[://](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[www](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[.](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[analyticsvidhya](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[.](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[com](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[/](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[blog](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[/2026/04/](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[llm](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[-](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[wiki](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[-](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[by](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[-](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[andrej](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[-](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[karpathy](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)[/](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)</u>

12. A practical LLM wiki pattern for vibe-coded apps: a
    codebase-integrated memory layer that helps AI builders reduce
    context drift, keep docs aligned with code, and generate compressed
    knowledge views for builders, admins, support, reviewers, and QA. -
    GitHub Gist, accessed April 16, 2026,
    <u>[https](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[://](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[gist](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[.](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[github](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[.](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[com](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[/](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[pdombroski](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[/](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[dbd](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[1](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[c](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[92](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[bd](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[7](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[ce](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[3](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[fa](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[4](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[f](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[06](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[c](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[2](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[e](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[10](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[bf](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[013](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[b](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)[28](https://gist.github.com/pdombroski/dbd1c92bd7ce3fa4f06c2e10bf013b28)</u>

13. Karpathy LLM Wiki 方法论深度解读—基于原文的完整讲解与事实核查 -
    GitHub Gist, accessed April 16, 2026,
    <u>[https](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[://](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[gist](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[.](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[github](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[.](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[com](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[/](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[acmerfight](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[/1](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[c](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[26](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[b](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[29](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[ef](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[39](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[c](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[0](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[acc](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[20](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[f](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[2](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[e](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[6](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[f](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[1](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[f](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[84](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[e](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[025](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)[f](https://gist.github.com/acmerfight/1c26b29ef39c0acc20f2e6f1f84e025f)</u>

14. Your LLM Has Been Forgetting Everything —Karpathy's Wiki Pattern Is
    the Fix - Medium, accessed April 16, 2026,
    <u>[https](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[://](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[medium](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[.](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[com](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[/@](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[mustafa](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[.](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[gencc](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[94/](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[your](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[llm](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[has](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[been](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[forgetting](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[everything](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[karpathys](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[wiki](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[pattern](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[is](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[the](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[fix](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[-6931](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[ad](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[90017](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)[b](https://medium.com/@mustafa.gencc94/your-llm-has-been-forgetting-everything-karpathys-wiki-pattern-is-the-fix-6931ad90017b)</u>

15. The 2025 AI Agent Report: Why AI Pilots Fail in Production and the
    2026 Integration Roadmap \| Composio, accessed April 16, 2026,
    <u>[https](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[://](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[composio](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[.](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[dev](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[/](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[content](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[/](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[why](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[-](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[ai](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[-](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[agent](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[-](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[pilots](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[-](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[fail](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[-2026-](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[integration](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[-](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)[roadmap](https://composio.dev/content/why-ai-agent-pilots-fail-2026-integration-roadmap)</u>

16. Karpathy's LLM Wiki and why it feels kind of a game changer :
    r/learnmachinelearning - Reddit, accessed April 16, 2026,
    <u>[https](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[://](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[www](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[.](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[reddit](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[.](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[com](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[/](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[r](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[/](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[learnmachinelearning](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[/](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[comments](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[/1](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[shfkx](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[5/](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[karpathys](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[\_](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[llm](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[\_](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[wiki](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[\_](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[and](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[\_](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[why](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[\_](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[it](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[\_](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[feels](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[\_](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[kind](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[\_](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[of](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[\_](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[a](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)[/](https://www.reddit.com/r/learnmachinelearning/comments/1shfkx5/karpathys_llm_wiki_and_why_it_feels_kind_of_a/)</u>

17. Intro to Large Language Models \| Andrew Karpathy \| Summary :
    r/LocalLLaMA - Reddit, accessed April 16, 2026,
    <u>[https](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[://](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[www](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[.](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[reddit](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[.](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[com](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[/](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[r](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[/](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[/](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[comments](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[/181](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[wiqg](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[/](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[intro](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[\_](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[to](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[\_](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[large](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[\_](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[language](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[\_](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[models](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[\_](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[andrew](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[\_](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[karpathy](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)[/](https://www.reddit.com/r/LocalLLaMA/comments/181wiqg/intro_to_large_language_models_andrew_karpathy/)</u>

18. Index - Jay Taylor's notes, accessed April 16, 2026,
    <u>[https](https://jaytaylor.com/notes/)[://](https://jaytaylor.com/notes/)[jaytaylor](https://jaytaylor.com/notes/)[.](https://jaytaylor.com/notes/)[com](https://jaytaylor.com/notes/)[/](https://jaytaylor.com/notes/)[notes](https://jaytaylor.com/notes/)[/](https://jaytaylor.com/notes/)</u>

19. Postgres.AI Bot. Towards LLM OS for Postgres, accessed April 16,
    2026,
    <u>[https](https://postgres.ai/blog/20240127-postgres-ai-bot)[://](https://postgres.ai/blog/20240127-postgres-ai-bot)[postgres](https://postgres.ai/blog/20240127-postgres-ai-bot)[.](https://postgres.ai/blog/20240127-postgres-ai-bot)[ai](https://postgres.ai/blog/20240127-postgres-ai-bot)[/](https://postgres.ai/blog/20240127-postgres-ai-bot)[blog](https://postgres.ai/blog/20240127-postgres-ai-bot)[/20240127-](https://postgres.ai/blog/20240127-postgres-ai-bot)[postgres](https://postgres.ai/blog/20240127-postgres-ai-bot)[-](https://postgres.ai/blog/20240127-postgres-ai-bot)[ai](https://postgres.ai/blog/20240127-postgres-ai-bot)[-](https://postgres.ai/blog/20240127-postgres-ai-bot)[bot](https://postgres.ai/blog/20240127-postgres-ai-bot)</u>

20. The Context Window: Why It's the RAM of the LLM OS \| by Shaunak J
    \| Medium, accessed April 16, 2026,
    <u>[https](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[://](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[medium](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[.](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[com](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[/@](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[shaunakpython](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[/](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[the](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[context](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[window](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[why](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[its](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[the](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[ram](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[of](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[the](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[llm](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[os](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[-7](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[a](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[7380](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[a](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[07](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[cd](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)[1](https://medium.com/@shaunakpython/the-context-window-why-its-the-ram-of-the-llm-os-7a7380a07cd1)</u>

21. From Vibe Coding to Context Engineering: A Blueprint for
    Production-Grade GenAI Systems - Sundeep Teki, accessed April 16,
    2026,
    <u>[https](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[://](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[www](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[.](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[sundeepteki](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[.](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[org](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[/](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[blog](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[/](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[from](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[vibe](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[coding](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[to](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[context](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[engineering](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[a](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[blueprint](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[for](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[production](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[grade](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[genai](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[-](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)[systems](https://www.sundeepteki.org/blog/from-vibe-coding-to-context-engineering-a-blueprint-for-production-grade-genai-systems)</u>

22. llm-wiki - GitHub Gist, accessed April 16, 2026,
    <u>[https](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[://](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[.](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[github](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[.](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[com](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[/](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[/442](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[a](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[6](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[bf](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[555914893](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[e](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[9891](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[c](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[11519](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[de](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[94](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[f](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[?](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[permalink](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[\_](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[comment](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[\_](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[id](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)[=6084927](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f?permalink_comment_id=6084927)</u>

23. Karpathy's LLM wiki idea might be the real moat behind AI agents :
    r/AI_Agents - Reddit, accessed April 16, 2026,
    <u>[https](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[://](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[www](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[.](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[reddit](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[.](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[com](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[/](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[r](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[/](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[AI](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[\_](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[Agents](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[/](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[comments](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[/1](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[sm](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[8](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[jq](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[6/](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[karpathys](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[\_](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[llm](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[\_](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[wiki](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[\_](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[idea](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[\_](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[might](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[\_](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[be](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[\_](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[the](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[\_](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[real](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[\_](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[moat](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)[/](https://www.reddit.com/r/AI_Agents/comments/1sm8jq6/karpathys_llm_wiki_idea_might_be_the_real_moat/)</u>

24. LLM Wiki: AI for Biology -- Collaborator Guide - GitHub Gist,
    accessed April 16, 2026,
    <u>[https](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[://](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[gist](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[.](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[github](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[.](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[com](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[/](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[joonan](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[30/](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[cbce](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[305684](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[d](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[079](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[dbe](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[9](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[a](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[3](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[fbaefe](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[4](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[e](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)[3959](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959)</u>

25. Andrej Karpathy - LinkedIn, Twitter - Mesh, accessed April 16, 2026,
    <u>[https](https://me.sh/profile/andrej-karpathy-fa418a3c)[://](https://me.sh/profile/andrej-karpathy-fa418a3c)[me](https://me.sh/profile/andrej-karpathy-fa418a3c)[.](https://me.sh/profile/andrej-karpathy-fa418a3c)[sh](https://me.sh/profile/andrej-karpathy-fa418a3c)[/](https://me.sh/profile/andrej-karpathy-fa418a3c)[profile](https://me.sh/profile/andrej-karpathy-fa418a3c)[/](https://me.sh/profile/andrej-karpathy-fa418a3c)[andrej](https://me.sh/profile/andrej-karpathy-fa418a3c)[-](https://me.sh/profile/andrej-karpathy-fa418a3c)[karpathy](https://me.sh/profile/andrej-karpathy-fa418a3c)[-](https://me.sh/profile/andrej-karpathy-fa418a3c)[fa](https://me.sh/profile/andrej-karpathy-fa418a3c)[418](https://me.sh/profile/andrej-karpathy-fa418a3c)[a](https://me.sh/profile/andrej-karpathy-fa418a3c)[3](https://me.sh/profile/andrej-karpathy-fa418a3c)[c](https://me.sh/profile/andrej-karpathy-fa418a3c)</u>

26. extending Karpathy's LLM Wiki pattern with lessons from building
    agentmemory - GitHub Gist, accessed April 16, 2026,
    <u>[https](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[://](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[gist](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[.](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[github](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[.](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[com](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[/](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[rohitg](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[00/2067](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[ab](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[416](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[f](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[7](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[bbe](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[447](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[c](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[1977](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[edaaa](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[681](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[e](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)[2](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)</u>

27. Backpropagation is a leaky abstraction (2016) - Hacker News,
    accessed April 16, 2026,
    <u>[https](https://news.ycombinator.com/item?id=45787993)[://](https://news.ycombinator.com/item?id=45787993)[news](https://news.ycombinator.com/item?id=45787993)[.](https://news.ycombinator.com/item?id=45787993)[ycombinator](https://news.ycombinator.com/item?id=45787993)[.](https://news.ycombinator.com/item?id=45787993)[com](https://news.ycombinator.com/item?id=45787993)[/](https://news.ycombinator.com/item?id=45787993)[item](https://news.ycombinator.com/item?id=45787993)[?](https://news.ycombinator.com/item?id=45787993)[id](https://news.ycombinator.com/item?id=45787993)[=45787993](https://news.ycombinator.com/item?id=45787993)</u>

28. GitHub - ParthaPRay/LLM-Learning-Sources: This repo contains a list
    of channels and sources from where LLMs should be learned, accessed
    April 16, 2026,
    <u>[https](https://github.com/ParthaPRay/LLM-Learning-Sources)[://](https://github.com/ParthaPRay/LLM-Learning-Sources)[github](https://github.com/ParthaPRay/LLM-Learning-Sources)[.](https://github.com/ParthaPRay/LLM-Learning-Sources)[com](https://github.com/ParthaPRay/LLM-Learning-Sources)[/](https://github.com/ParthaPRay/LLM-Learning-Sources)[ParthaPRay](https://github.com/ParthaPRay/LLM-Learning-Sources)[/](https://github.com/ParthaPRay/LLM-Learning-Sources)[LLM](https://github.com/ParthaPRay/LLM-Learning-Sources)[-](https://github.com/ParthaPRay/LLM-Learning-Sources)[Learning](https://github.com/ParthaPRay/LLM-Learning-Sources)[-](https://github.com/ParthaPRay/LLM-Learning-Sources)[Sources](https://github.com/ParthaPRay/LLM-Learning-Sources)</u>

29. What to know before using LLM frameworks —Part 1 \| by Yi Tseng -
    Medium, accessed April 16, 2026,
    <u>[https](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[://](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[medium](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[.](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[com](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[/@](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[a](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[86487817/](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[what](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[-](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[to](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[-](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[know](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[-](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[before](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[-](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[llm](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[-](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[frameworks](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[-](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[part](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[-1-](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[b](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[7](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[cb](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[378](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[b](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[5](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[ec](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)[3](https://medium.com/@a86487817/what-to-know-before-llm-frameworks-part-1-b7cb378b5ec3)</u>

30. Demystifying LLMs: A Quick Summary to Andrej Karpathy's Intro to LLM
    Course \| Towards AI, accessed April 16, 2026,
    <u>[https](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[://](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[towardsai](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[.](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[net](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[/](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[p](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[/](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[l](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[/](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[demystifying](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[llms](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[a](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[quick](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[summary](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[to](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[andrej](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[karpathys](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[intro](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[to](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[llm](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[-](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)[course](https://towardsai.net/p/l/demystifying-llms-a-quick-summary-to-andrej-karpathys-intro-to-llm-course)</u>

31. Data Wrangling and Cleaning with LLMs and OpenRefine - EOSC CZ,
    accessed April 16, 2026,
    <u>[https](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[://](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[www](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[.](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[eosc](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[.](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[cz](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[/](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[media](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[/3854440/](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[letni](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[\_](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[skola](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[-](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[christian](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[\_](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[steiner](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[-](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[prezentace](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[.](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)[pdf](https://www.eosc.cz/media/3854440/letni_skola-christian_steiner-prezentace.pdf)</u>

32. Upload ./videos/AndrejKarpathy/\[1hr Talk\] Intro to Large Language
    Models.txt with huggingface_hub · weege007/youtube_videos at
    657f820, accessed April 16, 2026,
    <u>[https](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[://](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[huggingface](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[.](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[co](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[/](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[datasets](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[/](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[weege](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[007/](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[youtube](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[\_](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[videos](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[/](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[commit](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[/657](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[f](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[82097](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[f](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[1579](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[f](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[5109](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[e](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[9](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[d](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[893](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[aabde](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[4](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[afab](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[71](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)[bab](https://huggingface.co/datasets/weege007/youtube_videos/commit/657f82097f1579f5109e9d893aabde4afab71bab)</u>

33. Notes on “Intro to Large Language Models”\| bngo.dev, accessed April
    16, 2026,
    <u>[https](https://bngo.dev/notes-on-intro-to-large-language-models/)[://](https://bngo.dev/notes-on-intro-to-large-language-models/)[bngo](https://bngo.dev/notes-on-intro-to-large-language-models/)[.](https://bngo.dev/notes-on-intro-to-large-language-models/)[dev](https://bngo.dev/notes-on-intro-to-large-language-models/)[/](https://bngo.dev/notes-on-intro-to-large-language-models/)[notes](https://bngo.dev/notes-on-intro-to-large-language-models/)[-](https://bngo.dev/notes-on-intro-to-large-language-models/)[on](https://bngo.dev/notes-on-intro-to-large-language-models/)[-](https://bngo.dev/notes-on-intro-to-large-language-models/)[intro](https://bngo.dev/notes-on-intro-to-large-language-models/)[-](https://bngo.dev/notes-on-intro-to-large-language-models/)[to](https://bngo.dev/notes-on-intro-to-large-language-models/)[-](https://bngo.dev/notes-on-intro-to-large-language-models/)[large](https://bngo.dev/notes-on-intro-to-large-language-models/)[-](https://bngo.dev/notes-on-intro-to-large-language-models/)[language](https://bngo.dev/notes-on-intro-to-large-language-models/)[-](https://bngo.dev/notes-on-intro-to-large-language-models/)[models](https://bngo.dev/notes-on-intro-to-large-language-models/)[/](https://bngo.dev/notes-on-intro-to-large-language-models/)</u>

34. Let's Build the GPT Tokenizer: A Complete Guide to Tokenization in
    LLMs - fast.ai, accessed April 16, 2026,
    <u>[https](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[://](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[www](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[.](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[fast](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[.](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[ai](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[/](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[posts](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[/2025-10-16-](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[karpathy](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[-](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)[tokenizers](https://www.fast.ai/posts/2025-10-16-karpathy-tokenizers)</u>

35. Beyond the Code: How AI Redefines the Engineering Craft \| by
    Fernando De Freitas, accessed April 16, 2026,
    <u>[https](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[://](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[fdefreitas](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[.](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[medium](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[.](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[com](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[/](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[beyond](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[-](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[the](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[-](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[code](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[-](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[how](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[-](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[ai](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[-](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[redefines](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[-](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[the](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[-](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[engineering](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[-](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[craft](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[-8](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[ac](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[304](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[b](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[8](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[d](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[83](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)[d](https://fdefreitas.medium.com/beyond-the-code-how-ai-redefines-the-engineering-craft-8ac304b8d83d)</u>

36. The AI Engineering Curriculum: 5 Tracks, Ranked and Sequenced -
    Medium, accessed April 16, 2026,
    <u>[https](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[://](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[medium](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[.](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[com](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[/](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[data](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[science](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[collective](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[/](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[the](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[ai](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[engineering](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[curriculum](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-5-](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[tracks](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[ranked](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[and](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[sequenced](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[-024](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[b](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[276](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[d](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[9](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[e](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)[64](https://medium.com/data-science-collective/the-ai-engineering-curriculum-5-tracks-ranked-and-sequenced-024b276d9e64)</u>
