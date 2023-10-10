# `@tapjs/test`

The plugin-ified `Test` class in node-tap.

## Class `Test`

This is the object that's actually provided to your tests. When
you do `t.pass('this is fine')`, this is the `t`.

It's also the base class of the `TAP` class which is the default
export of the `'tap'` module, so anything on `Test` is also on
`TAP`.

The `Test` class itself adds only the following methods, but it
has the sum of all methods provided by all loaded plugins.

### `t.applyPlugin(plugin: TapPlugin): Test`

This returns a new version of the Test object which has the
plugin applied.

Note that it's actually a different object, but anything done to
the copy will also affect the base, and it will inherit all
properties and methods that the base has, so the new object can
be used in place of the original.

For example:

```js
import t from 'tap'

const plugin = t => ({
  hello: () => console.log('hello from ', t.name),
  blowUp: () => t.fail('blowing up'),
})

t.test('apply a plugin', original => {
  const t = original.applyPlugin(plugin)
  console.log(typeof original.hello) // 'undefined'
  console.log(typeof t.hello) // 'function'
  t.hello()
  t.blowUp()
  console.log(original.passing()) // false
  t.end() // ends the subtest
})
```

### `t.pluginLoaded(plugin: TapPlugin): boolean`

Returns true if the plugin is loaded.

Also asserts that `t` implements the type returned by the plugin
function.

So, for example, if a plugin _might_ be loaded, you can use this
to get TypeScript to know about it.

```ts
import t from 'tap'
import { Test } from '@tapjs/test'

const plugin = t => ({
  hello: () => console.log('hello from ', t.name),
  blowUp: () => t.fail('blowing up'),
})

const maybeBlowup = (t: Test) => {
  if (t.pluginLoaded(plugin)) {
    t.blowUp()
  } else {
    t.pass('no blowup required')
  }
}

t.test('maybe blow up', original => {
  const t = original.applyPlugin(plugin)
  maybeBlowup(original) // emits passing 'no blowup required'
  maybeBlowup(t) // blows up
  t.end()
})
```

### `t.test()`, `t.todo()`, `t.skip()`

Creates a subtest. You've seen this one before. This is the class
that implements it.

## `signature: string`

The signature of the plugins built into this Test class.

## `loaders: string[]`

The loaders added by plugins.

## `testFileExtensions: Set<string>`

The test file extensions added by plugins.
