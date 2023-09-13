import t from 'tap'

import { Test, TestOpts } from '@tapjs/test'
import { plugin } from '../dist/esm/index.js'

t.equal(t.pluginLoaded(plugin), true, 'plugin is loaded')

t.test('basic behavior', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  tt.beforeEach(tt => {
    log.push(['root be', tt.name])
  })
  tt.test('parent', tt => {
    tt.beforeEach(tt => {
      log.push(['parent be', tt.name])
    })
    tt.test('child', tt => {
      log.push(['child main'])
      tt.pass('this is fine')
      tt.test('silent', { silent: true }, tt => tt.end())
      tt.end()
    })
    tt.end()
  })
  tt.end()
  await tt.concat()
  t.strictSame(log, [
    ['root be', 'parent'],
    ['root be', 'child'],
    ['parent be', 'child'],
    ['child main'],
  ])
})

t.test('async beforeEach is awaited', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  tt.beforeEach(async tt => {
    log.push(['root be 1', tt.name])
  })
  tt.beforeEach(async tt => {
    log.push(['root be 2', tt.name])
  })
  tt.test('parent', tt => {
    tt.beforeEach(async tt => {
      log.push(['parent be 1', tt.name])
    })
    tt.beforeEach(async tt => {
      log.push(['parent be 2', tt.name])
    })
    tt.test('child', tt => {
      log.push(['child main'])
      tt.pass('this is fine')
      tt.end()
    })
    tt.end()
  })
  tt.end()
  await tt.concat()
  t.strictSame(log, [
    ['root be 1', 'parent'],
    ['root be 2', 'parent'],
    ['root be 1', 'child'],
    ['root be 2', 'child'],
    ['parent be 1', 'child'],
    ['parent be 2', 'child'],
    ['child main'],
  ])
})

t.test('rejected be fails relevant test', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  tt.beforeEach(async tt => {
    log.push(['root be', tt.name])
  })
  tt.test('parent', tt => {
    tt.beforeEach(async tt => {
      if (tt.name === 'fail') throw new Error('nope')
      log.push(['parent be', tt.name])
    })
    tt.test('child', tt => {
      log.push(['child main'])
      tt.pass('this is fine')
      tt.end()
    })
    tt.test('fail', tt => {
      log.push(['fail main'])
      tt.pass('this is fine')
      tt.end()
    })
    tt.end()
  })
  tt.end()
  t.match(
    await tt.concat(),
    `
                  if (tt.name === 'fail') throw new Error('nope')
            ------------------------------------^
`
  )
  t.strictSame(log, [
    ['root be', 'parent'],
    ['root be', 'child'],
    ['parent be', 'child'],
    ['child main'],
    ['root be', 'fail'],
  ])
})

t.test('throwing be fails relevant test', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  tt.beforeEach(tt => {
    log.push(['root be', tt.name])
  })
  tt.test('parent', tt => {
    tt.beforeEach(tt => {
      if (tt.name === 'fail') throw new Error('nope')
      log.push(['parent be', tt.name])
    })
    tt.test('child', tt => {
      log.push(['child main'])
      tt.pass('this is fine')
      tt.end()
    })
    tt.test('fail', tt => {
      log.push(['fail main'])
      tt.pass('this is fine')
      tt.end()
    })
    tt.end()
  })
  tt.end()
  t.match(
    await tt.concat(),
    `
                  if (tt.name === 'fail') throw new Error('nope')
            ------------------------------------^
`
  )
  t.strictSame(log, [
    ['root be', 'parent'],
    ['root be', 'child'],
    ['parent be', 'child'],
    ['child main'],
    ['root be', 'fail'],
  ])
})
