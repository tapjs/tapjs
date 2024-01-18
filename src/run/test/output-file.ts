import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import EventEmitter from 'events'
import { dirname, resolve } from 'path'
import t from 'tap'

t.test('if no output-file, do nothing special', async t => {
  let mkdirpCalled = false
  const { outputFile } = await t.mockImport<
    typeof import('../dist/esm/output-file.js')
  >('../dist/esm/output-file.js', {
    mkdirp: {
      mkdirpSync: () => (mkdirpCalled = true),
    },
    minipass: {
      Minipass: function () {
        throw new Error('should not instantiate a minipass')
      },
    },
  })
  const tt = new EventEmitter()
  outputFile(
    tt as unknown as TAP,
    { get: () => undefined } as unknown as LoadedConfig,
    false
  )
  t.equal(mkdirpCalled, false, 'should not make a dir')
})

t.test('output-file, no reporter, pipe stdout and file', async t => {
  let mkdirpCalled = false
  let minipassCalled = false
  let createWriteStreamCalled = false
  let pipedToStdout = false
  let pipedToFile = false
  let tapPipeCalled = false
  let registerCalled = false

  const mockWriteStream = { name: 'not a real write stream' }
  const expectFile = resolve('output-file')
  const { outputFile } = await t.mockImport<
    typeof import('../dist/esm/output-file.js')
  >('../dist/esm/output-file.js', {
    mkdirp: {
      mkdirpSync: (dir: string) => {
        t.equal(dir, dirname(expectFile))
        mkdirpCalled = true
      },
    },
    minipass: {
      Minipass: class Minipass {
        constructor(options: any) {
          minipassCalled = true
          t.strictSame(options, { encoding: 'utf8' })
        }
        pipe(target: any) {
          if (target === process.stdout) pipedToStdout = true
          else if (target === mockWriteStream) pipedToFile = true
          else t.fail('unknown pipe target', { found: target })
        }
      },
    },
    fs: {
      createWriteStream: (file: string) => {
        createWriteStreamCalled = true
        t.equal(file, expectFile)
        return mockWriteStream
      },
    },
  })

  const tt = Object.assign(new EventEmitter(), {
    register: () => (registerCalled = true),
    pipe: () => (tapPipeCalled = true),
  })

  outputFile(
    tt as unknown as TAP,
    { get: () => 'output-file' } as unknown as LoadedConfig,
    false
  )

  t.equal(mkdirpCalled, true)
  t.equal(minipassCalled, true)
  t.equal(createWriteStreamCalled, true)
  t.equal(pipedToStdout, true)
  t.equal(pipedToFile, true)
  t.equal(tapPipeCalled, true)
  t.equal(registerCalled, true)
})

t.test('output-file and reporter, pipe to file', async t => {
  let mkdirpCalled = false
  let minipassCalled = false
  let createWriteStreamCalled = false
  let pipedToStdout = false
  let pipedToFile = false
  let tapPipeCalled = false
  let registerCalled = false

  const mockWriteStream = { name: 'not a real write stream' }
  const expectFile = resolve('output-file')
  const { outputFile } = await t.mockImport<
    typeof import('../dist/esm/output-file.js')
  >('../dist/esm/output-file.js', {
    mkdirp: {
      mkdirpSync: (dir: string) => {
        t.equal(dir, dirname(expectFile))
        mkdirpCalled = true
      },
    },
    minipass: {
      Minipass: class Minipass {
        constructor(options: any) {
          minipassCalled = true
          t.strictSame(options, { encoding: 'utf8' })
        }
        pipe(target: any) {
          if (target === process.stdout) pipedToStdout = true
          else if (target === mockWriteStream) pipedToFile = true
          else t.fail('unknown pipe target', { found: target })
        }
      },
    },
    fs: {
      createWriteStream: (file: string) => {
        createWriteStreamCalled = true
        t.equal(file, expectFile)
        return mockWriteStream
      },
    },
  })

  const tt = Object.assign(new EventEmitter(), {
    register: () => (registerCalled = true),
    pipe: () => (tapPipeCalled = true),
  })

  outputFile(
    tt as unknown as TAP,
    { get: () => 'output-file' } as unknown as LoadedConfig,
    true
  )

  t.equal(mkdirpCalled, true)
  t.equal(minipassCalled, true)
  t.equal(createWriteStreamCalled, true)
  t.equal(pipedToStdout, false)
  t.equal(pipedToFile, true)
  t.equal(tapPipeCalled, true)
  t.equal(registerCalled, false)
})
