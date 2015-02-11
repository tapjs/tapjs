var tap = require('../');

tap.test('does not count as failure', { skip: true }, function(t) {
  t.end();
})
