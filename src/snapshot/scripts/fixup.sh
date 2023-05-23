#!/usr/bin/env bash

rm -rf dist
mv dist-tmp dist

cat >dist/cjs/package.json <<!EOF
{
  "type": "commonjs"
}
!EOF

cat >dist/mjs/package.json <<!EOF
{
  "type": "module"
}
!EOF

rm dist/mjs/require.*
mv dist/mjs/require-esm.js dist/mjs/require.js
mv dist/mjs/require-esm.d.ts dist/mjs/require.d.ts
