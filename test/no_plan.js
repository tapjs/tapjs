var test = require('tape');
var parser = require('../');

var lines = [
    'TAP version 13',
    '# beep',
    'ok 1 should be equal',
    'ok 2 should be equivalent',
    '# boop',
    'ok 3 should be equal',
    'ok 4 (unnamed assert)'
];

var expected = { asserts: [], comments: [] };

expected.comments = [ 'beep', 'boop' ];

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

test('no plan', function (t) {
    t.plan(6 * 2 + 4 + 2);
    
    var p = parser(onresults);
    p.on('results', onresults);
    
    var asserts = [];
    p.on('assert', function (assert) {
        asserts.push(assert);
        t.same(assert, expected.asserts.shift(), 'next assert');
    });
    
    p.on('plan', function (plan) {
        t.fail('no plan provided');
    });
    
    p.on('comment', function (c) {
        t.equal(c, expected.comments.shift(), 'next comment');
    });
    
    for (var i = 0; i < lines.length; i++) {
        p.write(lines[i] + '\n');
    }
    p.end();
    
    function onresults (results) {
        t.equal(results.ok, false, 'onresults: ok');
        t.equal(results.errors[0].message, 'no plan found');
        t.equal(results.errors[0].line, lines.length + 1);
        t.same(asserts.length, 4, 'onresults: asserts.length');
        t.same(results.asserts, asserts, 'onresults: asserts');
        t.equal(expected.comments.length, 0, 'onresults: leftover comments');
    }
});
