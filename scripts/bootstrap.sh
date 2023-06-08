#!/usr/bin/env bash

if [ "$DEBUG" = "1" ]; then
  set -x
fi
set -e

# install all the dev deps from the root package
npm install --no-workspaces

# TODO: ln -s all packages into place.
# then run nx run-many prepare
# We don't have to build @tapjs/test, because it's already there
# then, do the build script

# manually build and link all workspace packages
mkdir -p node_modules/@tapjs

linkpkg () {
  src=$1
  pkg=$(wspkg "$1")
  if [ -h node_modules/"$pkg" ]; then
    return 0
  fi
  rm -rf node_modules/"$pkg"
  if [[ "$pkg" = @*/* ]]; then
    ln -s ../../"$src" node_modules/"$pkg"
  else
    ln -s ../"$src" node_modules/"$pkg"
  fi
}
wspkg () {
  node -p "require('./$1/package.json').name"
}

for i in src/*; do
  linkpkg "$i"
done

nx run-many --target=prepare
node --loader=ts-node/esm --no-warnings scripts/default-build.ts
# lastly, run the actual install to do all the linking
npm install
