---
title: Testing with Mocks
section:
---
# Testing with Mocks

Mocking modules is a great tool to help with increasing test coverage,
specially in parts of the code that are harder to reach with integration tests.

The Mock API is a helper that makes it easy to swap internally required
modules with any replacement you might need in the current tests.

Using `t.mock()` in practice is as simple as:

```js
// use t.mock() to require a module while replacing
// its internal required modules for mocked replacements:
const myModule = t.mock('../my-module', {
  'fs': {
    readFileSync: () => throw new Error('oh no')
  },
  '../util/my-helper.js': {
    foo: () => 'bar'
  }
})

// run tests, e.g:
t.equal(myModule.fnThatUsesMyHelper(), 'bar')
```

## Alternatives

In case you find yourself needing a more robust solution one that for example,
also handles CommonJS cache and more. Here are some of the mocking libraries
that inspired this API, you might want to give them a try:

- [`require-inject`](https://www.npmjs.com/package/require-inject)
- [`proxyquire`](https://www.npmjs.com/package/proxyquire)
