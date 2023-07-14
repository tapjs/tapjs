import { argv, cwd, env } from '@tapjs/core'
import { config as pluginConfig, defaultPlugins } from '@tapjs/test'
import { lstat, readdir, readFile, writeFile } from 'fs/promises'
import { ConfigSet, Jack, OptionsResults, Unwrap } from 'jackspeak'
import { createRequire } from 'module'
import { relative, resolve } from 'node:path'
import { basename, dirname } from 'path'
import {
  kIndent,
  parse as jsonParse,
  stringify as jsonStringify,
} from 'polite-json'
import {
  parse as yamlParse,
  stringify as yamlStringify,
} from 'tap-yaml'
import { walkUp } from 'walk-up-path'
import baseConfig from './jack.js'

export type { baseConfig }

const exists = async (f: string) =>
  lstat(f).then(
    () => true,
    () => false
  )

export type BaseConfigSet = Unwrap<typeof baseConfig>

// get the set of folders to check for a .taprc or a package.json
// always stop when we find a .git
// validate config files against this.jack
export class TapConfig<C extends ConfigSet = BaseConfigSet> {
  jack: Jack<C>
  values?: OptionsResults<C>
  positionals?: string[]
  globCwd: string = cwd
  configFile?: string

  constructor(jack: Jack<C> = baseConfig) {
    this.jack = jack
  }

  parse(args: string[] = argv): this & {
    values: OptionsResults<C>
    positionals: string[]
  } {
    const v = this.values
    const p = this.positionals
    const { values, positionals } =
      v && p ? { values: v, positionals: p } : this.jack.parse(args)
    return Object.assign(this, { values, positionals })
  }

  get<K extends keyof OptionsResults<C>>(k: K): OptionsResults<C>[K] {
    return this.parse().values[k]
  }

  addFields<F extends ConfigSet>(fields: F) {
    return new TapConfig(this.jack.addFields(fields))
  }

  loadPluginConfigFields() {
    return new TapConfig(pluginConfig(this.jack))
  }

  // load the file, and write the fields in data.
  // if not present, create it.
  async editConfigFile(
    data: OptionsResults<C>,
    configFile = this.configFile
  ) {
    // we'll always have a config file by the time we get here
    /* c8 ignore start */
    if (!configFile)
      throw new Error('cannot edit without a configFile')
    /* c8 ignore stop */
    // also set the fields
    await this.loadConfigData(data, configFile)
    if (this.values) Object.assign(this.values, data)
    const b = basename(configFile)
    if (b === '.taprc') {
      return this.editYAMLConfig(data, configFile)
    } else if (b === 'package.json') {
      return this.editPackageJsonConfig(data, configFile)
    } else {
      throw new Error(
        'unrecognized config file type, must be ' +
          'named .taprc or package.json: ' +
          configFile
      )
    }
  }

  async editYAMLConfig(data: OptionsResults<C>, configFile: string) {
    const src: OptionsResults<C> =
      (await this.readYAMLConfig(configFile, true)) || {}
    return writeFile(
      configFile,
      // split up to un-confuse vim
      '# vi' +
        'm: set filetype=yaml :\n' +
        yamlStringify(Object.assign(src, data))
    )
  }

  async editPackageJsonConfig(
    data: OptionsResults<C>,
    configFile: string
  ) {
    const pj: any =
      (await this.readPackageJson(configFile, true)) || {}
    const { tap = {} } = pj
    const src = (
      tap && typeof tap === 'object' && !Array.isArray(tap) ? tap : {}
    ) as OptionsResults<C>
    pj.tap = Object.assign(src, data)
    if (undefined === pj[kIndent]) pj[kIndent] = 2
    return writeFile(configFile, jsonStringify(pj))
  }

  async readYAMLConfig(
    rc: string,
    silent: boolean = false
  ): Promise<OptionsResults<C> | undefined> {
    try {
      return yamlParse(
        await readFile(rc, 'utf8')
      ) as OptionsResults<C>
    } catch (er) {
      if (!silent) console.error('Error loading .taprc:', rc, er)
      return undefined
    }
  }

  async readPackageJson(
    pj: string,
    silent: boolean = false
  ): Promise<{ tap?: OptionsResults<C> } | undefined> {
    try {
      const res = jsonParse(await readFile(pj, 'utf8'))
      if (res && typeof res === 'object' && !Array.isArray(res)) {
        return res as { tap?: OptionsResults<C> }
      }
    } catch (er) {
      if (!silent)
        console.error('Error loading package.json:', pj, er)
    }
    return undefined
  }

  async readPackageJsonConfig(
    pj: string
  ): Promise<OptionsResults<C> | undefined> {
    return (await this.readPackageJson(pj))?.tap as
      | OptionsResults<C>
      | undefined
  }

  async readDepConfig(file: string) {
    // people like yaml files to end in .yaml or .yml, but package.json
    // should always be a file named 'package.json'
    return basename(file) === 'package.json'
      ? this.readPackageJsonConfig(file)
      : this.readYAMLConfig(file)
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

  async loadConfigData(
    data: any,
    configFile: string
  ): Promise<this & { configFile: string }> {
    if (!!data && typeof data === 'object') {
      await this.extendConfigData(data, configFile)
      this.jack.setConfigValues(data, configFile)
    }
    return Object.assign(this, { configFile })
  }

  async extendConfigData(data: Record<string, any>, file: string) {
    const seen = new Set<string>([file])
    // config, extension, resolved extension
    const stack: [Record<string, any>, string, string][] = [
      [data, file, file],
    ]
    while (
      typeof data.extends === 'string' &&
      !seen.has(data.extends)
    ) {
      const { extends: ext } = data
      delete data.extends
      try {
        const resolved = await this.resolveExtension(ext, file)
        const extension = await this.readDepConfig(resolved)
        if (!extension) break
        seen.add(ext)
        stack.unshift([extension, ext, resolved])
        file = resolved
        data = extension
      } catch (er) {
        throw Object.assign(er as Error, {
          extendedFrom: [ext, ...stack.map(([_, ext]) => ext)],
        })
      }
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

  async loadConfigFile(): Promise<this & { configFile: string }> {
    // start from cwd, walk up until we find a .git
    // or package.json, or env.HOME
    const home = env.HOME || cwd
    for (const p of walkUp(cwd)) {
      const entries = await readdir(p).catch(() => null)
      if (!entries) break
      if (entries.includes('.taprc')) {
        this.globCwd = p
        const file = resolve(p, '.taprc')
        return this.loadConfigData(
          await this.readYAMLConfig(file),
          file
        )
      } else if (entries.includes('package.json')) {
        this.globCwd = p
        const file = resolve(p, 'package.json')
        return this.loadConfigData(
          await this.readPackageJsonConfig(file),
          file
        )
      } else if (entries.includes('.git')) {
        // this just sets the default config file, even though we didn't
        // get anything from it, so `tap plugin <add|rm>` knows where to
        // write the resulting config to.
        return Object.assign(this, {
          globCwd: p,
          configFile: resolve(p, '.taprc'),
        })
      } else if (relative(home, p) === '') {
        // got to ~, just use cwd
        break
      }
    }
    return Object.assign(this, {
      globCwd: cwd,
      configFile: resolve(cwd, '.taprc'),
    })
  }

  get pluginSignature() {
    return this.pluginList
      .sort((a, b) => a.localeCompare(b, 'en'))
      .join('\n').trim()
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

  async loadColor() {
    const c = this.get('color')
    const color = !!(c !== undefined
      ? c
      : (await import('chalk')).supportsColor)
    const { values } = this.parse()
    ;(values as OptionsResults<C> & { color: boolean }).color = color
    return this
  }

  loadReporter() {
    const r = this.get('reporter')
    if (r !== undefined && env.TAP !== '1') return this
    const reporter =
      env.TAP === '1' || !this.get('color') ? 'tap' : 'base'
    const { values } = this.parse()
    ;(values as OptionsResults<C> & { reporter: string }).reporter =
      reporter
    return this
  }

  static #loaded: LoadedConfig | undefined
  static async load(): Promise<LoadedConfig> {
    if (this.#loaded) return this.#loaded
    const a = new TapConfig()
    const b = a.loadPluginConfigFields()
    const c = await b.loadConfigFile()
    const d = await c.loadColor()
    const e = d.loadReporter()
    const f = e.parse()
    return (this.#loaded = f)
  }
}

export type LoadedConfig = ReturnType<
  ReturnType<
    Awaited<
      ReturnType<
        Awaited<
          ReturnType<
            ReturnType<
              TapConfig['loadPluginConfigFields']
            >['loadConfigFile']
          >
        >['loadColor']
      >
    >['loadReporter']
  >['parse']
>
