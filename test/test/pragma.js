var t = require('../..')

if (process.argv[2] !== 'child') {
  t.spawn(process.execPath, [__filename, 'child'])
} else {
  console.log('this is not tap but it is ok')
  t.pass('an ok test')
  t.pragma({ strict: true })
  console.log('this is not tap and it is not ok')
  t.pragma({ strict: false })
  console.log('more ok non-tap')
  t.pass('ending now')
  t.end()
}
