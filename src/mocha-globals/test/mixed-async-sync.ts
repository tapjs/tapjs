import t, { Test } from 'tap'
import { currentTest, describe, it, mount } from '../dist/esm/index.js'

import { dirname } from 'node:path'
const CWD = dirname(process.cwd().toUpperCase())
t.cleanSnapshot = s => {
  s = s.replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
  let i = -1
  while ((i = s.toUpperCase().indexOf(CWD)) !== -1) {
    s = s.substring(0, i) + '{}' + s.substring(i + CWD.length)
  }
  return s.replace(/([^:]+):[0-9]+:[0-9]+(\)?)\n/g, '$1:#:#$2\n')
}

const tt = new Test({ name: 'mixed-async-sync' })
tt.runMain(() => {})
mount(tt)

const logs: string[] = []

// https://github.com/tapjs/tapjs/issues/1006
// mocha-style suites may mix async and sync it() blocks. An async it()
// that starts immediately used to leave currentTest set, so the next
// sibling it() threw "it() calls may not be nested".
describe('test mixed', () => {
  it('async first', async () => {
    logs.push(`start ${currentTest()?.name}`)
    await new Promise<void>(r => setTimeout(r))
    logs.push(`end ${currentTest()?.name}`)
  })
  it('sync second', () => {
    logs.push(`run ${currentTest()?.name}`)
  })
})

describe('test multiple async', () => {
  it('async one', async () => {
    logs.push(`start ${currentTest()?.name}`)
    await Promise.resolve()
    logs.push(`end ${currentTest()?.name}`)
  })
  it('async two', async () => {
    logs.push(`run ${currentTest()?.name}`)
  })
})

describe('nested mixed', () => {
  describe('inner', () => {
    it('async inner', async () => {
      logs.push(`run ${currentTest()?.name}`)
    })
    it('sync inner', () => {
      logs.push(`run ${currentTest()?.name}`)
    })
  })
})

describe('async then done-callback', () => {
  it('async then done', async () => {
    logs.push(`run ${currentTest()?.name}`)
  })
  it('done cb', done => {
    logs.push(`run ${currentTest()?.name}`)
    done()
  })
})

tt.end()
const output = await tt.concat()
t.equal(tt.passing(), true, 'all mocha tests passed')
t.strictSame(logs, [
  'start async first',
  'end async first',
  'run sync second',
  'start async one',
  'end async one',
  'run async two',
  'run async inner',
  'run sync inner',
  'run async then done',
  'run done cb',
])
t.matchSnapshot(output)
