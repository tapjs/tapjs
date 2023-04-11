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
export const plugin: TapPlugin = t => {
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
export const plugin: TapPlugin = (t, { node: ReactElement }) => {
  return new ReactTest(node)
}
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

- `@tapjs/core/plugin/before-each` Adds `t.beforeEach(fn)`
- `@tapjs/core/plugin/after-each` Adds `t.afterEach(fn)`
- `@tapjs/core/plugin/stdin` Adds `t.stdin()`
- `@tapjs/core/plugin/spawn` Adds `t.spawn()`
- `@tapjs/asserts` All other assertions, like `t.match()`,
  `t.type()`, `t.has()`, and so on.
- `@tapjs/snapshot` Providing the `t.matchSnapshot()` method.
- `@tapjs/fixture` Providing the `t.testdir()` method.
- `@tapjs/mock` Providing the `t.mock()` method.

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

## Plugin Collisions

The _first_ plugin in a list that provides a given method or
property will be the one that "wins", as far as the object
presented in test code is concerned.

However, _within_ a given plugin, it only sees itself and the
`TestBase` object it's been given. For example, if returning an
object constructed from a class defined in the plugin, `this`
will refer to that object, always.

```js
// first-plugin
export const plugin = (t: TestBase) => {
  return {
    // this is the first plugin to register this value
    // so this is what shows up on the Test object
    myVal: 4,
    getFirstPluginVal() {
      return this.myVal // always returns 4
    },
    // this is the first plugin to register this method
    // so this is what shows up on the Test object
    getFour() {
      return 4
    },
  }
}
```

```js
// second-plugin
export const plugin = (t: TestBase) => {
  return {
    // user will never see this, because first-plugin registered it
    myVal: 5,
    getSecondPluginValue() {
      return this.myVal // always returns 5
    },
    // overridden, this isn't the 'getFour' that the user will see
    getFour() {
      return 'four'
    },
  }
}
```

Then in the test:

```js
import t from 'tap'
console.log(t.myVal) // 4, not 5
console.log(t.getFour()) // 4, not 'four'
console.log(t.getFirstPluginVal()) // 4
console.log(t.getSecondPluginVal()) // 5
```

## Accessing the Constructed Plugged-In Test Object

If you need access to the constructed `Test` object, you can get
that after the initial plugin load, via `t.t`. However, it will
be `undefined` until all plugins are done loading.

```js
// my-plugin.ts
export const plugin = (t: TestBase) => {
  // here, t.t === undefined
  return {
    someMethod() {
      // here, t.t is the object with all the plugins applied
    },
  }
}
```
