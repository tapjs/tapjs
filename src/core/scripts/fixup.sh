#!/usr/bin/env bash

cat >dist-tmp/cjs/package.json <<!EOF
{
  "type": "commonjs",
  "imports": {
    "#tap-dir": "./tap-dir-cjs.js"
  }
}
!EOF

cat >dist-tmp/mjs/package.json <<!EOF
{
  "type": "module",
  "imports": {
    "#tap-dir": "./tap-dir.js"
  }
}
!EOF

sync-content dist-tmp dist
rm -rf dist-tmp
