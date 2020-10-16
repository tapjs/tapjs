---
title: Testing with Mocks
section:
---
# Testing with Mocks

Mocking/Stubbing parts of the codebase is a great tool to help with
increasing test coverage, specially in parts of the code that are harder
to reach with integration tests.

The Mock API is a helper that makes it easy to swap internally required
modules with any artificial replacement you might need in the current tests.

Using `t.mock()` in practice is as simple as:

```js
// in tests you would usually require a module to be tested, like:
// const myModule = require('../my-module')
//
// instead you use t.mock() to require that module and pick
// which of its required modules to replace on the fly:
const myModule = t.mock('../my-module', {
  'fs': {
    readFileSync: () => throw new Error('oh no')
  },
  './util/my-helper.js': {
    foo: () => 'bar'
  }
})

// run tests!
```

## Do not mess with my require.cache

`t.mock()` focus in a single-pattern that consists in hijacking the internal
`require` calls and injecting any mock you provide through that. It will not
try to replace modules from Node's internal `require.cache` or really do any
extra work other than that.

## Alternatives

In case you find yourself needing a more robust solution, here are some of
the mocking libraries that inspired this API:

- [`require-inject`](https://www.npmjs.com/package/require-inject)
- [`proxyquire`](https://www.npmjs.com/package/proxyquire)
