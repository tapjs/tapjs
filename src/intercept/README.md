# `@tapjs/intercept`

A default tap plugin for doing object/global property/method
interception and observing. These are sometimes refered to as
"spy" or "mock" methods (though the term "mock" is extremely
overloaded, and in tap is usually used to refer to [dependency
injection mocking](https://node-tap.org/plugins/mock)).

## Usage

```js
import t from 'tap'

const functionThatLogs = (n: number) => {
  console.log('the number is', n)
}

t.test('some child test', t => {
  // track console.log calls
  const results = t.capture(console, 'log')
  functionThatLogs(10)
  functionThatLogs(5)
  // results() returns the list of what was called, and resets
  // the store.
  t.match(results(), [
    { args: ['the number is', 10], returned: undefined },
    { args: ['the number is', 5], returned: undefined },
  ])
  functionThatLogs(1)
  t.match(results(), [
    { args: ['the number is', 1], returned: undefined },
  ])
  // when the test ends, the original is restored
  t.end()
})

t.test('capture with an implementation', t => {
  const results = t.capture(console, 'log', () => {
    throw new Error('thrown from stub')
  })
  t.throws(
    () => {
      functionThatLogs(3)
    },
    { message: 'thrown from stub' }
  )
  t.match(results(), { args: ['the number is', 3], threw: true })
  t.end()
})

t.test('capture and still call the function', t => {
  // to do this, we just pass the original in as the third arg
  const results = t.capture(console, 'log', console.log)
  // actually logs to the console
  functionThatLogs(1)
  t.match(results(), [
    { args: ['the number is', 1], returned: undefined },
  ])
  t.end()
})

t.test('intercept a property set/get', t => {
  // the last arg is a propertyDescriptor, but configurable: true
  // forced on it even if not provided, so that we can restore
  // it at the end of the test.
  // If a value is provided, then we still actually set to a
  // setter/getter so that we can track accesses.
  const results = t.intercept(process, 'version', {
    value: '1.2.3',
  })
  t.equal(process.version, '1.2.3')
  process.version = '2.4.6'
  // we didn't make it writable, so this didn't do anything.
  t.equal(process.version, '1.2.3')
  t.match(results(), [
    { receiver: process, type: 'get', value: '1.2.3', success: true },
    {
      receiver: process,
      type: 'set',
      value: '2.4.6',
      success: false,
    },
    { receiver: process, type: 'get', value: '1.2.3', success: true },
  ])
})
```

## API

- `Type ResultsFunction` A function that returns data about the
  intercepted calls, and resets the tracking array.
  `results.restore()` will restore the method to its original
  state.

- `t.capture(obj, method, implementation = () => {}): CaptureResultFunction`

  Replaces `obj[method]` with the supplied implementation.

  The `results()` method will return an array of objects with a
  `receiver` property indicating the `this`-context of the method
  call, an `args` array, an `at` CallSiteLike object, and either
  `threw: true` or `returned: <value>`.

  If `t.teardown()` is available (ie, if the `@tapjs/after`
  plugin is not disabled) then it will be automatically
  restored on test teardown. Otherwise, `results.restore()`
  must be called to restore the original method.

  Returned method also has a `calls` array which contains the
  results.

- `t.intercept(obj, property, desc?: PropertyDescriptor, strictMode: boolean = true): InterceptResultsFunction`

  Similar to `t.capture()`, but can be used to track get/set
  operations for any arbitrary property. The results function
  returns a list of objects with:

  - `receiver` the object where the set/get is happening
  - `type` 'get' for get operations, 'set' for set operations
  - `value` The value that was returned by a get, or set in a
    set.
  - `at` call site where the get/set occurred.
  - `threw` whether or not the call threw.
  - `success` whether or not the call was sucessful.

- `t.captureFn(original: (...a:any[]) => any): WrappedFunction`

  Similar to `t.capture()`, but just wraps the function and
  returns it.

  Returned function has a `calls` array property containing the
  results.
