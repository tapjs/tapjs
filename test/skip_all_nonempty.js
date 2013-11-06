var test = require('tape');
var parser = require('../');

var lines = [
    '# TAP emitted by Test::More 0.98',
    '1..1 # SKIP Insufficient positron flux',
    'ok 1 found some spare flux in bottom drawer',
];

var expected = { asserts: [], comments: [] };

expected.comments = [ 'TAP emitted by Test::More 0.98' ];

expected.asserts.push({
    ok: true,
    number: 1,
    name: 'found some spare flux in bottom drawer'
});

test('simple OK + skip_reason', function (t) {
    t.plan(1 + 1 + 1 + 5 * 2);
    
    var p = parser(onresults);
    p.on('results', onresults);
    
    var asserts = [];
    p.on('assert', function (assert) {
        asserts.push(assert);
        t.same(assert, expected.asserts.shift(), 'next assert');
    });
    
    p.on('plan', function (plan) {
        t.same(plan, { start: 1, end: 1,
                       skip_all: false,
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
        t.same(results.ok, false, 'onresults: fail');
        t.same(results.errors,
               [ { message: "plan is not empty, but has a SKIP reason",
                   skip_reason: "Insufficient positron flux",
                   line: 2 }],
               'onresults: errors');
        t.same(asserts.length, 1, 'onresults: asserts.length');
        t.same(results.asserts, asserts, 'onresults: asserts');
        t.equal(expected.comments.length, 0, 'onresults: leftover comments');
    }
});
