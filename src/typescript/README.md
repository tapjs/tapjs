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
- adds the `typecheck` config flag, which is true by default

The `typecheck` config defaults to being set, and type checking
your tests is generally a good idea. However, it is also often
considerably slower, adding as much as half a second to each test
suite file, which can be painful if you have a lot of test files.

You can disable type checking with `--no-typecheck` on the
command line, or by putting `typecheck: false` in `.taprc`, or `{
"tap": { "typecheck": false }}` in `package.json`, or
`TAP_TYPECHECK=0` in the environment.

If you find that your typescript tests are taking too long to run, and
decide to disable type checking, it is best to enable it in CI, for
example by setting `TAP_TYPECHECK=1` in the environment.

The `"skipLibCheck": true` option in tsconfig will also speed things up a
bit, at the expense of some type safety.
