var t = require('../..')

var str = new Buffer(new Array(100).join('not ok'))
var xyz = new Buffer(new Array(101).join('not ok'))
t.same(str, xyz)
