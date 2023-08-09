import t from 'tap'
import { argv, cwd, env, proc } from '../dist/mjs/proc.js'
t.equal(proc, process)
t.equal(argv, process.argv)
t.equal(cwd, process.cwd())
t.equal(env, process.env)

t.test('fallbacks', async t => {
  const process_ = process
  Object.defineProperty(globalThis, 'process', {
    value: undefined,
    configurable: true,
  })
  const { proc, argv, cwd, env } = await t.mockImport(
    '../dist/mjs/proc.js'
  ) as typeof import('../dist/mjs/proc.js')
  Object.defineProperty(globalThis, 'process', {
    value: process_,
    configurable: true,
    writable: true,
    enumerable: true,
  })
  t.strictSame(
    { proc, argv, cwd, env },
    {
      proc: undefined,
      argv: [],
      cwd: '.',
      env: {},
    }
  )
  t.end()
})
