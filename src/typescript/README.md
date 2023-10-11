# `@tapjs/typescript`

A default tap plugin providing typescript support.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/typescript` to
bring it back.

When enabled, this plugin does the following things:

- adds `ts`, `tsx`, `cts`, `mts`, and `jsx` to the file
  extensions that tap will load.
- adds `ts-node/esm` to the loader set.
- adds the `typecheck` config flag, which is `false` by default
- adds the `tsconfig` config option, for specifying a project
  config for your tests to use.

The `typecheck` config defaults to false, even though type
checking your tests is generally a good idea. Unfortunately, it
is also often considerably slower, adding as much as 500-750ms to
each test suite file, which can be painful if you have a lot of
tests. In large project folders, the effect can be even more
pronounced.

You can enable type checking with `--typecheck` on the command
line, or by putting `typecheck: true` in `.taprc`, or `{ "tap": {
"typecheck": true }}` in `package.json`, or `TAP_TYPECHECK=1` in
the environment. It is highly recommended to enable it in CI, for
example by setting `TAP_TYPECHECK=1` in the environment.

The `"skipLibCheck": true` option in tsconfig will also speed things up a
bit, at the expense of some type safety.

Note that even if you pre-compile your tests, they will still be
subject to type checking if `"allowJs": true` is set in your
tsconfig.

## Configuration

Set these as command line flags, or in a `.taprc` or `package.json`,
or via the `tap config set <key>=<value>` command.

- `typecheck` Defaults to false. Applies strict type checking to
  tests and the files they load, (at the expense of making tests
  slower).

- `tsconfig` Set to the `tsconfig.json` file to be used when
  loading TypeScript tests. Defaults to the first of these found,
  if present: `tsconfig.tap.json`, `tsconfig.test.json`,
  `tsconfig.spec.json`, `tsconfig.json`.
