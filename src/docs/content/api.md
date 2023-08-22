---
title: API
eleventyNavigation:
  key: API
  order: 10
---

The API presented in test programs is the combination of the base
class defined by `@tapjs/core` and all [plugins](./plugins/index.md)
that are currently loaded.

By default, a set of plugins are included with `tap`, providing
the most common utilities that tests will need to use.

The methods and properties are documented in detail [in the
generated
TypeDocs](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html)
for the `Test` class.

See [TAP Basics](./basics.md) for basic usage information.

Node-tap is optimized for use in a TypeScript-aware editor, such
as neovim or VSCode. Intellisense is often much better
documentation than this website, because it is more likely to be
accurate and you don't have to come here to read it.

## Class `TAP`

The [root test
object](https://tapjs.github.io/tapjs/classes/_tapjs_core.tap.TAP.html)
is the default export of the `tap` package. It is a
[plugged-in](./plugins/index.md) singleton `Test` subclass, with all of
the same assertions, methods, and so on, plus a few additional
features.

These process registrations are triggered when the root test
pipes to `stdout`, or by calling
[`t.register()`](https://tapjs.github.io/tapjs/classes/_tapjs_core.tap.TAP.html#register)
explicitly. If it never does that, then none of these hooks are
applied.

### Special Timeout Handling

If the root test times out, often it's because of something left
running that prevented the program from gracefully exiting.

To help debug this situation, active handles and requests are
listed. These are often very low-level Node.js objects, so it can
be challenging to get any useful clues about what caused the
timeout, but tap does its best to help you there.

After printing information about active handles and requests, the
process is terminated with a `SIGALRM` signal if possible, so
that the timeout exit is clear to a parent runner process.

### Automatically pipe to `stdout`

By default, the `TAP` object will pipe to standard output as soon
as it generates some test results. Pretty much anything you do
with it will cause it to start piping to `stdout` immediately.

If the `stdout` stream emits an `EPIPE` error, then it is
ignored.

If the root test is piped to something other than `stdout`, then
it will not automatically pipe to `stdout` once it starts
generating test results.

### Handling Timeout Signals

When a test subprocess or worker thread times out, the parent
test runner sends a an IPC message indicating that it's timed
out. If that fails to cause the test to exit, then the process is
killed more forcibly. The root `TAP` object is what listens to
this signal.

### Exit on `bailout`

If the root tap receives a bailout, then it exits the process in
error.

### Automatically `t.end()` on Process Exit

The root `TAP` object will automatically terminate when the
process exits.

If a
[`t.teardown`](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#teardown)
method is attached, then the root `TAP` test will terminate once
it is in an "idle" state. This behavior allows you to have
`t.teardown()` function terminate a server or other long-running
job that would otherwise keep the process running indefinitely.

If any tests are still in process, they will be emitted as test
failures.

### Set Process Exit Code on Failure

If the test fails, then it sets the `process.exitCode` to 1.

## Class `Test`

The
[`Test`](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html)
class is the main interface for using node-tap. It is a
[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
around all of the plugin results and a
[`TestBase`](https://tapjs.github.io/tapjs/classes/_tapjs_core.test_base.TestBase.html)
base object.

### Properties

- [bail](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#bail)
- [childId](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#childId)
- [context](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#context)
- [debug](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#debug)
- [diagnostic](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#diagnostic)
- [ended](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#ended)
- [indent](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#indent)
- [omitVersion](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#omitVersion)
- [options](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#options)
- [parent](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#parent)
- [preserveWhitespace](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#preserveWhitespace)
- [readyToProcess](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#readyToProcess)
- [silent](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#silent)
- [strict](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#strict)
- [timedOut](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#timedOut)
- [writeSnapshot](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#writeSnapshot)

### Accessors

- [cleanSnapshot](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#cleanSnapshot)
- [compareOptions](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#compareOptions)
- [formatSnapshot](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#formatSnapshot)
- [fullname](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#fullname)
- [idle](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#idle)
- [snapshotFile](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#snapshotFile)
- [workerData](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#workerData)

### Methods

- [comment](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#comment)
- [error](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#error)
- [pragma](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#pragma)

### Assertion Methods

- [doesNotThrow](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#doesNotThrow)
- [emits](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#emits)
- [equal](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#equal)
- [fail](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#fail)
- [has](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#has)
- [hasOwnProp](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#hasOwnProp)
- [hasOwnProps](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#hasOwnProps)
- [hasOwnPropsOnly](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#hasOwnPropsOnly)
- [hasProp](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#hasProp)
- [hasProps](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#hasProps)
- [hasStrict](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#hasStrict)
- [match](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#match)
- [matchOnly](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#matchOnly)
- [matchOnlyStrict](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#matchOnlyStrict)
- [matchSnapshot](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#matchSnapshot)
- [matchStrict](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#matchStrict)
- [not](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#not)
- [notHas](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#notHas)
- [notHasStrict](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#notHasStrict)
- [notMatch](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#notMatch)
- [notMatchOnly](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#notMatchOnly)
- [notMatchOnlyStrict](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#notMatchOnlyStrict)
- [notMatchStrict](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#notMatchStrict)
- [notOk](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#notOk)
- [notSame](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#notSame)
- [ok](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#ok)
- [pass](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#pass)
- [rejects](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#rejects)
- [resolveMatch](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#resolveMatch)
- [resolveMatchSnapshot](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#resolveMatchSnapshot)
- [resolves](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#resolves)
- [same](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#same)
- [strictNotSame](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#strictNotSame)
- [strictSame](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#strictSame)
- [throws](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#throws)
- [type](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#type)

### Plugin Management

- [plugins](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#plugins)
- [applyPlugin](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#applyPlugin)
- [pluginLoaded](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#pluginLoaded)

### Spies, Mocks, and Fixtures

- [testdirName](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#testdirName)
- [capture](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#capture)
- [captureFn](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#captureFn)
- [createMock](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#createMock)
- [fixture](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#fixture)
- [intercept](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#intercept)
- [mock](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#mock)
- [mockImport](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#mockImport)
- [mockRequire](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#mockRequire)
- [testdir](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#testdir)
- [unmock](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#unmock)

### Subtest Methods

- [only](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#only)
- [skip](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#skip)
- [spawn](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#spawn)
- [stdin](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#stdin)
- [stdinOnly](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#stdinOnly)
- [sub](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#sub)
- [test](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#test)
- [todo](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#todo)
- [worker](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#worker)

### Test Lifecycle Management

- [jobs](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#jobs)
- [after](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#after)
- [afterEach](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#afterEach)
- [bailout](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#bailout)
- [before](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#before)
- [beforeEach](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#beforeEach)
- [end](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#end)
- [plan](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#plan)
- [setTimeout](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#setTimeout)
- [teardown](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#teardown)

### Test Reflection

- [assertTotals](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#assertTotals)
- [bailedOut](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#bailedOut)
- [count](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#count)
- [counts](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#counts)
- [errors](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#errors)
- [hrtime](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#hrtime)
- [isMainThread](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#isMainThread)
- [lists](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#lists)
- [name](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#name)
- [results](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#results)
- [t](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#t)
- [time](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#time)
- [occupied](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#occupied)
- [printedOutput](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#printedOutput)
- [printedResult](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#printedResult)
- [started](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#started)
- [passing](https://tapjs.github.io/tapjs/classes/_tapjs_test.index.Test.html#passing)
