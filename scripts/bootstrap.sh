#!/usr/bin/env bash

set -x
set -e

# install all the dev deps from the root package
npm install --no-workspaces

# manually build and link the internal subdeps
mkdir -p node_modules/@tapjs

linkpkg () {
  src=src/$1
  pkg=$(wspkg "$1")
  rm -rf node_modules/"$pkg"
  if [[ "$pkg" = @*/* ]]; then
    ln -s ../../"$src" node_modules/"$pkg"
  else
    ln -s ../"$src" node_modules/"$pkg"
  fi
}
wspkg () {
  node -p "require('./src/$1/package.json').name"
}

# link @tapjs/test, but do not build
linkpkg test

internaldeps=(
  yaml
  parser
  stack
  tcompare
  core
  after
  config
  npm-init-template
)
for d in "${internaldeps[@]}"; do
  linkpkg "$d"
  npm run prepare -w "src/$d"
done

# build all default plugins
defaultplugins=($(cat ./scripts/default-plugins.txt))
for d in "${defaultplugins[@]}"; do
  linkpkg "$d"
  npm run prepare -w "src/$d"
done

# run requires reporter, need to build that next, but with its deps
linkpkg reporter
npm run prepare -w src/reporter

node --loader=ts-node/esm --no-warnings scripts/default-build.ts
npm install --workspaces
