---
title: tap plugins
eleventyNavigation:
  key: Plugins
  order: 50
---

A `plugin` is a package that adds functionality to node-tap by
exporting special values on known named exports. It can do so in
any or all of the following ways.

All of these fields are optional, but at least one of `plugin`,
`loader`, or `config` _must_ be exported.

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

## `config`

The `config` export allows a plugin to define configuration
values that will be parsed from the command line or from tap
[config files](../config.md).

The object must be a value that can be passed to jackspeak's
[`Jack#addFields`](https://isaacs.github.io/jackspeak/classes/index.Jack.html#addFields)
method. For example, the `@tapjs/snapshot` plugin [exports a
`snapshot`
config](https://github.com/tapjs/tapjs/blob/0b315bf/src/snapshot/src/index.ts#L340),
which tells it to save snapshots rather than compare against
them.

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
