#!/usr/bin/env node --loader=ts-node/esm --no-warnings
import { spawnSync } from 'child_process'
import { globSync } from 'glob'
import { basename, resolve } from 'path'

const builtins = globSync('*.ts', {
  cwd: resolve(__dirname, '../src/core/src/plugin'),
})
  .map(f => basename(f, '.ts'))
  .map(p => `@tapjs/core/plugin/${p}`)
  .concat('@tapjs/asserts')
  .concat('@tapjs/snapshot')

console.log('building Test class with:')
console.log(builtins.map(b => `  ${b}`).join('\n'))

const build = resolve(
  __dirname,
  '../src/test/scripts/build.ts'
)

spawnSync(
  build,
  builtins,
  {
    stdio: 'inherit',
  }
)
