var tap = require('../..');

tap.test('t1', function(t) {
  t.test('t11', function (t) {
    process.on('some event that never happens', function() {
      t.pass('ok');
    });
  })
  t.end()
});

tap.equal(1, 1, '1 === 1')
tap.ok('this is ok')
tap.fail('failsome', { hoo: 'hah' })

tap.spawn('node', [__filename], {}, 'spawny', { rar: 'grr' })

tap.test(function(t) {
  process.nextTick(function() {
    t.end();
  });
});

tap.test('', function(t) {
  process.nextTick(function() {
    t.end();
  });
});

tap.test('t2', function(t) {
  process.nextTick(function() {
    t.end();
  });
});
