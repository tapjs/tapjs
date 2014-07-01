# tap-parser

parse the [test anything protocol](http://testanything.org/)

[![build status](https://secure.travis-ci.org/substack/tap-parser.png)](http://travis-ci.org/substack/tap-parser)

[![browser support](http://ci.testling.com/substack/tap-parser.png)](http://ci.testling.com/substack/tap-parser)

# example

``` js
var parser = require('tap-parser');
var p = parser(function (results) {
    console.dir(results);
});

process.stdin.pipe(p);
```

given some [TAP](http://testanything.org/)-formatted input:

```
$ node test.js
TAP version 13
# beep
ok 1 should be equal
ok 2 should be equivalent
# boop
ok 3 should be equal
ok 4 (unnamed assert)

1..4
# tests 4
# pass  4

# ok
```

parse the output:

```
$ node test.js | node parse.js
{ ok: true,
  asserts: 
   [ { ok: true, number: 1, name: 'should be equal' },
     { ok: true, number: 2, name: 'should be equivalent' },
     { ok: true, number: 3, name: 'should be equal' },
     { ok: true, number: 4, name: '(unnamed assert)' } ],
  pass: 
   [ { ok: true, number: 1, name: 'should be equal' },
     { ok: true, number: 2, name: 'should be equivalent' },
     { ok: true, number: 3, name: 'should be equal' },
     { ok: true, number: 4, name: '(unnamed assert)' } ],
  fail: [],
  todo: [],
  errors: [],
  plan: { start: 1, end: 4 } }
```

# usage

This package also has a `tap-parser` command.

```
usage: tap-parser OPTIONS

  Parse TAP from INPUT. If there are any failures, exits with
  a non-zero status code.

OPTIONS are:

  -i, --input    Read from INPUT. Default: stdin.
  -o, --output   Write to OUTPUT. Default: stdout.
  -r, --results  Print results as json. Otherwise pass INPUT
                 through to OUTPUT.

  -h, --help     Show this help message.
  -v, --version  Print the current version of tap-parser.

```

# methods

``` js
var parser = require('tap-parser')
```

## var p = parser(cb)

Return a writable stream `p` that emits parse events.

If `cb` is given it will listen for the `'results'` event.

# events

## p.on('results', function (results) {})

`results.errors` is an array containing any parse errors, such as out of order
assertions or missing plans.

## p.on('assert', function (assert) {})

Every `/^(not )?ok\b/` line will emit an `'assert'` event.

Every `assert` object has these keys:

* `assert.ok` - true if the assertion succeeded, false if failed
* `assert.number` - the assertion number
* `assert.name` - optional short description of the assertion

and may also have

* `assert.todo` - optional description of why the assertion failure is
  not a problem.

When `results` are returned, each `assert` object will have been
appended to the list `asserts` and one of (`pass`, `fail`, `todo`).

## p.on('comment', function (comment) {})

Every `/^# (.+)/` line will emit the string contents of `comment`.

## p.on('plan', function (plan) {})

Every `/^\d+\.\.\d+/` line emits a `'plan'` event for the test numbers
`plan.start` through `plan.end`, inclusive.

If the test is [completely skipped](http://podwiki.hexten.net/TAP/TAP.html?page=TAP#Skippingeverything) the result will look like

```
{ ok: true,
  asserts: [],
  pass: [],
  fail: [],
  errors: [],
  plan: 
   { start: 1,
     end: 0,
     skip_all: true,
     skip_reason: 'This code has no seat belt' } }
```

## p.on('version', function (version) {})

A `/^TAP version (\d+)/` line emits a `'version'` event with a version number or
string.

## p.on('extra', function (extra) {})

All other lines will trigger an `'extra'` event with the line text.

# install

With [npm](https://npmjs.org) do:

```
npm install tap-parser
```

You can use [browserify](http://browserify.org) to `require('tap-parser')` in
the browser.

# license

MIT
