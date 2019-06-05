---
layout: layout
title: Filtering Tests&#58; Only
---

# Filtering Tests with Only Option

Child tests can be filtered by setting the `only` flag in the options
object, or by using the `t.only` method.

Because tests are run top-to-bottom synchronously, there's no way to
know at the start of a test file if a `t.only()` call is coming.  To
activate this filtering, use the `--only` flag to the tap
[command-line interface](/cli/), or set `TAP_ONLY=1` in the
environment, or set the `t.runOnly = true` in a test file.

Setting the `TAP_ONLY=1` environment variable or using `tap --only`
will restrict the root tap object from running tests that aren't
flagged as "only".  To filter deeper in a test suite, set
`t.runOnly = true` at the appropriate level.

Note: this is for filtering test functions within a test file.  If you
want to run only one _file_, just pass the appropriate argument to the
`tap` executable.  That is, instead of `tap test/*.js`, do `tap
test/foo.js` to just run a single file.

Also, this only filters _subtests_.  Individual assertions will always
be emitted if they are encountered.

## Example

Consider this test file:

```js
const t = require('tap')

t.only('only run this test', function (t) {
  // all tests in here will be run
  t.pass('this is fine')

  t.test('first child', function (t) {
    t.pass('got here')
    t.end()
  })

  t.test('second child', function (t) {
    t.pass('got here, too')
    t.end()
  })

  t.end()
})

t.test('a second top level test', function (t) {
  t.pass('second top level test assertion')
  t.end()
})
```

If run with `node mytest.js`, it'll produce this output:

```tap
TAP version 13
# "only run this test" has `only` set but all tests run
# Subtest: only run this test
    ok 1 - this is fine
    # Subtest: first child
        ok 1 - got here
        1..1
    ok 2 - first child # time=2.352ms

    # Subtest: second child
        ok 1 - got here, too
        1..1
    ok 3 - second child # time=0.48ms

    1..3
ok 1 - only run this test # time=11.58ms

# Subtest: a second top level test
    ok 1 - second top level test assertion
    1..1
ok 2 - a second top level test # time=0.337ms

1..2
# time=26.044ms
```

If run with `TAP_ONLY=1 node mytest.js`, then we see this instead:

```tap
TAP version 13
# Subtest: only run this test
    ok 1 - this is fine
    # Subtest: first child
        ok 1 - got here
        1..1
    ok 2 - first child # time=3.062ms

    # Subtest: second child
        ok 1 - got here, too
        1..1
    ok 3 - second child # time=0.577ms

    1..3
ok 1 - only run this test # time=15.972ms

ok 2 - a second top level test # SKIP filter: only
1..2
# skip: 1
# time=24.457ms
```

Note that the second test was skipped.

To only show the first child in the first test block, we could do
this:

```js
const t = require('../tap')

t.only('only run this test', function (t) {
  // only run tests here with t.only()
  t.runOnly = true
  t.pass('this is fine')

  t.only('first child', function (t) {
    t.pass('got here')
    t.end()
  })

  t.test('second child', function (t) {
    t.pass('got here, too')
    t.end()
  })

  t.end()
})

t.test('a second top level test', function (t) {
  t.pass('second top level test assertion')
  t.end()
})
```

Now when we run the test, we see this:

```tap
TAP version 13
# Subtest: only run this test
    ok 1 - this is fine
    # Subtest: first child
        ok 1 - got here
        1..1
    ok 2 - first child # time=1.609ms

    ok 3 - second child # SKIP filter: only
    1..3
    # skip: 1
ok 1 - only run this test # time=8.585ms

ok 2 - a second top level test # SKIP filter: only
1..2
# skip: 1
# time=14.176ms
```

Note that the second child test was skipped along with the second top
level test.

To get the same results with the tap command line, you can do this:

```
$ tap --only mytest.js
mytest.js ............................................. 2/4
  Skipped: 2

total ................................................. 2/4

  2 passing (277.134ms)
  2 pending
```

Using the `spec` reporter will show more detail about the tests being
skipped and run:

```
$ tap --only mytest.js -Rspec

mytest.js
  only run this test
    ✓ this is fine
    first child
      ✓ got here
    - second child

  - a second top level test

  2 passing (231.681ms)
  2 pending
```
