# `@tapjs`

Workspace for node-tap development.

- [tap](https://github.com/tapjs/tapjs/tree/main/src/tap) The
  main entry point module, which sets up the root test runner and
  exposes an alias to the cli runner.
- [tap-parser](https://github.com/tapjs/tapjs/tree/main/src/parser)
  The module that parses [TAP](https://testanything.org/)
- [`@tapjs/core`](https://github.com/tapjs/tapjs/tree/main/src/core)
  Most of the basic moving parts of tap
- [tap-yaml](https://github.com/tapjs/tapjs/tree/main/src/yaml)
  Thin wrapper around [YAML](https://github.com/eemeli/yaml) and
  [yaml-types](https://github.com/eemeli/yaml-types) for
  consistent handling of JavaScript values in YAML diagnostics.
- [`@tapjs/test`](https://github.com/tapjs/tapjs/tree/main/src/test)
  The plugin-ified `Test` class.
- [`@tapjs/config`](https://github.com/tapjs/tapjs/tree/main/src/config)
  Handling config files, command line interface parsing,
  environment variables, and validation
- [`@tapjs/run`](https://github.com/tapjs/tapjs/tree/main/src/run)
  The command line runner
- [tcompare](https://github.com/tapjs/tapjs/tree/main/src/tcompare)
  The library that does comparison and object formatting (use
  heavily by `@tapjs/asserts` methods).
- [`@tapjs/stack`](https://github.com/tapjs/tapjs/tree/main/src/stack)
  Library for capturing stack frames, the descendant of
  `stack-utils`.
- [`@tapjs/processinfo`](https://github.com/tapjs/processinfo)
  The library that tracks process information and code coverage
  (hosted outside the monorepo, because it can't be tested by a
  version of tap that uses itself without bootstrap paradoxes)
- default plugins:
  - [`@tapjs/typescript`](https://github.com/tapjs/tapjs/tree/main/src/typescript)
    Adds typescript support, and the `--typecheck` config option
  - [`@tapjs/before`](https://github.com/tapjs/tapjs/tree/main/src/before)
    Adds `t.before()`
  - [`@tapjs/before-each`](https://github.com/tapjs/tapjs/tree/main/src/before-each)
    Adds `t.beforeEach()`
  - [`@tapjs/after`](https://github.com/tapjs/tapjs/tree/main/src/after)
    Adds `t.after()` and `t.teardown()` (which are the same thing
    now)
  - [`@tapjs/after-each`](https://github.com/tapjs/tapjs/tree/main/src/after-each)
    Adds `t.afterEach()`
  - [`@tapjs/spawn`](https://github.com/tapjs/tapjs/tree/main/src/spawn)
    Adds `t.spawn()`
  - [`@tapjs/stdin`](https://github.com/tapjs/tapjs/tree/main/src/stdin)
    Adds `t.stdin()`
  - [`@tapjs/asserts`](https://github.com/tapjs/tapjs/tree/main/src/asserts)
    Adds all the various assertion methods, like `t.equal()`,
    `t.match()`, etc.
  - [`@tapjs/snapshot`](https://github.com/tapjs/tapjs/tree/main/src/snapshot)
    Adds `t.matchSnapshot()`
  - [`@tapjs/fixture`](https://github.com/tapjs/tapjs/tree/main/src/fixture)
    Adds `t.testdir()` features
  - [`@tapjs/mock`](https://github.com/tapjs/tapjs/tree/main/src/mock)
    Adds `t.mockRequire()` and `t.mockImport()`
  - [`@tapjs/intercept`](https://github.com/tapjs/tapjs/tree/main/src/intercept)
    Adds `t.intercept()` and `t.capture()` functionality (sort of
    like a very scaled-down minimal form of Sinon. If you want
    more, consider using the `@tapjs/sinon` plugin.)
  - [`@tapjs/filter`](https://github.com/tapjs/tapjs/tree/main/src/filter)
    Adds `t.only()` and support for the `--grep` and `--only` cli
    options.
- optional plugins:
  - [`@tapjs/nock`](https://github.com/tapjs/tapjs/tree/main/src/nock)
    Optional plugin providing `t.nock()` method (descendent of
    `@npmjs/tap-nock`, and a significant inspiration for tap's
    plugin architecture)
  - [`@tapjs/sinon`](https://github.com/tapjs/tapjs/tree/main/src/sinon)
    Optional plugin providing a [Sinon](https://sinonjs.org)
    sandbox at `t.sinon` that automatically restores at the end
    of the test.
  - [`@tapjs/esbuild-kit`](https://github.com/tapjs/tapjs/tree/main/src/esbuild-kit)
    Optional plugin that loads TypeScript using
    [`@esbuild-kit/cjs-loader`](https://github.com/esbuild-kit/cjs-loader)
    and
    [`@esbuild-kit/esm-loader`](https://github.com/esbuild-kit/esm-loader)
    instead of
    [`ts-node`](https://github.com/TypeStrong/ts-node).
- other stuff:
  - [npm-init-templates](https://github.com/tapjs/tapjs/tree/main/src/npm-init-templates)
    A library for more easily creating `npm init` packages. This
    will move out as soon as this version of tap is published.
  - [`@tapjs/create-plugin`](https://github.com/tapjs/tapjs/tree/main/src/create-plugin)
    An `npm init` library facilitating `npm init @tapjs/plugin`
    to create new plugins.

## Bootstrap and `skipLibCheck`

Run `npm run bootstrap` to build the `@tapjs/test` module with
the default set of plugins, so that the other libraries can build
properly. (This only has to be done once, unless the build script
or set of default plugins are changed, of course.)

Because there's a bootstrapping cycle between `@tapjs/core`,
`@tapjs/test`, and all of the plugins, they MUST use
`skipLibCheck: true` in their tsconfigs. It should not be used in
other packages.
