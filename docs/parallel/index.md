---
layout: layout
title: Parallel Tests
---

# Parallel Tests

Node-tap includes the ability to run buffered child tests in parallel.
There are two ways that this can be done: either via the command line
interface, or within a single test program.

In both cases, you set a number of `jobs` that you want to allow it to
run in parallel, and then any buffered tests are run in a pool which
will execute that many test functions in parallel.  (The default
`jobs` value is 1, which means that nothing is parallel by default.)

## Parallel tests from the CLI

This is the simplest way to run parallel tests.  Just add `--jobs=<n>`
to your test command (or `-j<n>` if you prefer shorthands).

You'll note that if you do this, it seems like the output from each
test file happens "all at once", when the test completes.  That's
because parallel tests are always buffered, so the command-line
harness doesn't parse their output until they're fully complete.
(Since many of them may be running at once, it would be very confusing
otherwise.)

### Enabling/Disabling Parallelism in the test runner

If you set the `--jobs` option, then tests will be run in parallel by
default.

However, you may want to have _some_ tests run in parallel, and make
others run serially.

To prevent any tests in a given folder from running in parallel, add a
file to that directory named `tap-parallel-not-ok`.  This will prevent
tests from being run in parallel in that folder or any sub-folders.

To re-enable parallel tests in a given folder and its subfolders,
create a file named `tap-parallel-ok`.  This is only required if
parallel tests had been disabled in a parent directory.

For example, if you had this folder structure:

```
test
├── parallel/
│   ├── all-my-ports-are-private-and-unique.js
│   ├── isolated.js
│   ├── no-external-deps.js
│   └── tap-parallel-ok
├── bar.js
├── foo.js
└── tap-parallel-not-ok
```

then running `tap -j4 test/` would cause it to run `bar.js` and
`foo.js` serially, and the contents of the `test/parallel/` folder
would be run in parallel.

As test files are updated to be parallel-friendly (ie, not listening
on the same ports as any other tests, not depending on external
filesystem stuff, and so on), then they can be moved into the
`parallel` subfolder.

## Parallel tests from the API

To run child tests in parallel, set `t.jobs = <some number>` in your
test program.  This can be set either on the root tap object, or on
any child test.

If `t.jobs` is set to a number greater than 1, then tests will be run
in `buffered` mode by default.  To force a test to be serialized, set
`{ buffered: false }` in its options.  You may also set
`TAP_BUFFER=0` in the environment to make tests non-buffered by
default.

For example, imagine that you had some slow function that makes a
network request or processes a file or something, and you want to call
this function three times in your test program.

```javascript
var t = require('tap')

t.test(function one (t) {
  someSlowFunction(function () {
    t.pass('one worked')
    t.end()
  })
})

t.test(function two (t) {
  someSlowFunction(function () {
    t.pass('two worked')
    t.end()
  })
})

t.test(function three (t) {
  someSlowFunction(function () {
    t.pass('three worked')
    t.end()
  })
})
```

That produces this output:

```tap
TAP version 13
# Subtest: one
    ok 1 - one worked
    1..1
ok 1 - one # time=283.987ms

# Subtest: two
    ok 1 - two worked
    1..1
ok 2 - two # time=352.492ms

# Subtest: three
    ok 1 - three worked
    1..1
ok 3 - three # time=313.015ms

1..3
# time=957.096ms
```

If we update our test function to add `t.jobs = 3`, then the output
looks like this instead:

```tap
TAP version 13
ok 1 - one # time=215.87ms {
    ok 1 - one worked
    1..1
}

ok 2 - two # time=97.694ms {
    ok 1 - two worked
    1..1
}

ok 3 - three # time=374.099ms {
    ok 1 - three worked
    1..1
}

1..3
# time=382.468ms
```

Each test still takes a few hundred ms, but the overall time is way
down.  Also, they're using the more streamlined `buffered` subtest
style, so that they can run in parallel.

## Caveats about Parallel Tests

Parallelism is not a magic sauce that makes everything go fast.

It's a good fit when your test spends a lot of time waiting in sleep
mode (for example, waiting for I/O to complete), or if you have lots
of CPUs on your computer.  But if your tests are on-CPU most of the
time, then there's often little benefit to running more of them than
you have CPUs available.

Parallel testing also means that your tests have to be written in an
independent way.  They can't depend on being run in a given order,
which means it's a bad idea to have them share pretty much _any_ state
at all.

Experiment with where in your test suite it makes sense to throw a
little bit of parallelism.
