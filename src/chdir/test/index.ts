import { readFileSync } from 'fs'
import { resolve } from 'path'
import t from 'tap'
import { plugin } from '../dist/esm/index.js'
t.equal(t.pluginLoaded(plugin), true, 'plugin is loaded')

// restore() calls are duplicated to cover the no-op, just ensure
// it doesn't do any harm to call multiple times.

t.test('chdir', t => {
  t.chdir(
    t.testdir({
      file: 'blah',
    }),
  )
  t.equal(readFileSync('file', 'utf8'), 'blah')
  t.equal(process.cwd(), resolve(t.testdirName))
  t.end()
})
