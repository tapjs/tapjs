import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import EventEmitter from 'events'
import { resolve } from 'path'
import t from 'tap'

t.test('if no output-dir, do nothing special', async t => {
  let mkdirpCalled = false
  const { outputDir } = (await t.mockImport('../dist/output-dir.js', {
    mkdirp: {
      mkdirpSync: () => (mkdirpCalled = true),
    },
  })) as typeof import('../dist/output-dir.js')
  const tt = new EventEmitter()
  outputDir(
    tt as unknown as TAP,
    { get: () => undefined } as unknown as LoadedConfig
  )
  tt.emit('spawn')
  t.equal(mkdirpCalled, false, 'should not make a dir')
})

t.test('if has output-dir, do stuff on spawn', async t => {
  let mkdirpCalled = false
  let createWriteStreamCalled = false
  let pipeCalled = false
  const expectDir = resolve('output-dir')
  const expectFile = resolve(expectDir, 'test-name.tap')
  const { outputDir } = (await t.mockImport('../dist/output-dir.js', {
    mkdirp: {
      mkdirpSync: (dir: string) => {
        t.equal(dir, expectDir)
        mkdirpCalled = true
      },
    },
    fs: {
      createWriteStream: (file: string) => {
        createWriteStreamCalled = true
        t.equal(file, expectFile)
      },
    },
  })) as typeof import('../dist/output-dir.js')
  const tt = new EventEmitter()
  outputDir(
    tt as unknown as TAP,
    { get: () => 'output-dir' } as unknown as LoadedConfig
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
  t.equal(mkdirpCalled, true)
  t.equal(createWriteStreamCalled, true)
  t.equal(pipeCalled, true)
})
