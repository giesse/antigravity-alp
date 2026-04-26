# LLM Wiki Pattern (The Memory Layer)

This project adopts the **Andrej Karpathy LLM Wiki** pattern for managing persistent intelligence. It moves beyond stateless RAG (Retrieval-Augmented Generation) toward a compounding, structured knowledge base.

## 🗝️ The Core Pattern

Most AI document systems are stateless: they read raw data at query time and forget it instantly. The LLM Wiki pattern is different:
- **Incremental Compilation**: The AI processes raw sources *once* and integrates them into a structured wiki.
- **Compounding Artifact**: The knowledge reflects everything the AI has read and discussed, including cross-references and contradiction flagging.
- **AI-Managed**: The human curates sources and asks questions; the AI performs the "bookkeeping" (summarizing, linking, updating indexes).

---

## 🏗️ Architecture

Following Karpathy's blueprint, the project is divided into three layers:

1. **Raw Sources (`wiki/sources/*.md`)**: Immutable source documents. The ground truth.
2. **The Managed Wiki (`wiki/*.md`)**: Living Markdown files owned by the AI. Interlinked with wiki-style links.
3. **The Schema (`AGENTS.md`)**: The "Contract" telling the AI how to maintain the wiki.

---

## 🛠️ Operational Protocol

We use the **[/wrap-up](.agent/workflows/wrap-up.md)** workflow to maintain this layer:
- **Ingest**: Drops new sources into the collection and "compiles" them into the wiki graph.
- **Lint**: Periodically scans for contradictions, stale claims, or orphaned pages.
- **Capture**: Valuable query results (analyses, comparisons) are filed back into the wiki as permanent pages.

## 🗂️ Navigational Bookkeeping

- **[index.md](index.md)**: Semantic Table of Contents, updated on every ingest.
- **[log.md](log.md)**: Chronological trail of what was added and when.

---

## 🧠 Why it Matters
The wiki serves as "System 2" memory for the AI. It solves **Context Window Pressure** by pre-synthesizing information, allowing the "Kernel" (the LLM) to page in only the most relevant, pre-processed information for any given task.
