import t from 'tap'
import { plugin } from '../dist/esm/index.js'

t.equal(t.pluginLoaded(plugin), true, 'plugin loaded by default')

import {
  Base,
  BaseOpts,
  PromiseWithSubtest,
  Spawn,
  TestBaseOpts,
} from '@tapjs/core'
import { Test, TestOpts } from '@tapjs/test'

t.test('parse options', t => {
  const opts: any[] = []
  class T extends Test {
    sub<T extends Base, O extends BaseOpts>(
      Class: { new (options: O): T },
      extra: O | TestOpts | TestBaseOpts | BaseOpts = {},
      caller: (...a: any[]) => unknown
    ): PromiseWithSubtest<T> {
      t.equal(Class, Spawn)
      t.type(caller, Function)
      opts.push(extra)
      return Object.assign(Promise.resolve(null), { subtest: null })
    }
  }
  const tt = new T({ name: 'x' })
  tt.spawn('command')
  tt.spawn('command', 'name')
  tt.spawn('command', ['args'])
  tt.spawn('command', ['args'], 'name')
  tt.spawn('command', { cwd: 'options' })
  tt.spawn('command', { cwd: 'options' }, 'name')
  tt.spawn('command', ['args'], { cwd: 'options' })
  tt.spawn('command', ['args'], { cwd: 'options' }, 'name')
  t.strictSame(opts, [
    { command: 'command', args: [] },
    { command: 'command', args: ['name'] },
    { command: 'command', args: ['args'] },
    { name: 'name', command: 'command', args: ['args'] },
    { cwd: 'options', command: 'command', args: [] },
    { cwd: 'options', name: 'name', command: 'command', args: [] },
    { cwd: 'options', command: 'command', args: ['args'] },
    {
      cwd: 'options',
      name: 'name',
      command: 'command',
      args: ['args'],
    },
  ])
  t.end()
})
