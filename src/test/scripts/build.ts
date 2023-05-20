#!/usr/bin/env node --loader=ts-node/esm --no-warnings

import { globSync } from 'glob'
import { ConfigOptionBase, isConfigOption } from 'jackspeak'
import { mkdirp } from 'mkdirp'
import { spawnSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'

if (typeof process.argv[2] !== 'string') {
  console.error(
    'usage: generate-tap-test-class [...plugins]'
  )
  process.exit(1)
}

const templateFile = resolve(
  __dirname,
  './test-template.ts'
)
let template = readFileSync(templateFile, 'utf8')

const dir = resolve(
  __dirname,
  '../node_modules/@tapjs/.test-built'
)
mkdirp.sync(resolve(dir, 'src'))
const out = resolve(dir, 'src/index.ts')

const copies = globSync(
  ['tsconfig*.json', 'fixup.sh', 'package-template.json'],
  { cwd: __dirname, absolute: true }
)
for (const f of copies) {
  const b = basename(f)
  const t =
    b === 'package-template.json' ? 'package.json' : b
  writeFileSync(resolve(dir, t), readFileSync(f))
}

const plugins = process.argv.slice(2)
const seen = new Set<string>()

// If a plugin does not appear in hasConfig, hasPlugin, or hasLoader,
// raise an error and do not continue.
const hasConfig = new Map<string, string>()
const hasPlugin = new Map<string, string>()
const hasLoader = new Map<string, string>()

const signature = plugins
  .sort((a, b) => a.localeCompare(b, 'en'))
  .join('\n')
const signatureCode = `export const signature = ${JSON.stringify(
  signature
)}\n`
const configs = new Map<
  string,
  {
    [field: string]: {
      type: 'boolean' | 'string' | 'number'
      multiple?: boolean | undefined
      [k: string]: any
    }
  }
>()

const pluginNames = plugins.map(p => {
  // this also verifies that all plugins can be loaded, or it'll blow
  // up at this point.
  let imp: {
    plugin?: (...a: any[]) => any
    config?: {
      [k: string]: ConfigOptionBase<
        'string' | 'number' | 'boolean',
        boolean
      >
    }
    loader?: string
  }
  try {
    imp = require(p)
  } catch (er) {
    throw (
      `'${p}' does not appear to be a tap plugin. Could not load ` +
      `module with require().\n${
        er instanceof Error ? er.message : er
      }`
    )
  }
  const n =
    'Plugin_' +
    basename(p)
      .replace(/\.([cm]?[jt]sx?)$/, '')
      .replace(/[-_.]+(.)/g, (_, $1) => $1.toUpperCase())
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .trim()
      .replace(' ', '_')
  let name: string
  if (!seen.has(n)) {
    name = n
  } else {
    let i = 0
    while (seen.has(n + '_' + ++i)) {}
    const ni = `${n}_${i}`
    name = ni
  }
  seen.add(name)
  let isPlugin = false
  if (imp.config) {
    hasConfig.set(p, name)
    configs.set(p, imp.config)
    isPlugin = true
  }
  if (typeof imp.plugin === 'function') {
    hasPlugin.set(p, name)
    isPlugin = true
  }
  if (typeof imp.loader === 'string') {
    hasLoader.set(p, imp.loader)
    isPlugin = true
  }
  if (!isPlugin) {
    throw (
      `'${p}' does not appear to be a tap plugin, as it does not export ` +
      'a plugin function, config object, or loader module identifier.'
    )
  }
  return name
})

const pluginImport =
  plugins
    .map(
      (p, i) =>
        `import * as _${
          pluginNames[i]
        } from ${JSON.stringify(p)}\n`
    )
    .join('') +
  [...hasPlugin.values()]
    .map(name => `export const ${name} = _${name}.plugin\n`)
    .join('')

const pluginsConfig = (() => {
  let code = `export const config = <C extends ConfigSet>(jack: Jack<C>) => `
  if (!hasConfig.size) return code + 'jack\n'

  code += '{\n'
  let c = 0
  for (const [p, name] of hasConfig.entries()) {
    for (const [field, cfg] of Object.entries(
      configs.get(p) || {}
    )) {
      const jf = JSON.stringify(field)
      code += `  const config_${c} = _${name}.config[${jf}]\n`
      const t = JSON.stringify(cfg.type)
      const m = JSON.stringify(!!cfg.multiple)
      const msg = `Invalid config option ${jf} defined in plugin: ${p}`
      if (!isConfigOption(cfg, cfg.type, !!cfg.multiple)) {
        throw new Error(msg)
      }
      const mc = JSON.stringify(msg)
      code += `  if (!isConfigOption(config_${c}, ${t}, ${m})) {\n`
      code += `    throw new Error(${mc})\n`
      code += '  }\n'
      c++
    }
  }

  // now ts should know that they're all legit, and we've verified
  // here as well, so the build would fail if they weren't.
  c = 0
  code += '  return jack\n'
  for (const p of hasConfig.keys()) {
    const fp = `From plugin: ${p}`
    code += `    .heading(${JSON.stringify(fp)})\n`
    for (const [field, cfg] of Object.entries(
      configs.get(p) || {}
    )) {
      const jf = JSON.stringify(field)
      const fn =
        cfg.type === 'boolean'
          ? cfg.multiple
            ? 'flagList'
            : 'flag'
          : cfg.type === 'number'
          ? cfg.multiple
            ? 'numList'
            : 'num'
          : cfg.multiple
          ? 'optList'
          : 'opt'
      code += `    .${fn}({[${jf}]: config_${c++}})\n`
    }
  }

  code += '}\n'

  return code
})()

const pluginsCode = `const plugins: PI[] = [
${[...hasPlugin.values()]
  .map(name => `  ${name},\n`)
  .join('')}]
export const pluginsLoaded = new Map<string, PI>([
${[...hasPlugin.values()]
  .map(
    name =>
      `  ['${name.substring('Plugin_'.length)}', ${name}],`
  )
  .join('\n')}
])

type Plug =
  | TestBase
  | { t: Test }
${[...hasPlugin.values()]
  .map(name => `  | ReturnType<typeof ${name}>\n`)
  .join('')}
type PlugKeys =
  | keyof TestBase
  | 't'
${[...hasPlugin.values()]
  .map(name => `  | keyof ReturnType<typeof ${name}>\n`)
  .join('')}`

const opts = `type SecondParam<
  T extends [any] | [any, any],
> = T extends [any, any] ? T[1] : unknown

${[...hasPlugin.values()]
  .map(
    name =>
      `export type ${name}_Opts = SecondParam<
  Parameters<typeof ${name}>
>\n`
  )
  .join('')}
export type TestOpts = TestBaseOpts${[...hasPlugin.values()]
  .map(name => `\n  & ${name}_Opts`)
  .join('')}
`

const testInterface = `type TTest = TestBase
${[...hasPlugin.values()]
  .map(name => `  & ReturnType<typeof ${name}>\n`)
  .join('')}
`

const pluginLoaders = `export const loaders = ${JSON.stringify(
  [...hasLoader.values()],
  null,
  2
)}
`

const swapTag = (
  src: string,
  tag: string,
  code: string
): string => {
  const st = '//{{' + tag + ' START}}\n'
  const et = '//{{' + tag + ' END}}\n'
  const start = src.indexOf(st)
  const end = src.indexOf(et)
  return (
    src.substring(0, start) +
    code +
    src.substring(end + et.length)
  )
}

const swapTags = (
  src: string,
  tags: { [k: string]: string }
): string => {
  let res = src
  for (const [tag, code] of Object.entries(tags)) {
    res = swapTag(res, tag, code)
  }
  return res
}

writeFileSync(
  out,
  swapTags(template, {
    'HEADER COMMENT': `// This file is automatically generated, please do not edit\n`,
    'PLUGIN IMPORT': pluginImport,
    'PLUGINS CODE': pluginsCode,
    'PLUGINS CONFIG': pluginsConfig,
    OPTS: opts,
    'PLUGIN SIGNATURE': signatureCode,
    'TEST INTERFACE': testInterface,
    LOADERS: pluginLoaders,
  })
)

spawnSync('npm', ['run', 'prepare'], {
  cwd: dir,
  stdio: 'inherit',
})

export {}
