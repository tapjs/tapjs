import t from 'tap'

// get the actual config values to test against
import {
  mainBin as mainBinActual,
  values as valuesActual,
} from '../dist/esm/main-config.js'

const originalEnv = { ...process.env }
t.beforeEach(t =>
  t.intercept(process, 'env', { value: { ...originalEnv } }),
)

t.test('no args, run', async t => {
  t.intercept(process, 'argv', { value: process.argv.slice(0, 2) })
  const { values, positionals, mainCommand, args, mainBin } =
    await t.mockImport<typeof import('../dist/esm/main-config.js')>(
      '../dist/esm/main-config.js',
    )

  t.strictSame(values, valuesActual)
  t.strictSame(positionals, [])
  t.equal(mainCommand, 'run')
  t.equal(mainBin, mainBinActual)
  t.strictSame(args, [])
})

t.test('unknown positional arg, run', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), 'asdf.js'],
  })
  const { values, positionals, mainCommand, args, mainBin } =
    await t.mockImport<typeof import('../dist/esm/main-config.js')>(
      '../dist/esm/main-config.js',
    )

  t.strictSame(values, valuesActual)
  t.strictSame(positionals, ['asdf.js'])
  t.equal(mainCommand, 'run')
  t.equal(mainBin, mainBinActual)
  t.strictSame(args, ['asdf.js'])
})

t.test('explicit run', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), 'run'],
  })
  const { values, positionals, mainCommand, args, mainBin } =
    await t.mockImport<typeof import('../dist/esm/main-config.js')>(
      '../dist/esm/main-config.js',
    )

  t.strictSame(values, valuesActual)
  t.strictSame(positionals, ['run'])
  t.equal(mainCommand, 'run')
  t.equal(mainBin, mainBinActual)
  t.strictSame(args, [])
})

t.test('explicit run positional', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), 'run', 'asdf.js'],
  })
  const { values, positionals, mainCommand, args, mainBin } =
    await t.mockImport<typeof import('../dist/esm/main-config.js')>(
      '../dist/esm/main-config.js',
    )

  t.strictSame(values, valuesActual)
  t.strictSame(positionals, ['run', 'asdf.js'])
  t.equal(mainCommand, 'run')
  t.equal(mainBin, mainBinActual)
  t.strictSame(args, ['asdf.js'])
})

t.test('--help, run help', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), '--help'],
  })
  const { values, positionals, mainCommand, args, mainBin } =
    await t.mockImport<typeof import('../dist/esm/main-config.js')>(
      '../dist/esm/main-config.js',
    )

  t.strictSame(values, { ...valuesActual, help: true })
  t.strictSame(positionals, [])
  t.equal(mainCommand, 'help')
  t.equal(mainBin, mainBinActual)
  t.strictSame(args, [])
})

t.test('--version, run version', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), '--version'],
  })
  const { values, positionals, mainCommand, args, mainBin } =
    await t.mockImport<typeof import('../dist/esm/main-config.js')>(
      '../dist/esm/main-config.js',
    )

  t.strictSame(values, { ...valuesActual, version: true })
  t.strictSame(positionals, [])
  t.equal(mainCommand, 'version')
  t.equal(mainBin, mainBinActual)
  t.strictSame(args, ['version'])
})

t.test('--versions, run versions', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), '--versions'],
  })
  const { values, positionals, mainCommand, args, mainBin } =
    await t.mockImport<typeof import('../dist/esm/main-config.js')>(
      '../dist/esm/main-config.js',
    )

  t.strictSame(values, { ...valuesActual, versions: true })
  t.strictSame(positionals, [])
  t.equal(mainCommand, 'versions')
  t.equal(mainBin, mainBinActual)
  t.strictSame(args, ['versions'])
})
