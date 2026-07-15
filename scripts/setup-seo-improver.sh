#!/usr/bin/env bash
set -euo pipefail

agent_dir="agents/seo-improver"
eve_version="0.24.3"
atom_eve_ref="49d67ded8cbb2dc943c54eb74231cda9b1cbfc46"
atom_eve_repository="https://github.com/elie222/atom-eve.git"

if [[ -e "$agent_dir" ]]; then
  echo "Refusing to overwrite $agent_dir."
  echo "Remove or rename it first, then run this script again."
  exit 1
fi

for command in git npx; do
  if ! command -v "$command" >/dev/null 2>&1; then
    echo "Missing required command: $command" >&2
    exit 1
  fi
done

tmp_dir="$(mktemp -d)"

cleanup() {
  status=$?
  rm -rf "$tmp_dir"
  if [[ $status -ne 0 ]]; then
    rm -rf "$agent_dir"
  fi
  exit "$status"
}
trap cleanup EXIT

source_dir="$tmp_dir/atom-eve"
git init -q "$source_dir"
git -C "$source_dir" remote add origin "$atom_eve_repository"
git -C "$source_dir" sparse-checkout init --cone
git -C "$source_dir" sparse-checkout set registry/seo-improver
git -C "$source_dir" -c protocol.version=2 fetch --depth=1 --filter=blob:none origin "$atom_eve_ref"
git -C "$source_dir" checkout -q --detach FETCH_HEAD

(
  mkdir -p "$(dirname "$agent_dir")"
  cd "$(dirname "$agent_dir")"
  AI_AGENT=atom-eve npx --yes --package="eve@$eve_version" eve init "$(basename "$agent_dir")"
)

cp -R "$source_dir/registry/seo-improver/agent/." "$agent_dir/agent/"
cp "$source_dir/registry/seo-improver/SETUP.md" "$agent_dir/SEO_IMPROVER_SETUP.md"

echo
echo "SEO Improver source installed in $agent_dir."
echo "Next: follow docs/seo-improver-setup.md to configure Search Console, DataForSEO, and the separate Vercel project."
