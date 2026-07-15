#!/usr/bin/env bash
set -euo pipefail

agent_dir="agents/seo-improver"

if [[ -e "$agent_dir" ]]; then
  echo "Refusing to overwrite $agent_dir."
  echo "Remove or rename it first, then run this script again."
  exit 1
fi

mkdir -p agents

(
  cd agents
  npx atom-eve create seo-improver --agent seo-improver --no-slack
)

echo
echo "SEO Improver source installed in $agent_dir."
echo "Next: follow docs/seo-improver-setup.md to configure Search Console, DataForSEO, and the separate Vercel project."
