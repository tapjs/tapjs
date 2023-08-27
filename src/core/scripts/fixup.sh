#!/usr/bin/env bash

# the tap-dir module has to look at either __dirname or
# import.meta.url, and each blows up in the other import
# system.
rm dist-tmp/cjs/tap-dir.*
mv dist-tmp/cjs/tap-dir-cjs.js dist-tmp/cjs/tap-dir.js
mv dist-tmp/cjs/tap-dir-cjs.d.ts dist-tmp/cjs/tap-dir.d.ts

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

sync-content dist-tmp dist
rm -rf dist-tmp
