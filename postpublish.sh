#!/usr/bin/env bash
set -e
set -x
node docs/cli/index.template.js
git add docs/cli
git commit -m 'update cli doc'
git push origin --follow-tags"
