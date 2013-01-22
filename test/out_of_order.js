var test = require('tape');
var parser = require('../');

var lines = [
    'TAP version 13',
    '# beep',
    'ok 1 should be equal',
    'ok 3 should be equivalent',
    '# boop',
    'ok 2 should be equal',
    'ok 4 (unnamed assert)',
    '',
    '1..4',
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
    number: 3,
    name: 'should be equivalent'
});
expected.asserts.push({
    ok: true,
    number: 2,
    name: 'should be equal'
});
expected.asserts.push({ 
    ok: true,
    number: 4,
    name: '(unnamed assert)'
});

test('simple ok', function (t) {
    t.plan(6 + 1 + 4 + 5);
    
    var p = parser(onresults);
    
    var asserts = [];
    p.on('assert', function (assert) {
        asserts.push(assert);
        t.same(assert, expected.asserts.shift());
    });
    
    p.on('plan', function (plan) {
        t.same(plan, { start: 1, end: 4 });
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
        t.same(results.asserts, asserts);
        
        t.equal(results.errors[0].message, 'assert out of order');
        t.equal(results.errors[0].line, 4);
        
        t.equal(results.errors[1].message, 'assert out of order');
        t.equal(results.errors[1].line, 6);
    }
});
