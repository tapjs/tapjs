import { LoadedConfig } from '@tapjs/config'
import { ProcessInfo, ProcessInfoNode } from '@tapjs/processinfo'
import chalk from 'chalk'
import { FSWatcher, watch } from 'chokidar'
import { ChildProcess, spawn, SpawnOptions } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { isAbsolute, relative, resolve } from 'node:path'
import type { REPLServer } from 'node:repl'
import { start } from 'node:repl'
import { fileURLToPath } from 'node:url'
import { resolveImport } from 'resolve-import'
import { rimrafSync } from 'rimraf'
import { stringify } from 'tap-yaml'
import { Deferred } from 'trivial-deferred'
import { options } from './chokidar-options.js'
import { fileCompleter } from './file-completer.js'
import { filterCompletions } from './filter-completions.js'
import { processinfoCompletions } from './processinfo-completions.js'
import { Watch } from './watch.js'

const tapBin = fileURLToPath(
  await resolveImport('../index.js', import.meta.url)
)

type NodeCallback = (er: Error | null, result: any) => void

const KILL_TIMEOUT =
  Number(process.env._TAP_REPL_KILL_TIMEOUT) || 2000

/**
 * A {@link ProcessInfoNode}, as printed to the repl output.
 */
export type PrintedProcessInfoNode = {
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

w [ on | off ]
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
  // the process always inherits our stdio
  proc?: ChildProcess

  processInfo: ProcessInfo
  watch: Watch
  #haveChanges: boolean = false

  #piReloading: boolean = false
  #piWatcher: FSWatcher
  #queue: [string, Deferred<any>][] = []

  #inputEnded: boolean = false

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

    this.watch = new Watch(this.processInfo, () =>
      this.#onWatchChange()
    )

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
      eval: (input: string, _: any, __: any, cb: NodeCallback) =>
        this.parseCommand(input).then((res?: any) => {
          cb(null, res)
          while (this.#queue.length && !this.proc) {
            const [input, d] = this.#queue[0]
            this.#queue.shift()
            d.resolve(this.parseCommand(input))
          }
          if (this.#inputEnded && !this.#queue.length && !this.proc) {
            this.exit()
          }
        }),
      /* c8 ignore start */
      completer: (input: string) => this.completer(input),
      /* c8 ignore stop */
      writer: res =>
        res === undefined
          ? ''
          : typeof res === 'string'
          ? res
          : stringify(res),
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

    this.input.on('end', () => this.#onInputEnd())
    this.input.on('close', () => this.#onInputEnd())
    const osi = () => this.#onSigint()
    process.removeAllListeners('SIGINT')
    process.on('SIGINT', osi)
    // suppress the "press ^C again to exit" message
    this.repl.removeAllListeners('SIGINT')
    this.repl.on('SIGINT', osi)
  }

  #onInputEnd() {
    this.#inputEnded = true
    if (!this.proc) {
      this.exit()
    }
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
      setTimeout(() => this.#killProc(next), KILL_TIMEOUT)?.unref?.()
    }
  }

  #onSigint() {
    this.output.write(this.proc ? '\n' : '^C\n')
    if (this.proc) {
      this.#killProc('SIGINT')
    } else {
      this.exit()
      process.removeAllListeners('SIGINT')
      process.kill(process.pid, 'SIGINT')
    }
  }

  async parseCommand(input: string): Promise<any | void> {
    if (this.proc) {
      const d = new Deferred<any>()
      this.#queue.push([input, d])
      return d.promise
    }
    if (!this.input.isTTY) {
      this.output.write(input)
    }
    const words = input
      .trim()
      .split(' ')
      .map(s => s.trim())
    const cmd = words[0]
    const args = words.slice(1)
    switch (cmd) {
      case 'r':
        return this.runTests(args)
      case 'n':
        return this.runChanged(args)
      case 'f':
        return this.runFailed(args)
      case 'f?':
        return this.showFailed()
      case 'u':
        return this.updateSnapshots(args)
      case 'w':
        return this.toggleWatch(args)
      case 'w?':
        return this.showWatch()
      case 'c':
        return this.report(args)
      case 'i':
        return this.info(args)
      case 'cls':
        return this.cls()
      case 'parse':
        return this.spawnParser(args)
      case 'tap':
        return this.spawnTap(args)
      case 'list':
      case 'plugin':
      case 'build':
      case 'version':
      case 'versions':
      case 'dump-config':
        return this.spawnTap(words)
      case 'exit':
        return this.exit()
      case '':
        return

      case '-h':
      case '--help':
      case 'h':
      case 'help':
      case '?':
      default:
        return this.help()
    }
  }

  async cls() {
    return '\x1b[2J\x1b[H'
  }

  #setRawMode(mode: boolean) {
    // ignored to avoid the ?., which is only there because the stream
    // might not have this method.
    /* c8 ignore start */
    this.input.setRawMode?.(mode)
    /* c8 ignore stop */
  }

  exit() {
    this.#setRawMode(false)
    this.showCursor()
    this.repl?.close?.()
    this.watch?.close?.()
    this.#piWatcher?.close?.()
    this.#killProc('SIGTERM')
  }

  showCursor() {
    this.output.write('\x1b[?25h')
  }

  async help() {
    return usage
  }

  async #spawn(
    cmd: string,
    args: string[],
    options: SpawnOptions = {}
  ) {
    /* c8 ignore start */
    if (this.proc) return 'command in progress, please wait'
    /* c8 ignore stop */
    this.repl?.pause()
    // inherit environment except what is specified, if anything
    // delete anything specified as undefined
    const env = { ...process.env, ...(options.env || {}) }
    // always save failures to our save file
    env.TAP_SAVE = this.saveFile

    env._TAP_REPL = '1'

    this.#setRawMode(false)
    const proc = (this.proc = spawn(cmd, args, {
      ...options,
      env,
      stdio: 'inherit',
    }))
    return new Promise<any | void>(res => {
      proc.on('close', (code, signal) =>
        res(this.#onSpawnClose(code, signal))
      )
    })
  }

  async #onSpawnClose(
    code: null | number,
    signal: null | NodeJS.Signals
  ) {
    this.proc = undefined
    this.repl?.resume()
    this.#setRawMode(true)
    this.showCursor()
    if (this.#haveChanges && (await this.watch.validateChanges())) {
      // A change occurred while the process was running, and we've validated
      // that it wasn't made irrelevant by the test eventually running that
      // file.
      this.output.write(stringify({ code, signal }))
      return this.runChanged([])
    } else {
      return { code, signal }
    }
  }

  async #onWatchChange() {
    if (!this.proc) {
      this.output.write('change detected\n')
      this.output.write(stringify(await this.runChanged([])) + '\n')
      this.repl?.displayPrompt()
    } else {
      this.#haveChanges = true
    }
  }

  // spawn the tap runner with the specified arguments
  async spawnTap(args: string[], options?: SpawnOptions) {
    const argv = [...process.execArgv, tapBin, ...args]
    return this.#spawn(process.execPath, argv, options)
  }

  async runTests(args: string[]) {
    // run all the tests in the suite like normal
    // If we have any args, then use a saveFile so that we don't
    // blow away our coverage and processinfo
    rimrafSync(this.saveFile)
    const env = args.length
      ? { TAP_CHANGED: '0', TAP_COVERAGE_ADD: '1' }
      : process.env
    return this.spawnTap(['run', ...args], { env })
  }

  async runChanged(args: string[]) {
    rimrafSync(this.saveFile)
    return this.spawnTap(['run', ...args], {
      env: { TAP_CHANGED: '1' },
    })
  }

  async showFailed() {
    const fails = (
      await readFile(this.saveFile, 'utf8').catch(() => '')
    ).trim()
    if (!fails) return 'no failed tests from previous runs'
    else return fails.split('\n')
  }

  async runFailed(args: string[]) {
    return this.spawnTap(['run', ...args])
  }

  updateSnapshots(args: string[]) {
    const TAP_COVERAGE_ADD = args.length ? '1' : '0'
    rimrafSync(this.saveFile)
    const env = {
      TAP_CHANGED: '0',
      TAP_SNAPSHOT: '1',
      TAP_COVERAGE_ADD,
    }
    this.spawnTap(['run', ...args], { env })
  }

  async toggleWatch(args: string[]) {
    const on =
      args[0] === 'on'
        ? true
        : /* c8 ignore start */
        args[1] === 'off'
        ? false
        : /* c8 ignore stop */
          !this.watch.watching
    this.watch[on ? 'start' : 'close']()
    return this.showWatch()
  }

  async showWatch() {
    const w = this.watch
    if (!w.watching) return 'not watching files for changes'
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

    return res
  }

  async report(args: string[]) {
    return this.spawnTap(['report', ...args])
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
          // nondeterministic
          /* c8 ignore start */
          .sort(({ date: a }, { date: b }) =>
            a.localeCompare(b, 'en')
          )
          /* c8 ignore stop */
          .map(c => [c.uuid, this.#printPIN(c)])
      )
    }
    if (node.code !== null) pin.code = node.code
    /* c8 ignore start */
    if (node.signal !== null) pin.signal = node.signal
    /* c8 ignore stop */
    if (node.runtime) pin.runtime = node.runtime
    return pin
  }

  async info(args: string[]) {
    if (!args.length) {
      return {
        'Provide a test id to get information': [
          ...this.processInfo.externalIDs.keys(),
        ],
      }
    }
    return Object.fromEntries(
      args.map(id => {
        const pin =
          this.processInfo.externalIDs.get(id) ||
          this.processInfo.uuids.get(id)
        return [id, pin ? this.#printPIN(pin, true) : 'no data found']
      })
    )
  }

  async spawnParser(args: string[]) {
    this.output.write('Parsing TAP from stdin. Press ^D to finish.\n')
    this.#spawn('tap-parser', args)
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
        return fileCompleter(args, input)
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
        return processinfoCompletions(this.processInfo, args, input)
      default:
        return [filterCompletions(commands, input), input]
    }
  }
}
