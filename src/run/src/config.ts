// config command
import type { LoadedConfig } from '@tapjs/config'
import chalk from 'chalk'
import { spawnSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { stat } from 'fs/promises'
import { mkdirpSync } from 'mkdirp'
import { dirname, relative, resolve } from 'path'
import { rimrafSync } from 'rimraf'
import yaml from 'tap-yaml'
import { strict } from 'tcompare'

const fileExists = async (p: string) =>
  stat(p).then(
    s => s.isFile(),
    () => false,
  )

const vimTag = '# v' + 'im: set filetype=yaml :'
const logVim = () => console.log(vimTag)

const logYaml = (v: any) => console.log(yaml.stringify(v).trimEnd())

const set = async (args: string[], config: LoadedConfig) => {
  const usage = 'Usage: tap config set <key=[val]> [<key=[val]> ...]'
  if (!args.length) {
    console.error(chalk.red('must provide key=value arguments'))
    console.error(usage)
    process.exit(1)
  }

  const { valuesFromConfigFile } = config
  const data: Record<string, any> = Object.fromEntries(
    Object.entries(valuesFromConfigFile).map(([k, v]) => [
      k,
      Array.isArray(v) ? [...v] : v,
    ]),
  )

  const allDefs = config.jack.toJSON()
  for (const kv of args) {
    const [key, ...r] = kv.split('=') as [string, ...string[]]
    if (!r.length) {
      console.error(chalk.red(`no value provided for ${key}`))
      console.error(usage)
      process.exit(1)
    }
    const val = r.join('=')
    const def = allDefs[key as string]
    if (!def) {
      console.error(chalk.red('Unknown config key: ' + key))
      continue
    }
    if (!val) {
      delete data[key]
      continue
    }
    const { type, multiple } = def
    let v: boolean | number | string =
      type === 'number' ? parseInt(val, 10) : val
    if (type === 'boolean') {
      if (v !== 'true' && v !== 'false') {
        console.error(chalk.red(`${key} must be 'true' or 'false'`))
        process.exit(1)
      } else {
        v = v === 'true'
      }
    }
    if (multiple) {
      if (data[key]) data[key].push(v)
      else data[key] = [v]
    } else {
      data[key] = v
    }
  }

  if (strict(data, valuesFromConfigFile).match) {
    console.error('no changes made to config data')
    process.exit(0)
  }

  try {
    config.jack.validate(data)
  } catch (er) {
    console.error(chalk.red('invalid configuration'))
    console.error((er as Error).message)
    process.exit(1)
  }

  await config.editConfigFile(data, undefined, true)
  const rel = relative(process.cwd(), config.configFile)
  console.log(`wrote changes to ${rel}`)
}

const get = async (args: string[], config: LoadedConfig) => {
  if (!args.length) {
    console.error(chalk.red('no keys provided'))
    console.error('Usage: tap config get <key> [<key> ...]')
    process.exit(1)
  }

  const defs = config.jack.toJSON()
  let values: undefined | Record<string, any> = undefined
  for (const k of args) {
    if (!defs[k]) {
      console.error(chalk.red(`unknown config field: ${k}`))
      continue
    }
    const value = config.get(k as keyof typeof config.values)
    if (value === undefined) continue
    values ??= {}
    values[k] = value
  }
  if (values) {
    console.log(yaml.stringify(values).trimEnd())
  }
}

const list = async (args: string[], config: LoadedConfig) => {
  const { valuesFromConfigFile, values } = config
  const filter = ([k, v]: [string, any]) =>
    (!Array.isArray(v) || v.length) &&
    (!args.length || args.includes(k))
  const fileEntries = Object.entries(valuesFromConfigFile)
    .filter(filter)
    .sort(([a], [b]) => a.localeCompare(b, 'en'))
  const fromFile = Object.fromEntries(fileEntries)
  const envCliEntries = Object.entries(values)
    .filter(([k, v]) => filter([k, v]) && fromFile[k] !== v)
    .sort(([a], [b]) => a.localeCompare(b, 'en'))
  const fromEnvCli = Object.fromEntries(envCliEntries)
  let output = `${vimTag}\n`
  if (fileEntries.length) {
    output +=
      `\n# from ${relative(process.cwd(), config.configFile)}\n` +
      yaml.stringify(fromFile)
  }
  if (envCliEntries.length) {
    if (fileEntries.length) {
      output += `\n# env, cli, and defaults\n`
    }
    output += yaml.stringify(fromEnvCli)
  }
  output = output
    .replace(/^(# .*)$/gm, (_, _1) => chalk.dim(_1))
    .replace(/^([^:\n ]+):/gm, (_, _1) => chalk.bold(_1) + ':')
  console.log(output.trimEnd())
}

const dump = async (config: LoadedConfig) => {
  const { values } = config
  const v = Object.fromEntries(
    Object.entries(values).filter(
      ([_, v]) => !Array.isArray(v) || v.length,
    ),
  )
  logVim()
  logYaml(v)
}

// exported for testing
export const firstOf = (
  a: (string | undefined)[],
  def: string,
): string => {
  for (const i of a) if (i) return i
  return def
}

const isEmpty = (a: any) =>
  a === undefined || (Array.isArray(a) && a.length === 0)

const edit = async (args: string[], config: LoadedConfig) => {
  const { configFile, valuesFromConfigFile } = config
  const fileDefs = new Set(Object.keys(valuesFromConfigFile))
  const rel = relative(process.cwd(), configFile)
  const editor = firstOf(
    [process.env.VISUAL, process.env.EDITOR],
    /* c8 ignore start */
    process.platform === 'win32' ? 'notepad.exe' : 'vim',
    /* c8 ignore stop */
  )
  const tmp = resolve(
    config.projectRoot,
    '.tap',
    'config-edit-tmp.yaml',
  )
  if (args[0] !== 'resume') {
    rimrafSync(tmp)
    mkdirpSync(dirname(tmp))
    const allDefs = config.jack.toJSON()

    const allConfigs = Object.entries(allDefs)
      .filter(([k]) => !fileDefs.has(k))
      .sort(([a], [b]) => a.localeCompare(b, 'en'))
      .map(([k, def]) => {
        return !isEmpty(def.default) ?
            yaml.stringify({ [k]: def.default }).trimEnd()
          : `${k}: ${def.type}${def.multiple ? '[]' : ''}`
      })
      .join('\n')
      .replace(/^/gm, '# ')
    const tmpData = `${vimTag}
# this is a yaml file containing tap configuration
#
# when you're done, the data will be written to ${rel}${
      /\.json$/.test(rel) ?
        '\n# (in the "tap" section of the json file)'
      : ''
    }
# if the config isn't valid, or if you quit without making changes,
# then no changes will be made.
#
# Comments and empty lines will be removed.
${
  Object.keys(valuesFromConfigFile).length ?
    '#\n# Existing configs:\n\n' +
    yaml.stringify(valuesFromConfigFile)
  : ''
}
# All available configuration options. See \`tap help\` for descriptions.
#
${allConfigs}
`
    writeFileSync(tmp, tmpData, 'utf8')
  } else if (!(await fileExists(tmp))) {
    console.error(chalk.red('no prior editing session to resume'))
    process.exit(1)
  }

  const result = spawnSync(editor, [tmp], { stdio: 'inherit' })
  const { signal, status } = result

  const editResume =
    'run `tap config edit resume` to continue making changes'

  if (signal || status) {
    console.error(chalk.red('edit command failed, no changes made'))
    console.error(editResume)
    console.error({ signal, status })
    process.exit(1)
  }

  // read the file and see if we have changes to make.
  const newData = readFileSync(tmp, 'utf8')
  const newValues = yaml.parse(newData)
  if (strict(valuesFromConfigFile, newValues).match) {
    console.error('no changes made to config data')
    console.error(editResume)
    process.exit(0)
  }
  try {
    config.jack.validate(newValues)
  } catch (er) {
    console.error(chalk.red('invalid configuration'))
    console.error((er as Error).message)
    console.error(editResume)
    process.exit(1)
  }
  await config.editConfigFile(newValues, configFile, true)
  rimrafSync(tmp)
  console.log(`wrote changes to ${rel}`)
}

export const config = async (
  args: string[],
  config: LoadedConfig,
) => {
  if (!args.length) args = ['list']
  switch (args[0]) {
    case 'dump':
      return dump(config)
    case 'get':
      return get(args.slice(1), config)
    case 'list':
      return list(args.slice(1), config)
    case 'edit':
      return edit(args.slice(1), config)
    case 'set':
      return set(args.slice(1), config)
    default:
      console.error(chalk.red('invalid tap config command'))
      console.error('must be one of: get list dump set edit')
      process.exit(1)
  }
}
