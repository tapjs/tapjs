var t = require('../..')

if (process.argv[2] !== 'child') {
  // +child does nothing, just verifying that it gets delayed
  t.pragma({ child: true })
  t.spawn(process.execPath, [__filename, 'child'])
  t.pragma({ child: false })
  t.spawn(process.execPath, [__filename, 'child', 'bailout'])
  // this one should be skipped entirely
  t.pragma({ bailedout: true })
} else if (process.argv[3] !== 'bailout') {
  console.log('this is not tap but it is ok')
  t.pass('an ok test')
  t.pragma({ strict: true })
  console.log('this is not tap and it is not ok')
  t.pragma({ strict: false })
  console.log('more ok non-tap')
  t.pass('ending now')
  t.end()
} else {
  t.removeAllListeners('bailout')
  t.bailout('no pragmas come after bailout')
  t.pragma({bailout: true })
}
