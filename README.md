## `@npmcli/tap-nock`

A [tap](https://node-tap.org) extension that integrates [nock](https://github.com/nock/nock).

### Features

* `t.nock()`
  * automatically calls `nock.disableNetConnect()`
  * arguments are passed directly to `nock`, and the result from `nock` returned
  * asserts all nock scopes created within a test have been consumed
  * cleans only the nock scopes created within the current test, keeping nocks from parent tests
  * if no parent tests have nocks, calls `nock.enableNetConnect()` in teardown
* `t.nock.snapshot()`
  * when [snapshots are enabled](https://node-tap.org/docs/api/snapshot-testing/#testing-output-with-snapshots), sends real requests and records responses to a fixture
  * when snapshots are not enabled, loads fixture data and sets up `nock` scopes for you

### Usage

```js
const fetch = require('minipass-fetch')
const tapNock = require('@npmcli/tap-nock')
const t = tapNock(require('tap'))

t.test('sends a request', async (t) => {
  t.nock('https://registry.npmjs.org')
    .get('/')
    .reply(200, { hello: 'world' })

  const res = await fetch('https://registry.npmjs.org')
  t.equal(res.status, 200)
  const body = await res.json()
  t.same(body, { hello: 'world' })
})

// when snapshots are enabled, this test will send a real request and record the response
// when they are disabled, the recorded response will be automatically loaded into a nock
// scope, and the test will receive that response
t.test('snapshots a request', async (t) => {
  t.nock.snapshot()

  const res = await fetch('https://registry.npmjs.org')
  t.equal(res.status, 200)
  const body = await res.json()
  t.match(body, { db_name: 'registry' })
})
```
