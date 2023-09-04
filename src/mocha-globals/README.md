# `@tapjs/mocha-globals`

An optional plugin adding Mocha-like BDD and TDD interfaces to
the global environment when tap is loaded.

To install it, run:

```
tap plugin add @tapjs/mocha-globals
```

## API

The goal of this plugin is _not_ to fully implement the Mocha
interface with perfect fidelity, but rather to facilitate porting
tests to use tap from other test framework dialects, and to
provide this interface for those who prefer this style.

TDD/BDD methods provided:

- `describe(fn)` _(alias: `context()`, `suite()`)_
- `it(fn)` _(alias: `specify()`, `test()`)_
- `before(fn)` _(alias: `suiteSetup()`)_
- `after(fn)` _(alias: `suiteTeardown()`)_
- `beforeEach(fn)` _(alias: `setup()`)_
- `afterEach(fn)` _(alias: `teardown()`)_

Other useful things that are helpful with these:

### `tt() => Test`

Return the tap `Test` object that corresponds to the current
suite or test that the mocha BDD/TDD methods are running.

### `currentSuite() => Test`

The `Test` corresponding to the current `describe()` block, or
undefined outside of a suite.

### `currentTest() => Test`

The `Test` corresponding to the current `it()` block, or
undefined outside of a test.

### `mounted() => Test`

The `Test` corresponding to the "root" where all suites branch
off from.

When the plugin is active, this is always the `TAP` root test
object.

### `globalize()`

Set all the BDD/TDD methods in the global space.

## Config

If the `--mocha-globals` flag is set (true by default) then these
methods will be injected into the global space.

If disabled with `--no-mocha-globals` on the command line or
`mocha-globals: false` in a `.taprc`, then you can import them
from `@tapjs/mocha-globals` as named exports.
