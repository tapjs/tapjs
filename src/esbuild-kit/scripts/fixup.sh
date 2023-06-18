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

# If you have a file that needs to use different code on ESM vs CJS,
# for example to use __dirname vs import.meta, do the following.
#
# 1. Create src/some-module-esm.mts with the ESM version
# 2. Create src/some-module.ts with the CJS version
# 3. Write the rest of the code importing './some-module.js'
# 4. Uncomment these lines, changing the 'some-module' to the actual
#    module name:
#
# rm dist-tmp/mjs/some-module.*
# mv dist-tmp/mjs/some-module-esm.mjs dist-tmp/mjs/some-module.js
# mv dist-tmp/mjs/some-module-esm.d.mts dist-tmp/mjs/some-module.d.ts
#
# 5. If you want, you can also remove the ESM version from the CJS
#    build, or exclude it in tsconfig.json, but it won't hurt anything
#    just by being there.

sync-content dist-tmp dist
rm -rf dist-tmp
