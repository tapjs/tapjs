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

rm dist-tmp/mjs/require.*
mv dist-tmp/mjs/require-esm.js dist-tmp/mjs/require.js
mv dist-tmp/mjs/require-esm.d.ts dist-tmp/mjs/require.d.ts

sync-content dist-tmp dist
rm -rf dist-tmp
