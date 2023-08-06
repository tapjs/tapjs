# `@tapjs`

Workspace for node-tap development.

- [tap](./src/tap) The main entry point module, which sets up the
  root test runner and exposes an alias to the cli runner.
- [tap-parser](./src/parser) The module that parses
  [TAP](https://testanything.org/)
- [`@tapjs/core`](./src/core) Most of the basic moving parts of tap
- [tap-yaml](./src/yaml) Thin wrapper around
  [YAML](https://github.com/eemeli/yaml) and
  [yaml-types](https://github.com/eemeli/yaml-types) for
  consistent handling of JavaScript values in YAML diagnostics.
- [`@tapjs/test`](./src/test) The plugin-ified `Test` class.
- [`@tapjs/config`](./src/config) Handling config files, command
  line interface parsing, environment variables, and validation
- [`@tapjs/run`](./src/run) The command line runner
- [tcompare](./src/tcompare) The library that does comparison and
  object formatting (use heavily by `@tapjs/asserts` methods).
- [`@tapjs/stack`](./src/stack) Library for capturing stack frames,
  the descendant of `stack-utils`.
- [`@tapjs/processinfo`](https://github.com/tapjs/processinfo) The
  library that tracks process information and code coverage
  (hosted outside the monorepo, because it can't be tested by a
  version of tap that uses itself without bootstrap paradoxes)
- default plugins:
  - [`@tapjs/typescript`](./src/typescript) Adds typescript
    support, and the `--typecheck` config option
  - [`@tapjs/before`](./src/before) Adds `t.before()`
  - [`@tapjs/before-each`](./src/before-each) Adds `t.beforeEach()`
  - [`@tapjs/after`](./src/after) Adds `t.after()` and
    `t.teardown()` (which are the same thing now)
  - [`@tapjs/after-each`](./src/after-each) Adds `t.afterEach()`
  - [`@tapjs/spawn`](./src/spawn) Adds `t.spawn()`
  - [`@tapjs/stdin`](./src/stdin) Adds `t.stdin()`
  - [`@tapjs/asserts`](./src/asserts) Adds all the various
    assertion methods, like `t.equal()`, `t.match()`, etc.
  - [`@tapjs/snapshot`](./src/snapshot) Adds `t.matchSnapshot()`
  - [`@tapjs/fixture`](./src/fixture) Adds `t.testdir()` features
  - [`@tapjs/mock`](./src/mock) Adds `t.mockRequire()` and
    `t.mockImport()`
  - [`@tapjs/intercept`](./src/intercept) Adds `t.intercept()` and
    `t.capture()` functionality (sort of like a very scaled-down
    minimal form of Sinon. If you want more, consider using the
    `@tapjs/sinon` plugin.)
  - [`@tapjs/filter`](./src/filter) Adds `t.only()` and support for
    the `--grep` and `--only` cli options.
- optional plugins:
  - [`@tapjs/nock`](./src/nock) Optional plugin providing
    `t.nock()` method (descendent of `@npmjs/tap-nock`, and a
    significant inspiration for tap's plugin architecture)
  - [`@tapjs/sinon`](./src/sinon) Optional plugin providing a
    [Sinon](https://sinonjs.org) sandbox at `t.sinon` that
    automatically restores at the end of the test.
  - [`@tapjs/esbuild-kit`](./src/esbuild-kit) Optional plugin that
    loads TypeScript using
    [`@esbuild-kit/cjs-loader`](https://github.com/esbuild-kit/cjs-loader)
    and
    [`@esbuild-kit/esm-loader`](https://github.com/esbuild-kit/esm-loader)
    instead of
    [`ts-node`](https://github.com/TypeStrong/ts-node).
- other stuff:
  - [npm-init-templates](./src/npm-init-templates) A library for
    more easily creating `npm init` packages. This will move out
    as soon as this version of tap is published.
  - [`@tapjs/create-plugin`](./src/create-plugin) An `npm init`
    library facilitating `npm init @tapjs/plugin` to create new
    plugins.

## Bootstrap and `skipLibCheck`

Run `npm run bootstrap` to build the `@tapjs/test` module with
the default set of plugins, so that the other libraries can
build properly. (This only has to be done once, unless the build
script or set of default plugins are changed, of course.)

Because there's a bootstrapping cycle between `@tapjs/core`,
`@tapjs/test`, and all of the plugins, they MUST use
`skipLibCheck: true` in their tsconfigs. It should not be used
in other packages.
