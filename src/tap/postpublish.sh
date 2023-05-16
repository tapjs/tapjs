#!/usr/bin/env bash
set -e
set -x
node docs/src/content/docs/cli/index.template.js
git add docs/src/content/docs/cli
git commit -m 'update cli doc'
git push origin --follow-tags
