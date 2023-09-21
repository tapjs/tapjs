# @tapjs/node-serialize

A default tap plugin that serializes the output of root `TAP`
test for consumption by the `node --test` runner.

That is, this is for running tests that you write like:

```js
import t from 'tap'
t.pass('this is fine')
// etc
```

and then run with `node --test`.

## USAGE

This plugin is installed with tap by default. If you had
previously removed it, you can `tap plugin add
@tapjs/node-serialize` to bring it back.

When enabled, this plugin is activated when the
`NODE_TEST_CONTEXT` environment variable is set to `child-v8`.
When so activated, the root `TAP` test outputs a stream of
`node:test` message objects (ie, the data emitted by Node's
[`TestStream`
class](https://nodejs.org/api/test.html#class-testsstream)) to
standard output, instead of piping TAP data to standard output.

It has no effect on other tests within the suite.

To disable this behavior, run `tap plugin rm
@tapjs/node-serialize`.

## Caveat about Timing

Node-tap and node's built-in `node:test` are not quite identical
in their approach.

Specifically, they have very different approaches to asynchronous
testing. When using `node:test`, all tests are placed in a queue,
and de-queued and started by level. It is considered an error for
a test to perform any asynchronous actions outside of the scope
of its parent suite method.

In tap, when `t.jobs` is set to some number greater than `1`,
tests may run in any order, and their subtests may _also_ run in
any order, at the same time as its siblings. While a subtest will
never start before its parent, it may start _after_ its parent's
sibling tests, making the apparent nesting get interleaved in a
strictly event-stream based tracking.

To handle this, this serializer creates a tree of subtests, and
only emits the relevant `node:test` event messages all at once,
in the correct order that `node --test` expects.

The downside of this is that it may appear that tests hang and
then emit all of their data at once. If true in-progress
reporting is desired, then you're probably better off using tap's
built-in test runner.
