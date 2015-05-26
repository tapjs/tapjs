var t = require('../..')
t.pass('this is ok')
setInterval(function () {
  t.pass('still going...')
}, 1000)
