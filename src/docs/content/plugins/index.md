---
title: tap plugins
eleventyNavigation:
  key: Plugins
  parent: Docs
  order: 50
---

A `plugin` is a package that adds functionality to node-tap by
exporting special values on known named exports. It can do so in
any or all of the following ways.

All of the fields are optional, but at least one of `plugin`,
`loader`, or `config` _must_ be exported.

## Managing Plugins

The easiest way to manage plugins is by using the `tap plugin`
command. This handles all of the installation, building, updating
the configs, and so on.

You can also manually specify plugins by updating the
`plugin` config value in `.taprc` or `package.json`, or on the
command line.

By default, built in plugins are always present unless they are
explicitly excluded. To exclude a built in plugin in the
configuration, prefix its name with a `!` character.

For example, if you run `tap plugin rm @tapjs/typescript`, then
your `.taprc` file will be updated to:

```yaml
plugin:
  - "!@tapjs/typescript"
```

## Rebuilding the `Test` Class

The [`Test`
class](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html)
must be regenerated on every plugin change. This is done
automatically by the [cli](../cli.11ty.js) whenever tests are
run, but you can also explicitly rebuild by running `tap build`
at any time.

## `plugin`

The `plugin` export, if defined, must be a function that takes a
[TestBase](https://tapjs.github.io/tapjs/classes/_tapjs_core.test_base.TestBase.html)
object as its first argument, and optionally an options object as
its second argument. The return value is an object. Any
properties or methods of that object will appear on the
[`Test`](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html)
class that is provided to test suites.

If an options object is accepted as the second parameter, it must
extend the
[`BaseOpts`](https://tapjs.github.io/tapjs/interfaces/_tapjs_core.base.BaseOpts.html)
interface, and all properties should be optional. (Technically it
_can_ have required fields, but this means that all tests have to
provide an options object when using your plugin, which is kind
of annoying.)

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

The returned object can be anything. Methods on the object will
be called in the `this`-context of the returned object itself. If
you need a reference to the original `TestBase` object, you can
stash a reference to it when loading.

After all of the plugins have finished loading, a `.t` member
will be added to the TestBase object, which is the fully
plugged-in `Test` proxy.

## `loader`

If a `loader` string is exported, then it will be used when
spawning test processes.

This is how, for example, the
[@tapjs/typescript](https://tapjs.github.io/tapjs/modules/_tapjs_typescript.html)
plugin adds support for TypeScript test files.

If `preload = true` is exported, then the loader will be added
ahead of non-preload loaders. This is necessary when the loader
needs to be attached early, as in the case of loading different
JavaScript dialects.

## `importLoader`

The `--loader` API is experimental, and replaced by `--import`
and `Module.register` starting at Node.js version 20.6.

If a plugin exports an `importLoader` string, then this will be
added to the test arguments with `--import` instead of the
`--loader` argument.

On Node versions that do not support `--import`, the `--loader`
argument will be used instead if the plugin exports a `loader`
string.

See [the Node.js ES Module Hooks
documentation](https://nodejs.org/api/esm.html#loaders) for more
information.

## `config`

The `config` export allows a plugin to define configuration
values that will be parsed from the command line or from tap
[config files](../cli.md#configuration).

The object must be a value that can be passed to jackspeak's
[`Jack#addFields`](https://isaacs.github.io/jackspeak/classes/index.Jack.html#addFields)
method. For example, the `@tapjs/snapshot` plugin [exports a
`snapshot`
config](https://github.com/tapjs/tapjs/blob/0b315bf/src/snapshot/src/index.ts#L340),
which tells it to save new snapshots rather than compare against
stored snapshots.

## `testFileExtensions`

If an array of strings is exported as `testFileExtensions`, then
this will be added to the set of file types that tap loads by
default.

For example, the `@tapjs/typescript` plugin uses this to
advertise that it makes tap able to load `ts` and `jsx` files.

Generally, you'd do this when also adding a loader, since adding
file types that node doesn't already know how to run won't work.

## Plugin Requirements

- Plugins must be able to be loaded both with `require()` and
  `import()`.
- Plugins must export at least one of `loader`, `plugin`, or
  `config`.
- Plugins _should_ be written in TypeScript, or failing that,
  provide complete type information so that users' tests can
  infer the types of added properties and methods appropriately.

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

