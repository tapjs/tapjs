var test = require('tape');

test('beep', function (t) {
    t.plan(2);
    t.equal(2+2,4);
    t.same({a:1,b:2},{a:1,b:1+1});
});

test('boop', function (t) {
    t.plan(2);
    t.equal(1+1,2);
    
    setTimeout(function () {
        t.ok(true);
    }, 1000);
});
