if (process.argv[2] === 'child') {
  console.log('this is the child bit')
} else if (process.argv[2] !== 'silent') {
  var t = require('../')
  var Test = t.Test

  t.test('buffered', { buffered: true }, runTest)
  t.test('unbuffered', { buffered: false }, runTest)
}

function runTest (t) {
  t.plan(2)
  var tt = new Test()

  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.on('complete', function (res) {
    t.has(res, {
      ok: true,
      count: 2,
      pass: 2,
      fail: 0,
      bailout: false,
      todo: 0,
      skip: 2,
      plan: {
        start: 1,
        end: 2,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: []
    })
    t.ok(tt.passing(), 'should still be passing')
  })

  var opt = { buffered: t.buffered }
  tt.spawn(process.execPath, [__filename, 'child'], opt)
  tt.spawn(process.execPath, [__filename, 'silent'], opt)
  tt.end()
}
