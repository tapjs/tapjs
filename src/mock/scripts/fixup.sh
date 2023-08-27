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

# looking up the loader needs to use either require.resolve
# or import.meta.url, and each blows up in the other import
# system.
mv dist-tmp/cjs/loader-url-cjs.js dist-tmp/cjs/loader-url.js
rm dist-tmp/cjs/loader-url.js.map
mv dist-tmp/cjs/loader-url-cjs.d.ts dist-tmp/cjs/loader-url.d.ts
rm dist-tmp/cjs/loader-url.d.ts.map

mv dist-tmp/mjs/loader-url-esm.js dist-tmp/mjs/loader-url.js
rm dist-tmp/mjs/loader-url.js.map
mv dist-tmp/mjs/loader-url-esm.d.ts dist-tmp/mjs/loader-url.d.ts
rm dist-tmp/mjs/loader-url.d.ts.map

sync-content dist-tmp dist
rm -rf dist-tmp
