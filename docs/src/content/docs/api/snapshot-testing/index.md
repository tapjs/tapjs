---
title: Testing with Snapshots
section: 4.5
---

# Testing with Snapshots

As of version 11, tap supports saving and then comparing against
"snapshot" strings.  This is a powerful technique for testing programs
that generate output, but it comes with some caveats.

## Basics of Output Testing

Consider a test program like this:

```javascript
module.exports = function (tag, contents) {
  return '<' + tag + '>' + contents + '</' + tag + '>'
}
```

We might have a test like this:

```javascript
const t = require('tap')
const tagger = require('./index.js')
t.equal(tagger('tagName', 'content'), '<tagName>content</tagName>')
```

This is good for a couple of reasons:

1. It's clear reading our test what the expected output is.
2. We're unlikely to create a test without thinking carefully about
   what _exactly_ it's testing.

However, managing strings like this can become extremely tedious,
especially in cases where the output is long, or there are many cases
to test.  If we make an _intentional_ change to the output, then we
need to manually update a large number of large strings, scattered
throughout the test suite.  The inevitable result is that we either
make the tests less comprehensive, or even worse, treat some as "known
failures".

## Testing Output with Snapshots

We could also write our test file like this:

```javascript
const t = require('tap')
const tagger = require('./index.js')
t.matchSnapshot(tagger('tagName', 'content'), 'output')
```

But wait, where is the expected output?

To create the snapshot file, we run this command:

```
$ tap test.js --snapshot
 PASS  test.js 1 OK 344ms


  🌈 SUMMARY RESULTS 🌈


Suites:   1 passed, 1 of 1 completed
Asserts:  1 passed, of 1
Time:     422ms
```

By setting `TAP_SNAPSHOT` in the environment, we tell tap to write the
output to a special file, and treat the assertion as automatically
passing.

The generated file is designed to be human-readable, but you should
not edit it directly.

```
$ cat tap-snapshots/test.js-TAP.test.js
/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test.js TAP > output 1`] = `
<tagName>content</tagName>
```

The filename is derived from the name of the test file.  The headings
of each string output are based on the names of your tests and
assertions, and given a numeric index to handle collisions.

## Snapshotting non-Strings

If the argument passed to `t.matchSnapshot()` isn't a string, then it
will be converted to a string using [tcompare.format](http://npm.im/tcompare).
This is typically pretty easy for humans to understand, but of course if you
prefer to use `JSON.stringify` or something else, you can do so easily
enough.

## Caveats

### Track Changes

**Important: you should check the snapshot file into source control!**

When there are changes to it, inspect the diff and make sure that
nothing unexpected happened to change your output.

If you don't check this file into source control, then a significant
part of your test is not checked in.  This prevents people from
collaborating on your project.

If you accept changes to it without care, then you can obscure
unintended changes.  (Though, even if this happens, `git bisect` can
track down the source of the change quite quickly, so it's not the end
of the world if there are occasional mistakes.)

### Strip Variables from Output with `t.cleanSnapshot`

If your output includes data that is known to change from one run to
the next, then these changes should be stripped before matching
against a snapshot.

This includes process IDs, time stamps, and many other system details.

Consider this function:

```javascript
function msgTime (msg) {
  return msg + ' time=' + Date.now()
}
```

Since the output will obviously be slightly different every time the
function is tested, we need to strip out the time value.

The best way to do this is with a `t.cleanSnapshot` function.  This function
takes the formatted snapshot as a string, and returns a string to be saved or
compared against.  The default cleaner is an identity function that returns its
input without any changes.

```javascript
const t = require('tap')

// This must be assigned *before* running tests
// It is passed down to child tests when they are created
t.cleanSnapshot = s => {
  return s.replace(/ time=[0-9]+$/g, ' time={time}')
}

const output = msgTime('this is a test')
t.matchSnapshot(output, 'add timestamp to message')
```

When run with `--snapshot`, it generates this snapshot file:

```javascript
/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`msgtime.test.js TAP > add timestamp to message 1`] = `
this is a test time={time}
`
```

## Custom Formatting

Sometimes just modifying the string is not enough, or a special data type
should be stringified differently.

By default, tap uses [`tcompare.format`](http://npm.im/tcompare) to convert all
non-string values into strings for saving and comparing.

To override this and provide your own behavior, set a function to
`t.formatSnapshot`.  Like `t.cleanSnapshot`, child tests will copy their parent
test's value at their time of creation.

```javascript
const t = require('tap')
const yaml = require('tap-yaml')
t.formatSnapshot = object => yaml.stringify(object)

// now all my snapshot files will be in yaml!
t.matchSnapshot({ foo: ['bar', 'baz'] })
```

This will produce the following snapshot file:

```javascript
/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`yaml.test.js TAP > must match snapshot 1`] = `
foo:
  - bar
  - baz

`
```
