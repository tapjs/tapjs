import t from 'tap'
import { mainScript } from '../dist/cjs/main-script.js'
import * as proc from '../dist/cjs/proc.js'
t.equal(mainScript(), __filename)
t.test('use default in eval mode', t => {
  const { mainScript } = t.mockRequire('../dist/cjs/main-script.js', {
    '../dist/cjs/proc.js': t.createMock(proc, {
      proc: { _eval: 'some string' },
    }),
  }) as typeof import('../dist/cjs/main-script.js')
  t.equal(mainScript('default'), 'default')
  t.end()
})

t.test('use default in repl mode', t => {
  Object.assign(globalThis, { repl: {} })
  t.teardown(() => {
    //@ts-ignore
    delete globalThis.repl
  })
  const { mainScript } = t.mockRequire(
    '../dist/cjs/main-script.js'
  ) as typeof import('../dist/cjs/main-script.js')
  t.equal(mainScript('default'), 'default')
  t.end()
})

t.test('use default if no argv[1] somehow', t => {
  const { mainScript } = t.mockRequire('../dist/cjs/main-script.js', {
    '../dist/cjs/proc.js': t.createMock(proc, {
      argv: [],
      proc: { argv: [] },
    }),
  }) as typeof import('../dist/cjs/main-script.js')
  t.equal(mainScript('default'), 'default')
  t.end()
})
