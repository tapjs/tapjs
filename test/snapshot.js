'use strict'

const fs = require('fs')
const http = require('http')
const fetch = require('minipass-fetch')
const path = require('path')
const rimraf = require('rimraf').sync
const patchTap = require('../')
const t = patchTap(require('tap'))
const Test = t.Test

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify({ hello: req.url === '/' ? 'world' : req.url.slice(1) }))
})

const flushSnapshots = () => {
  rimraf(path.resolve(__dirname, '../tap-snapshots'))
}

t.afterEach(flushSnapshots)
t.beforeEach(flushSnapshots)

t.test('throws when snapshot file does not exist', async (t) => {
  const noDataTest = new Test({ name: 'snapshots disabled, no data', snapshot: false })

  t.throws(() => noDataTest.nock.snapshot(), {
    message: /Missing snapshot data for test/,
    code: 'EMISSINGSNAPSHOT',
    at: {
      file: __filename,
    },
  })
})

t.test('throws when snapshot file exists, but does not contain snapshots for test', async (t) => {
  server.listen({ host: '127.0.0.1', port: 65200 })
  t.teardown(() => server.close())

  const writeTest = new Test({ name: 'write snapshot', snapshot: true })
  writeTest.ondone = () => writeTest.emitSubTeardown(writeTest)
  writeTest.nock.snapshot()

  await writeTest.resolves(async () => {
    const res = await fetch('http://127.0.0.1:65200')
    writeTest.equal(res.status, 200)
    const body = await res.json()
    writeTest.same(body, { hello: 'world' })
  }, 'real request worked')

  writeTest.end()
  t.ok(writeTest.results.ok, 'writeTest passed')

  const snapshotFile = writeTest.snapshotFile.replace(/\.js\.test\.cjs$/, '.nock.json')
  t.ok(fs.existsSync(snapshotFile), 'snapshot file was written')
  const snapshotData = JSON.parse(fs.readFileSync(snapshotFile))
  t.equal(Object.keys(snapshotData).length, 1, 'snapshot has one entry')
  const snapshotKey = Object.keys(snapshotData)[0]
  t.equal(snapshotData[snapshotKey].length, 1, 'snapshot entry has one scope')

  // the 'name' here must be different than the test above
  const readTest = new Test({ name: 'read snapshot', snapshot: false })
  t.throws(() => readTest.nock.snapshot(), {
    message: /Missing snapshot data for test/,
    code: 'EMISSINGSNAPSHOT',
    at: {
      file: __filename,
    },
  })
})

t.test('snapshots work', async (t) => {
  // start a server
  server.listen({ host: '127.0.0.1', port: 65200 })
  t.teardown(() => server.close())

  // snapshot its response in a test
  const writeTest = new Test({ name: 'snapshot works', snapshot: true })
  writeTest.ondone = () => writeTest.emitSubTeardown(writeTest)
  writeTest.nock.snapshot()

  await writeTest.resolves(async () => {
    const res = await fetch('http://127.0.0.1:65200')
    writeTest.equal(res.status, 200, 'got a 200')
    const body = await res.json()
    writeTest.same(body, { hello: 'world' }, 'got response body')
  }, 'real request worked')

  writeTest.end()
  t.ok(writeTest.results.ok, 'writeTest passed')

  const snapshotFile = writeTest.snapshotFile.replace(/\.js\.test\.cjs$/, '.nock.json')
  t.ok(fs.existsSync(snapshotFile), 'snapshot file was written')

  // now stop the server
  server.close()

  // and see if we can load the snapshot for this test
  const readTest = new Test({ name: 'snapshot works', snapshot: false })
  t.equal(readTest.snapshotFile, writeTest.snapshotFile, 'uses the same file')
  readTest.ondone = () => readTest.emitSubTeardown(readTest)
  readTest.nock.snapshot()

  await readTest.resolves(async () => {
    const afterRes = await fetch('http://127.0.0.1:65200')
    t.equal(afterRes.status, 200, 'got a 200')
    const afterBody = await afterRes.json()
    t.same(afterBody, { hello: 'world' }, 'got response body')
  }, 'nock request worked')

  readTest.end()
  t.ok(readTest.results.ok, 'readTest passed')
})

t.test('snapshots in interleaved tests are stored correctly', async (t) => {
  server.listen({ host: '127.0.0.1', port: 65200 })
  t.teardown(() => server.close())

  let snapshotFile

  const runTests = async (snapshot) => {
    const parentTest = new Test({ name: 'parent test', snapshot })
    snapshotFile = parentTest.snapshotFile.replace(/\.js\.test\.cjs$/, '.nock.json')
    parentTest.ondone = () => parentTest.emitSubTeardown(parentTest)
    parentTest.nock.snapshot()

    await parentTest.resolves(async () => {
      const res = await fetch('http://127.0.0.1:65200/parent1')
      parentTest.equal(res.status, 200, 'got a 200')
      const body = await res.json()
      parentTest.same(body, { hello: 'parent1' }, 'got response body')
    }, 'first parent request worked')

    await parentTest.test('child test', async (childTest) => {
      childTest.nock.snapshot()

      await childTest.resolves(async () => {
        const res = await fetch('http://127.0.0.1:65200/child1')
        childTest.equal(res.status, 200, 'got a 200')
        const body = await res.json()
        childTest.same(body, { hello: 'child1' }, 'got response body')
      }, 'first child request worked')

      await childTest.test('grandchild test', async (grandchildTest) => {
        grandchildTest.nock.snapshot()

        await grandchildTest.resolves(async () => {
          const res = await fetch('http://127.0.0.1:65200/grandchild1')
          grandchildTest.equal(res.status, 200, 'got a 200')
          const body = await res.json()
          grandchildTest.same(body, { hello: 'grandchild1' }, 'got response body')
        }, 'first grandchild request worked')
      })

      await childTest.resolves(async () => {
        const res = await fetch('http://127.0.0.1:65200/child2')
        childTest.equal(res.status, 200, 'got a 200')
        const body = await res.json()
        childTest.same(body, { hello: 'child2' }, 'got response body')
      }, 'second child request worked')
    })

    await parentTest.resolves(async () => {
      const res = await fetch('http://127.0.0.1:65200/parent2')
      parentTest.equal(res.status, 200, 'got a 200')
      const body = await res.json()
      parentTest.same(body, { hello: 'parent2' }, 'got response body')
    }, 'second parent request worked')

    await parentTest.test('second child test', async (childTest) => {
      childTest.nock.snapshot()

      await childTest.resolves(async () => {
        const res = await fetch('http://127.0.0.1:65200/child2.1')
        childTest.equal(res.status, 200)
        const body = await res.json()
        childTest.same(body, { hello: 'child2.1' })
      }, 'second child first request worked')
    })

    await parentTest.resolves(async () => {
      const res = await fetch('http://127.0.0.1:65200/parent3')
      parentTest.equal(res.status, 200, 'got a 200')
      const body = await res.json()
      parentTest.same(body, { hello: 'parent3' }, 'got response body')
    }, 'third parent request worked')

    parentTest.end()
    t.ok(parentTest.results.ok, 'parentTest passed')
  }

  await t.resolves(runTests(true), 'snapshot writing tests pass')

  t.ok(fs.existsSync(snapshotFile), 'snapshot file was written')
  server.close()

  await t.resolves(runTests(false), 'snapshot reading tests pass')
})
