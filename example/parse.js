var parser = require('../');
var p = parser(function (results) {
    console.dir(results);
});
process.stdin.pipe(p);
