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

# If you have a file that needs to use different code on ESM vs CJS,
# for example to use __dirname vs import.meta, do the following.
#
# - Create src/some-module.ts with the ESM version of the code.
#
# - Create src/some-module-cjs.ts with the CJS version. This may require
#   a bit of `//@ts-ignore` for things that aren't allowed in ESM, because
#   tsserver will think this is an ESM-only project.
#
# - In the inline package.json contents above, add a local import override:
#
#    in the cjs package.json:
#
#    {
#      "imports": {
#        "#some-module": "./some-module-cjs.js"
#      }
#    }
#
#    in the mjs package.json:
#
#    {
#      "imports": {
#        "#some-module": "./some-module.js"
#      }
#    }
#
# - Add conditional imports to your root package.json:
#
#   {
#     "imports": {
#       "#some-module": {
#         "import": "./dist/mjs/some-module.js",
#         "require": "./dist/cjs/some-module-cjs.js"
#       }
#     }
#   }
#
# - Exclude the "src/some-module-cjs.ts" from ./tsconfig/esm.json by
#   adding an `exclude` array to tsconfig/cjs.json
#
# - Exclude "src/some-module.ts" from ./tsconfig/cjs.json by adding an
#   `exclude` array to tsconfig/esm.json
#
# - Import it in your code as:
#   import { whatever } from "#some-module"

