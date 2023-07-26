import { LoadedConfig, TapConfig } from '@tapjs/config'
import chalk from 'chalk'
import { FSWatcher, watch } from 'chokidar'
import { mkdirp } from 'mkdirp'
import {
  dirname,
  isAbsolute,
  relative,
  resolve,
  sep,
} from 'node:path'
import { REPLServer, start } from 'node:repl'
import { rimrafSync } from 'rimraf'
import { stringify } from 'tap-yaml'
import { options } from './chokidar-options.js'
import { Watch } from './watch.js'

import { ProcessInfo, ProcessInfoNode } from '@tapjs/processinfo'
import { ChildProcess, spawn, SpawnOptions } from 'node:child_process'
import { readdirSync, statSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import {resolveImport} from 'resolve-import'
import {fileURLToPath} from 'node:url'

const tapBin = fileURLToPath(await resolveImport('../index.js', import.meta.url))

type Callback = (er: Error | null, result: any) => void

type PrintedProcessInfoNode = {
  date: string
  command: string
  args: string[]
  cwd: string
  pid: number
  ppid: number
  children?: { [k: string]: PrintedProcessInfoNode }
  code?: number
  signal?: NodeJS.Signals
  runtime?: number
  parent?: string
}

const commands = [
  'r',
  'u',
  'n',
  'f',
  'f?',
  'c',
  'i',
  'w',
  'w?',
  'cls',
  'parse',
  'plugin',
  'build',
  'version',
  'versions',
  'list',
  'dump-config',
  'tap',
]

export const usage = `TAP Repl Commands

r [<filename>]
  run the test suite, or just the specified test

u [<filename>]
  update snapshots in the suite, or just the specified test

n
  run files changed since the last run

f
  run tests that previously failed, or all tests if there are no
  failures from any previous runs

f?
  show the list of tests that failed in the previous run

c [<style>]
  run a coverage report for the most recent test run

i [<filename | uuid>]
  print process info for the specified test file in the last run, or
  show a list of process info keys if no id provided

w
  toggle the file watcher on/off

w?
  show information about file watch status

cls
  clear the screen

parse [<options>]
  parse TAP from stdin and print results
  see 'parse -h' for options

plugin [add <plugin> | rm <plugin> | list]
  manage tap plugins (see tap --help for details)

build
  build the tap Test class with the configured plugins

version
  print the version of tap in use

versions
  print the version of tap and all components and plugins

list
  print the list of test files that will be run by default

dump-config
  show the config options currently in use

tap [<args>]
  run any other arbitrary tap command (run 'tap help' for details)
  ('tap repl' is not allowed)
`

export class Repl {
  input: NodeJS.ReadStream
  output: NodeJS.WriteStream
  repl?: REPLServer
  config: LoadedConfig
  dir: string
  saveFile: string
  explicitRunFile: string
  // the process always inherits our stdio
  proc?: ChildProcess

  processInfo: ProcessInfo
  watch: Watch
  #haveChanges: boolean = false

  #piReloading: boolean = false
  #piWatcher: FSWatcher

  constructor(
    config: LoadedConfig,
    input: NodeJS.ReadStream = process.stdin,
    output: NodeJS.WriteStream = process.stdout,
    processInfo: ProcessInfo = ProcessInfo.loadSync({
      dir: resolve(config.globCwd, '.tap/processinfo'),
    })
  ) {
    this.input = input
    this.output = output
    this.config = config
    this.dir = resolve(config.globCwd, '.tap')
    this.processInfo = processInfo
    this.saveFile =
      config.get('save') || resolve(this.dir, 'repl_failures')
    this.explicitRunFile = resolve(this.dir, 'repl_explicit_run')

    this.watch = new Watch(this.dir, this.processInfo)
    this.watch.on('change', () => this.#onWatchChange())

    this.#piWatcher = watch(resolve(this.dir, 'processinfo'), options)
    this.#piWatcher.on('all', () => this.#piReload())
  }

  async #piReload() {
    if (this.#piReloading) return
    this.#piReloading = true
    await this.processInfo.load()
    this.#piReloading = false
  }

  start() {
    this.repl = start({
      useColors: chalk.level > 0,
      input: this.input,
      output: this.output,
      prompt: 'TAP> ',
      eval: (input: string, _: any, __: any, cb: Callback) =>
        this.parseCommand(input, _, __, cb),
      /* c8 ignore start */
      completer: (input: string) => this.completer(input),
      /* c8 ignore stop */
      writer: res => (res !== undefined ? stringify(res) : ''),
      // we don't actually eval anything, save the CPU cycles
      useGlobal: true,
    })
    Object.assign(this.repl, {
      // doesn't really make sense to have all default Node.js repl commands
      // since we're not parsing JavaScript
      commands: {},
    })

    // ignore the callback, it's best-effort
    /* c8 ignore start */
    this.repl.setupHistory(
      resolve(this.dir, 'repl_history'),
      () => {}
    )
    /* c8 ignore stop */

    this.input.on('end', () => this.watch.close())
    this.input.on('close', () => this.watch.close())
    process.on('SIGINT', () => this.onSigint())
    this.repl.removeAllListeners('SIGINT')
    this.repl.on('SIGINT', () => this.onSigint())
  }

  #killProc(signal: 'SIGINT' | 'SIGTERM' | 'SIGKILL' = 'SIGINT') {
    if (!this.proc) return
    this.proc.kill(signal)
    const next =
      signal === 'SIGINT'
        ? 'SIGTERM'
        : signal === 'SIGTERM'
        ? 'SIGKILL'
        : null
    if (next) {
      setTimeout(() => this.#killProc(next), 200).unref?.()
    }
  }

  onSigint() {
    this.output.write(this.proc ? '\n' : '^C\n')
    if (this.proc) {
      this.#killProc('SIGINT')
    } else {
      this.exit()
      process.removeAllListeners('SIGINT')
      process.kill(process.pid, 'SIGINT')
    }
  }

  parseCommand(input: string, _: any, __: any, cb: Callback) {
    if (this.proc) return cb(null, 'command in progress, please wait')
    const words = input
      .trim()
      .split(' ')
      .map(s => s.trim())
    const cmd = words[0]
    const args = words.slice(1)
    switch (cmd) {
      case 'r':
        return this.runTests(args, cb)
      case 'n':
        return this.runChanged(args, cb)
      case 'f':
        return this.runFailed(args, cb)
      case 'f?':
        return this.showFailed(cb)
      case 'u':
        return this.updateSnapshots(args, cb)
      case 'w':
        return this.toggleWatch(cb)
      case 'w?':
        return this.showWatch(cb)
      case 'c':
        return this.report(args, cb)
      case 'i':
        return this.info(args, cb)
      case 'cls':
        return this.cls(cb)
      case 'parse':
        return this.spawnParser(args, cb)
      case 'tap':
        return this.spawnTap(args, {}, cb)
      case 'plugin':
      case 'build':
      case 'version':
      case 'versions':
      case 'list':
      case 'dump-config':
        return this.spawnTap(words, {}, cb)
      case 'exit':
        return this.exit()
      case '':
        return cb(null, undefined)

      case '-h':
      case '--help':
      case 'h':
      case 'help':
      case '?':
      default:
        return this.help(cb)
    }
  }

  cls(cb: Callback) {
    this.output.write('\u001b[2J\u001b[H')
    return cb(null, undefined)
  }

  exit() {
    this.input.setRawMode?.(false)
    this.showCursor()
    this.repl?.close()
    this.watch.close()
    this.#piWatcher.close()
    this.#killProc('SIGTERM')
  }

  showCursor() {
    this.output.write('\x1b[?25h')
  }

  help(cb: Callback) {
    this.output.write(usage)
    cb(null, undefined)
  }

  #spawn(
    cmd: string,
    args: string[],
    options: SpawnOptions = {},
    cb: (err: Error | null, result: any) => void
  ) {
    /* c8 ignore start */
    if (this.proc) return cb(null, 'command in progress, please wait')
    /* c8 ignore stop */
    this.repl?.pause()
    options.stdio = 'inherit'
    // inherit environment except what is specified, if anything
    // delete anything specified as undefined
    const env = { ...process.env, ...(options.env || {}) }
    for (const [k, v] of Object.entries(env)) {
      if (v === undefined) delete env[k]
    }
    // always save failures to our save file
    env.TAP_SAVE = this.saveFile

    env._TAP_REPL = '1'

    this.input.setRawMode?.(false)
    this.proc = spawn(cmd, args, {
      ...options,
      env,
      stdio: 'inherit',
    })
    this.proc.on('close', (code, signal) =>
      this.#onSpawnClose(code, signal, cb)
    )
  }

  async #onSpawnClose(
    code: null | number,
    signal: null | NodeJS.Signals,
    cb: (err: Error | null, result: any) => void
  ) {
    this.proc = undefined
    this.repl?.resume()
    this.input.setRawMode?.(true)
    this.showCursor()
    if (this.#haveChanges) {
      const c = await this.processInfo.externalIDsChanged()
      this.#haveChanges = c.size !== 0
    }
    if (this.#haveChanges) {
      this.output.write(stringify({ code, signal }))
      return this.runChanged([], cb)
    } else {
      cb(null, { code, signal })
    }
  }

  #onWatchChange() {
    if (!this.proc) {
      this.output.write('change detected\n')
      this.runChanged([], (_, result) => {
        this.output.write(stringify(result) + '\n')
        this.repl?.displayPrompt()
      })
    } else {
      this.#haveChanges = true
    }
  }

  // spawn the tap runner with the specified arguments
  spawnTap(args: string[], options: SpawnOptions, cb: Callback) {
    const argv = [...process.execArgv, tapBin, ...args]
    this.#spawn(process.execPath, argv, options, cb)
  }

  runTests(args: string[], cb: Callback) {
    // run all the tests in the suite like normal
    // If we have any args, then use a saveFile so that we don't
    // blow away our coverage and processinfo
    const TAP_COVERAGE_ADD = args.length ? '1' : '0'
    rimrafSync(this.saveFile)
    const env = { TAP_CHANGED: '0', TAP_COVERAGE_ADD }
    this.spawnTap(['run', ...args], { env }, cb)
  }

  runChanged(args: string[], cb: Callback) {
    rimrafSync(this.saveFile)
    this.spawnTap(['run', ...args], { env: { TAP_CHANGED: '1' } }, cb)
  }

  async showFailed(cb: Callback) {
    const fails = (
      await readFile(this.saveFile, 'utf8').catch(() => '')
    ).trim()
    if (!fails) return cb(null, 'no failed tests from previous runs')
    else cb(null, fails.split('\n'))
  }

  async runFailed(args: string[], cb: Callback) {
    this.spawnTap(['run', ...args], {}, cb)
  }

  updateSnapshots(args: string[], cb: Callback) {
    const TAP_COVERAGE_ADD = args.length ? '1' : '0'
    rimrafSync(this.saveFile)
    const env = {
      TAP_CHANGED: '0',
      TAP_SNAPSHOT: '1',
      TAP_COVERAGE_ADD,
    }
    this.spawnTap(['run', ...args], { env }, cb)
  }

  async toggleWatch(cb?: Callback) {
    if (this.watch.watching) {
      this.watch.close()
      return cb?.(null, 'not watching files for changes')
    }
    await this.watch.start()
    cb?.(null, 'watching files for changes (run w? to list them)')
  }

  async showWatch(cb: Callback) {
    const w = this.watch
    if (!w.watching) return cb(null, 'not watching files for changes')
    const { watchedFiles } = w
    const localFiles: string[] = []
    let deps: number = 0
    const here = resolve(this.config.globCwd)
    for (const f of watchedFiles) {
      const rel = relative(here, f)
      if (
        rel.startsWith('..') ||
        isAbsolute(rel) ||
        /[\\\/]node_modules[\\\/]/.test(rel)
      ) {
        deps++
      } else {
        localFiles.push(rel)
      }
    }
    const res: Record<string, any> = {
      [`${localFiles.length} local files being watched`]:
        localFiles.sort((a, b) => a.localeCompare(b, 'en')),
      'dependency files watched': deps,
    }

    return cb(null, res)
  }

  report(args: string[], cb: Callback) {
    this.spawnTap(['report', ...args], {}, cb)
  }

  #printPIN(
    node: ProcessInfoNode & {
      code?: number | null
      signal?: NodeJS.Signals | null
      runtime?: number
    },
    showParent: boolean = false
  ): PrintedProcessInfoNode {
    const args = [...node.execArgv, ...node.argv.slice(1)]
    const pin: PrintedProcessInfoNode = {
      date: node.date,
      command: node.argv[0],
      args,
      cwd: node.cwd,
      pid: node.pid,
      ppid: node.ppid,
    }
    if (showParent && node.parent) pin.parent = node.parent.uuid
    if (node.children) {
      pin.children = Object.fromEntries(
        [...node.children]
          .sort(({ date: a }, { date: b }) =>
            a.localeCompare(b, 'en')
          )
          .map(c => [c.uuid, this.#printPIN(c)])
      )
    }
    if (node.code !== null) pin.code = node.code
    if (node.signal !== null) pin.signal = node.signal
    if (node.runtime) pin.runtime = node.runtime
    return pin
  }

  info(args: string[], cb: Callback) {
    if (!args.length) {
      return cb(null, {
        'Provide a test id to get information': [
          ...this.processInfo.externalIDs.keys(),
        ],
      })
    }

    return cb(
      null,
      Object.fromEntries(
        args.map(id => {
          const pin =
            this.processInfo.externalIDs.get(id) ||
            this.processInfo.uuids.get(id)
          return [
            id,
            pin ? this.#printPIN(pin, true) : 'no data found',
          ]
        })
      )
    )
  }

  spawnParser(args: string[], cb: Callback) {
    this.output.write('Parsing TAP from stdin. Press ^D to finish.\n')
    this.#spawn('tap-parser', args, {}, cb)
  }

  completer(input: string) {
    const words = input
      .trimStart()
      .split(' ')
      .map(s => s.trim())
    const cmd = words[0]
    const args = words.slice(1)
    switch (cmd) {
      // resolve against filenames
      case 'r':
      case 'u':
      case 'n':
      case 'f':
        return this.#fileCompleter(cmd, args, input)
      case 'f?':
      case 'w':
      case 'w?':
      case 'cls':
      case 'parse':
      case 'build':
      case 'version':
      case 'versions':
      case 'list':
      case 'dump-config':
        return [[cmd], input]
      case 'i':
        return this.#piCompleter(cmd, args, input)
      default:
        return [this.#filterCompletions(commands, input), input]
    }
  }

  #piCompleter(cmd: string, args: string[], input: string) {
    const lw = args.pop() || ''
    const ids = (
      lw === ''
        ? [...this.processInfo.externalIDs.keys()]
        : [
            ...this.processInfo.externalIDs.keys(),
            ...this.processInfo.uuids.keys(),
          ]
    ).filter(id => !args.includes(id))
    const matches = this.#filterCompletions(
      ids.map(id => [cmd, ...args].join(' ') + ' ' + id),
      input
    )
    if (matches.length === 1) {
      matches[0] += ' '
    }
    return [matches, input]
  }

  #fileCompleter(cmd: string, args: string[], input: string) {
    const lw = args.pop() || ''
    const d = dirname(lw)
    const dir = lw.endsWith(sep) ? lw : d === '.' ? '' : d + sep
    try {
      const matches = this.#filterCompletions(
        readdirSync(dir || '.')
          .map(f => (statSync(dir + f).isDirectory() ? f + sep : f))
          .map(f => [cmd, ...args].join(' ') + ' ' + dir + f),
        input
      )
      if (matches.length === 1 && !matches[0].endsWith(sep)) {
        matches[0] += ' '
      }
      return [matches, input]
    } catch {
      return [[], input]
    }
  }

  #filterCompletions(list: string[], input: string) {
    const hits = list.filter(l => l.startsWith(input))
    return hits.length ? hits : list
  }

  static async start(
    input: NodeJS.ReadStream = process.stdin,
    output: NodeJS.WriteStream = process.stdout
  ) {
    const config = await TapConfig.load()
    const repl = new Repl(config, input, output)
    await mkdirp(repl.dir)
    repl.start()
    await repl.toggleWatch()
    return repl
  }
}
