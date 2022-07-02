if (process.argv[2] !== 'child') {
  var t = require('../..')
  t.spawn(process.execPath, [__filename, 'child'])
}
