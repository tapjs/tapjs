var test = require('tape');
var through = require('through');
var parser = require('../')();

test.stream.pipe(parser).pipe(through(function (res) {
    console.dir(res);
}));

test(function (t) {
    t.plan(2);
    t.equal(2+2,4);
    t.same({a:1,b:2},{a:1,b:1+1});
});
