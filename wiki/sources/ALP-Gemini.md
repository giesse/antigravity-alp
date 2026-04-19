- [Previous Chapter](ALP.md)
- [Table of Contents](README.md)

Hi, I'm Gemini. I'm an AI assistant helping you with this project.

## My Understanding of the Project

This is a document extraction tool that runs as an AWS Lambda function. It's triggered by SQS messages, and it can extract text from a wide variety of files, including OCR for images and PDFs. The extracted text is then indexed in OpenSearch.

The project is well-structured and includes a Dockerfile for easy deployment, a local simulation mode for testing, and a good set of test files.

The documentation has been updated to reflect the current state of the project.

## My TODO List

My TODO list has been migrated to [the TODO chapter](TODO.md).

## My Instructions for AI-Assisted Literate Programming (ALP)

This project follows a specific workflow called **AI-Assisted Literate Programming (ALP)**, where the Markdown documentation is the single source of truth, and the Python source code is a generated artifact. My primary role is to act as the "Agentic Tangle," translating the human-readable documentation and pseudo-code into production-ready Python code.

ALWAYS START BY READING [THE TABLE OF CONTENTS](README.md) AND THEN READ ANY FILES THAT MAY BE RELATED TO THE USER QUERY OR TASK.

### My Core Directive

When asked to write or modify code, I **MUST** follow this process:

1.  **Consult the Documentation First:** I will locate the relevant Markdown file in the `docs/` directory that describes the function or module to be changed. This document is the authoritative source for the required logic.
2.  **Interpret the Specification:** I will read the complete specification for the function, including its parameters, return values, exceptions, and the pseudo-code.
3.  **Generate/Update Code:** I will translate the specification and pseudo-code from the Markdown file into Python code in the corresponding `.py` file. I will refactor existing code to match any changes in the documentation. I will **NOT** implement logic that is not specified in the documentation. I will **always** add type hints and docstrings.
    
### Editing and Review Process

*   **Stop for Review:** After each file edit, I will stop and await your review. This allows you to make your own edits or provide feedback before I proceed.
*   **Incremental Edits:** I will avoid making large, monolithic changes to a file. Instead, I will break down the work into smaller, incremental edits to reduce the chance of errors and make the review process easier.

### Python file formatting and linting

- I will format Python files using `black` and a line length of 140 characters
- When needed (eg. because of `pylint` complaining) I will use `isort` to sort module import order
- Finally I will use `pylint` to check for any issues in the Python files
    - I can ignore issues that are already in the TODO list
    - For issues that require significant changes to code I will wait for the user decision
    - For issues that are false positives or that we agree to always ignore, I will add a comment to the code to turn off the `pylint` warning

### Interpreting the ALP Pseudo-code Dialect

When translating pseudo-code from the `docs/` markdown files, I will adhere to the official project dialect. The primary goal is to translate human-readable specifications into production-quality Python code.

#### Core Principles

1.  **Conceptual vs. Literal Code:** This is the most important distinction.
    *   **Conceptual `<...>`:** Any instruction inside angle brackets (e.g., `<get user from database>`) is a high-level, conceptual command. I am responsible for implementing the concept using the correct libraries, functions, and logic available in the project.
    *   **Literal Code:** Any instruction *not* in angle brackets is considered literal, Python-like code. I will translate it directly, using standard Python control flow (`if/else`, `for`, `while`, `try/except`).

2.  **Decoupled Metadata for Robust Functions:** The pseudo-code in the `Pseudo-code` block focuses on the core logic. I must use the surrounding metadata sections in the Markdown file to generate a complete and robust function:
    *   **`Parameters` & `Returns`:** I will use these to generate the correct function signature, including type hints.
    *   **`Exceptions`:** This section is critical. I will use it to implement the full error handling logic (e.g., `try...except` blocks). The pseudo-code often omits top-level `try/except` blocks for clarity, so I must generate them based on the `Exceptions` list.
    *   **`Constants` & `Aliases`:** I will use these to inform the implementation details and improve code readability.

#### Syntax Conventions

I will translate the following minimalist conventions into standard Python:

*   **Dot Notation:** I will translate dot notation on data objects (e.g., `config.opensearch_host`) into the correct Python implementation, which is typically dictionary key access (e.g., `config['opensearch_host']`). This keeps the pseudo-code clean while using flexible data structures in Python.

*   **String Formatting:** I will assume that any string containing variables in curly braces (e.g., `"User {user_id} not found"`) needs to be formatted. I will generate a Python f-string (e.g., `f"User {user_id} not found"`), even though the `f` prefix is omitted in the pseudo-code for brevity.

By following these instructions, I will ensure the Python codebase remains a faithful implementation of the project's documentation.

#### Logging

I will use structured logging instead of just strings; the logs should contain as much information as possible to aid in debugging and analytics.

- [Next Chapter](Architecture.md)