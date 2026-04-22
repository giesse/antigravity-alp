#!/bin/bash

# Antigravity Scaffolding Generator
# Usage: ./bin/scaffold.sh <project_name> <target_path>

set -e

PROJECT_NAME=$1
TARGET_PATH=$2

if [ -z "$PROJECT_NAME" ] || [ -z "$TARGET_PATH" ]; then
    echo "Usage: $0 <project_name> <target_path>"
    exit 1
fi

# Resolve absolute path for source (this repo)
SOURCE_PATH=$(pwd)

# Create target directory if it doesn't exist
mkdir -p "$TARGET_PATH"
cd "$TARGET_PATH"
TARGET_PATH_ABS=$(pwd)
cd "$SOURCE_PATH"

if [ "$TARGET_PATH_ABS" == "$SOURCE_PATH" ]; then
    echo "Error: Target path cannot be the same as the Antigravity framework directory."
    exit 1
fi

echo "Initializing project '$PROJECT_NAME' at $TARGET_PATH_ABS..."

# 1. Framework Overwrite (Surgical)
echo "Overwriting framework files..."
rsync -a --delete "$SOURCE_PATH/.agent/" "$TARGET_PATH_ABS/.agent/"
cp -f "$SOURCE_PATH/AGENTS.md" "$TARGET_PATH_ABS/AGENTS.md"
cp -f "$SOURCE_PATH/.gitignore" "$TARGET_PATH_ABS/.gitignore"

# 2. Wiki Seeding
echo "Seeding wiki..."
mkdir -p "$TARGET_PATH_ABS/wiki"
rsync -a --delete "$SOURCE_PATH/seed-wiki/" "$TARGET_PATH_ABS/wiki/"

# 3. Generate Personalized Templates
echo "Generating project templates..."

# wiki/index.md
cat <<EOF > "$TARGET_PATH_ABS/wiki/index.md"
# Wiki Index: $PROJECT_NAME

Institutional memory for the $PROJECT_NAME project.

## 🏛️ Core Philosophy
- **[[alp-philosophy]]**: The "Docs-First" development discipline.
- **[[alp-implementation-guide]]**: Formal syntax and "Agentic Tangle" protocols.

## 🤖 Swarm Orchestration
- **[[patterns]]**: Standard TDD and checkpoint protocols.

## 🧠 Memory Engineering
- **[[llm-memory-pattern]]**: The Karpathy "LLM Wiki" blueprint for persistent intelligence.
- **[[log]]**: Chronological ingestion trail and maintenance history.
EOF

# wiki/log.md
TIMESTAMP=$(date +"%Y-%m-%d")
cat <<EOF > "$TARGET_PATH_ABS/wiki/log.md"
# Wiki Log: $PROJECT_NAME

Chronological record of knowledge ingestion and maintenance.

## [$TIMESTAMP] init | project initialized
- Created project structure via Antigravity Scaffolding.
- Seeded core ALP and Wiki knowledge layers.
EOF

# README.md
cat <<EOF > "$TARGET_PATH_ABS/README.md"
# $PROJECT_NAME

This project is built using the **Antigravity ALP Framework**.

## Overview
Briefly describe what $PROJECT_NAME does here.

## Methodology: Docs-First
This project follows the **AI-Assisted Literate Programming (ALP)** method. 
Documentation is the source of truth; code is a derived artifact.

1. **Specs Come First**: Define behavior in Markdown files at the root.
2. **Tangled Code**: Code in \`src/\` is generated from root specs.
3. **AI Memory**: A managed \`wiki/\` maintains architectural context.

See [AGENTS.md](AGENTS.md) for workflow rules.
EOF

# TODO.md
cat <<EOF > "$TARGET_PATH_ABS/TODO.md"
# TODO: $PROJECT_NAME

## Priority 1: High
- [ ] Define the first module spec in the root directory.
- [ ] Initialize the \`src/\` structure via the \`/implement\` workflow.

## Priority 2: Medium
- [ ] ...

## Priority 3: Low
- [ ] ...
EOF

# 4. Final Touches
mkdir -p "$TARGET_PATH_ABS/src"

echo "Success! Project '$PROJECT_NAME' initialized."
echo "Suggested next steps:"
echo "1. cd $TARGET_PATH_ABS"
echo "2. Define your first spec in root (e.g. core-logic.md)"
echo "3. Use the /implement workflow to start building."
