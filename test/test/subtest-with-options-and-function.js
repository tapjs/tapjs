var Test = require('../..').Test
var t = new Test()
t.pipe(process.stdout)
t.test({ skip: false, some: 'diags', diagnostic: true }, function (t){t.end()})
t.end()
