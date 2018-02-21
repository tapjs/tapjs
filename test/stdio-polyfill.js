'use strict'

const t = require('..')

const polyfill = require('../lib/stdio-polyfill')

function testProcessPolyfill (t, streamName) {
  const methodName = streamName === 'stdout' ? 'log' : 'error'
  const stream = process[streamName]
  delete process[streamName]
  polyfill()
  t.ok(process[streamName], `${streamName} gets polyfilled`)
  const method = console[methodName]
  let result
  console[methodName] = _result => { result = _result }
  process[streamName].write('foo')
  t.equal(result, 'foo')
  console[methodName] = method
  process[streamName] = stream
  t.end()
}

t.test('when process.stdout is missing', t => testProcessPolyfill(t, 'stdout'))
t.test('when process.stderr is missing', t => testProcessPolyfill(t, 'stderr'))
