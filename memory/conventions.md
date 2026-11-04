# Conventions

Source: `CONTRIBUTING.md`, unless noted.

## Commits

- First line under 50 chars. Body wrapped at 80 chars.
- Prefix with the package name when the change is limited to one
  package and the subject does not make it plain. Example:
  `snapshot: fix syntax error`. Git log also shows `run:`, `mock:`,
  `core:`, `config:`, `stack:`, `docs:`.
- Not "conventional commits". Write for people and for
  `git bisect`.
- Last line: `fix: <issue link>` or `re: <issue link>` if an issue
  applies.
- Tests must pass at every commit.
- Do not change `package.json` versions by hand. Commits with the
  message `update versions` come from the release script.
- `npm run format` must leave no changes.
- If a package checks in built output, commit the rebuilt output
  with the source change. `npm run build && npm run prepare` must
  leave no changes.

## Tests

- No change goes in without a test that fails before and passes
  after.
- Keep 100% coverage.

## Dependencies

- Do not update dependencies in a PR unless the change needs it. If
  it does, put the update in its own commit.
- Every dependency of every workspace is also in the root
  `devDependencies`, at the same version range.
- Workspaces list only `dependencies` and `peerDependencies`, never
  `devDependencies`.
- Workspace-to-workspace deps are pinned to exact versions.
  `npm run pindeps` fixes them.
- Add a dep:
  `npm install <dep> --save-dev` at root, then
  `npm install -w src/<ws> <dep>`.
- Most plugins list `@tapjs/core` as a peer dependency.

## TypeScript

- Packages target es2022, `module` and `moduleResolution` set to
  `nodenext`, `strict`, `noUncheckedIndexedAccess`.
- Only core, test, and plugins use `skipLibCheck: true`.
