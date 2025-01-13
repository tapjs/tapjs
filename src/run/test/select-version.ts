import t from 'tap'

import { LoadedConfig } from '@tapjs/config'
import * as fs from 'node:fs'
import { readFileSync } from 'node:fs'
import { Packument } from 'pacote'

const config = {} as unknown as LoadedConfig

const esbkPacku: Packument = JSON.parse(
  readFileSync(
    new URL('./fixtures/esbuild-kit.json', import.meta.url),
    'utf8',
  ),
)

// shuffle version order so that we exercise the newIfGt check
const abbrevPacku_: Packument = JSON.parse(
  readFileSync(
    new URL('./fixtures/abbrev.json', import.meta.url),
    'utf8',
  ),
)
const abbrevPacku: Packument = {
  ...abbrevPacku_,
  versions: Object.fromEntries(
    Object.entries(abbrevPacku_.versions).sort(([a], [b]) => {
      const ae = !(Number(a.replace(/[^0-9]+/g, '')) % 2)
      const be = !(Number(b.replace(/[^0-9]+/g, '')) % 2)
      return (
        ae === be ? a.localeCompare(b, 'en')
        : ae ? 1
        : -1
      )
    }),
  ),
}

t.test('look up a version that has a peer dep', async t => {
  const { selectVersion } = await t.mockImport<
    typeof import('../dist/esm/select-version.js')
  >('../dist/esm/select-version.js', {
    '../dist/esm/npm.js': {
      npmBg: () => ({
        stdout: 'https://npm.registry',
      }),
    },
    fs: t.createMock(fs, {
      readFileSync: () =>
        JSON.stringify({
          version: '0.0.0-5',
        }),
    }),
    pacote: {
      default: {
        packument: async () => esbkPacku,
      },
    },
  })
  t.equal(
    await selectVersion('@tapjs/esbuild-kit', '*', config),
    '0.0.0-5',
  )
})

t.test('look up a version that is latest', async t => {
  const { selectVersion } = await t.mockImport<
    typeof import('../dist/esm/select-version.js')
  >('../dist/esm/select-version.js', {
    '../dist/esm/npm.js': {
      npmBg: () => ({
        stdout: 'https://npm.registry',
      }),
    },
    fs: t.createMock(fs, {
      readFileSync: () =>
        JSON.stringify({
          version: '0.0.0-17',
        }),
    }),
    pacote: {
      default: {
        packument: async () => esbkPacku,
      },
    },
  })
  t.equal(
    await selectVersion('@tapjs/esbuild-kit', '*', config),
    '0.0.0-17',
  )
})

t.test('fail to find a satisfying version', async t => {
  const { selectVersion } = await t.mockImport<
    typeof import('../dist/esm/select-version.js')
  >('../dist/esm/select-version.js', {
    '../dist/esm/npm.js': {
      npmBg: () => ({
        stdout: 'https://npm.registry',
      }),
    },
    fs: t.createMock(fs, {
      readFileSync: () =>
        JSON.stringify({
          version: '0.0.0-17',
        }),
    }),
    pacote: {
      default: {
        packument: async () => esbkPacku,
      },
    },
  })
  t.equal(
    await selectVersion('@tapjs/esbuild-kit', '1.0.0', config),
    undefined,
  )
})

t.test('plugin that does not have peer dep on core', async t => {
  const { selectVersion } = await t.mockImport<
    typeof import('../dist/esm/select-version.js')
  >('../dist/esm/select-version.js', {
    '../dist/esm/npm.js': {
      npmBg: () => ({
        stdout: 'https://npm.registry',
      }),
    },
    fs: t.createMock(fs, {
      readFileSync: () =>
        JSON.stringify({
          version: '0.0.0-17',
        }),
    }),
    pacote: {
      default: {
        packument: async () => abbrevPacku,
      },
    },
  })
  t.equal(await selectVersion('abbrev', '*', config), '2.0.0')
  t.equal(await selectVersion('abbrev', '^2.0.1', config), '2.0.1')
  t.equal(await selectVersion('abbrev', '1', config), '1.1.1')
})
