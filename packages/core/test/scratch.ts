import { Test } from '../dist/cjs/test-built.js'

import { TestBaseOpts } from '../dist/cjs/test-base.js'
const opts: TestBaseOpts = {
  debug: /\btap\b/.test(process.env.NODE_DEBUG || ''),
  name: 'TAP',
}

const t = new Test(opts)

t.stream.pipe(process.stdout)
t.runMain(() => {})

t.beforeEach(() => {
  console.log('first beforeEach')
})
t.beforeEach((t) => {
  t.childId
  t.afterEach
  console.log('second beforeEach')
})
t.afterEach(() => {
  console.log('parent aftereach')
})

t.test('hello', {}, t => {
  t.pass('this is fine')
  t.beforeEach(() => {
    console.log('child beforeeach')
  })
  t.afterEach(() => {
    console.log('child aftereach')
  })
  t.test('hello child', {}, t => {
    t.pass('also fine')
    t.end()
  })
  t.end()
})

t.end()
