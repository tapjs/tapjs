/**
 * Per-folder `_tap-scenario.*` side-processes for integration tests.
 *
 * @see https://github.com/tapjs/tapjs/issues/1067
 */
import { ChildProcess, spawn } from 'node:child_process'
import { readdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const node = process.execPath

/**
 * Filename pattern from #1067: `_tap-scenario.{c,m,}{t,j}s`
 * → `_tap-scenario.ts|cts|mts|js|cjs|mjs`
 */
export const isScenarioFile = (name: string) =>
  /^_tap-scenario\.[cm]?[tj]s$/.test(name)

export class ScenarioCrashError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message, cause !== undefined ? { cause } : undefined)
    this.name = 'ScenarioCrashError'
  }
}

export type ScenarioHandle = {
  file: string
  output: string
  done: () => Promise<void>
}

type ActiveScenario = {
  file: string
  output: string
  proc: ChildProcess
  terminating: boolean
  pending: number
  ready: Promise<string>
  crashed?: Error
  terminatePromise?: Promise<void>
}

const sleep = (ms: number) => new Promise<void>(res => setTimeout(res, ms))

/**
 * Find a `_tap-scenario.*` file in a directory, if one exists.
 * Prefer `.js`/`.cjs`/`.mjs` over TypeScript when multiple match,
 * so a built artifact wins over sources — but there should normally
 * be only one.
 */
export const findScenarioFile = async (
  dir: string,
): Promise<string | undefined> => {
  let entries: string[]
  try {
    entries = await readdir(dir)
  } catch {
    return undefined
  }
  const matches = entries.filter(isScenarioFile).sort()
  return matches[0] ? resolve(dir, matches[0]) : undefined
}

const waitForFirstOutput = (
  proc: ChildProcess,
  file: string,
): Promise<string> =>
  new Promise((res, rej) => {
    let settled = false
    const out: Buffer[] = []
    const finish = (err?: Error, data?: string) => {
      if (settled) return
      settled = true
      proc.stdout?.off('data', onData)
      proc.stderr?.off('data', onErrData)
      proc.off('error', onError)
      proc.off('exit', onExit)
      if (err) rej(err)
      else res(data ?? '')
    }
    const onData = (c: Buffer | string) => {
      out.push(Buffer.from(c))
      finish(undefined, Buffer.concat(out).toString('utf8'))
    }
    const onErrData = (_c: Buffer | string) => {
      // stderr alone does not count as the readiness signal
    }
    /* c8 ignore start */
    const onError = (er: Error) =>
      finish(
        new ScenarioCrashError(`scenario failed to start: ${file}`, er),
      )
    /* c8 ignore stop */
    const onExit = (
      code: number | null,
      signal: NodeJS.Signals | null,
    ) => {
      let detail = ''
      if (signal) detail = ` (signal ${signal})`
      else if (code != null) detail = ` (code ${code})`
      finish(
        new ScenarioCrashError(
          `scenario exited before producing output: ${file}` + detail,
        ),
      )
    }
    /* c8 ignore start */
    if (!proc.stdout) {
      finish(
        new ScenarioCrashError(
          `scenario has no stdout to wait on: ${file}`,
        ),
      )
      return
    }
    /* c8 ignore stop */
    proc.stdout.on('data', onData)
    proc.stderr?.on('data', onErrData)
    proc.on('error', onError)
    proc.on('exit', onExit)
  })

/**
 * Escalate signals until the scenario child is gone.
 * SIGHUP → 1s → SIGTERM → 1s → SIGKILL
 */
export const terminateScenario = async (
  proc: ChildProcess,
): Promise<void> => {
  if (proc.exitCode !== null || proc.signalCode !== null) return

  const exited = new Promise<void>(res => {
    proc.once('exit', () => res())
  })

  try {
    proc.kill('SIGHUP')
    /* c8 ignore start */
  } catch {
    return
  }
  /* c8 ignore stop */
  await Promise.race([exited, sleep(1000)])
  if (proc.exitCode !== null || proc.signalCode !== null) return

  try {
    proc.kill('SIGTERM')
    /* c8 ignore start */
  } catch {
    return
  }
  /* c8 ignore stop */
  await Promise.race([exited, sleep(1000)])
  if (proc.exitCode !== null || proc.signalCode !== null) return

  try {
    proc.kill('SIGKILL')
    /* c8 ignore start */
  } catch {
    return
  }
  /* c8 ignore stop */
  await exited
}

/**
 * Manages one scenario process per directory for a test run.
 */
export class ScenarioRegistry {
  #byDir = new Map<string, ActiveScenario>()
  /** Serializes first-start so parallel ensures share one process. */
  #starting = new Map<string, Promise<ActiveScenario | undefined>>()
  #argv: string[]
  #projectRoot: string

  constructor(argv: string[], projectRoot: string) {
    this.#argv = argv
    this.#projectRoot = projectRoot
  }

  async #start(dir: string): Promise<ActiveScenario | undefined> {
    const file = await findScenarioFile(dir)
    if (!file) return undefined

    // Another waiter may have finished starting while we looked it up.
    const existing = this.#byDir.get(dir)
    if (existing && !existing.terminating) return existing

    const proc = spawn(node, [...this.#argv, file], {
      cwd: this.#projectRoot,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: process.env,
    })

    const active: ActiveScenario = {
      file,
      output: '',
      proc,
      terminating: false,
      pending: 0,
      ready: waitForFirstOutput(proc, file).then(output => {
        // keep collecting so we do not fill the pipe
        proc.stdout?.on('data', () => {})
        active.output = output.trimEnd()
        return active.output
      }),
    }

    proc.on('exit', (code, signal) => {
      if (active.terminating) return
      active.crashed = new ScenarioCrashError(
        `scenario crashed unexpectedly: ${file}` +
          (signal ? ` (signal ${signal})`
          : code != null ? ` (code ${code})`
          : ''),
      )
    })

    this.#byDir.set(dir, active)
    return active
  }

  /**
   * Ensure a scenario is running for the directory containing `testFile`.
   * Returns undefined when the directory has no scenario file.
   * Call `done()` once the test for this file has finished.
   */
  async ensure(testFile: string): Promise<ScenarioHandle | undefined> {
    const dir = dirname(testFile)
    let active = this.#byDir.get(dir)
    if (!active || active.terminating) {
      let starting = this.#starting.get(dir)
      if (!starting) {
        starting = this.#start(dir).finally(() => {
          this.#starting.delete(dir)
        })
        this.#starting.set(dir, starting)
      }
      active = await starting
      if (!active) return undefined
    }

    active.pending++
    try {
      if (active.crashed) throw active.crashed
      const output = await active.ready
      if (active.crashed) throw active.crashed
      const handle: ScenarioHandle = {
        file: active.file,
        output,
        done: async () => {
          const crashed = active.crashed
          await this.#release(dir)
          if (crashed) throw crashed
        },
      }
      return handle
    } catch (er) {
      await this.#release(dir)
      throw er
    }
  }

  async #release(dir: string): Promise<void> {
    const active = this.#byDir.get(dir)
    if (!active) return
    active.pending = Math.max(0, active.pending - 1)
    if (active.pending > 0) return
    if (active.terminatePromise) return active.terminatePromise
    active.terminating = true
    active.terminatePromise = terminateScenario(active.proc).finally(
      () => {
        this.#byDir.delete(dir)
      },
    )
    return active.terminatePromise
  }

  /** Tear down any scenarios still running (runner abort / early exit). */
  async dispose(): Promise<void> {
    const all = [...this.#byDir.values()]
    this.#byDir.clear()
    this.#starting.clear()
    await Promise.all(
      all.map(async a => {
        a.terminating = true
        a.pending = 0
        await terminateScenario(a.proc)
      }),
    )
  }
}
