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

chmod 0755 dist-tmp/mjs/run.mjs

sync-content dist-tmp dist
rm -rf dist-tmp
