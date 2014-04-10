var test = require('tape');
var parser = require('../');

var lines = [
    '1..3',
    'ok we are good',
    'not ok 2 we are bad',
    'ok we are zesty!'
];

var expected = { asserts: [], comments: [] };

expected.asserts.push({
    ok: true,
    number: 1,
    name: 'we are good'
});
expected.asserts.push({
    ok: false,
    number: 2,
    name: 'we are bad'
});
expected.asserts.push({
    ok: true,
    number: 3,
    name: 'we are zesty!'
});

test('no numbers', function (t) {
	t.plan(5 * 2 + 3);
    
    var p = parser(onresults);
    p.on('results', onresults);
    
    var asserts = [];
    p.on('assert', function (assert) {
        asserts.push(assert);
        t.same(assert, expected.asserts.shift(), 'next assert');
    });
    
    for (var i = 0; i < lines.length; i++) {
        p.write(lines[i] + '\n');
    }
    p.end();
    
    function onresults (results) {
        t.equal(results.ok, false, 'onresults: ok');
        t.same(asserts.length, 3, 'onresults: asserts.length');
        t.same(results.asserts, asserts, 'onresults: asserts');
        t.same(results.errors, []);
        t.equal(expected.comments.length, 0, 'onresults: leftover comments');
    }
});