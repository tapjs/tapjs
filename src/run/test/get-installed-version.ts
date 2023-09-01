import { LoadedConfig } from '@tapjs/config'
import t from 'tap'
import { getInstalledVersion } from '../dist/get-installed-version.js'

const dir = t.testdir({
  node_modules: {
    foo: {
      'package.json': JSON.stringify({ version: '1.2.3' }),
    },
    notjson: {
      'package.json': 'hello',
    },
  },
})

t.equal(
  getInstalledVersion('foo', {
    globCwd: dir,
  } as unknown as LoadedConfig),
  '1.2.3'
)
t.equal(
  getInstalledVersion('bar', {
    globCwd: dir,
  } as unknown as LoadedConfig),
  ''
)
t.equal(
  getInstalledVersion('notjson', {
    globCwd: dir,
  } as unknown as LoadedConfig),
  ''
)
