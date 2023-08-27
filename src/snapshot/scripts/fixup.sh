#!/usr/bin/env bash

cat >dist-tmp/cjs/package.json <<!EOF
{
  "imports": {
    "#require": "./require.js"
  },
  "type": "commonjs"
}
!EOF

cat >dist-tmp/mjs/package.json <<!EOF
{
  "imports": {
    "#require": "./require-esm.js"
  },
  "type": "module"
}
!EOF

sync-content dist-tmp dist
rm -rf dist-tmp
