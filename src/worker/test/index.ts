import t from 'tap'
import { plugin } from '../dist/cjs/index.js'

t.equal(t.pluginLoaded(plugin), true, 'plugin loaded by default')

import {
  Base,
  BaseOpts,
  PromiseWithSubtest,
  TestBaseOpts,
  Worker,
} from '@tapjs/core'
import { Test, TestOpts } from '@tapjs/test'
import {resolve} from 'path'

t.test('parse options', t => {
  const opts: any[] = []
  class T extends Test {
    sub<T extends Base, O extends BaseOpts>(
      Class: { new (options: O): T },
      extra: O | TestOpts | TestBaseOpts | BaseOpts = {},
      caller: (...a: any[]) => unknown
    ): PromiseWithSubtest<T> {
      t.equal(Class, Worker)
      t.type(caller, Function)
      opts.push(extra)
      return Object.assign(Promise.resolve(null), { subtest: null })
    }
  }
  const tt = new T({ name: 'x' })
  t.equal(tt.workerData, undefined)
  tt.worker('file.js')
  tt.worker('file.js', 'name')
  tt.worker('file.js', { eval: true })
  tt.worker('file.js', { eval: true }, 'name')
  t.strictSame(opts, [
    { filename: 'file.js' },
    { name: 'name', filename: 'file.js' },
    { eval: true, filename: 'file.js' },
    { eval: true, name: 'name', filename: 'file.js' },
  ])
  t.end()
})

t.test('spawn a worker with inline code', t => {
  t.equal(t.isMainThread, true)
  t.equal(t.workerData, undefined)
  t.worker(
    `
    const t = require('tap')
    t.equal(t.isMainThread, false)
    t.strictSame(t.workerData, { a: 1 })
    `,
    { eval: true, workerData: { a: 1 } }
  )
  t.end()
})

t.test('spawn a worker with a file', t => {
  t.equal(t.isMainThread, true)
  t.equal(t.workerData, undefined)
  const d = t.testdir({
    'file.mjs': `
      import t from 'tap'
      t.equal(t.isMainThread, false)
      t.strictSame(t.workerData, { a: 1 })
    `,
  })
  const filename = resolve(d, 'file.mjs')
  t.worker(filename, { workerData: { a: 1 }}, 'worker with file')
  t.end()
})
