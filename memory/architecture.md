# Architecture

Sources: `README.md`, `src/docs/content/plugins/index.md`,
`scripts/default-build.mts`, `scripts/bootstrap.sh`.

## Layers

- `@tapjs/core` (`src/core`): the base parts. `TestBase`, `TapPlugin`,
  `BaseOpts`, TAP output.
- Plugins (`src/<plugin>`): each adds methods to the `Test` class.
  Most `t.*` methods (`t.equal`, `t.mockImport`, `t.testdir`, and so
  on) come from plugins, not from core.
- `@tapjs/test` (`src/test`): builds the `Test` class from core plus
  a set of plugins. The output goes in `src/test/test-built`.
- `@tapjs/run` (`src/run`): the CLI runner (`tap` command).
- `@tapjs/config` (`src/config`): config files, CLI args, env vars.
- `tap` (`src/tap`): the main entry point. It sets up the root test
  and exposes the CLI.

## Plugins

- A plugin is a package that exports at least one of `plugin`,
  `loader`, or `config`. Full spec:
  `src/docs/content/plugins/index.md`.
- `plugin` is a function `(t: TestBase, opts?) => object`. The
  fields of the returned object appear on `Test`.
- The default plugin list is `scripts/default-plugins.txt`. A new
  default plugin must go in that list.
- `scripts/default-build.mts` reads that list. It writes
  `src/test/src/default-plugins.ts` and
  `src/tap/src/dummy-import.ts`, then builds the `Test` class.
- Users change the plugin set with `tap plugin`, or with the
  `plugin` config. A `!` prefix excludes a default plugin. Each
  change makes the runner rebuild the `Test` class (`tap build`).

## The bootstrap cycle

- `@tapjs/core`, `@tapjs/test`, and the plugins depend on each other
  for types. They need `skipLibCheck: true` in their tsconfigs.
  Other packages must not use it.
- Because of this cycle, built output for `src/core/dist`,
  `src/after/dist`, `src/test/dist`, and parts of
  `src/test/test-built` is checked in to git. See `.gitignore`.
- `@tapjs/processinfo` (process tracking and coverage) lives in a
  separate repo. Tap cannot test it with a version of tap that
  uses it.

## Build tools

- Each package builds with `tshy` (dual ESM and CommonJS output in
  `dist/`). Source is TypeScript in `src/<pkg>/src`.
- `nx` runs scripts across workspaces (`nx.json`). The `prepare`
  target depends on `^prepare` of each dependency.
- Root scripts in `scripts/*.mjs` launch `*.mts` files through
  `@isaacs/ts-node-temp-fork-for-pr-2009`.
