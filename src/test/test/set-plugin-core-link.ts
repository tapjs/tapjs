import { readlinkSync } from 'fs'
import { dirname, resolve } from 'path'
import { resolveImportSync } from 'resolve-import/resolve-import-sync'
import t from 'tap'
import { fileURLToPath } from 'url'
import { setPluginCoreLink } from '../src/set-plugin-core-link.js'

const core = dirname(
  fileURLToPath(
    resolveImportSync('@tapjs/core/package.json', import.meta.url),
  ),
)

const pc = (dir: string) => resolve(dir, 'node_modules/@tapjs/core')

t.test('set core link if not present', t => {
  const dir = t.testdir()
  setPluginCoreLink(dir, core)
  t.equal(readlinkSync(pc(dir)), core)
  t.end()
})

t.test('set core link if invalid link', t => {
  const dir = t.testdir({
    node_modules: {
      '@tapjs': {
        core: t.fixture('symlink', t.testdirName),
      },
    },
  })
  setPluginCoreLink(dir, core)
  t.equal(readlinkSync(pc(dir)), core)
  t.end()
})

t.test('set core link if invalid link', t => {
  const dir = t.testdir({
    node_modules: {
      '@tapjs': {
        core: t.fixture('symlink', t.testdirName),
      },
    },
  })
  setPluginCoreLink(dir, core)
  t.equal(readlinkSync(pc(dir)), core)
  t.end()
})

t.test('set core link if not a link', t => {
  const dir = t.testdir({
    node_modules: {
      '@tapjs': {
        core: {
          it: {
            is: {
              a: 'dir',
            },
          },
        },
      },
    },
  })
  setPluginCoreLink(dir, core)
  t.equal(readlinkSync(pc(dir)), core)
  t.end()
})
