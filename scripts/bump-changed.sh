#!/usr/bin/bash

LEVEL=${1:-prerelease}
shift
npm run v -- "$LEVEL" $(bash scripts/changed-workspaces.sh) "${@}"
