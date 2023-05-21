#!/usr/bin/env node --loader=ts-node/esm --no-warnings
import { spawnSync } from 'child_process'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const builtins = [
  '@tapjs/typescript',
  '@tapjs/before',
  '@tapjs/before-each',
  '@tapjs/after',
  '@tapjs/after-each',
  '@tapjs/spawn',
  '@tapjs/stdin',
  '@tapjs/asserts',
  '@tapjs/snapshot',
  '@tapjs/fixture',
  '@tapjs/mock',
  '@tapjs/intercept',
  '@tapjs/filter',
]

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

const prepare = (...p: string[]) => {
  const res = spawnSync(
    'npm',
    [
      'run',
      'prepare',
      ...p.reduce(
        (s: string[], b) => s.concat('-w', b),
        []
      ),
    ],
    { stdio: 'inherit' }
  )
  if (res.status || res.signal) throw res
}

// make sure core and then all the builtins are built
prepare('src/core')
prepare(...builtins)

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
