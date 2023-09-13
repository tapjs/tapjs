import { LoadedConfig } from '@tapjs/config'
import t from 'tap'

t.test('not a package spec to install', async t => {
  const { analyzePluginArg } = (await t.mockImport(
    '../dist/esm/analyze-plugin-arg.js'
  )) as typeof import('../dist/esm/analyze-plugin-arg.js')
  t.strictSame(
    await analyzePluginArg('./blah', {} as unknown as LoadedConfig),
    {
      name: './blah',
      versionWant: '',
      versionInstalled: '',
    },
    'local path'
  )
  t.strictSame(
    await analyzePluginArg(
      '@tapjs/mock',
      {} as unknown as LoadedConfig
    ),
    {
      name: '@tapjs/mock',
      versionWant: '',
      versionInstalled: '',
    },
    'default plugin'
  )
})

t.test('package spec', async t => {
  const { analyzePluginArg } = (await t.mockImport(
    '../dist/esm/analyze-plugin-arg.js',
    {
      '../dist/esm/get-installed-version.js': {
        getInstalledVersion: () => '1.0.0',
      },
      '../dist/esm/select-version.js': {
        selectVersion: () => '1.2.3',
      },
    }
  )) as typeof import('../dist/esm/analyze-plugin-arg.js')
  t.strictSame(
    await analyzePluginArg('foo@1', {} as unknown as LoadedConfig),
    {
      name: 'foo',
      versionWant: '1.2.3',
      versionInstalled: '1.0.0',
    }
  )
})
