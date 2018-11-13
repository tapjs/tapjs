'use strict'
const t = require('../')
const path = require('path')

t.test('in tapdir, no envs', t => {
  delete require.cache[require.resolve('../lib/stack.js')]
  process.chdir(path.resolve(__dirname, '..'))
  process.env.TAP_DEV_LONGSTACK = 0
  process.env.TAP_DEV_SHORTSTACK = 0
  const stack = require('../lib/stack.js').captureString()
  t.match(stack, /test[\/\\]stack\.js:\w+:\w+\)\n/)
  t.notMatch(stack, '\.node-spawn-wrap')
  t.end()
})

t.test('in ~, no envs', {
  todo: process.platform === 'win32' ?
    'check windows result not empty' : false
}, t => {
  delete require.cache[require.resolve('../lib/stack.js')]
  process.chdir(process.env.HOME)
  process.env.TAP_DEV_LONGSTACK = 0
  process.env.TAP_DEV_SHORTSTACK = 0
  const stack = require('../lib/stack.js').captureString()
  t.equal(stack, '')
  t.end()
})

t.test('in home, longstack', t => {
  delete require.cache[require.resolve('../lib/stack.js')]
  process.chdir(process.env.HOME)
  process.env.TAP_DEV_LONGSTACK = 1
  process.env.TAP_DEV_SHORTSTACK = 0
  const stack = require('../lib/stack.js').captureString()
  t.match(stack, /test[\/\\]stack\.js:\w+:\w+\)\n/)
  t.notMatch(stack, '\.node-spawn-wrap')
  t.end()
})

t.test('in tapdir, shortstack', {
  todo: process.platform === 'win32' ?
    'check windows result not empty' : false
}, t => {
  delete require.cache[require.resolve('../lib/stack.js')]
  process.chdir(path.resolve(__dirname, '..'))
  process.env.TAP_DEV_LONGSTACK = 0
  process.env.TAP_DEV_SHORTSTACK = 1
  const stack = require('../lib/stack.js').captureString()
  t.equal(stack, '')
  t.end()
})
