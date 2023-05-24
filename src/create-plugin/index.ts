import { randomInt } from 'node:crypto'
import { Init } from 'npm-init-template'

const { prompt, build, values, positionals, run } = new Init(
  import.meta.url
)

// random chars for a default name
const chars = 'bcdfghjklmnpqrstvwxz'
const rc = () => chars.charAt(randomInt(chars.length))
const str = (): string =>
  `${rc()}${rc()}${rc()}${rc()}-${rc()}${rc()}${rc()}${rc()}`

const name = await prompt('Plugin name: ', 'name', {
  default: `tap-plugin-${str()}`,
})
values.className = name
  .replace(/^.*?\/([^\/]+)$/, '$1')
  .replace(/^tap-plugin[-.]/, '')
  .split('-')
  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
  .join('')
await prompt('Plugin description: ', 'description', { default: '' })
await prompt('Run npm install? ', 'install', { default: 'Yes' })
await prompt('Run git init? ', 'git', { default: 'Yes' })
const defTarget = positionals[0] || String(values.name.split('/').pop())

const target = await prompt('Folder to create in? ', 'target', {
  default: defTarget,
})

build({
  templates: './src',
  target,
  exclude: values.git.trim().toLowerCase().startsWith('y')
    ? []
    : ['.git*', '.github/**'],
})

if (values.install.trim().toLowerCase().startsWith('y')) {
  await run('npm install')
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
