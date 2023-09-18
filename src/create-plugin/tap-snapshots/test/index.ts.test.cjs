/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > actually build and verify > must match snapshot 1`] = `
Object {
  "description": "plugin description",
  "devDependencies": Object {
    "@types/node": "^20.3.1",
    "prettier": "^2.8.7",
    "sync-content": "^1.0.2",
    "ts-node": "github:TypeStrong/ts-node#8f6f4e5",
    "typedoc": "^0.24.8",
    "typescript": "^5.1.3",
  },
  "engines": Object {
    "node": ">=16.17",
  },
  "exports": Object {
    ".": Object {
      "import": Object {
        "default": "./dist/esm/index.js",
        "types": "./dist/esm/index.d.ts",
      },
      "require": Object {
        "default": "./dist/commonjs/index.js",
        "types": "./dist/commonjs/index.d.ts",
      },
    },
    "./import": Object {
      "import": Object {
        "default": "./dist/esm/import.mjs",
        "types": "./dist/esm/import.d.mts",
      },
    },
    "./loader": Object {
      "import": Object {
        "default": "./dist/esm/legacy-loader.mjs",
        "types": "./dist/esm/legacy-loader.d.mts",
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
  "keywords": Array [
    "tapjs plugin",
  ],
  "license": "BlueOak-1.0.0",
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
    "prepare": "tshy",
    "prepublishOnly": "git push origin --follow-tags",
    "presnap": "npm run prepare",
    "pretest": "npm run prepare",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
    "typedoc": "typedoc --tsconfig .tshy/esm.json ./src/*.ts ./src/*.mts",
  },
  "tap": Object {
    "typecheck": false,
  },
  "tshy": Object {
    "exports": Object {
      ".": "./src/index.ts",
      "./import": "./src/import.mts",
      "./loader": "./src/legacy-loader.mts",
      "./package.json": "./package.json",
    },
  },
  "type": "module",
  "version": "0.0.0-0",
}
`
