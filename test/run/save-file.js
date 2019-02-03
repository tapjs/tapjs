const {
  tmpfile,
  run,
  clean,
  bin,
  tap,
  node,
  dir,
  t,
  winSkip,
} = require('./')

const path = require('path')
const fs = require('fs')

const xy1 = tmpfile(t, 'x/y/1.js', `'use strict'
  const t = require(${tap})
  t.pass('one')
`)

const ab2 = tmpfile(t, 'a/b/2.js', `'use strict'
  const t = require(${tap})
  t.pass('2')
`)

const abf1 = tmpfile(t, 'a/b/f1.js', `//f1.js
  'use strict'
  require(${tap}).fail('a/b')
`)

const abf2 = tmpfile(t, 'z.js', `//z.js
  'use strict'
  require(${tap}).fail('c/d')
`)

const savefile = path.resolve(tmpfile(t, 'fails.txt', ''))

t.test('with bailout, should save all untested', t => {
  run(['a', 'x', 'z.js', '-s', savefile, '-b'], { cwd: dir }, (er, o, e) => {
    t.match(er, { code: 1 })
    t.matchSnapshot(clean(o), 'stdout', { skip: winSkip })
    t.equal(e, '')
    t.matchSnapshot(clean(fs.readFileSync(savefile, 'utf8')), 'savefile')
    t.end()
  })
})

t.test('without bailout, run untested, save failures', t => {
  run(['a', 'x', 'z.js', '-s', savefile], { cwd: dir }, (er, o, e) => {
    t.match(er, { code: 1 })
    t.matchSnapshot(clean(o), 'stdout', { skip: winSkip })
    t.equal(e, '')
    t.matchSnapshot(clean(fs.readFileSync(savefile, 'utf8')), 'savefile')
    t.end()
  })
})

t.test('make fails pass', t => {
  fs.writeFileSync(abf1, `'use strict'
    require(${tap}).pass('fine now')
  `)
  fs.writeFileSync(abf2, `'use strict'
    require(${tap}).pass('fine now too')
  `)
  t.end()
})

t.test('pass, empty save file', t => {
  run(['a', 'x', 'z.js', '-s', savefile], { cwd: dir }, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'stdout')
    t.equal(e, '')
    try {
      console.log(fs.readFileSync(savefile, 'utf8'))
    } catch (e) {}
    t.throws(() => fs.statSync(savefile), 'save file is gone')
    t.end()
  })
})

t.test('empty save file, run all tests', t => {
  run(['a', 'x', 'z.js', '-s', savefile], { cwd: dir }, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'stdout')
    t.equal(e, '')
    t.throws(() => fs.statSync(savefile), 'save file is gone')
    t.end()
  })
})
