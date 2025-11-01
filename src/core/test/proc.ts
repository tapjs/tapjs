import t from 'tap'
import { argv, argvRelative, cwd, env, proc } from '../src/proc.js'
import { relative } from 'node:path'
t.equal(proc, process)
t.equal(argv, process.argv)
t.equal(cwd, process.cwd())
t.equal(env, process.env)
t.equal(argvRelative[1], relative(cwd, String(argv[1])))

t.test('fallbacks', async t => {
  const process_ = process
  Object.defineProperty(globalThis, 'process', {
    value: undefined,
    configurable: true,
  })
  const { proc, argv, cwd, env } = await t.mockImport<
    typeof import('../dist/esm/proc.js')
  >('../dist/esm/proc.js')
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
    },
  )
  t.end()
})
