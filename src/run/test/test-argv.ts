import {LoadedConfig} from '@tapjs/config'
import t from 'tap'

const mocks = {
  '@tapjs/test': {
    importLoaders: ['blah/import'],
    loaders: ['no-import/loader'],
    loaderFallbacks: ['blah/loader', 'no-import/loader'],
  },
  module: {
    register: () => {}
  }
}

const mocksNoImport = {
  '@tapjs/test': {
    importLoaders: ['blah/import'],
    loaders: ['no-import/loader'],
    loaderFallbacks: ['blah/loader', 'no-import/loader'],
  },
  module: {
    register: null
  }
}

const mocksAllImport = {
  '@tapjs/test': {
    importLoaders: ['blah/import', 'has-import/import'],
    loaders: [],
    loaderFallbacks: ['blah/loader', 'has-import/loader'],
  },
  module: {
    register: () => {}
  }
}

t.test('mix of loaders and imports', async t => {
  const { testArgv } = await t.mockImport('../dist/esm/test-argv.js', mocks) as typeof import('../dist/esm/test-argv.js')
  t.strictSame(testArgv({ get: () => {}} as unknown as LoadedConfig), [
    '--import=blah/import',
    '--loader=no-import/loader',
    '--no-warnings=ExperimentalLoader',
    '--enable-source-maps',
    '--import=@tapjs/processinfo/import',
  ])
})

t.test('with --node-arg', async t => {
  const { testArgv } = await t.mockImport('../dist/esm/test-argv.js', mocks) as typeof import('../dist/esm/test-argv.js')
  t.strictSame(testArgv({ get: () => ['a', 'b']} as unknown as LoadedConfig), [
    '--import=blah/import',
    '--loader=no-import/loader',
    '--no-warnings=ExperimentalLoader',
    '--enable-source-maps',
    '--import=@tapjs/processinfo/import',
    'a',
    'b',
  ])
})

t.test('all imports, no loader', async t => {
  const { testArgv } = await t.mockImport('../dist/esm/test-argv.js', mocksAllImport) as typeof import('../dist/esm/test-argv.js')
  t.strictSame(testArgv({ get: () => []} as unknown as LoadedConfig), [
    '--import=blah/import',
    '--import=has-import/import',
    '--enable-source-maps',
    '--import=@tapjs/processinfo/import',
  ])
})

t.test('no import support, only loader', async t => {
  const { testArgv } = await t.mockImport('../dist/esm/test-argv.js', mocksNoImport) as typeof import('../dist/esm/test-argv.js')
  t.strictSame(testArgv({ get: () => []} as unknown as LoadedConfig), [
    '--loader=blah/loader',
    '--loader=no-import/loader',
    '--no-warnings=ExperimentalLoader',
    '--enable-source-maps',
    '--loader=@tapjs/processinfo/loader',
  ])
})
