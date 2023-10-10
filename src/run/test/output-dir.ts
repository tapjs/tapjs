import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import EventEmitter from 'events'
import { resolve } from 'path'
import t from 'tap'

t.test('if no output-dir, do nothing special', async t => {
  const mkdirpCalled: string[] = []
  const { outputDir } = (await t.mockImport(
    '../dist/esm/output-dir.js',
    {
      mkdirp: {
        mkdirpSync: (p: string) => mkdirpCalled.push(p),
      },
    }
  )) as typeof import('../dist/esm/output-dir.js')
  const tt = new EventEmitter()
  outputDir(
    tt as unknown as TAP,
    {
      get: () => undefined,
      globCwd: t.testdir(),
    } as unknown as LoadedConfig
  )
  tt.emit(
    'spawn',
    Object.assign(new EventEmitter(), { name: 'yolo' })
  )
  t.strictSame(
    mkdirpCalled,
    [resolve(t.testdirName, '.tap/test-results')],
    'only create the internal test-results dir'
  )
})

t.test('if has output-dir, do stuff on spawn', async t => {
  const mkdirpCalled: string[] = []
  const createWriteStreamCalled: string[] = []
  let pipeCalled = false
  const expectDir = resolve('output-dir')
  const expectFile = resolve(expectDir, 'test-name.tap')
  const { outputDir } = (await t.mockImport(
    '../dist/esm/output-dir.js',
    {
      mkdirp: {
        mkdirpSync: (p: string) => mkdirpCalled.push(p),
      },
      fs: {
        createWriteStream: (file: string) =>
          createWriteStreamCalled.push(file),
      },
    }
  )) as typeof import('../dist/esm/output-dir.js')
  const tt = new EventEmitter()
  outputDir(
    tt as unknown as TAP,
    {
      get: () => 'output-dir',
      globCwd: t.testdir(),
    } as unknown as LoadedConfig
  )
  const st = Object.assign(new EventEmitter(), { name: 'test-name' })
  tt.emit('spawn', st)
  st.emit('process', {
    stdout: {
      pipe: () => {
        pipeCalled = true
      },
    },
  })
  t.strictSame(mkdirpCalled, [
    expectDir,
    resolve(t.testdirName, '.tap/test-results'),
  ])
  t.strictSame(createWriteStreamCalled, [
    expectFile,
    resolve(t.testdirName, '.tap/test-results/test-name.tap'),
  ])
  t.equal(pipeCalled, true)
})
