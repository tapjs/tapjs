import { spawnSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')

const builtinNames = readFileSync(
  resolve(__dirname, 'default-plugins.txt'),
  'utf8'
)
  .trim()
  .split('\n')

const builtins = builtinNames.map(p => `@tapjs/${p}`)

console.log('building Test class with:')
console.log(builtins.map(b => `  ${b}`).join('\n'))

const build = resolve(__dirname, '../src/test/scripts/build.mts')

const defaultPluginsFile = resolve(
  __dirname,
  '../src/test/src/default-plugins.ts'
)
writeFileSync(
  defaultPluginsFile,
  `export const defaultPlugins = ${JSON.stringify(builtins, null, 2)
    .replace(/"/g, `'`)
    .replace(/'\n\]/, `',\n]`)}\n`
)

// make them all depended on by the @tapjs/test pkg, so that pnpm links them
// however, we REMOVE these deps before the build runs, because otherwise
// nx gets confused about the circular dependency link.
const testPJ = resolve(__dirname, '../src/test/package.json')
const testPkg = JSON.parse(readFileSync(testPJ, 'utf8')) as Record<
  string,
  any
>
testPkg.dependencies ??= {}
const builtinDeps: Record<string, string> = Object.fromEntries(
  builtinNames.map(name => {
    const pj = resolve(__dirname, `../src/${name}/package.json`)
    const d = `@tapjs/${name}`
    delete testPkg.dependencies[d]
    const { version } = JSON.parse(readFileSync(pj, 'utf8')) as {
      version: string
    }
    return [d, version]
  })
)
// now write the @tapjs/test package with all the builtins as deps,
// and keep them sorted.
testPkg.dependencies = Object.fromEntries(
  Object.entries(
    Object.assign(testPkg.dependencies, builtinDeps)
  ).sort(([a], [b]) => a.localeCompare(b, 'en'))
)
// tell nx not to freak out
testPkg.nx = {
  implicitDependencies: [
    '!@tapjs/core',
    ...builtins.map(b => `!${b}`),
  ],
}
writeFileSync(testPJ, JSON.stringify(testPkg, null, 2) + '\n')

const prepare = (...p: string[]) => {
  const res = spawnSync(
    'npx',
    [
      'nx',
      'run-many',
      '-t',
      'prepare',
      '--projects={' + p.join(',') + '}',
    ],
    { stdio: 'inherit' }
  )
  if (res.status || res.signal) throw res
}

// make sure core and then all the builtins are built
prepare('src/core', ...builtins)

spawnSync(
  process.execPath,
  ['--loader=ts-node/esm', '--no-warnings', build, ...builtins],
  {
    stdio: 'inherit',
  }
)
