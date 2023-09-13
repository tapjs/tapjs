import t from 'tap'

import { Test, TestOpts } from '@tapjs/test'
import { plugin } from '../dist/esm/index.js'

t.equal(t.pluginLoaded(plugin), true, 'plugin is loaded')

t.test('basic behavior', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  tt.afterEach(tt => {
    log.push(['root ae', tt.name])
  })
  tt.test('parent', tt => {
    tt.afterEach(tt => {
      log.push(['parent ae', tt.name])
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
    ['child main'],
    ['parent ae', 'child'],
    ['root ae', 'child'],
    ['root ae', 'parent'],
  ])
})

t.test('async test functions', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  tt.afterEach(tt => {
    log.push(['root ae', tt.name])
  })
  tt.test('parent', async tt => {
    tt.afterEach(tt => {
      log.push(['parent ae', tt.name])
    })
    tt.test('child', async tt => {
      log.push(['child main'])
      tt.pass('this is fine')
    })
  })
  tt.test('parent 2', async tt => {
    tt.afterEach(tt => {
      log.push(['parent 2 ae', tt.name])
    })
    tt.test('child 2', async tt => {
      log.push(['child 2 main'])
      tt.pass('this is fine')
    })
  })
  tt.end()
  await tt.concat()
  t.strictSame(log, [
    ['child main'],
    ['parent ae', 'child'],
    ['root ae', 'child'],
    ['root ae', 'parent'],
    ['child 2 main'],
    ['parent 2 ae', 'child 2'],
    ['root ae', 'child 2'],
    ['root ae', 'parent 2'],
  ])
})

t.test('async test functions, ae from root only', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  // fine to not be a void function
  tt.afterEach(tt => log.push(['root ae', tt.name]))
  tt.test('parent', async tt => {
    tt.test('child', async tt => {
      log.push(['child main'])
      tt.pass('this is fine')
    })
  })
  tt.test('parent 2', async tt => {
    tt.test('child 2', async tt => {
      log.push(['child 2 main'])
      tt.pass('this is fine')
    })
  })
  tt.end()
  await tt.concat()
  t.strictSame(log, [
    ['child main'],
    ['root ae', 'child'],
    ['root ae', 'parent'],
    ['child 2 main'],
    ['root ae', 'child 2'],
    ['root ae', 'parent 2'],
  ])
})

t.test('async afterEach is awaited', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  tt.afterEach(async tt => {
    log.push(['root ae 1', tt.name])
  })
  tt.afterEach(async tt => {
    log.push(['root ae 2', tt.name])
  })
  tt.test('parent', tt => {
    tt.afterEach(async tt => {
      log.push(['parent ae 1', tt.name])
    })
    tt.afterEach(async tt => {
      log.push(['parent ae 2', tt.name])
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
    ['child main'],
    ['parent ae 1', 'child'],
    ['parent ae 2', 'child'],
    ['root ae 1', 'child'],
    ['root ae 2', 'child'],
    ['root ae 1', 'parent'],
    ['root ae 2', 'parent'],
  ])
})

t.test('rejected ae fails relevant test', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  tt.afterEach(async tt => {
    log.push(['root ae', tt.name])
  })
  tt.test('parent', tt => {
    tt.afterEach(async tt => {
      if (tt.name === 'fail') throw new Error('nope')
      log.push(['parent ae', tt.name])
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
    ['child main'],
    ['parent ae', 'child'],
    ['root ae', 'child'],
    ['fail main'],
    ['root ae', 'parent'],
  ])
})

t.test('throwing ae fails relevant test', async t => {
  const tt = new Test({ name: 'testy' } as TestOpts)
  const log: string[][] = []
  tt.afterEach(async tt => {
    log.push(['root ae', tt.name])
  })
  tt.test('parent', tt => {
    tt.afterEach(tt => {
      if (tt.name === 'fail') throw new Error('nope')
      log.push(['parent ae', tt.name])
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
    ['child main'],
    ['parent ae', 'child'],
    ['root ae', 'child'],
    ['fail main'],
    ['root ae', 'parent'],
  ])
})
