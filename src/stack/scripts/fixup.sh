#!/usr/bin/env bash

cat >dist-tmp/cjs/package.json <<!EOF
{
  "imports": {
    "#require-resolve": "./require-resolve.js"
  },
  "type": "commonjs"
}
!EOF

cat >dist-tmp/mjs/package.json <<!EOF
{
  "imports": {
    "#require-resolve": "./require-resolve-esm.js"
  },
  "type": "module"
}
!EOF

sync-content dist-tmp dist
rm -rf dist-tmp
