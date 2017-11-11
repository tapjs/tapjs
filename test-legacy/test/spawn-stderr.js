var tap = require('../..')

if (!process.argv[2]) {
  tap.spawn(process.execPath, [ __filename, 'child' ])
} else {
  console.error('stderr')
  console.log('stdout')
  tap.pass('this is ok')
}
