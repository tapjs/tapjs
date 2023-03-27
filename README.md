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
- [tcompare](./src/tcompare) The library that does comparison and
  object formatting.

Run `npm run bootstrap` to build the `@tapjs/test` module with
the default set of plugins, so that the other libraries can
build properly. (This only has to be done once.)
