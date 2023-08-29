# `@tapjs/create-plugin`

Create a tap plugin with `npm init @tapjs/plugin` (or `yarn
create @tapjs/plugin`).

This will create the basic scaffolding required to write a tap
plugin.

## Writing Plugins

Tap plugins are typically a function that takes a `Test` object
and optionally an `options` object, and returns an object that is
used as the extension.

This is a very simple "hello, world" plugin:

For example, a very simple "hello, world" plugin:

```ts
import { TapPlugin, TestBase } from '@tapjs/core'
export interface HelloSayer {
  hello: (who?: string) => string
}
export const plugin: TapPlugin<HelloSayer> = (t: TestBase) => {
  return {
    hello: (who: string = 'world') => {
      console.error(`${t.name} says "Hello, ${who}!"`)
    }
  }
}
```

As a more realistic example, to add a `isString` method to all
tests, you could define a plugin like this:

```js
import {
  TestBase,
  TapPlugin,
  Extra,
  MessageExtra,
  normalizeMessageExtra,
} from '@tapjs/core'

export class StringTester {
  #t: TestBase
  constructor (t: TestBase) {
    this.#t = t
  }
  isString (
    s: any,
    ...[msg, extra]: MessageExtra
  ) {
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('expect string', args)
    // note: 'this' here is the StringTester plugin object
    if (typeof s === 'string') {
      return this.#t.pass(msg, extra)
    } else {
      return this.#t.fail(msg, {
        ...extra,
        value: s,
        wanted: 'string',
        found: typeof s,
      })
    }
  }
}

export const plugin: TapPlugin<StringTester> =
  t => new StringTester(t)
```

The object returned by a plugin can be any sort of thing. If you
want to use a class with private properties, that's totally fine
as well. Whatever type is expected as the second argument will
be combined with the built-in `TestBaseOpts` interface, and
required when tests are instantiated.

```js
import { TestBase, TapPlugin, AssertionOpts } from '@tapjs/core'
import { cleanup, render } from '@testing-library/react'
import { ReactElement } from 'react'
import { RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
class ReactTest {
  #result?: RenderResult
  constructor(node: ReactElement) {
    if (node) {
      this.#result = render(node)
    }
  }
  findByText(text: string) {
    return this.#result?.findByText(text)
  }
  // add other helpful methods here...
}
export interface ReactTestOpts {
  node?: ReactElement
}
export const plugin: TapPlugin<ReactTest, ReactTestOpts> = (t, opts) =>
  new ReactTest(node)
```

When loaded, this plugin would make it so that every test may
provide a `{ node: ReactElement }` option, and would then have a
`t.findByText()` method that returns the results.

## Accessing the Constructed Plugged-In Test Object

If you need access to the constructed `Test` object, you can get
that after the initial plugin load, via `t.t`. However, it will
be `undefined` until all plugins are done loading, so do not rely
on it being present in your plugin function itself or any
constructors it calls synchronously.

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

## Plugin Requirements

- Plugins must be able to be loaded both with `require()` and
  `import()`. This maintains tap's ability to run in all
  JavaScript dialects.
- Plugins must export at least one of `loader`, `plugin`, or
  `config`.
- Plugins _should_ be written in TypeScript, or failing that,
  provide complete type information so that users' tests can
  infer the types of added properties and methods appropriately.

## Cleaning Up

A common use-case for plugins is to manage some state that needs
to be disposed at the end of the test.

In those cases, you can leverage the
[`@tapjs/after`](https://tapjs.github.io/tapjs/modules/_tapjs_after.html)
plugin's functionality by testing to see whether it is loaded.

For example, if you wanted to ruin the `process` object for some
reason:

```js
import { TapPlugin, TestBase } from '@tapjs/core'
import { plugin as AfterPlugin } from '@tapjs/after'

export class BreakProcess {
  // the method that restores the world to how it was before
  #restore?: () => void
  #t: TestBase
  #didCleanup: boolean = false

  constructor (t: TestBase) {
    this.#t = t
  }

  restoreProcess() {
    if (this.#restore) {
      this.#restore()
    }
  }

  breakProcess() {
    // if we already broke it, 
    if (this.#restore) return
    const originalProcess = process
    global.process = { not: 'the actual process object' }
    this.#restore = () => {
      global.process = originalProcess
      this.#restore = undefined
    }
    if (this.#t.t.pluginLoaded(AfterPlugin) && !this.#didCleanup) {
      this.#t.t.after(() => this.restoreProcess())
    }
  }
}
```

(Don't actually write this plugin, though. Just use
[`@tapjs/intercept`](https://tapjs.github.io/tapjs/modules/_tapjs_intercept.html)
for this, it's included with tap already, and does the sort of
cleanup described here.)

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

While collisions like this are usually not a big deal, this
behavior can get confusing. So, it's best to name properties and
methods somewhat uniquely, so as to make collisions less likely.
