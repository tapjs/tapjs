if (process.argv[2] === 'child')
  return

var t = require('../..')
t.spawn(process.execPath, [__filename, 'child'])
