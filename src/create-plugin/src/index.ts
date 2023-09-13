#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { resolveImport } from 'resolve-import'
import { randomInt } from 'node:crypto'
import { basename, dirname } from 'node:path'
import { Init } from 'npm-init-template'

const corePkg = JSON.parse(
  readFileSync(
    await resolveImport('@tapjs/core/package.json', import.meta.url),
    'utf8'
  )
)
const { version: coreVersion } = corePkg

const { prompt, build, values, positionals, run } = new Init(
  import.meta.url
)

values.coreVersion = `^${coreVersion}`

// random chars for a default name
const chars = 'bcdfghjklmnpqrstvwxz'
const rc = () => chars.charAt(randomInt(chars.length))
const str = (): string =>
  `${rc()}${rc()}${rc()}${rc()}-${rc()}${rc()}${rc()}${rc()}`

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9_.]+/g, ' ')
    .trim()
    .replace(/ /g, '-')

const pkgName = (s: string) => {
  if (/^@[^\/]+\/.+$/.test(s)) {
    const sp = s.split('/')
    const ns = String(sp[0])
    return (
      '@' +
      slugify(ns.substring(1)) +
      '/' +
      slugify(sp.slice(1).join('/'))
    )
  }
  const base = basename(s)
  const dir = basename(dirname(s))
  if (dir !== '.') {
    return `@${slugify(dir)}/${slugify(base)}`
  }
  return slugify(base)
}

const defName =
  (positionals[0] && pkgName(positionals[0])) || `tap-plugin-${str()}`

const name = (values.name = pkgName(
  await prompt('Plugin package name: ', 'name', {
    default: defName,
  })
))
values.className = name
  .replace(/^.*?\/([^\/]+)$/, '$1')
  .replace(/^tap-plugin[-.]/, '')
  .split('-')
  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
  .join('')
await prompt('Plugin description: ', 'description', {
  default: '',
})
await prompt('Run npm install? ', 'install', { default: 'Yes' })
await prompt('Run git init? ', 'git', { default: 'Yes' })
const defTarget = positionals[0] ? positionals[0] : basename(name)

const target = await prompt('Folder to create in? ', 'target', {
  default: defTarget,
})

await build({
  // from the build location, not the src location
  templates: '../../templates',
  target,
  exclude: values.git?.trim().toLowerCase().startsWith('y')
    ? []
    : ['.git*', '.github/**'],
})

if (values.install?.trim().toLowerCase().startsWith('y')) {
  await run('npm install')
}

if (values.git?.trim().toLowerCase().startsWith('y')) {
  await run('git init')
}

console.log(`
Done!

Stubbed source at ${target}/src/index.ts
Stubbed test at ${target}/test/index.ts

Build by running:
  npm run prepare
(this happens automatically most times you'll need it)

Run tests:
  npm test

Bump the version and publish by running:
  npm version <patch|minor|major>

Once published, add to projects by running:
  tap plugin add ${values.name}
`)
