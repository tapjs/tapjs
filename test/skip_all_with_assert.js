var test = require('tape');
var parser = require('../');

var lines = [
    '# TAP emitted by Test::More 0.98',
    '1..0 # SKIP Insufficient skipping',
    'ok 1 - should not be asserting'
];

var expected = { asserts: [], comments: [] };

expected.comments = [ 'TAP emitted by Test::More 0.98' ];

expected.asserts.push({
    ok: true,
    number: 1,
    name: 'should not be asserting'
});

test('simple ok', function (t) {
    t.plan(1 + 1 + 1 + 7 * 2);
    
    var p = parser(onresults);
    p.on('results', onresults);
    
    var asserts = [];
    p.on('assert', function (assert) {
        asserts.push(assert);
        t.same(assert, expected.asserts.shift(), 'next assert');
    });
    
    p.on('plan', function (plan) {
        t.same(plan, { start: 1, end: 0,
                       skip_all: true,
                       skip_reason: 'Insufficient skipping' },
               'got plan');
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
        t.equal(results.errors.length, 1, 'onresults: errors');
        t.equal(results.errors[0].message, 'assertion found after skip_all plan');
        t.equal(results.errors[0].line, lines.length + 1);
        t.same(asserts.length, 1, 'onresults: asserts.length');
        t.same(results.asserts, asserts, 'onresults: asserts');
        t.equal(expected.comments.length, 0, 'onresults: leftover comments');
    }
});
