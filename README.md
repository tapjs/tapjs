# @tapjs

Workspace for node-tap development.

- [@tapjs/core](./src/core) Most of the basic moving parts of tap
  - [@tapjs/core/plugin/...](./src/core/src/plugin) All the
    lifecycle plugins live in the `@tapjs/core` package (these
    may be moved out at some point)
- [@tapjs/test](./src/test) The plugin-ified `Test` class.
- [@tapjs/asserts](./src/asserts) All other assertions, like
  `t.match()`, `t.type()`, `t.has()`, and so on.
- [@tapjs/snapshot](./src/snapshot) Providing the
  `t.matchSnapshot()` method.
- [@tapjs/fixture](./src/fixture) Providing the `t.testdir()`
  method.
- [@tapjs/mock](./src/mock) Providing the `t.mockRequire()` and
  `t.mockImport()` methods
- [tcompare](./src/tcompare) The library that does comparison and
  object formatting (use heavily by `@tapjs/asserts` methods).
- [@tapjs/stack](./src/stack) Library for capturing stack frames,
  the descendant of `stack-utils`.
- [@tapjs/nock](./src/nock) Optional plugin providing `t.nock()`
  method.

Run `npm run bootstrap` to build the `@tapjs/test` module with
the default set of plugins, so that the other libraries can
build properly. (This only has to be done once.)
