var test = require('tape');
var parser = require('../');

var lines = [
    'TAP version 13',
    '# beep',
    'ok 8 should be equal',
    'ok 9 should be equivalent',
    '# boop',
    'ok 10 should be equal',
    'ok 11 (unnamed assert)',
    '',
    '8..11',
    '# tests 4',
    '# pass  4',
    '',
    '# ok'
];

var expected = { asserts: [], comments: [] };

expected.comments = [ 'beep', 'boop', 'tests 4', 'pass  4', 'ok' ];

expected.asserts.push({
    ok: true,
    number: 8,
    name: 'should be equal'
});
expected.asserts.push({
    ok: true,
    number: 9,
    name: 'should be equivalent'
});
expected.asserts.push({
    ok: true,
    number: 10,
    name: 'should be equal'
});
expected.asserts.push({ 
    ok: true,
    number: 11,
    name: '(unnamed assert)'
});

test('non-1 test offset', function (t) {
    t.plan(4 * 2 + 1 + 4 + 5);
    
    var p = parser(onresults);
    p.on('results', onresults);
    
    var asserts = [];
    p.on('assert', function (assert) {
        asserts.push(assert);
        t.same(assert, expected.asserts.shift());
    });
    
    p.on('plan', function (plan) {
        t.same(plan, { start: 8, end: 11 });
    });
    
    p.on('comment', function (c) {
        t.equal(c, expected.comments.shift());
    });
    
    for (var i = 0; i < lines.length; i++) {
        p.write(lines[i] + '\n');
    }
    p.end();
    
    function onresults (results) {
        t.ok(results.ok);
        t.same(results.errors, []);
        t.same(asserts.length, 4);
        t.same(results.asserts, asserts);
    }
});
