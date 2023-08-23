#!/usr/bin/env bash

if [ "$DEBUG" = "1" ]; then
  set -x
fi
set -e

# install all the dev deps from the root package
npm install --no-workspaces

# ln -s all packages into place.
# then run nx run-many prepare
# We don't have to build @tapjs/test, because it's already there
# then, do the default build script just for good measure, and a
# normal npm install to link the `tap` executable into place.

# manually build and link all workspace packages
mkdir -p node_modules/@tapjs

linkpkg () {
  src=$1
  pkg=$(wspkg "$1")
  if [ -h node_modules/"$pkg" ]; then
    return 0
  fi
  echo -n $'\r'"> link workspace: $pkg                  "$'\r'
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
linkpkg src/test/test-built
echo -n "                                      "$'\r'

# need to rebuild tap after plugins
nx run-many --target=prepare --exclude tap,@tapjs/run
nx run-many --target=prepare -p @tapjs/run
nx run-many --target=prepare -p tap
node \
  --loader=ts-node/esm \
  --no-warnings=ExperimentalLoader \
  scripts/default-build.mts
# lastly, run the actual install to do all the linking
npm install
