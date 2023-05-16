import * as module from 'module'
const { createRequire } = module

import * as tap from 'tap'

if (typeof createRequire !== 'function') {
  console.log(`TAP version 13
1..0 # SKIP - no createRequire function available ${process.version}
`)
  process.exit(0)
}

const require = createRequire(import.meta.url)

const cjs = require('tap');

const t = cjs

t.test('tap', async t => {
  t.matchSnapshot(Object.keys(tap).sort())

  for (const key of Object.keys(tap)) {
    t.equal(tap[key], key === 'default' ? cjs : cjs[key], key)
  }
})

import * as mocha from 'tap/mocha'
t.test('mocha export', async t => {
  t.matchSnapshot(Object.keys(mocha).sort())
  for (const key of Object.keys(mocha)) {
    t.equal(mocha[key], key === 'default' ? cjs.mocha : cjs.mocha[key], key)
  }
})
