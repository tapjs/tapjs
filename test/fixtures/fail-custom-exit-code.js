var tap = require('../../')

process.on('exit', function() {
  process.exit(2)
})

tap.test(function(t) {
  t.equal(1, 2, 'trigger test failure')
  t.end()
})
