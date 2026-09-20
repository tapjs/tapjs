import t, { Test } from 'tap'
import {
  after,
  before,
  beforeEach,
  describe,
  it,
  mount,
} from '../dist/esm/index.js'

import { dirname } from 'node:path'
const CWD = dirname(process.cwd().toUpperCase())
t.cleanSnapshot = s => {
  s = s.replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
  let i = -1
  while ((i = s.toUpperCase().indexOf(CWD)) !== -1) {
    s = s.substring(0, i) + '{}' + s.substring(i + CWD.length)
  }
  return s
    .replace(/([^:]+):[0-9]+:[0-9]+(\)?)\n/g, '$1:#:#$2\n')
    .replace(/(\n +)<anonymous> \(([^\)]+)\)/g, '$1$2')
    .replace(/lineNumber: [0-9]+/g, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/g, 'columnNumber: ##')
}

const tt = new Test({ name: 'hook-done-error' })
tt.runMain(() => {})
mount(tt)

describe('before done(err) sync', () => {
  before(done => {
    done(new Error('sync yolo'))
  })
  it('should not run', () => {})
})

describe('before done(err)', () => {
  before(done => {
    setImmediate(() => done(new Error('before yolo')))
  })
  it('should not run', () => {})
})

describe('beforeEach done(err)', () => {
  beforeEach(done => {
    setImmediate(() => done(new Error('beforeEach yolo')))
  })
  it('should not run', () => {})
})

describe('before returned promise rejects', () => {
  before(done => Promise.reject(new Error('promise yolo')))
  it('should not run', () => {})
})

describe('after done(err)', () => {
  it('runs', () => {})
  after(done => {
    setImmediate(() => done(new Error('after yolo')))
  })
})

tt.end()
t.matchSnapshot(await tt.concat())
