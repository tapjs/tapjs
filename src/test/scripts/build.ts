import { globSync } from 'glob'
import { ConfigOptionBase, isConfigOption } from 'jackspeak'
import { mkdirp } from 'mkdirp'
import { spawnSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'

if (typeof process.argv[2] !== 'string') {
  console.error('usage: generate-tap-test-class [...plugins]')
  process.exit(1)
}

const templateFile = resolve(__dirname, './test-template.ts')
let template = readFileSync(templateFile, 'utf8')

const defaultTarget = resolve(
  __dirname,
  '../node_modules/@tapjs/.test-built'
)

// override in testing, otherwise always the default
/* c8 ignore start */
const dir = process.env._TESTING_TEST_BUILD_TARGET_ || defaultTarget
/* c8 ignore stop */

mkdirp.sync(resolve(dir, 'src'))
const out = resolve(dir, 'src/index.ts')

const copies = globSync(
  ['tsconfig*.json', 'fixup.sh', 'package-template.json'],
  { cwd: __dirname, absolute: true }
)
for (const f of copies) {
  const b = basename(f)
  const t = b === 'package-template.json' ? 'package.json' : b
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
const signatureCode = `export const signature = \`${signature}\`
`
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

const pluginImport = plugins
  .map(
    (p, i) =>
      `import * as ${pluginNames[i]} from ${JSON.stringify(p)}\n`
  )
  .join('')

const pluginsConfig = (() => {
  let code = `export const config = <C extends ConfigSet>(jack: Jack<C>) => `
  if (!hasConfig.size) return code + 'jack\n'

  code += '{\n'
  for (const [p, name] of hasConfig.entries()) {
    let c = 0
    for (const [field, cfg] of Object.entries(configs.get(p) || {})) {
      const jf = JSON.stringify(field)
      code += `  const config_${name}_${c} = ${name}.config[${jf}]\n`
      const t = JSON.stringify(cfg.type)
      const m = JSON.stringify(!!cfg.multiple)
      const msg = `Invalid config option ${jf} defined in plugin: ${p}`
      if (!isConfigOption(cfg, cfg.type, !!cfg.multiple)) {
        throw new Error(msg)
      }
      const mc = JSON.stringify(msg)
      code += `  if (!isConfigOption(config_${name}_${c}, ${t}, ${m})) {\n`
      code += `    throw new Error(${mc})\n`
      code += '  }\n'
      c++
    }
  }

  // now ts should know that they're all legit, and we've verified
  // here as well, so the build would fail if they weren't.
  code += '  return jack\n'
  for (const [p, name] of hasConfig.entries()) {
    let c = 0
    const fp = `From plugin: ${p}`
    code += `    .heading(${JSON.stringify(fp)})\n`
    for (const [field, cfg] of Object.entries(configs.get(p) || {})) {
      const jf = JSON.stringify(field)
      const fn =
        (cfg.type === 'boolean'
          ? 'flag'
          : cfg.type === 'number'
          ? 'num'
          : 'opt') + (cfg.multiple ? 'List' : '')
      code += `    .${fn}({ ${jf}: config_${name}_${c++} })\n`
    }
  }

  code += '}\n'

  return code
})()

const pluginsCode = `const plugins = () => {
  if (plugins_) return plugins_
  return (plugins_ = [
${[...hasPlugin.values()]
  .map(name => `    ${name}.plugin,\n`)
  .join('')}  ])
}

const pluginsLoaded = () => {
  if (pluginsLoaded_) return pluginsLoaded_
  return (pluginsLoaded_ = new Map<string, PI>([
${[...hasPlugin.values()]
  .map(
    name =>
      `    ['${name.substring('Plugin_'.length)}', ${name}.plugin],`
  )
  .join('\n')}
  ]))
}

type PluginSet = [
${[...hasPlugin.values()]
  .map(name => `  typeof ${name}.plugin,\n`)
  .join('')}]
`

const pluginLoaders = `export const loaders = ${JSON.stringify(
  [...hasLoader.values()],
  null,
  2
)}
`

const swapTag = (src: string, tag: string, code: string): string => {
  const st = '//{{' + tag + ' START}}\n'
  const et = '//{{' + tag + ' END}}\n'
  const start = src.indexOf(st) + st.length
  const end = src.indexOf(et)
  const mid = src.substring(start, end)
  return (
    src.substring(0, start) +
    // if it has something other than comments, include it
    (mid.replace(/\s*^\/\/.*\n/gm, '').trim() &&
      mid.trimEnd().replace(/^/gm, '// ') + '\n') +
    code +
    src.substring(end)
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
    'HEADER COMMENT': `// This file is automatically generated, edits will be lost on rebuild\n`,
    'PLUGIN IMPORT': pluginImport,
    'PLUGINS CODE': pluginsCode,
    'PLUGINS CONFIG': pluginsConfig,
    'PLUGIN SIGNATURE': signatureCode,
    LOADERS: pluginLoaders,
  })
)

spawnSync('npm', ['run', 'prepare'], { cwd: dir, stdio: 'inherit' })

export {}
