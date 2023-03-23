#!/usr/bin/env bash
npm install --no-workspaces
node --loader=ts-node/esm --no-warnings scripts/default-build.ts
npm install
