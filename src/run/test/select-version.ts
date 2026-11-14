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
  readFileSync(new URL('./fixtures/abbrev.json', import.meta.url), 'utf8'),
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
      // npm cannot tell, so the registry is asked directly
      npmInProject: () => ({ status: 1, stdout: '' }),
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
      // npm cannot tell, so the registry is asked directly
      npmInProject: () => ({ status: 1, stdout: '' }),
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
      // npm cannot tell, so the registry is asked directly
      npmInProject: () => ({ status: 1, stdout: '' }),
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
      // npm cannot tell, so the registry is asked directly
      npmInProject: () => ({ status: 1, stdout: '' }),
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

type NpmResult = { status: number | null; stdout: string }

const mockSelectVersion = (
  t: Tap.Test,
  npmInProject: (args: string[], cwd: string) => NpmResult,
  packument: () => Promise<Packument>,
) =>
  t.mockImport<typeof import('../dist/esm/select-version.js')>(
    '../dist/esm/select-version.js',
    {
      '../dist/esm/npm.js': { npmInProject },
      fs: t.createMock(fs, {
        readFileSync: () => JSON.stringify({ version: '0.0.0-17' }),
      }),
      pacote: { default: { packument } },
    },
  )

const noPacote = async (): Promise<Packument> => {
  throw new Error('the registry must not be asked directly')
}

const npmAnswers =
  (
    list: NpmResult,
    manifests: NpmResult,
    calls: { args: string[]; cwd: string }[] = [],
  ) =>
  (args: string[], cwd: string): NpmResult => {
    calls.push({ args, cwd })
    return args.includes('dist-tags') ? list : manifests
  }

const ok = (value: unknown): NpmResult => ({
  status: 0,
  stdout: JSON.stringify(value),
})
const failed: NpmResult = { status: 1, stdout: '' }

t.test('the versions come from npm, run in the project root', async t => {
  const calls: { args: string[]; cwd: string }[] = []
  const { selectVersion } = await mockSelectVersion(
    t,
    npmAnswers(
      ok({
        versions: ['1.0.0-alpha.1', '1.0.0', '2.0.0'],
        'dist-tags': { latest: '1.0.0' },
      }),
      ok([
        { version: '1.0.0-alpha.1' },
        {
          version: '1.0.0',
          peerDependencies: { '@tapjs/core': '>=0.0.0-0' },
        },
        { version: '2.0.0', peerDependencies: { '@tapjs/core': '^99' } },
      ]),
      calls,
    ),
    noPacote,
  )
  const config = { projectRoot: '/some/project' } as LoadedConfig
  t.equal(await selectVersion('@scope/plugin', undefined, config), '1.0.0')
  t.strictSame(calls, [
    {
      args: ['view', '@scope/plugin', 'versions', 'dist-tags', '--json'],
      cwd: '/some/project',
    },
    {
      // an exact version is a range that matches itself, so prereleases
      // are included in the second lookup.
      args: [
        'view',
        '@scope/plugin@1.0.0-alpha.1 || 1.0.0 || 2.0.0',
        'version',
        'peerDependencies',
        '--json',
      ],
      cwd: '/some/project',
    },
  ])
})

t.test('a prerelease is used when it is all there is', async t => {
  const { selectVersion } = await mockSelectVersion(
    t,
    npmAnswers(
      ok({
        versions: ['1.0.0-alpha.1', '1.0.0-alpha.2'],
        'dist-tags': { alpha: '1.0.0-alpha.2' },
      }),
      ok([{ version: '1.0.0-alpha.1' }, { version: '1.0.0-alpha.2' }]),
    ),
    noPacote,
  )
  t.equal(await selectVersion('plugin', '*', config), '1.0.0-alpha.2')
})

t.test('npm prints single values and bare versions', async t => {
  const { selectVersion } = await mockSelectVersion(
    t,
    npmAnswers(
      ok({ versions: '1.0.0', 'dist-tags': { latest: '1.0.0' } }),
      ok('1.0.0'),
    ),
    noPacote,
  )
  t.equal(await selectVersion('plugin', '*', config), '1.0.0')
})

t.test('the registry is asked directly when npm cannot tell', async t => {
  const goodList = ok({
    versions: ['0.0.0-5'],
    'dist-tags': { latest: '0.0.0-5' },
  })
  const goodManifests = ok(['0.0.0-5'])
  for (const [name, list, manifests] of [
    ['npm fails to list', failed, goodManifests],
    ['npm lists nothing', { status: 0, stdout: '' }, goodManifests],
    ['npm fails on the versions', goodList, failed],
    [
      'npm shows nothing for the versions',
      goodList,
      { status: 0, stdout: '' },
    ],
    [
      'npm prints something else',
      { status: 0, stdout: 'not json' },
      goodManifests,
    ],
  ] as [string, NpmResult, NpmResult][]) {
    let asked = 0
    const { selectVersion } = await mockSelectVersion(
      t,
      npmAnswers(list, manifests),
      async () => {
        asked++
        return esbkPacku
      },
    )
    t.equal(
      await selectVersion('@tapjs/esbuild-kit', '*', config),
      '0.0.0-17',
      name,
    )
    t.equal(asked, 1, `${name}: asked the registry directly`)
  }
})
