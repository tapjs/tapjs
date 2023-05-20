#!/usr/bin/env node --loader=ts-node/esm --no-warnings
import { spawnSync } from 'child_process'
import { writeFileSync } from 'fs'
import { globSync } from 'glob'
import { basename, resolve } from 'path'

const builtins = globSync('*.ts', {
  cwd: resolve(__dirname, '../src/core/src/plugin'),
})
  .map(f => basename(f, '.ts'))
  .map(p => `@tapjs/core/plugin/${p}`)
  .concat('@tapjs/spawn')
  .concat('@tapjs/stdin')
  .concat('@tapjs/asserts')
  .concat('@tapjs/snapshot')
  .concat('@tapjs/fixture')
  .concat('@tapjs/mock')
  .concat('@tapjs/intercept')
  .concat('@tapjs/filter')

console.log('building Test class with:')
console.log(builtins.map(b => `  ${b}`).join('\n'))

const build = resolve(
  __dirname,
  '../src/test/scripts/build.ts'
)

const defaultPluginsFile = resolve(
  __dirname,
  '../src/test/src/default-plugins.ts'
)
writeFileSync(
  defaultPluginsFile,
  `export const defaultPlugins = ${JSON.stringify(
    builtins,
    null,
    2
  )}\n`
)

spawnSync(build, builtins, {
  stdio: 'inherit',
})

writeFileSync(
  '.taprc',
  // have to break it up or else vim thinks *this* file is yaml lol
  '# vi' +
    `m: set filetype=yaml :
include: src/*/test
typecheck: false
`
)
