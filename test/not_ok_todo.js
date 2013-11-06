var test = require('tape');
var parser = require('../');

var lines = [
    '# TAP emitted by Test::More 0.98',
    'ok 1 - should be equal',
    'not ok 2 - should be equivalent # TODO but we will fix it later',
    '# boop',
    'ok 3 - should be equal',
    'ok 4 - (unnamed assert)',
    '',
    '1..4',
    '# Looks like you failed 1 test of 4.',
];

var expected = { asserts: [], comments: [] };

expected.comments = [
    'TAP emitted by Test::More 0.98',
    'boop',
    'Looks like you failed 1 test of 4.'
];

expected.asserts.push({
    ok: true,
    number: 1,
    name: 'should be equal'
});
expected.asserts.push({
    ok: false,
    number: 2,
    name: 'should be equivalent',
    todo: 'but we will fix it later',
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

test('not ok, but todo', function (t) {
    t.plan(7 * 2 + 1 + 3 + 4);
    
    var p = parser(onresults);
    p.on('results', onresults);
    
    var asserts = [];
    p.on('assert', function (assert) {
        asserts.push(assert);
        t.same(assert, expected.asserts.shift(), 'next assert');
    });
    
    p.on('plan', function (plan) {
        t.same(plan, { start: 1, end: 4 }, 'plan');
    });
    
    p.on('comment', function (c) {
        t.equal(c, expected.comments.shift(), 'next comment');
    });
    
    for (var i = 0; i < lines.length; i++) {
        p.write(lines[i] + '\n');
    }
    p.end();
    
    function onresults (results) {
        t.equal(results.ok, true, 'onresults: ok');
        t.equal(results.asserts.length, 4);
        t.equal(results.pass.length, 3, 'onresults: pass.length');
        t.equal(results.fail.length, 0, 'onresults: fail.length');
        t.equal(results.todo.length, 1, 'onresults: todo.length');
        t.same(results.errors, []);
        t.same(results.asserts, asserts);
    }
});
