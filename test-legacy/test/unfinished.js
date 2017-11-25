var tap = require('../..')

tap.test('t1', function (t) {
  t.test('t11', function (t) {
    t.plan(1)
    process.on('some event that never happens', function () {
      t.pass('ok')
    })
  })

  // Nothing beyond this point will actually be processed
  // Everything will just get stuffed into the queue, because
  // the child test above is unfinished.  When the process
  // ends, because there's no pending IO, it'll emit a bunch of
  // failures indicating that they were abandoned in the queue.

  t.ok(true, 'this would be ok if it ever happened')
  t.end()
})

tap.equal(1, 1, '1 === 1')
tap.ok('this is ok')
tap.fail('failsome', { hoo: 'hah' })

tap.spawn('cat', [__filename], 'spawny', { rar: 'grr' })
tap.spawn('node', ['--version'], { rar: 'grr' })

tap.test(function (t) {
  process.nextTick(t.end)
})

tap.test('', function (t) {
  process.nextTick(t.end)
})

tap.test('t2', function (t) {
  process.nextTick(t.end)
})
