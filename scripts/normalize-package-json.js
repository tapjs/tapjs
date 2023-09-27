import { readFileSync, writeFileSync } from 'fs'
const files = process.argv.slice(2)

for (const f of files) {
  const pkg = JSON.parse(readFileSync(f, 'utf8'))
  const {
    name,
    version,
    description,
    author,
    tshy,
    type,
    bin,
    main,
    types,
    exports,
    files,
    scripts,
    license,
    dependencies,
    devDependencies,
    peerDependencies,
    tap,
    ...rest
  } = pkg
  writeFileSync(f, JSON.stringify({
    name,
    version,
    description,
    tshy,
    type,
    bin,
    main,
    types,
    exports,
    files,
    scripts,
    author,
    license,
    dependencies,
    devDependencies,
    peerDependencies,
    tap,
    ...rest,
  }, null, 2) + '\n')
}
