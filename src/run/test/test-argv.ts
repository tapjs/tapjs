import { LoadedConfig } from '@tapjs/config'
import t from 'tap'

const mocks = {
  '@tapjs/test': {
    importLoaders: ['blah/import'],
    loaders: ['no-import/loader'],
    loaderFallbacks: ['blah/loader', 'no-import/loader'],
    execArgv: () => [],
  },
}

const mocksNoImport = {
  '@tapjs/test': {
    importLoaders: ['blah/import'],
    loaders: ['no-import/loader'],
    loaderFallbacks: ['blah/loader', 'no-import/loader'],
    execArgv: () => [],
  },
  module: {
    register: null,
  },
}

const mocksAllImport = {
  '@tapjs/test': {
    importLoaders: ['blah/import', 'has-import/import'],
    loaders: [],
    loaderFallbacks: ['blah/loader', 'has-import/loader'],
    execArgv: () => [],
  },
}

t.mockAll({
  'resolve-import': {
    resolveImport: async (s: string) => new URL(s, 'file://path/to/'),
  },
  module: {
    register: () => {},
  },
})

t.test('mix of loaders and imports', async t => {
  const { testArgv } = await t.mockImport<
    typeof import('../dist/esm/test-argv.js')
  >('../dist/esm/test-argv.js', mocks)
  t.strictSame(
    testArgv({ get: () => {} } as unknown as LoadedConfig),
    [
      '--import=file://path/to/blah/import',
      '--loader=file://path/to/no-import/loader',
      '--no-warnings',
      '--enable-source-maps',
      '--import=file://path/to/@tapjs/processinfo/import',
    ],
  )
})

t.test('with --node-arg', async t => {
  const { testArgv } = await t.mockImport<
    typeof import('../dist/esm/test-argv.js')
  >('../dist/esm/test-argv.js', mocks)
  t.strictSame(
    testArgv({ get: () => ['a', 'b'] } as unknown as LoadedConfig),
    [
      '--import=file://path/to/blah/import',
      '--loader=file://path/to/no-import/loader',
      '--no-warnings',
      '--enable-source-maps',
      '--import=file://path/to/@tapjs/processinfo/import',
      'a',
      'b',
    ],
  )
})

t.test('all imports, no loader', async t => {
  const { testArgv } = await t.mockImport<
    typeof import('../dist/esm/test-argv.js')
  >('../dist/esm/test-argv.js', mocksAllImport)
  t.strictSame(
    testArgv({ get: () => [] } as unknown as LoadedConfig),
    [
      '--import=file://path/to/blah/import',
      '--import=file://path/to/has-import/import',
      '--enable-source-maps',
      '--import=file://path/to/@tapjs/processinfo/import',
    ],
  )
})

t.test('no import support, only loader', async t => {
  const { testArgv } = await t.mockImport<
    typeof import('../dist/esm/test-argv.js')
  >('../dist/esm/test-argv.js', mocksNoImport)
  t.strictSame(
    testArgv({ get: () => [] } as unknown as LoadedConfig),
    [
      '--loader=file://path/to/blah/loader',
      '--loader=file://path/to/no-import/loader',
      '--no-warnings',
      '--enable-source-maps',
      '--loader=file://path/to/@tapjs/processinfo/loader',
    ],
  )
})
