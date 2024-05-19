import { LoadedConfig } from '@tapjs/config'
import t from 'tap'
import { getInstalledVersion } from '../dist/esm/get-installed-version.js'

const dir = t.testdir({
  '.tap': {
    plugins: {
      node_modules: {
        foo: {
          'package.json': JSON.stringify({ version: '1.2.3' }),
        },
        notjson: {
          'package.json': 'hello',
        },
      },
    },
  },
})

t.equal(
  getInstalledVersion('foo', {
    projectRoot: dir,
  } as unknown as LoadedConfig),
  '1.2.3',
)
t.equal(
  getInstalledVersion('bar', {
    projectRoot: dir,
  } as unknown as LoadedConfig),
  '',
)
t.equal(
  getInstalledVersion('notjson', {
    projectRoot: dir,
  } as unknown as LoadedConfig),
  '',
)
