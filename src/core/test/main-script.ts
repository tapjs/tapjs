import { fileURLToPath } from 'node:url'
import t from 'tap'
import { mainScript } from '../dist/esm/main-script.js'
import * as proc from '../dist/esm/proc.js'

const __filename = fileURLToPath(import.meta.url)

t.equal(mainScript(), __filename)
t.test('use default in eval mode', async t => {
  const { mainScript } = (await t.mockImport(
    '../dist/esm/main-script.js',
    {
      '../dist/esm/proc.js': t.createMock(proc, {
        proc: { _eval: 'some string' },
      }),
    }
  )) as typeof import('../dist/esm/main-script.js')
  t.equal(mainScript('default'), 'default')
  t.end()
})

t.test('use default in repl mode', async t => {
  Object.assign(globalThis, { repl: {} })
  t.teardown(() => {
    //@ts-ignore
    delete globalThis.repl
  })
  const { mainScript } = (await t.mockImport(
    '../dist/esm/main-script.js'
  )) as typeof import('../dist/esm/main-script.js')
  t.equal(mainScript('default'), 'default')
  t.end()
})

t.test('use default if no argv[1] somehow', async t => {
  const { mainScript } = (await t.mockImport(
    '../dist/esm/main-script.js',
    {
      '../dist/esm/proc.js': t.createMock(proc, {
        argv: [],
        proc: { argv: [] },
      }),
    }
  )) as typeof import('../dist/esm/main-script.js')
  t.equal(mainScript('default'), 'default')
  t.end()
})
