/**
 * Module that handles all TAP configuration needs
 *
 * @module
 */

import { argv, cwd, env } from '@tapjs/core'
import {
  config as pluginConfig,
  defaultPlugins,
  testFileExtensions,
} from '@tapjs/test'
import { lstat, readdir, readFile, writeFile } from 'fs/promises'
import { ConfigSet, Jack, OptionsResults, Unwrap } from 'jackspeak'
import { basename, dirname, relative, resolve } from 'path'
import {
  kIndent,
  parse as jsonParse,
  stringify as jsonStringify,
} from 'polite-json'
import { parse as yamlParse, stringify as yamlStringify } from 'tap-yaml'
import { walkUp } from 'walk-up-path'
import baseConfig from './jack.js'

export type OptionsSubset<T extends ConfigSet> = {
  [k in keyof OptionsResults<T>]?: OptionsResults<T>[k]
}

export type ConfigFileData<T extends ConfigSet> = OptionsSubset<T> & {
  extends?: string
}

export type { baseConfig }

export type PathOptions = 'coverage-map' | 'before' | 'after'
const pathOptions = ['coverage-map', 'before', 'after'] as const

const exists = async (f: string) =>
  lstat(f).then(
    () => true,
    () => false,
  )

/**
 * The base config set (before any plugins) that TAP responds to
 */
export type BaseConfigSet = Unwrap<typeof baseConfig>

/**
 * Class that handles configuration for TAP.
 *
 * Typically, {@link @tapjs/config!index.TapConfig.load} is the way to get one of
 * these.
 */
export class TapConfig<C extends ConfigSet = BaseConfigSet> {
  /**
   * The {@link https://npmjs.com/jackspeak | JackSpeak} object
   * representing TAP's configuration
   */
  jack: Jack<C>

  /**
   * Parsed values in effect
   */
  values?: OptionsResults<C>

  /**
   * positional arguments to the TAP process
   */
  positionals?: string[]

  /**
   * The effective current working directory for various globbing actions.
   * The root of the project where a .taprc, package.json, or .git was
   * found.
   */
  projectRoot: string = cwd

  /**
   * The file providing configuration, either a package.json or .taprc.
   * If undefined, it means that we don't have a config file.
   */
  configFile?: string

  /**
   * values read from the config file, if loaded
   */
  valuesFromConfigFile?: OptionsSubset<C>

  /**
   * The file extensions that tap knows how to load, updated by plugins
   */
  testFileExtensions: Set<string> = testFileExtensions

  constructor(jack: Jack<C> = baseConfig as unknown as Jack<C>) {
    this.jack = jack
  }

  /**
   * Parse the arguments and set configuration and positionals accordingly.
   */
  parse(args: string[] = argv): this & {
    values: OptionsResults<C>
    positionals: string[]
  } {
    const v = this.values
    const p = this.positionals
    if (v && p) {
      return this as this & {
        values: OptionsResults<C>
        positionals: string[]
      }
    }
    const { values, positionals } = this.jack.parse(args)
    const { include } = values as unknown as { include: string[] }
    for (let i = 0; i < include.length; i++) {
      const inc = include[i]
      if (inc && inc.includes('__EXTENSIONS__')) {
        include[i] = this.expandInclude(inc)
      }
    }

    return Object.assign(this, { values, positionals })
  }

  /**
   * replace `__EXTENSIONS__` in a glob with the actual testFileExtensions
   */
  expandInclude(inc: string) {
    return inc.replace(
      /__EXTENSIONS__/g,
      `@(${[...this.testFileExtensions].join('|')})`,
    )
  }

  /**
   * Get a configuration value, as we currently know it
   */
  get<K extends keyof OptionsResults<C>>(k: K): OptionsResults<C>[K] {
    const value = this.parse().values[k]
    // special case: if --disable-coverage is set, then default
    // --allow-empty-coverage to true, so we don't get unuseful failures.
    if (k === 'allow-empty-coverage' && value === undefined) {
      const disabled = this.get('disable-coverage')
      if (disabled) return true as OptionsResults<C>[K]
    }
    return value
  }

  /**
   * Add fields to the config set. Used when loading plugins that export
   * a `config` object.
   */
  addFields<F extends ConfigSet>(fields: F) {
    return new TapConfig(this.jack.addFields(fields))
  }

  /**
   * Load configuration fields exported by active plugins
   */
  loadPluginConfigFields() {
    return new TapConfig(pluginConfig(this.jack))
  }

  /**
   * load the file, and write the fields in data. If the file is not present,
   * create it.
   */
  async editConfigFile(
    data: OptionsSubset<C>,
    configFile = this.configFile,
    overwrite: boolean = false,
  ) {
    // we'll always have a config file by the time we get here
    /* c8 ignore start */
    if (!configFile) throw new Error('cannot edit without a configFile')
    /* c8 ignore stop */
    // also set the fields
    await this.loadConfigData(data, configFile)
    if (this.values) Object.assign(this.values, data)
    const b = basename(configFile)
    if (b === '.taprc') {
      return this.editYAMLConfig(data, configFile, overwrite)
    } else if (b === 'package.json') {
      return this.editPackageJsonConfig(data, configFile, overwrite)
    } else {
      throw new Error(
        'unrecognized config file type, must be ' +
          'named .taprc or package.json: ' +
          configFile,
      )
    }
  }

  /**
   * Edit a yaml .taprc file
   */
  async editYAMLConfig(
    data: OptionsSubset<C>,
    configFile: string,
    overwrite: boolean = false,
  ) {
    const src: OptionsSubset<C> =
      (await this.readYAMLConfig(configFile, true)) || {}
    return writeFile(
      configFile,
      // split up to un-confuse vim
      '# vi' +
        'm: set filetype=yaml :\n' +
        yamlStringify(overwrite ? data : Object.assign(src, data)),
    )
  }

  /**
   * Edit the `"tap"` section of a package.json file
   */
  async editPackageJsonConfig(
    data: OptionsSubset<C>,
    configFile: string,
    overwrite: boolean = false,
  ) {
    const pj: any = (await this.readPackageJson(configFile, true)) || {}
    const { tap = {} } = pj
    const src: OptionsSubset<C> =
      tap && typeof tap === 'object' && !Array.isArray(tap) ? tap : {}
    pj.tap = overwrite ? data : Object.assign(src, data)
    if (undefined === pj[kIndent]) pj[kIndent] = 2
    return writeFile(configFile, jsonStringify(pj))
  }

  /**
   * Read configuration from a yaml .taprc file
   */
  async readYAMLConfig(
    rc: string,
    silent: boolean = false,
  ): Promise<ConfigFileData<C> | undefined> {
    try {
      const p = yamlParse(await readFile(rc, 'utf8')) as
        | string
        | ConfigFileData<C>
      return this.resolvePathOptions(
        typeof p === 'string' ? ({ extends: p } as ConfigFileData<C>) : p,
        rc,
      )
    } catch (er) {
      if (!silent) console.error('Error loading .taprc:', rc, er)
      return undefined
    }
  }

  /**
   * Read a package.json file
   */
  async readPackageJson(
    pj: string,
    silent: boolean = false,
  ): Promise<{ tap?: OptionsResults<C> } | undefined> {
    try {
      const res = jsonParse(await readFile(pj, 'utf8'))
      if (res && typeof res === 'object' && !Array.isArray(res)) {
        const r = res as {
          tap?: string | OptionsResults<C> | { extends: string }
        }
        if (typeof r.tap === 'string') r.tap = { extends: r.tap }
        return r as { tap?: OptionsResults<C> }
      }
    } catch (er) {
      if (!silent) console.error('Error loading package.json:', pj, er)
    }
    return undefined
  }

  /**
   * Read the configuration from the `"tap"` object in a package.json file
   */
  async readPackageJsonConfig(
    pj: string,
  ): Promise<OptionsSubset<C> | undefined> {
    return this.resolvePathOptions(
      (await this.readPackageJson(pj))?.tap as
        | OptionsResults<C>
        | undefined,
      pj,
    )
  }

  resolvePathOptions(
    conf: ConfigFileData<C> | undefined,
    file: string,
  ): OptionsSubset<C> | undefined {
    if (conf) {
      for (const p of pathOptions) {
        const pc = conf[p]
        if (typeof pc === 'string') {
          Object.assign(conf, { [p]: resolve(dirname(file), pc) })
        }
      }
    }
    return conf
  }

  /**
   * Read the configuration from a dependency
   */
  async readDepConfig(file: string) {
    // people like yaml files to end in .yaml or .yml, but package.json
    // should always be a file named 'package.json'
    return basename(file) === 'package.json' ?
        this.readPackageJsonConfig(file)
      : this.readYAMLConfig(file)
  }

  /**
   * Resolve the source of an `extends` field in TAP configs
   */
  async resolveExtension(ext: string, file: string) {
    const asFile = resolve(dirname(file), ext)
    if (await exists(asFile)) {
      return asFile
    }
    // the dep might ONLY have a package.json or .taprc, so we cannot
    // use require.resolve or resolveImport for this.
    // Just walk up the paths ourselves.
    for (const path of walkUp(dirname(file))) {
      const pkgRoot = resolve(path, `node_modules/${ext}`)
      const pj = resolve(pkgRoot, 'package.json')
      // pj MUST exist, but we prefer .taprc
      if (!(await exists(pj))) continue
      const rc = resolve(pkgRoot, '.taprc')
      return (await exists(rc)) ? rc : pj
    }
    throw new Error(
      `Could not read TAP config from package ${ext}, ` +
        `via the config file at ${file}. ` +
        `Maybe try: npm install --save-dev ${ext}`,
    )
  }

  /**
   * Load some configuration fields from a config file
   */
  async loadConfigData(
    data: any,
    configFile: string,
  ): Promise<
    this & {
      configFile: string
      valuesFromConfigFile: OptionsResults<C>
    }
  > {
    if (!!data && typeof data === 'object') {
      await this.extendConfigData(data, configFile)
      this.jack.setConfigValues(data, configFile)
    }
    return Object.assign(this, {
      configFile,
      valuesFromConfigFile: data || {},
    })
  }

  /**
   * Apply the extension from a resolved `extends` field in the config.
   */
  async extendConfigData(data: Record<string, any>, file: string) {
    const seen = new Set<string>([file])
    // config, extension, resolved extension
    const stack: [Record<string, any>, string, string][] = [
      [data, file, file],
    ]
    while (typeof data.extends === 'string') {
      const { extends: ext } = data
      delete data.extends
      try {
        const resolved = await this.resolveExtension(ext, file)
        if (seen.has(resolved)) break
        seen.add(resolved)

        const extension = await this.readDepConfig(resolved)
        if (!extension) break

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
    while (stack.length && stack[0]) {
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

  /**
   * Load configuration from a file
   */
  async loadConfigFile(): Promise<
    this & {
      configFile: string
      valuesFromConfigFile: OptionsSubset<C>
    }
  > {
    // start from cwd, walk up until we find a .git
    // or package.json, or env.HOME
    const home = env.HOME || cwd
    const envRC = env.TAP_RCFILE
    const isPJ = envRC && basename(envRC) === 'package.json'

    for (const p of walkUp(cwd)) {
      const entries = await readdir(p).catch(() => null)
      if (!entries) break
      if (entries.includes('.taprc')) {
        this.projectRoot = p
        env.TAP_CWD = p
        if (envRC) break
        const file = resolve(p, '.taprc')
        return this.loadConfigData(await this.readYAMLConfig(file), file)
      } else if (entries.includes('package.json')) {
        this.projectRoot = p
        env.TAP_CWD = p
        if (envRC) break
        const file = resolve(p, 'package.json')
        return this.loadConfigData(
          await this.readPackageJsonConfig(file),
          file,
        )
      } else if (entries.includes('.git')) {
        // this just sets the default config file, even though we didn't
        // get anything from it, so `tap plugin <add|rm>` knows where to
        // write the resulting config to.
        env.TAP_CWD = p
        this.projectRoot = p
        if (envRC) break
        return Object.assign(this, {
          configFile: resolve(p, '.taprc'),
          valuesFromConfigFile: {},
        })
      } else if (relative(home, p) === '') {
        env.TAP_CWD = cwd
        this.projectRoot = cwd
        // got to ~, just use cwd
        break
      }
    }

    return envRC ?
        this.loadConfigData(
          await (isPJ ?
            this.readPackageJsonConfig(envRC)
          : this.readYAMLConfig(envRC)),
          envRC,
        )
      : Object.assign(this, {
          configFile: resolve(cwd, '.taprc'),
          valuesFromConfigFile: {},
        })
  }

  /**
   * The signature of all plugin modules that ought to be loaded.
   */
  get pluginSignature() {
    return this.pluginList
      .sort((a, b) => a.localeCompare(b, 'en'))
      .join('\n')
      .trim()
  }

  /**
   * The list of all plugins that ought to be loaded.
   */
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

  /**
   * Determine whether the TAP process should show colors. Update chalk
   * accordingly.
   */
  async loadColor() {
    let c = this.get('color')
    const chalk = (await import('chalk')).default
    let color: boolean
    if (
      env.TAP !== '1' &&
      env.NO_COLOR !== '1' &&
      (c === true || (c === undefined && chalk.level > 0))
    ) {
      color = true
      chalk.level = Math.max(chalk.level, 1) as 0 | 1 | 2 | 3
      env.FORCE_COLOR = String(chalk.level)
      delete env.NO_COLOR
    } else {
      color = false
      chalk.level = 0
      env.FORCE_COLOR = '0'
      env.NO_COLOR = '1'
    }
    const { values } = this.parse()
    ;(values as OptionsResults<C> & { color: boolean }).color = color
    return this
  }

  /**
   * Load the reporter that ought to be used, based on the configured
   * value, the `TAP` environment variable, and whether or not we have
   * colors enabled.
   */
  loadReporter() {
    const r = this.get('reporter')
    if (r !== undefined && env.TAP !== '1') return this
    const { values } = this.parse()
    const reporter = env.TAP === '1' || !values.color ? 'tap' : 'base'
    ;(values as OptionsResults<C> & { reporter: string }).reporter =
      reporter
    return this
  }

  /**
   * cache of the loaded config
   */
  static #loaded: LoadedConfig | undefined
  /**
   * Load the configuration and return a Promise to a
   * {@link @tapjs/config!index.TapConfig} object
   */
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

/**
 * A fully loaded {@link @tapjs/config!index.TapConfig} object
 */
export interface LoadedConfig
  extends ReturnType<
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
  > {}
