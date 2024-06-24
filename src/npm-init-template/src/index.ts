import { foregroundChild } from 'foreground-child'
import { readdir, readFile, writeFile } from 'fs/promises'
import { minimatch } from 'minimatch'
import { mkdirp } from 'mkdirp'
import mustache from 'mustache'
import { dirname, parse, relative, resolve } from 'path'
import { fileURLToPath } from 'url'
import { parseArgs } from 'util'
import { read, Options as ReadOptions } from 'read'

export type { read, ReadOptions }

/**
 * Options passed to {@link Init#build}
 */
export interface BuildOptions {
  /**
   * Folder where the templates live, relative to the
   * main script used to initialize. Defaults to './templates'
   */
  templates?: string
  /**
   * Mustache settings that can override the defaults
   */
  templateSettings?: TemplateSettings
  /**
   * Target folder where the output will be written
   */
  target: string
  /**
   * Pattern or patterns of files to include. Defaults to '**' (ie, include
   * everything). Set to an empty array to include nothing.
   */
  include?: string | string[]
  /**
   * Pattern or patterns of files to exclude. Defaults to [] (ie, include
   * everything). Overrides the `include` option.
   */
  exclude?: string | string[]
}

/**
 * Template settings by file extension
 */
export interface TemplateSettings {
  [ext: string]: TemplateSetting
}

/**
 * Tags and escape function for a given file extension
 */
export interface TemplateSetting {
  tags?: [string, string]
  escape?: (raw: string) => string
}

const json: TemplateSetting = {
  tags: ['<%', '%>'],
  escape: s => JSON.stringify(s, null, 2),
}
const html: TemplateSetting = {}
/**
 * Default settings passed to mustache
 */
export const defaultTemplateSettings: TemplateSettings = {
  // html-likes use the default mustache escaping
  html,

  // json uses JSON.stringify
  json,

  // everything else passes the raw values through
  '*': {
    escape: s => s,
  },
}

defaultTemplateSettings.js = json
defaultTemplateSettings.jsx = json
defaultTemplateSettings.ts = json
defaultTemplateSettings.tsx = json
defaultTemplateSettings.xhtml = html
defaultTemplateSettings.xml = html

/**
 * Main class instantiated to prompt for values, build up the data
 * object, and run whatever commands are necessary.
 */
export class Init {
  /**
   * Parsed command-line values from `util.parseArgs()`.
   *
   * If it ends up being set by a prompt, it'll always be a string, possibly
   * '' if no default is provided.
   */
  values: Record<string, string>
  positionals: string[]

  #dir: string
  #target!: string
  #didBuild: boolean = false
  #mkdirped = new Map<string, boolean | Promise<boolean>>()

  /**
   * Initialize the builder, providing the file url or file path
   * to the init script. (This is used to find the templates dir
   * via a relative path.)
   */
  constructor(src: string) {
    if (src.startsWith('file://')) src = fileURLToPath(src)
    this.#dir = dirname(src)
    this.prompt = this.prompt.bind(this)
    this.build = this.build.bind(this)
    this.run = this.run.bind(this)
    const { positionals, values } = parseArgs({
      allowPositionals: true,
      strict: false,
    })
    this.positionals = positionals
    this.values = Object.fromEntries(
      Object.entries(values).map(
        ([k, v]) =>
          v === true ? [k, k]
            // It's not actually possible to make a key false if
            // it's not known
          : /* c8 ignore start */
          typeof v === 'string' ? [k, v]
          : [k, ''],
        /* c8 ignore stop */
      ),
    )
  }

  /**
   * Run a command in the target directory.
   *
   * This can only be done after the build has completed.
   */
  async run(cmd: string) {
    if (!this.#didBuild) throw new Error('cannot run before building')
    return new Promise<void>(res => {
      foregroundChild(
        cmd,
        { shell: true, cwd: this.#target, env: process.env },
        (code, signal) => {
          res()
          return code || signal || false
        },
      )
    })
  }

  /**
   * Prompt the user for a given value, returning the value they provide,
   * and saving it to `values` for {@link Init#build} to consume.
   *
   * If they have already specified it on the command line, then the
   * prompt is skipped, and this simply returns the value.
   *
   * If they have set `-y` or `--yes` on the command line, or if the
   * `npm_config_yes` environment variable is set to `"true"`, and a
   * default is provided, then the prompt is skipped.
   */
  async prompt(
    message: string,
    key: string,
    options: ReadOptions<string> = {},
  ): Promise<string> {
    const v = this.values[key]
    if (v !== undefined) return v
    if (
      options.default !== undefined &&
      (this.values.yes ||
        this.values.y ||
        process.env.npm_config_yes === 'true')
    ) {
      return (this.values[key] = options.default)
    }

    const val = await read({
      prompt: message,
      ...options,
    })
    return (this.values[key] = val)
  }

  async #load(
    path: string,
    root: string = path,
  ): Promise<Record<string, string>> {
    const promises: Promise<Record<string, string>>[] = []
    for (const f of await readdir(path, {
      withFileTypes: true,
    })) {
      const p = resolve(path, f.name)
      if (f.isDirectory()) {
        promises.push(this.#load(p, root))
      } else if (f.isFile()) {
        promises.push(
          readFile(p, 'utf8').then(contents => ({
            [relative(root, p)]: contents,
          })),
        )
      }
    }
    return (await Promise.all(promises)).reduce(
      (t: Record<string, string>, v) => Object.assign(t, v),
      Object.create(null),
    )
  }

  async #write(path: string, contents: string) {
    const p = dirname(path)
    const m = this.#mkdirped.get(p)
    if (!m) {
      const mp = mkdirp(p).then(() => {
        this.#mkdirped.set(p, true)
        return true
      })
      this.#mkdirped.set(p, mp)
      await mp
    } else if (typeof m === 'object') {
      await m
    }
    await writeFile(path, contents)
  }

  /**
   * Fill in all templates and write files to the target directory
   */
  async build({
    templates = './templates',
    templateSettings = {},
    target,
    include = '**',
    exclude = undefined,
  }: BuildOptions) {
    this.#target = resolve(target)
    templateSettings = Object.assign(
      {},
      defaultTemplateSettings,
      templateSettings,
    )
    const promises: Promise<any>[] = []
    const partials = await this.#load(resolve(this.#dir, templates))
    // this is fine, really
    /* c8 ignore start */
    const inc = typeof include === 'string' ? [include] : include
    const exc =
      typeof exclude === 'string' ? [exclude]
      : !exclude ? []
      : exclude
    /* c8 ignore stop */

    for (const [f, template] of Object.entries(partials)) {
      const p = parse(f)
      const isMustache = p.ext === '.mustache'
      const tf =
        !isMustache ?
          resolve(target, f)
        : resolve(target, p.dir, p.name)
      if (
        exc.some(p => minimatch(relative(target, tf), p)) ||
        !inc.some(p => minimatch(relative(target, tf), p))
      ) {
        continue
      }
      if (!isMustache) {
        promises.push(this.#write(tf, template))
      } else {
        const { ext } = parse(tf)
        const filetype =
          ext && ext.startsWith('.') ? ext.substring(1) : '*'
        const settings =
          templateSettings[filetype] || templateSettings['*']
        promises.push(
          this.#write(
            tf,
            mustache.render(
              template,
              this.values,
              partials,
              settings,
            ),
          ),
        )
      }
    }
    await Promise.all(promises)
    this.#didBuild = true
  }
}
