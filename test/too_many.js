var test = require('tape');
var parser = require('../');

var lines = [
    'TAP version 13',
    '# beep',
    'ok 1 should be equal',
    'ok 2 should be equivalent',
    '# boop',
    'ok 3 should be equal',
    'ok 4 (unnamed assert)',
    '',
    '1..3',
    '# tests 4',
    '# pass  4',
    '',
    '# ok'
];

var expected = { asserts: [], comments: [] };

expected.comments = [ 'beep', 'boop', 'tests 4', 'pass  4', 'ok' ];

expected.asserts.push({
    ok: true,
    number: 1,
    name: 'should be equal'
});
expected.asserts.push({
    ok: true,
    number: 2,
    name: 'should be equivalent'
});
expected.asserts.push({
    ok: true,
    number: 3,
    name: 'should be equal'
});
expected.asserts.push({ 
    ok: true,
    number: 4,
    name: '(unnamed assert)'
});

test('too many asserts', function (t) {
    t.plan(4 + 1 + 4 + 5);
    
    var p = parser(onresults);
    
    var asserts = [];
    p.on('assert', function (assert) {
        asserts.push(assert);
        t.same(assert, expected.asserts.shift());
    });
    
    p.on('plan', function (plan) {
        t.same(plan, { start: 1, end: 3 });
    });
    
    p.on('comment', function (c) {
        t.equal(c, expected.comments.shift());
    });
    
    for (var i = 0; i < lines.length; i++) {
        p.write(lines[i] + '\n');
    }
    p.end();
    
    function onresults (results) {
        t.equal(results.ok, false);
        t.equal(
            results.errors[0].message,
            'too many asserts'
        );
        t.same(asserts.length, 4);
        t.same(results.asserts, asserts);
    }
});
