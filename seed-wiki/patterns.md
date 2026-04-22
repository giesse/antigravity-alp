# Project Patterns & Standards

## 1. Standard Task Workflow (TDD)

Every implementation task follows this lifecycle:

1. **Plan Check**: Ensure the task exists in the ALP spec or implementation plan.
2. **Red Phase**: Write a failing test that defines the expected behavior.
3. **Green Phase**: Write the minimum code to make the test pass.
4. **Refactor**: Clean up the code while keeping tests green.
5. **ALP Sync**: Ensure the root Markdown spec matches the final implementation.

## 2. Phase Checkpoint Protocol

Executed after completing a major milestone:

1. **Test Coverage Verification**: Ensure all new code files have corresponding tests.
2. **Automated Run**: Execute the full test suite.
3. **Manual Verification**: Perform "human-in-the-loop" verification steps.
4. **Wiki Update**: Extract lessons learned into the wiki.

## 3. Git Commit Standards

Format: `<type>(<scope>): <description>`

- `feat`: New feature (matching ALP spec)
- `fix`: Bug fix
- `docs`: ALP Book or Wiki updates
- `refactor`: Internal code changes
- `test`: Test-only changes
