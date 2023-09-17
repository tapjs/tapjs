#!/bin/bash

git show --name-only HEAD~$( \
  git describe \
  | xargs node -p 'process.argv[1].split("-").slice(-2).shift()'
)..HEAD \
  | grep -o -E 'src/[^/]+/(src|package.json|scripts)' \
  | sort \
  | uniq \
  | awk -F/ '{ print $1 "/" $2 }'
