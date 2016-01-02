if (process.argv[2] === 'child') {
  console.log('this is the child bit')
} else if (process.argv[2] !== 'silent') {
  var t = require('../')
  var Test = t.Test
  var tt = new Test()

  var out = ''
  tt.on('data', function (c) {
    out += c
  })
  tt.on('complete', function (res) {
    t.has(res, {
      plan: { start: 1, end: 2 },
      count: 2,
      pass: 2,
      ok: true,
      skip: 2
    })
    t.has(tt._skips, [
      {
        ok: true,
        message: /\.[\\\/]test[\\\/]only-non-tap-output.js child/,
        extra: {
          at: {},
          results: {},
          command: process.execPath,
          arguments: {},
          skip: 'No tests found'
        }
      },
      {
        ok: true,
        message: /\.[\\\/]test[\\\/]only-non-tap-output.js silent/,
        extra: {
          at: {},
          results: {},
          command: process.execPath,
          arguments: {},
          skip: 'No tests found'
        }
      }
    ])
    t.ok(tt.passing(), 'should still be passing')
  })

  tt.spawn(process.execPath, [__filename, 'child'])
  tt.spawn(process.execPath, [__filename, 'silent'])
  tt.end()
}
