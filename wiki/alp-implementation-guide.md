# ALP Implementation Guide (The Pseudo-code Dialect)

This guide defines the formal syntax and protocols for the **AI-Assisted Literate Programming (ALP)** workflow used in this project.

## ✍️ The Pseudo-code Dialect

To keep the root "Book" readable for humans while remaining deterministic for AI, we use a specific dialect:

### 1. Conceptual Brackets `<...>`
- **Usage**: Encapsulate complex or boilerplate logic that the AI already knows how to implement.
- **Example**: `<get the unique user profile from the database using user_id>`
- **Rationale**: Prevents cluttering the spec with trivial database drivers or library-specific syntax.

### 2. Literal Code
- **Usage**: Logic written outside brackets is treated as standard Python control flow.
- **Example**: `if user.is_active: ...`
- **Requirement**: Full adherence to the contract specified in the Markdown frontmatter.

### 3. Implicit Formatting
- **Strings**: Any string with `{var}` is an f-string.
- **Objects**: Dot notation (e.g., `config.db`) is used for simplicity; the AI translates this into the actual implementation (dict access, property, etc.).

---

## 🏗️ The Agentic Tangle (The AI's Role)

When an AI agent "tangles" the Book into code, it acts as a **Guardian of Intent**:

1. **Type Enforcement**: Every generated function MUST have full PEP-484 type hints.
2. **Robustness**: The AI MUST wrap the logic in `try...except` blocks based on the `Exceptions` list in the Markdown, even if the pseudo-code omits them.
3. **Documentation**: Google-style docstrings are generated automatically from the Markdown metadata.
4. **Code Quality**: Files are formatted with `black` and imports sorted with `isort`.

---

## 🚫 The "Zero-Drift" Rule
**Never edit the generated code first.**
If a bug is found in `src/`:
1. Fix the logic in the root Markdown spec.
2. Run the `/implement` workflow to sync the change to the codebase.
This ensures the documentation remains the single, verifiable source of truth.
