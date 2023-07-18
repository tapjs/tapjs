/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > actually build and verify > must match snapshot 1`] = `
Object {
  "dependencies": Object {
    "@tapjs/core": ">=0.0.0-0",
  },
  "description": "plugin description",
  "devDependencies": Object {
    "@types/node": "^20.1.5",
    "prettier": "^2.8.7",
    "sync-content": "^1.0.1",
    "ts-node": "^10.9.1",
    "typedoc": "^0.24.7",
    "typescript": "^5.1.3",
  },
  "engines": Object {
    "node": ">=16.17",
  },
  "exports": Object {
    ".": Object {
      "import": Object {
        "default": "./dist/mjs/index.js",
        "types": "./dist/mjs/index.d.ts",
      },
      "require": Object {
        "default": "./dist/cjs/index.js",
        "types": "./dist/cjs/index.d.ts",
      },
    },
    "./package.json": Object {
      "import": "./package.json",
      "require": "./package.json",
    },
  },
  "files": Array [
    "dist",
  ],
  "license": "BlueOak-1.0.0",
  "main": "./dist/cjs/index.js",
  "module": "./dist/mjs/index.js",
  "name": "@xyz/my-plugin-name",
  "prettier": Object {
    "arrowParens": "avoid",
    "bracketSameLine": true,
    "endOfLine": "lf",
    "jsxSingleQuote": false,
    "printWidth": 75,
    "semi": false,
    "singleQuote": true,
    "tabWidth": 2,
    "useTabs": false,
  },
  "scripts": Object {
    "format": "prettier --write . --loglevel warn",
    "postversion": "npm publish",
    "prepare": "tsc -p tsconfig.json && tsc -p tsconfig-esm.json && bash ./scripts/fixup.sh",
    "prepublishOnly": "git push origin --follow-tags",
    "presnap": "npm run prepare",
    "pretest": "npm run prepare",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
    "typedoc": "typedoc --tsconfig tsconfig-esm.json ./src/*.ts",
  },
  "version": "0.0.0-0",
}
`
