# @tapjs/core

This is the pluggable core of node-tap.

The `TestBase` class has the basic flow-control and child-test
aspects of a tap `Test` object, but only the `t.pass()` and
`t.fail()` assertions.

All other assertions and features are added via plugins.

## Writing Plugins

Tap plugins are a function that takes a `Test` object and an
`options` object, and returns an object that is used as the
extension.

For example, to add a `isString` method to all tests, you could
define a plugin like this:

```ts
import { TestBase, TapPlugin, AssertionOpts } from '@tapjs/core'
const plugin: TapPlugin = t => {
  return {
    isString: (
      s: any,
      msg: string = 'expect string',
      extra: AssertionOpts = {}
    ) => {
      // note: 'this' here is the plugin object
      if (typeof s === 'string') {
        return t.pass(msg)
      } else {
        return t.fail(msg, {
          ...extra,
          expect: 'string',
          actual: typeof s,
        })
      }
    }
}
export default plugin
```

The object returned by a plugin can be any sort of thing. If you
want to use a class with private properties, that's totally fine
as well. Whatever type is expected as the second argument will
be combined with the built-in `TestBaseOpts` interface, and
required when tests are instantiated.

```ts
import {
  TestBase,
  TapPlugin,
  AssertionOpts,
} from '@tapjs/core'
import { cleanup, render } from '@testing-library/react'
import { ReactElement } from 'react'
import { RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
class ReactTest {
  #result: RenderResult
  constructor(node: ReactElement) {
    this.#result = render(node)
  }
  findByText(text: string) {
    return this.#result.findByText(text)
  }
  // add other helpful methods here...
}
const plugin: TapPlugin = (t, { node: ReactElement }) => {
  return new ReactTest(node)
}
export default plugin
```

When loaded, this plugin would make it so that every test must
supply a `{ node: ReactElement }` option, and would have a
`t.findByText()` method.

## Loading Plugins

The easiest way to load plugins is by running:

```
tap plugin add <package or local module>
```

This will also regenerate the Test class, so types are kept in
sync.

Remove plugins with `tap plugin remove <plugin>`.

### Specifying Plugins Manually

Plugins are specified in the `plugins` array of the root tap
config. That is, either `.taprc` in the project directory, or
the `"tap"` stanza in the `package.json` file.

Whenever the `plugins` option is changed, you must run `tap
generate` to generate the `Test` class properly. This is done
automatically on demand when running `tap` or `tap run
[...files]`, but its often a good idea to do so before writing
tests so that editor hinting is accurate.

## Built-In plugins

Out of the box, tap comes with the following plugins loaded:

- `@tapjs/core/plugin/before-each.js` Adds `t.beforeEach(fn)`
- `@tapjs/core/plugin/after-each.js` Adds `t.afterEach(fn)`
- `@tapjs/core/plugin/stdin.js` Adds `t.stdin()`
- `@tapjs/core/plugin/spawn.js` Adds `t.spawn()`
- `@tapjs/assertions` All other assertions, like `t.match()`,
  `t.type()`, `t.has()`, and so on.
- `@tapjs/snapshot` Providing the `t.matchSnapshot()` method.
- `@tapjs/mock` Providing the `t.mock()` method.
- `@tapjs/fixture` Providing the `t.testdir()` method.

To _prevent_ loading any of these plugins, you can include them
in the `plugins` config, prefixed with a `!`. For example, if
you wanted to replace `t.mock()` with a different mocking plugin,
you could do this:

```json
{
  "tap": {
    "plugins": ["!@tapjs/mock", "my-mock-plugin"]
  }
}
```
