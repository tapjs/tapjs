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

# looking up the loader needs to use either require.resolve
# or import.meta.url, and each blows up in the other import
# system.
mv dist/cjs/loader-url-cjs.js dist/cjs/loader-url.js
rm dist/cjs/loader-url.js.map
mv dist/cjs/loader-url-cjs.d.ts dist/cjs/loader-url.d.ts
rm dist/cjs/loader-url.d.ts.map

mv dist/mjs/loader-url-esm.js dist/mjs/loader-url.js
rm dist/mjs/loader-url.js.map
mv dist/mjs/loader-url-esm.d.ts dist/mjs/loader-url.d.ts
rm dist/mjs/loader-url.d.ts.map
