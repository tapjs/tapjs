#!/usr/bin/env bash

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

mv dist/cjs/tap-dir-cjs.js dist/cjs/tap-dir.js
rm dist/cjs/tap-dir.js.map
mv dist/cjs/tap-dir-cjs.d.ts dist/cjs/tap-dir.d.ts
rm dist/cjs/tap-dir.d.ts.map
