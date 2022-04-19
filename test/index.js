const http = require('http')
const fetch = require('minipass-fetch')
const nock = require('nock')
const patchTap = require('../')
const t = patchTap(require('tap'))
const Test = t.Test

t.test('patch adds nock feature', async (t) => {
  t.ok(t.nock, 'nock property is set')
  t.ok(t.nock.disableNetConnect, 'disableNetConnect is present')
  t.ok(t.nock.enableNetConnect, 'enableNetConnect is present')
  t.ok(t.nock.snapshot, 'snapshot is present')
})

t.test('disableNetConnect/enableNetConnect work', async (t) => {
  // create a server
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ hello: 'world' }))
  })
  // start it listening
  server.listen({ host: '127.0.0.1', port: 65100 })

  // disable network connections
  t.nock.disableNetConnect()

  t.teardown(() => {
    // stop the server
    server.close()
    // re-enable network connections. note: we use the real nock.enableNetConnect()
    // here just in case ours is broken
    nock.enableNetConnect()
  })

  await t.rejects(fetch('http://127.0.0.1:65100'), {
    message: /Disallowed net connect/,
    code: 'ENETUNREACH',
  }, 'network connection was not allowed')

  // allow network connections again
  t.nock.enableNetConnect()

  // prove the network works again
  const res = await fetch('http://127.0.0.1:65100')
  t.equal(res.status, 200, 'got a good response')
  const body = await res.json()
  t.same(body, { hello: 'world' }, 'got the response body')
})

t.test('cleans scopes in teardown', async (t) => {
  // add an interceptor from the parent
  t.nock('http://a.b')
    .get('/')
    .times(3)
    .reply(200, { helloFrom: 'parent' })

  // parentScope usage #1
  await t.resolves(async () => {
    const res = await fetch('http://a.b')
    t.equal(res.status, 200, 'parent scope works')
    const body = await res.json()
    t.same(body, { helloFrom: 'parent' })
  }, 'parent scope works')

  await t.test('child test with completely different scope', async (t) => {
    t.nock('http://x.y')
      .persist() // we want the scope to persist so this child test doesn't fail the parent
      .get('/')
      .reply(200, { hello: 'world' })

    const res = await fetch('http://x.y')
    t.equal(res.status, 200, 'nock scope works')
    const body = await res.json()
    t.same(body, { hello: 'world' })
  })

  // nock throws ENETUNREACH if no scopes are active, if any are it throws ERR_NOCK_NO_MATCH
  await t.rejects(fetch('http://x.y'), {
    code: 'ERR_NOCK_NO_MATCH',
  }, 'child test scope was cleared')

  // parent scope usage #2
  await t.resolves(async () => {
    const res = await fetch('http://a.b')
    t.equal(res.status, 200, 'but parent nock is still active')
    const body = await res.json()
    t.same(body, { helloFrom: 'parent' })
  }, 'parent scope is still working')

  await t.test('child test with an overlapping scope', async (t) => {
    t.nock('http://a.b')
      .persist() // we want a persistent scope
      .get('/')
      .reply(200, { helloFrom: 'child' })

    // parentScope usage #3
    await t.resolves(async () => {
      const res = await fetch('http://a.b')
      t.equal(res.status, 200, 'we got a response')
      const body = await res.json()
      t.same(body, { helloFrom: 'parent' })
    }, 'parent scope takes priority')

    // now use the child's scope
    await t.resolves(async () => {
      const res = await fetch('http://a.b')
      t.equal(res.status, 200, 'we got a response')
      const body = await res.json()
      t.same(body, { helloFrom: 'child' })
    }, 'child scope takes over when parent is done')
  })

  await t.rejects(fetch('http://a.b'), {
    code: 'ERR_NOCK_NO_MATCH',
  }, 'and all scopes are gone')
})

t.test('fails tests when mocks are unsatisfied', async (t) => {
  const fakeTest = new Test()

  fakeTest.test('child test', async (t) => {
    t.nock('http://x.y')
      .get('/')
      .reply(200, { hello: 'world' })

    t.nock('http://y.z')
      .get('/')
      .reply(200, { hello: 'world' })
  })

  let output = ''
  fakeTest.on('data', (data) => {
    output += data
  })

  const fakeTestP = new Promise((resolve, reject) => {
    fakeTest.on('bailout', reject)
    fakeTest.on('end', resolve)
  })

  setImmediate(() => fakeTest.end())
  await fakeTestP

  t.notOk(fakeTest.results.ok, 'fakeTest failed')
  t.match(output, /Mocks not yet satisfied/)
})
