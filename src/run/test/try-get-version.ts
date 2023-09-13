import { readFileSync } from 'fs'
import { resolve } from 'path'
import t from 'tap'
import { tryGetVersion } from '../dist/esm/try-get-version.js'

t.test('try and get the version', t => {
  const dir = t.testdir({
    pkg: {
      'package.json': JSON.stringify({
        no: {
          version: 'here',
        },
      }),
    },
    nonpkg: {},
  })

  const expect = JSON.parse(
    readFileSync(
      new URL('../../tap/package.json', import.meta.url),
      'utf8'
    )
  ).version

  t.equal(tryGetVersion('tap'), expect)
  t.equal(tryGetVersion(resolve(dir, 'pkg')), undefined)
  t.equal(tryGetVersion(resolve(dir, 'nonpkg')), undefined)
  t.end()
})
