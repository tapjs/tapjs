import { argv, cwd, env } from '@tapjs/core'
import { config as pluginConfig, defaultPlugins } from '@tapjs/test'
import { lstat, readdir, readFile } from 'fs/promises'
import { ConfigSet, Jack, OptionsResults } from 'jackspeak'
import { createRequire } from 'module'
import { relative, resolve } from 'node:path'
import { dirname } from 'path'
import { walkUp } from 'walk-up-path'
import yaml from 'yaml'
import baseConfig from './jack.js'
// yaml v1 is commonjs only, so can't just import { parse } from 'yaml'
const { parse } = yaml

const exists = async (f: string) =>
  lstat(f).then(
    () => true,
    () => false
  )

type Unwrap<J> = J extends Jack<infer C> ? C : never

// get the set of folders to check for a .taprc or a package.json
// always stop when we find a .git
// validate config files against this.jack
export class TapConfig<C extends ConfigSet = Unwrap<typeof baseConfig>> {
  jack: Jack<C>
  values?: OptionsResults<C>
  positionals?: string[]
  globCwd: string = cwd

  constructor(jack: Jack<C> = baseConfig) {
    this.jack = jack
  }

  parse(args: string[] = argv) {
    if (!this.values) {
      const { values, positionals } = this.jack.parse(args)
      this.values = values
      this.positionals = positionals
    }
    return this as TapConfig<C> & {
      values: OptionsResults<C>
      positionals: string[]
    }
  }

  get(k: keyof OptionsResults<C>): OptionsResults<C>[typeof k] {
    return this.parse().values[k]
  }

  addFields<F extends ConfigSet>(fields: F) {
    return new TapConfig(this.jack.addFields(fields))
  }

  loadPluginConfigFields() {
    return new TapConfig(pluginConfig(this.jack))
  }

  async readYAMLConfig(rc: string) {
    return parse(await readFile(rc, 'utf8')) as Record<string, any>
  }

  async readPackageJsonConfig(pj: string) {
    return JSON.parse(await readFile(pj, 'utf8'))?.tap as
      | Record<string, any>
      | undefined
  }

  async readDepConfig(file: string) {
    if (file.endsWith('.taprc')) return this.readYAMLConfig(file)
    else return this.readPackageJsonConfig(file)
  }

  async resolveExtension(ext: string, file: string) {
    const asFile = resolve(dirname(file), ext)
    if (await exists(asFile)) {
      return asFile
    }
    // try to require.resolve it, then pluck off everything after the
    // ext string, to get the root of the package.
    const require = createRequire(file)
    try {
      const resolved = require.resolve(ext)
      const split = resolved.split(ext)
      split.pop()
      const pkgroot = split.join(ext) + ext
      const rc = resolve(pkgroot, '.taprc')
      if (await exists(rc)) return rc
      return resolve(pkgroot, 'package.json')
    } catch (er) {
      throw new Error(
        `Could not read TAP config from package ${ext}, ` +
          `via the config file at ${file}. ` +
          `Maybe try: npm install --save-dev ${ext}`
      )
    }
  }

  async loadConfigData(data: any, filename: string): Promise<void> {
    if (!data && typeof data !== 'object') return
    await this.extendConfigData(data, filename)
    this.jack.setConfigValues(data, filename)
  }

  async extendConfigData(data: Record<string, any>, file: string) {
    const seen = new Set<string>([file])
    // config, extension, resolved extension
    const stack: [Record<string, any>, string, string][] = [
      [data, file, file],
    ]
    while (typeof data.extends === 'string' && !seen.has(data.extends)) {
      const { extends: ext } = data
      const resolved = await this.resolveExtension(ext, file)
      const extension = await this.readDepConfig(resolved)
      if (!extension) break
      seen.add(ext)
      stack.unshift([extension, ext, resolved])
      file = resolved
      data = extension
    }

    // now we have a stack of all the configs, apply in reverse order so the
    // nearest overrides the furthest
    while (stack.length) {
      const [data, _, resolved] = stack[0]
      const { extends: ext, ...rest } = data
      try {
        this.jack.setConfigValues(rest as OptionsResults<C>, resolved)
        stack.shift()
      } catch (er) {
        throw Object.assign(er as Error, {
          extendedFrom: stack.map(([_, ext]) => ext),
        })
      }
    }
  }

  async loadConfigFile() {
    // start from cwd, walk up until we find a .git
    // or package.json, or env.HOME
    const home = env.HOME || ''
    for (const p of walkUp(cwd)) {
      const entries = await readdir(p)
      if (entries.includes('.taprc')) {
        this.globCwd = p
        const file = resolve(p, '.taprc')
        return this.loadConfigData(await this.readYAMLConfig(file), file)
      } else if (entries.includes('package.json')) {
        this.globCwd = p
        const file = resolve(p, 'package.json')
        return this.loadConfigData(
          await this.readPackageJsonConfig(file),
          file
        )
      } else if (entries.includes('.git') || relative(home, p) === '') {
        this.globCwd = p
        break
      }
    }
  }

  get pluginSignature() {
    return this.pluginList
      .sort((a, b) => a.localeCompare(b, 'en'))
      .join('\n')
  }

  get pluginList() {
    const {
      values: { plugin = [] },
    } = this.parse()
    const pluginSet = new Set<string>(defaultPlugins)
    for (const p of plugin as string[]) {
      if (p.startsWith('!')) {
        pluginSet.delete(p.substring(1))
      } else {
        pluginSet.add(p)
      }
    }
    return [...pluginSet]
  }

  static async load() {
    const j = new TapConfig().loadPluginConfigFields()
    await j.loadConfigFile()
    j.parse()
    return j
  }
}
