const {
  tmpfile,
  run,
  tap,
  dir,
  t,
} = require('./')

const timeout = process.env.CI ? 1000 : 100

// should see start, start, end, end, in the output
tmpfile(t, 'p/y/1.js', `'use strict'
  console.error('start')
  setTimeout(() => console.error('end'), ${timeout})
  const t = require(${tap})
  t.pass('one')
`)

tmpfile(t, 'p/y/2.js', `'use strict'
  console.error('start')
  setTimeout(() => console.error('end'), ${timeout})
  const t = require(${tap})
  t.pass('2')
`)

tmpfile(t, 'p/tap-parallel-not-ok', '')
tmpfile(t, 'p/y/tap-parallel-ok', '')

tmpfile(t, 'q/b/f1.js', `'use strict'
  require(${tap}).pass('a/b')
  setTimeout(() => console.error('f1'), ${timeout})
`)

tmpfile(t, 'q/b/f2.js', `'use strict'
  require(${tap}).pass('c/d')
  console.error('f2')
`)

tmpfile(t, 'q/tap-parallel-ok', '')
tmpfile(t, 'q/b/tap-parallel-not-ok', '')

tmpfile(t, 'r/y/1.js', `'use strict'
  console.error('ry1')
  setTimeout(() => console.error('ry1'), ${timeout})
  const t = require(${tap})
  t.pass('one')
`)

tmpfile(t, 'r/y/2.js', `'use strict'
  console.error('ry2')
  setTimeout(() => console.error('ry2'), ${timeout})
  const t = require(${tap})
  t.pass('2')
`)

tmpfile(t, 'r/tap-parallel-not-ok', '')

tmpfile(t, 'z/y/1.js', `'use strict'
  console.error('start')
  setTimeout(() => console.error('end'), ${timeout})
  const t = require(${tap})
  t.pass('one')
`)

tmpfile(t, 'z/y/2.js', `'use strict'
  console.error('start')
  setTimeout(() => console.error('end'), ${timeout})
  const t = require(${tap})
  t.pass('2')
`)

t.plan(3)
run(['p/y/*.js', 'q', 'q/b/f1.js', 'r/y', 'z', '-j2'], { cwd: dir }, (er, o, e) => {
  t.equal(er, null)
  t.matchSnapshot(o, 'output')
  t.matchSnapshot(e, 'stderr')
})
