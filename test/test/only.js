var t = require('../..')
var run = require.resolve('../../bin/run.js')
var node = process.execPath

if (process.argv[2] === 'child') {
  t.test('normal', function (t) {
    t.pass('this is fine')
    t.end()
  })

  t.only('only', function (t) {
    t.pass('only do this')
    t.end()
  })

  t.test('only', { only: true }, function (t) {
    t.pass('only do this')
    t.end()
  })
} else {
  var env = { env: { TAP_ONLY: '1' } }
  t.spawn(node, [__filename, 'child'])
  t.spawn(node, [__filename, 'child'], env)
  t.spawn(node, [run, __filename, '--test-arg=child'], env)
  t.spawn(node, [run, __filename, '--test-arg=child', '--only'])
  t.spawn(node, [run, __filename, '--test-arg=child', '-O'])
}
