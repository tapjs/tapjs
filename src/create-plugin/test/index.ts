import t from 'tap'

import { spawn } from 'child_process'
import { readFileSync } from 'fs'
import { relative } from 'path'
import { resolveImport } from 'resolve-import'
import { fileURLToPath } from 'url'
const binURL = await resolveImport('../index.js', import.meta.url)
const bin = fileURLToPath(binURL)

const {
  default: { version: coreVersion },
} = await import('@tapjs/core/package.json', {
  assert: { type: 'json' },
})

class MockInit {
  constructor(from: string) {
    if (!from.startsWith(binURL + '?'))
      throw new Error('wrong from url')
  }
  build() {
    didBuild = true
  }
  run(cmd: string) {
    runs.push(cmd)
  }
  async prompt(
    _: string,
    name: keyof typeof prompts,
    d: { default?: any }
  ) {
    return (values[name] =
      prompts[name] === undefined ? d.default : prompts[name])
  }
  get values() {
    return values
  }
  get positionals() {
    return positionals
  }
}

let didBuild = false

const positionals: string[] = []

const runs: string[] = []

let prompts: {
  name?: string
  description?: string
  install?: string
  git?: string
  target?: string
} = {}

let values: {
  name?: string
  description?: string
  install?: string
  git?: string
  target?: string
} = {}

t.beforeEach(() => {
  prompts = {}
  values = {}
  didBuild = false
  runs.length = 0
  positionals.length = 0
})

const logs = t.capture(console, 'log')

t.test('no positionals, accept all the defaults', async t => {
  await t.mockImport('../index.js', {
    'npm-init-template': { Init: MockInit },
  })
  t.matchOnly(values, {
    coreVersion,
    name: /^tap-plugin-[a-z]{4}-[a-z]{4}$/,
    className: /^[A-Z][a-z]{3}[A-Z][a-z]{3}$/,
    description: '',
    install: 'Yes',
    git: 'Yes',
    target: values.name,
  })
  t.strictSame(logs.args(), [
    [
      `
Done!

Stubbed source at ${values.target}/src/index.ts
Stubbed test at ${values.target}/test/index.ts

Build by running:
  npm run prepare
(this happens automatically most times you'll need it)

Run tests:
  npm test

Bump the version and publish by running:
  npm version <patch|minor|major>

Once published, add to projects by running:
  tap plugin add ${values.name}
`,
    ],
  ])
  t.equal(didBuild, true)
  t.strictSame(runs, ['npm install', 'git init'])
})

t.test('positional arg, change some defaults', async t => {
  prompts = {
    name: 'name',
    description: 'a description',
    install: 'no',
    git: 'no',
  }
  positionals.push('target-location')
  await t.mockImport('../index.js', {
    'npm-init-template': { Init: MockInit },
  })
  t.matchOnly(values, {
    coreVersion,
    name: 'name',
    className: 'Name',
    description: 'a description',
    install: 'no',
    git: 'no',
    target: 'target-location',
  })
  t.strictSame(logs.args(), [
    [
      `
Done!

Stubbed source at target-location/src/index.ts
Stubbed test at target-location/test/index.ts

Build by running:
  npm run prepare
(this happens automatically most times you'll need it)

Run tests:
  npm test

Bump the version and publish by running:
  npm version <patch|minor|major>

Once published, add to projects by running:
  tap plugin add name
`,
    ],
  ])
  t.equal(didBuild, true)
  t.strictSame(runs, [], 'nothing to run')
})

t.test('actually build and verify', async t => {
  const dir = relative(process.cwd(), t.testdir())
  const proc = spawn(process.execPath, [bin, dir])
  const out: Buffer[] = []
  proc.stdout.on('data', c => out.push(c))
  const err: Buffer[] = []
  proc.stderr.on('data', c => err.push(c))
  // not actually a valid name, but it gets correced
  const responses = [
    '@xyz/my plugin name\n',
    'plugin description\n',
    'No\n',
    'No\n',
    '\n',
  ]
  proc.stdout.on('data', () => {
    const r = responses.shift()
    if (r) proc.stdin.write(r)
    else proc.stdin.end()
  })
  return new Promise<void>(res => {
    proc.on('close', async (code, signal) => {
      t.equal(code, 0)
      t.equal(signal, null)
      t.strictSame(
        [
          Buffer.concat(out).toString(),
          Buffer.concat(err).toString(),
        ],
        [
          `Plugin package name: (test-tap-testdir-index-actually-build-and-verify) Plugin description: Run npm install? (Yes) Run git init? (Yes) Folder to create in? (test/tap-testdir-index-actually-build-and-verify) 
Done!

Stubbed source at ${dir}/src/index.ts
Stubbed test at ${dir}/test/index.ts

Build by running:
  npm run prepare
(this happens automatically most times you'll need it)

Run tests:
  npm test

Bump the version and publish by running:
  npm version <patch|minor|major>

Once published, add to projects by running:
  tap plugin add @xyz/my-plugin-name

`,
          '',
        ]
      )
      const pj = readFileSync(t.testdirName + '/package.json', 'utf8')
      const manifest = JSON.parse(pj)
      t.strictSame(manifest.peerDependencies, {
        '@tapjs/core': `^${coreVersion}`,
      })
      // don't put that in the snapshot, because otherwise it'll fail
      // in the test we run on everything when bumping versions
      delete manifest.peerDependencies
      t.matchSnapshot(manifest)
      res()
    })
  })
})
