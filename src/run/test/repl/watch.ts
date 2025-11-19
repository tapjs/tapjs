import type { WatchOptions } from 'chokidar'
import EventEmitter from 'node:events'
import t from 'tap'

import type { ProcessInfo } from '@tapjs/processinfo'
import { options } from '../../dist/esm/repl/chokidar-options.js'

const mockFSWatcher = new (class extends EventEmitter {
  running: boolean = true
  close() {
    this.running = false
    this.removeAllListeners()
  }
})()

const mockChokidar = new (class {
  files?: string[]
  watch(fileList: string[], opts: WatchOptions) {
    if (!t.strictSame(opts, options)) {
      throw new Error('got incorrect chokidar options')
    }
    this.files = fileList
    return mockFSWatcher
  }
})()

t.afterEach(() => (mockChokidar.files = undefined))

const { Watch } = await t.mockImport<
  typeof import('../../dist/esm/repl/watch.js')
>('../../dist/esm/repl/watch.js', {
  chokidar: { watch: mockChokidar.watch.bind(mockChokidar) },
})

t.test('watch some files', async t => {
  const pi = {
    files: new Map([
      ['one', {}],
      ['two', {}],
    ]),
    externalIDsChanged: async (f: (id: string, n: any) => boolean) => {
      if (f('one', pi.files.get('one'))) {
        return new Set([pi.files.get('one')])
      } else {
        return new Set()
      }
    },
  }
  let sawChange = false
  const w = new Watch(
    pi as unknown as ProcessInfo,
    () => (sawChange = true),
  )

  // only validate changes where the pi node is a root process node
  t.equal(await w.validateChanges(), true)
  Object.assign(pi.files.get('one') || {}, { parent: true })
  t.equal(await w.validateChanges(), false)

  t.equal(mockChokidar.files, undefined)
  mockFSWatcher.emit('all', 'change', 'blah blah blah')
  t.equal(sawChange, false)
  t.equal(w.watching, false)
  w.start()
  t.equal(w.watching, true)
  // verify no-op with coverage
  w.start()
  t.strictSame(mockChokidar.files, ['one', 'two'])
  t.strictSame(w.watchedFiles, ['one', 'two'])
  t.equal(sawChange, false)
  mockFSWatcher.emit('all', 'add', 'ignored')
  t.equal(sawChange, false, 'add event is ignored')
  mockFSWatcher.emit('all', 'change', 'blah blah blah')
  t.equal(sawChange, true, 'change event is relevant')
  delete mockChokidar.files
  pi.files.set('tre', {})
  w.start()
  t.strictSame(mockChokidar.files, ['one', 'two', 'tre'])
  t.strictSame(w.watchedFiles, ['one', 'two', 'tre'])

  delete mockChokidar.files
  pi.files.delete('tre')
  pi.files.set('for', {})
  w.start()
  t.strictSame(mockChokidar.files, ['one', 'two', 'for'])
  t.strictSame(w.watchedFiles, ['one', 'two', 'for'])

  w.close()
  t.equal(w.watching, false)
  w.close()
})
