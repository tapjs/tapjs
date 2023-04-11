#!/usr/bin/env bash

rm -rf dist
mv dist-tmp dist

# the tap-dir module has to look at either __dirname or
# import.meta.url, and each blows up in the other import
# system.
rm dist/cjs/tap-dir.*
mv dist/cjs/tap-dir-cjs.js dist/cjs/tap-dir.js
mv dist/cjs/tap-dir-cjs.d.ts dist/cjs/tap-dir.d.ts

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
