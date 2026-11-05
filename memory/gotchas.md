# Gotchas

Things that fail in ways that are hard to read. Add to this list
when you hit one.

- `npm install` on a fresh clone fails. Use `npm run bootstrap`.
- A plugin or core change has no effect in tests until you run
  `npm run build` (the `Test` class is generated).
- A new default plugin needs an entry in
  `scripts/default-plugins.txt`, then a rebuild.
- `import-deps.ts` tests fail if you import a module that the
  package's `package.json` does not list.
- `npm test` and `npm run snap` delete
  `src/test/test-built/dist/node_modules` first (root `pretest` and
  `presnap`).
- Package tests import from `dist`, not `src`. After you change a
  package's source (for example option help text in
  `src/config/src/jack.ts`), run `npm run prepare -w src/<name>`
  before its tests see the change.
- Bootstrap deletes any `npm-shrinkwrap.json` in `node_modules`
  (netlify/cli issue 6731), then restores `package-lock.json`.
