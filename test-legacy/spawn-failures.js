var cp = require('child_process')
var spawn = cp.spawn
cp.spawn = hijackedSpawn

var throwNow = false
var throwLater = false
function hijackedSpawn (cmd, args, options) {
  if (throwNow) {
    throw throwNow
  }
  var child = spawn.call(cp, cmd, args, options)
  if (throwLater) {
    setTimeout(function () {
      child.emit('error', throwLater)
    })
  }
  return child
}

var t = require('../')
var Test = t.Test
var ok = require.resolve('./test/ok.js')

t.test('handle throws from spawn()', function (t) {
  throwNow = new Error('now is fine')

  var output = ''
  var tt = new Test()
  tt.on('data', function (c) {
    output += c
  })
  t.doesNotThrow(function spawn_throw_now () {
    tt.spawn(process.execPath, [ok])
  })
  tt.end()
  throwNow = false

  t.comment(output)
  t.notOk(tt.passing(), 'a failed spawn should fail the test')
  t.end()
})

t.test('handle child process error event', function (t) {
  throwLater = new Error('later is fine')

  var output = ''
  var tt = new Test()
  tt.on('data', function (c) {
    output += c
  })
  t.doesNotThrow(function spawn_throw_later () {
    tt.spawn(process.execPath, [ok])
  })
  tt.end()

  setTimeout(function () {
    throwLater = false
    t.comment(output)
    t.notOk(tt.passing(), 'a failed spawn should fail the test')
    t.end()
  }, 100)
})
