# `@tapjs/nock`

A [tap](https://node-tap.org) extension that integrates
[nock](https://github.com/nock/nock).

### Features

- `t.nock()`
  - automatically calls `nock.disableNetConnect()`
  - arguments are passed directly to `nock`, and the result from
    `nock` returned
  - asserts all nock scopes created within a test have been
    consumed
  - cleans only the nock scopes created within the current test,
    keeping nocks from parent tests
  - if no parent tests have nocks, calls
    `nock.enableNetConnect()` in teardown
- `t.nock.snapshot()`
  - when [snapshots are
    enabled](https://node-tap.org/plugins/snapshot/), sends real
    requests and records responses to a fixture
  - when snapshots are not enabled, loads fixture data and sets
    up `nock` scopes for you

### Usage

Load the `@tapjs/nock` plugin in your tap config.

For example, in `.taprc`:

```yaml
plugins:
  - @tapjs/nock
```

Or in `package.json`:

```json
{
  "tap": {
    "plugins": ["@tapjs/nock"]
  }
}
```

Then use it in your tests like so:

```ts
import t from 'tap'

t.test('sends a request', async t => {
  t.nock('https://registry.npmjs.org')
    .get('/')
    .reply(200, { hello: 'world' })

  const res = await fetch('https://registry.npmjs.org')
  t.equal(res.status, 200)
  const body = await res.json()
  t.same(body, { hello: 'world' })
})

// when snapshots are enabled, this test will send a real request
// and record the response
// when they are disabled, the recorded response will be
// automatically loaded into a nock scope, and the test will
// receive that response
// This requires that the @tapjs/snapshot plugin is enabled.
t.test('snapshots a request', async t => {
  t.nock.snapshot()

  const res = await fetch('https://registry.npmjs.org')
  t.equal(res.status, 200)
  const body = await res.json()
  t.match(body, { db_name: 'registry' })
})
```

You _may_ use it directly, though that is a bit more clunky,
because it won't be automatically applied to child tests, but it
can be good if you only need `nock` in a small number of tests.

```ts
import { plugin as tapNock } from '@tapjs/nock'
import t from 'tap'

t.test('sends a request', async t => {
  const tn = tapNock(t)
  tn.nock('https://registry.npmjs.org')
    .get('/')
    .reply(200, { hello: 'world' })

  const res = await fetch('https://registry.npmjs.org')
  t.equal(res.status, 200)
  const body = await res.json()
  t.same(body, { hello: 'world' })
})

// when snapshots are enabled, this test will send a real request
// and record the response
// when they are disabled, the recorded response will be
// automatically loaded into a nock scope, and the test will
// receive that response
// This requires that the @tapjs/snapshot plugin is enabled.
t.test('snapshots a request', async t => {
  const tn = tapNock(t)
  tn.nock.snapshot()

  const res = await fetch('https://registry.npmjs.org')
  t.equal(res.status, 200)
  const body = await res.json()
  t.match(body, { db_name: 'registry' })
})
```

## Credits

This plugin was originally developed by
[nlf](https://github.com/nlf) as the standalone extension
[@npmcli/tap-nock](https://github.com/npm/tap-nock), and the use
case was a major inspiration for tap's plugin eventual
architecture.
