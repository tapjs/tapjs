import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
const files = process.argv.slice(2)
const root = JSON.parse(
  readFileSync(
    fileURLToPath(new URL('../package.json', import.meta.url)),
    'utf8',
  ),
)

const sortObj = o =>
  o &&
  Object.fromEntries(
    Object.entries(o).sort(([a], [b]) => a.localeCompare(b, 'en')),
  )

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
    engines: _,
    ...rest
  } = pkg
  writeFileSync(
    f,
    JSON.stringify(
      {
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
        dependencies: sortObj(dependencies),
        devDependencies: sortObj(devDependencies),
        peerDependencies: sortObj(peerDependencies),
        tap,
        ...rest,
        engines: root.engines,
      },
      null,
      2,
    ) + '\n',
  )
}
