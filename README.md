# @tapjs

Workspace for node-tap development.

- [tap](./src/tap) The main entry point module, which sets up the
  root test runner and exposes an alias to the cli runner.
- [@tapjs/core](./src/core) Most of the basic moving parts of tap
- [@tapjs/test](./src/test) The plugin-ified `Test` class.
- [@tapjs/config](./src/config) Handling config files, command
  line interface parsing, environment variables, and validation
- [@tapjs/run](./src/run) The command line runner
- default plugins:
  - [@tapjs/typescript](./src/typescript)
  - [@tapjs/before](./src/before)
  - [@tapjs/before-each](./src/before-each)
  - [@tapjs/after](./src/after)
  - [@tapjs/after-each](./src/after-each)
  - [@tapjs/spawn](./src/spawn)
  - [@tapjs/stdin](./src/stdin)
  - [@tapjs/asserts](./src/asserts)
  - [@tapjs/snapshot](./src/snapshot)
  - [@tapjs/fixture](./src/fixture)
  - [@tapjs/mock](./src/mock)
  - [@tapjs/intercept](./src/intercept)
  - [@tapjs/filter](./src/filter)
- [tcompare](./src/tcompare) The library that does comparison and
  object formatting (use heavily by `@tapjs/asserts` methods).
- [@tapjs/stack](./src/stack) Library for capturing stack frames,
  the descendant of `stack-utils`.
- [@tapjs/nock](./src/nock) Optional plugin providing `t.nock()`
  method.
- [@tapjs/sinon](./src/sinon) Optional plugin providing a
  [Sinon](https://sinonjs.org) sandbox at `t.sinon` that
  automatically restores at the end of the test.

Run `npm run bootstrap` to build the `@tapjs/test` module with
the default set of plugins, so that the other libraries can
build properly. (This only has to be done once, unless the build
script or set of default plugins are changed, of course.)

## Bootstrap and `skipLibCheck`

Because there's a bootstrapping cycle between `@tapjs/core`,
`@tapjs/test`, and all of the plugins, they MUST use
`skipLibCheck: true` in their tsconfigs.  It should not be used
in other packages.
