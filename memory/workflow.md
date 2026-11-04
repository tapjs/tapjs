# Dev workflow

Sources: `README.md`, `CONTRIBUTING.md`, root `package.json`,
`scripts/bootstrap.sh`, `.github/workflows/ci.yml`.

## Setup

- `npm run bootstrap` once on a fresh clone. `npm install` alone
  fails because the generated TypeScript depends on itself.
- Run bootstrap again if the build script or the default plugin set
  changes.
- `npm run test:bootstrap` clones the repo to a temp folder and
  checks that bootstrap works from clean.
- `npm i` after you add or remove a workspace.

## Build

- `npm run build`: rebuild the `Test` class. Needed after any change
  to a plugin or to core.
- `npm run prepare -w src/<name>`: build one package.

## Test

- `npm test`: all tests in all workspaces, through nx.
- `npm run snap`: all tests, and save snapshots. Sets
  `TAP_TYPECHECK=0 TAP_TIMEOUT=240`.
- One package: `npm test -w src/<name>`. Its `pretest` runs
  `prepare` first.
- Each package's `map.js` maps test files to source files for
  coverage (`coverage-map` in the `tap` section of its
  `package.json`).
- Each package has `test/import-deps.ts`. It fails if source imports
  a module that is not in `dependencies` or `peerDependencies`.
- CI runs on node 22, 24, 26 on ubuntu and macos, with
  `TAP_TYPECHECK=0`.

## Format

- `npm run format` runs prettier in each workspace. Config:
  `.prettierrc.json` (no semicolons, single quotes, width 75, arrow
  parens avoided, experimental ternaries).

## Docs

- `npm start`: build and serve the docs site.
- Content: `src/docs/content`. File names map to URLs.
- `npm run typedoc`: API docs.
