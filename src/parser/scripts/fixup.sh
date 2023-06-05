#!/usr/bin/env bash
sync-content dist-tmp dist
rm -rf dist-tmp

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
