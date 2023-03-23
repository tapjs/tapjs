## Architecture

### `@tapjs/core`

Plugin architecture.

Generates/defines `TestBase` class, which inherits from
`Minipass`, but doesn't have anything "tap" related except for
configuration and plugin management.

Expose a script that'll generate the extended base class at
`node_modules/.tapjs/core`, called by `tap generate` and `tap plugin
add ...`.

Load configs from `@tapjs/config` to know what plugins to apply.

### `@tapjs/lib`

The thing that gets run in test files themselves.

Loads the root `TapBase` class from `@tapjs/core`

Defines Test, Spawn, Worker, and Stdin classes, and root `TAP`
object.

Applies `@tapjs/assertions` and `@tapjs/snapshot` plugins.

!! kind of weird for Spawn, Worker, etc. to inherit from the
plugin-extended `TapBase`?  Maybe `@tapjs/core` should export the
pre-plugin base class as well?

So we'd start with `Base` (no plugins) that gets extended to
`TestBase`.  `Test` extends `TestBase`, the others extend `Base`.

That means putting at least _some_ of the "TAP" stuff in
`@tapjs/core`.

---

Actually, quite a lot of it.  Since plugins will want to do
stuff like `if (condition) this.pass(...)`, it'll have to at
least have some of the basic assertions, support for subtests,
etc., unless all of that can be done as a built-in plugin.

Maybe `@tapjs/core` is just built into `@tapjs/lib`?

---

Actually, you _could_ do `Spawn`, `Stdin`, etc as plugins.  Just
need to have a module-local class that extends `Base` for the
subtest object, then a plugin that adds the method.

### `@tapjs/assertions`

Plugin that adds all basic test assertions.  Included by default.

### `@tapjs/snapshot`

Plugin to add snapshot functionality.  Included by default.

### `@tapjs/run`

CLI runner.  Executes scripts with the proper loaders to do
coverage etc.

Implements watch/repl functionality, only run changed, etc.

`tap` with no args = `tap run` if not a repl, otherwise `tap
watch`.  Otherwise, first argument has to be a subcommand.
(report, watch, etc.)  Maybe still implicitly call `tap run $arg`
if arg is a file and not a known subcommand.

Always include `ts-node/esm` in the loader set.

### `@tapjs/processinfo`

Loader that does coverage and processinfo tracking.  Applied to
subprocesses by `@tapjs/run`.

### `@tapjs/report`

Prints pretty report of test run.  Maybe find a more supported
alternative to `ink`?

### `@tapjs/config`

Loads config, parses CLI arguments.  Used by `@tapjs/run` and
`@tapjs/core`.





# wip notes

https://code.lol/post/programming/chained-tuple-types/
https://code.lol/post/programming/unchained-tuple-types/

Could define plugins as mixins, which is less "tappy", but maybe
easier to get inferred types about.

```js
const somePlugin = Base => class extends Base {
  constructor (options) {
    super(options)
    /* ... whatever setup stuff needed ... */
    /* ... this === test being spawned ... */
  }
  greaterThan (x, y) {
    return this.ok(x > y)
  }
}
```

The more tappy approach (which seems more challenging to express
in type definitions?) would be:

```js
const somePlugin = t => {
  /* ... whatever setup stuff needed ... */
  /* ... this === test being spawned ... */
  t.addMethod('greaterThan', (t, x, y) => t.ok(x > y))
}
```
