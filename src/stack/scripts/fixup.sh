#!/usr/bin/env bash

cat >dist-tmp/cjs/package.json <<!EOF
{
  "type": "commonjs"
}
!EOF

cat >dist-tmp/mjs/package.json <<!EOF
{
  "type": "module"
}
!EOF


rm dist-tmp/mjs/require-resolve.*
mv dist-tmp/mjs/require-resolve-esm.js dist-tmp/mjs/require-resolve.js
mv dist-tmp/mjs/require-resolve-esm.d.ts dist-tmp/mjs/require-resolve.d.ts

sync-content dist-tmp dist
rm -rf dist-tmp
