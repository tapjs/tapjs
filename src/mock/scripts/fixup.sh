#!/usr/bin/env bash
cat >dist-tmp/cjs/package.json <<!EOF
{
  "imports": {
    "#loader-url": "./loader-url-cjs.js"
  },
  "type": "commonjs"
}
!EOF

cat >dist-tmp/mjs/package.json <<!EOF
{
  "imports": {
    "#loader-url": "./loader-url-esm.js"
  },
  "type": "module"
}
!EOF

sync-content dist-tmp dist
rm -rf dist-tmp
