// make sure domains don't obscure things.
var tap = require('..')
var EE = require('events').EventEmitter

function testFunction (t) {
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
  t.end()
}

tap.test('child', testFunction)
testFunction(tap)
