var Test = require('../..').Test
var t = new Test()
t.pipe(process.stdout)
t.test(function (t){t.end()})
t.end()
