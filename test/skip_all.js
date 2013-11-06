var test = require('tape');
var parser = require('../');

var lines = [
    '# TAP emitted by Test::More 0.98',
    '1..0 # SKIP Insufficient positron flux',
];

var expected = { asserts: [], comments: [] };

expected.comments = [ 'TAP emitted by Test::More 0.98' ];


test('simple ok', function (t) {
    t.plan(0 + 1 + 1 + 5 * 2);
    
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
                       skip_reason: 'Insufficient positron flux' },
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
        t.ok(results.ok, 'onresults: ok');
        t.same(results.errors, [], 'onresults: errors');
        t.same(asserts.length, 0, 'onresults: asserts.length');
        t.same(results.asserts, asserts, 'onresults: asserts');
        t.equal(expected.comments.length, 0, 'onresults: leftover comments');
    }
});
