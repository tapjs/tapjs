// make sure domains don't obscure things.
var tap = require('../..')
var EE = require('events').EventEmitter
tap.jobs = 4

function thisPasses (t) {
  var ee = new EE()

  t.throws(function () {
    ee.emit('error', new Error('one'))
  }, new Error('one'))

  try {
    ee.emit('error', new Error('two'))
    t.fail('should throw')
  } catch (er) {
    t.match(er, { message: 'two' }, 'threw expected error')
  }

  if (t !== tap)
    t.end()
}

tap.test(thisPasses)
thisPasses(tap)

function thisFailsNicely (t) {
  return t.test(t.name + '-sub', function (t) {
    // throw a Math.random timeout around this so that we verify
    // that the correct error gets to the correct test no matter
    // what order they are actually run in.
    setTimeout(function () {
      var ee = new EE()
      ee.emit('error', { message: 'er ' + t.name, at: null, stack: '' })
      t.fail('should throw')
      t.end()
    }, Math.random() * 100)
  })
}

tap.test('one', { buffered: true }, thisFailsNicely)
tap.test('two', { buffered: true }, thisFailsNicely)
tap.test('tre', { buffered: true }, thisFailsNicely)
tap.test('for', { buffered: true }, thisFailsNicely)
tap.test('fiv', { buffered: true }, thisFailsNicely)
tap.test('six', { buffered: true }, thisFailsNicely)
tap.test('svn', { buffered: true }, thisFailsNicely)
tap.test('eit', { buffered: true }, thisFailsNicely)
