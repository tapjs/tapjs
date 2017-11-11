var cp = require('child_process')
var spawn = cp.spawn
cp.spawn = hijackedSpawn

var throwNow = false
var throwLater = false
function hijackedSpawn (cmd, args, options) {
  if (throwNow) {
    throw throwNow
  }
  var child = spawn.apply(this, arguments)
  if (throwLater) {
    setTimeout(function () {
      child.emit('error', throwLater)
    })
  }
  return child
}

var t = require('../..')
var ok = require.resolve('./ok.js')
var node = process.execPath

t.test('spawn that throws', function (t) {
  throwNow = new Error('now is fine')
  t.tearDown(function () {
    throwNow = false
  })
  t.spawn(node, [ok])
  t.end()
})

t.test('spawn that throws', function (t) {
  throwLater = new Error('later is fine')
  t.tearDown(function () {
    throwLater = false
  })
  t.spawn(node, [ok])
  t.end()
})
