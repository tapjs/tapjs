---
layout: layout
title: Filtering Tests&#58; Grep
---

# Filtering Tests with Grep Options

Child tests can be filtered using regular expressions with the `grep`
option.

Note: this is for filtering test functions within a test file.  If you
want to filter which _files_ get run, just pass the appropriate
argument to the `tap` executable.  That is, instead of `tap
test/*.js`, do `tap test/foo.js` to just run a single file.

## Command Line Usage

On the [command-line](/cli/), specify one or more patterns with
`--grep=<pattern>` (or `-g<pattern>` for short).

You can provide multiple patterns by providing multiple `--grep`
options.  The first pattern will filter tests at the top level of your
test files.  The next pattern will filter child tests of that test,
and so on.

Patterns can be either a simple string, or a JavaScript RegExp literal
like `/[asdf]/i`.  Use the RegExp literal format if you need to use
regular expression flags such as `i` for case insensitive matching.

To invert the matches (that is, run all tests that _don't_ match), use
the `--invert` or `-i` flag.

For example, consider this test file:

```javascript
// mytest.js
const t = require('tap')

t.test('first', async t => {
  t.test('apple', async t => {
    t.pass('apples are tasty')
  })
  t.test('banana', async t => {
    t.pass('bananas are yellow')
  })
})

t.test('second', async t => {
  t.test('this is fine', async t => {
    t.pass('i think')
  })
  t.test('i am ok with how things are proceeding', async t => {
    t.pass('therefor I am')
  })
})
```

To only run the first test branch, you could do this:

```
tap --grep=first mytest.js
```

Using the default classic reporter, we see this output:

```
$ tap --grep=first mytest.js
mytest.js ............................................. 2/3
  Skipped: 1

total ................................................. 2/3

  2 passing (230.078ms)
  1 pending
```

Looking at the underlying TAP output by specifying the `tap` reporter,
here's what's being generated:

```
tap --grep=first mytest.js -Rtap
```

```tap
TAP version 13
# Subtest: mytest.js
    # Subtest: first
        # Subtest: apple
            ok 1 - apples are tasty
            1..1
        ok 1 - apple # time=8.892ms

        # Subtest: banana
            ok 1 - bananas are yellow
            1..1
        ok 2 - banana # time=1.297ms

        1..2
    ok 1 - first # time=18.544ms

    ok 2 - second # SKIP filter: /first/
    1..2
    # skip: 1
    # time=28.242ms
ok 1 - mytest.js # time=300.676ms

1..1
# time=320.615ms
```

We can get more granular by specifying multiple greps.  Let's say that
we want to run all second-level tests with a `p` or `P` in the name.
Here's how to do that:

```
#      +-- first grep, allow anything matching .
#      |
#      |   +-- second grep, filter matching /p/, case-insensitive
#      |   |
#      v   v
$ tap -g. -g/p/i mytest.js -Rtap
```

Result:

```tap
TAP version 13
# Subtest: mytest.js
    # Subtest: first
        # Subtest: apple
            ok 1 - apples are tasty
            1..1
        ok 1 - apple # time=7.449ms

        ok 2 - banana # SKIP filter: /p/
        1..2
        # skip: 1
    ok 1 - first # time=16.035ms

    # Subtest: second
        ok 1 - this is fine # SKIP filter: /p/
        # Subtest: i am ok with how things are proceeding
            ok 1 - therefor I am
            1..1
        ok 2 - i am ok with how things are proceeding # time=0.982ms

        1..2
        # skip: 1
    ok 2 - second # time=4.339ms

    1..2
    # time=28.875ms
ok 1 - mytest.js # time=255.454ms

1..1
# time=267.758ms
```

## API Programmatic Usage

While it's rare, you can also specify greps programmatically within
tests, either in child tests or at the top level, by providing an
array of regular expressions.

Just like on the command line, the first pattern is matched against
the first level of child tests, and so on through subsequent levels.
When all the patterns are exhausted, the entire test is run.

The array of regular expressions can be specified on the `t` object,
or in the `options` object passed to the `t.test()` method.

For example:

```js
// mytest.js
const t = require('tap')

// set on a test object directly, after creation
t.grep = [/./, /p/i]

t.test('first', async t => {
  t.test('apple', async t => {
    t.pass('apples are tasty')
  })
  t.test('banana', async t => {
    t.pass('bananas are yellow')
  })
})

// new greps override what's inherited from the parent
t.test('second', { grep: [ /fi[ln]e/ ] }, async t => {
  t.test('this is fine', async t => {
    t.pass('i think')
  })
  t.test('i am ok with how things are proceeding', async t => {
    t.pass('therefor I am')
  })
})
```

Output:

```tap
TAP version 13
# Subtest: first
    # Subtest: apple
        ok 1 - apples are tasty
        1..1
    ok 1 - apple # time=5.166ms

    ok 2 - banana # SKIP filter: /p/i
    1..2
    # skip: 1
ok 1 - first # time=11.805ms

# Subtest: second
    # Subtest: this is fine
        ok 1 - i think
        1..1
    ok 1 - this is fine # time=0.86ms

    ok 2 - i am ok with how things are proceeding # SKIP filter: /fi[ln]e/
    1..2
    # skip: 1
ok 2 - second # time=3.277ms

1..2
# time=21.632ms
```

## Setting in the Environment

To set greps on the root level test object, you can set the `TAP_GREP`
and `TAP_GREP_INVERT` environment variables.

`TAP_GREP` is a `\n`-delimited list of patterns.

`TAP_GREP_INVERT` can be set to `'1'` to invert the meaning of grep
matches.

For example:

```
$ TAP_GREP=$'first\napple' node mytest.js
```

Output:

```tap
TAP version 13
# Subtest: first
    # Subtest: apple
        ok 1 - apples are tasty
        1..1
    ok 1 - apple # time=4.35ms

    ok 2 - banana # SKIP filter: /apple/
    1..2
    # skip: 1
ok 1 - first # time=10.378ms

ok 2 - second # SKIP filter: /first/
1..2
# skip: 1
# time=15.818ms
```

To invert the matches:

```
$ TAP_GREP_INVERT=1 TAP_GREP=$'first\nfine' node mytest.js | pbcopy
```

```tap
TAP version 13
ok 1 - first # SKIP filter out: /first/
# Subtest: second
    ok 1 - this is fine # SKIP filter out: /fine/
    # Subtest: i am ok with how things are proceeding
        ok 1 - therefor I am
        1..1
    ok 2 - i am ok with how things are proceeding # time=3.117ms

    1..2
    # skip: 1
ok 2 - second # time=9.441ms

1..2
# skip: 1
# time=21.761ms
```
