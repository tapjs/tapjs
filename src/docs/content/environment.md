---
title: Test Environment
eleventyNavigation:
  key: Environment
  parent: Docs
  order: 11
---
For the most part, tap tests are run in a [normal node
environment](/#test-files-are-%22normal%22-programs). If you just
write your tests in JavaScript, and don't rely on any
functionality provided by loaders, then you can always run `node
test.js` and have it Just Work, albeit without the pretty
[reporting](./reporter.md).

If you do it that way, then there are no globals or environment
variables added; your test just is what it is. This is a very
useful thing to be able to do, because being able to isolate the
source of a problem is a powerful tool when debugging, and the
whole point of tests is to find and fix problems.

## Loaders

If you write your tests in [TypeScript](./plugins/typescript.md),
or use any [import mocking](./plugins/mock.md), or want to
collect [test coverage](./coverage.md), then a loaders are
required to provide that functionality.

When executed by the [runner](./cli.11ty.js), tap will add the
appropriate loaders for you.  To run them manually, you can
specify them with the `--loader` Node.js argument.

* TypeScript support is provided by `--loader ts-node/esm`, which
  is added by the [`@tapjs/typescript`
  plugin](./plugins/typescript.md). (The optional
  [`@tapjs/esbuild-kit` plugin](./plugins/esbuild-kit.md) can be
  used in place of `@tapjs/typescript`, if you prefer that
  one.)
* Import mocking is provided by `--loader @tapjs/mock/loader`,
  which is added by the [`@tapjs/mock`
  plugin](./plugins/mock.md).
* Code coverage is provided by `--loader
  @tapjs/processinfo/loader`, which is built into tap core.

Other plugins can provide whatever loaders they like, and the tap
CLI will add them automatically.

## Environment Variables Used By Tap

Tap uses and sets these environment variables.

### `TAP=1`

This tells tap that it's running in "raw TAP" mode, so colors and
reporters are disabled.

Since the CLI doesn't run test processes using the CLI, it'd be
pretty rare that a reporter _would_ load, but this is a safety
precaution.

You can also set `TAP=1` in the environment as a convenient way
to force raw uncolored TAP output for debugging.

### `TAP_CHILD_ID=<number>`

Every child process that the tap CLI spawns will be given a
unique `TAP_CHILD_ID`. This is also visible on the root `TAP`
object's `t.options.childId` property.  If the environment
variable is not set, then `t.options.childId` will be `0`.

This is provides a way for test processes to have a unique
numeric identifier which can be used for various purposes. The
most common is to be able to listen on a port number without
colliding with any other parallel tests.

For example:

```js
import { createServer } from 'node:http'
import t from 'tap'

// listen on a unique port in each child test
const PORT = 10000 + t.childId

t.before(async () => {
  const server = createServer((request, response) => {
    t.equal(request.url, '/expected-url')
    response.end('ok')
  })
  t.teardown(() => server.close())
  return new Promise(res => server.listen(PORT, res))
})

// now tests can make fetches to http://localhost:${PORT}
```

The `t.options.childId` value is also set in any child tests, and
can be useful for similar purposes. However, keep in mind that
the `childId` is only unique within the context of a given
parent, so those are not guaranteed to be unique across the
entire test run.

### `TAP_JOB_ID=<number>`

Similar to `TAP_CHILD_ID`, this shows up as `t.options.jobId` in
the root `TAP` test object.

This number is not unique across the entire test run, but it _is_
unique at any given moment, providing virtual "swim lanes" for
all of the asynchronous tests running.

For example, if you have 16 test suites, and they are running
with `--jobs=4`, then each test will have a `t.options.jobId` on
the root `TAP` object that is a number between 0 and 3.

This can be useful in a similar manner as `TAP_CHILD_ID`, where
you wish to reuse resources once a test has completed, but only
create a new one when it's no longer needed.

For example, if we created 4 database replicas for our tests, and
we run with `--jobs=4`, then we could distribute the load across
them by using this number.

### Config Values

All [configuration](./cli.11ty.js#configuration) values are set
in the environment if they are set, transformed to uppercase and
with `-` turned into `_`.

For example, running `tap --debug ./test/foo.ts` will run with
`TAP_DEBUG=1` in the environment.

Likewise, if the environment variable is set in the process, then
the configuration value will effectively be set as well. So,
running `TAP_DEBUG=1 tap ./test/foo.ts` will run as if the
`--debug` flag was set.

### `TAP_CWD=<path>`

This is the "project root" from tap's point of view. It's where
it looks for the config file (either `.taprc` or `package.json`),
and where it puts the `.tap` folder containing process and
coverage tracking information.

### `_TAPJS_PROCESSINFO_*`

These are environment variables used by
[`@tapjs/processinfo`](https://tapjs.github.io/processinfo/) for
its various process and coverage tracking tasks.

### `_TAP_REPL=1`

This indicates that the test is being run in the tap REPL.

### `TAP_HELP_MARKDOWN=1`

This makes `tap -h` output markdown instead of plain text. It's
used in the generation of the [cli documentation](./cli.11ty.js),
and isn't probably something you need to care about.
