---
title: Testing with Mocks
section: 5.035
---

# Testing with Mocks

Mocking modules is a great tool to help with increasing test coverage,
specially in parts of the code that are harder to reach with integration tests.

The Mock API is a helper that makes it easy to swap internally required
modules with any replacement you might need in the current tests.

Example:

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

## API

The `t.mock` function takes two arguments:

- The string path to the module that is being required, relative to the
  current test file.
- The key/value pairs of paths (relative to the current test) and the value
  that should be returned when anything in the loaded module requires those
  modules.

The return value is the result of loading the specified module in the
context of the mocks provided.

## Alternatives

In case you find yourself needing a more robust solution one that for
example, also handles CommonJS cache and more. Here are some of the mocking
libraries that inspired this API, you might want to give them a try:

- [`require-inject`](https://www.npmjs.com/package/require-inject)
- [`proxyquire`](https://www.npmjs.com/package/proxyquire)
