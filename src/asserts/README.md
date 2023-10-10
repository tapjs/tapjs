# `@tapjs/asserts`

Tap plugin that adds a heaping pile of assertion methods. Pretty
much all of the "test" methods other than `t.pass`, `t.fail`, and
[snapshot
methods](https://tapjs.github.io/tapjs/modules/_tapjs_snapshot.html)
come from this plugin.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add @tapjs/asserts` to
bring it back.

### `compareOptions`

This plugin adds the `compareOptions` option to the set of fields
that can be passed to child tests. You can also set
`t.compareOptions` after the fact.

`compareOptions` lets you pass options to
[tcompare](https://tapjs.github.io/tapjs/modules/tcompare.html)
to specify the formatting style, diff context lines, and so on.

It can contain the following fields:

- `sort` - boolean, sort items alphabetically by key.
- `bufferChunkSize` - number of bytes to show on each line when
  printing buffers, default `32`
- `includeEnumerable` - boolean, include any and all enumerable
  properties, including those inherited on the prototype chain.
  By default, only `own` properties are shown.
- `includeGetters` - boolean, include getter properties.
- `diffContext` - how many lines of context to print around
  changes in diffs, default `10`. Note that the test reporter
  might use more or less than this value when displaying pretty
  colored diffs.

### Assertion Methods

All of the assertion methods are documented [on the `Assertions`
class](https://tapjs.github.io/tapjs/classes/_tapjs_asserts.index.Assertions.html).
When this plugin is loaded, these are all present on `Test`
objects.
