import { readFile } from 'fs/promises'
import { glob } from 'glob'
import { isBuiltin } from 'module'
import { resolve } from 'path'
import t from 'tap'
import { fileURLToPath } from 'url'

const src = fileURLToPath(new URL('../src', import.meta.url))
const files = await glob('**/*.@(ts|tsx|mts|cts)', {
  cwd: src,
  posix: true,
})

const {
  name: pkgName,
  dependencies,
  peerDependencies,
} = JSON.parse(
  await readFile(resolve(src, '../package.json'), 'utf8'),
) as {
  name: string
  dependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

const deps = { ...dependencies, ...peerDependencies }

const importRe =
  /(?:\n|^)(?:im|ex)port (?!type [\s\S\n]+?from)(?:[\s\S\n]*?from )?'(@[^\/]+\/[^'\/]+|[^\.][^'\/]+)(\/[^']+)?'/g
const asyncImportRe =
  /import\('(@[^\/]+\/[^'\/]+|[^\.][^'\/]+)(\/[^']+)?'\)/g
const foundIn = new Map<string, string[]>()
for (const file of files) {
  const content = await readFile(resolve(src, file), 'utf8')
  let m: null | (RegExpExecArray & [string, string])
  const deps = new Set<string>()
  while (
    null !==
    (m = importRe.exec(content) as
      | null
      | (RegExpExecArray & [string, string]))
  ) {
    if (isBuiltin(m[1]) || m[1] === pkgName) continue
    t.comment(file, m.index, [...m])
    deps.add(m[1])
  }
  while (
    null !==
    (m = asyncImportRe.exec(content) as
      | null
      | (RegExpExecArray & [string, string]))
  ) {
    if (isBuiltin(m[1]) || m[1] === pkgName) continue
    deps.add(m[1])
  }
  for (const dep of deps) {
    const f = foundIn.get(dep) || []
    f.push(file)
    foundIn.set(dep, f)
  }
}

if (
  !foundIn.size &&
  (pkgName === '@tapjs/test' || !Object.keys(deps).length)
) {
  t.pass('no deps to check')
} else {
  if (pkgName !== '@tapjs/test') {
    for (const dep of Object.keys(deps)) {
      t.ok(foundIn.get(dep), 'declared, should be used: ' + dep, {
        [dep]: deps[dep],
      })
      foundIn.delete(dep)
    }
  }
  for (const [dep, f] of foundIn.entries()) {
    t.match(
      deps,
      { [dep]: String },
      'loaded, should be declared: ' + dep,
      { paths: f },
    )
  }
}
