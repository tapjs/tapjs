var parser = require('../');
process.stdin.pipe(parser(function (results) {
    console.dir(results);
}))
process.stdin.resume();
