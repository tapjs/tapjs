import { Base, proc, Spawn, TestBase, Worker } from '@tapjs/core'
import { ChildProcess } from 'child_process'
import { Worker as NodeWorker } from 'node:worker_threads'
import { signals as fatalSignals } from 'signal-exit'

let exitSignal: NodeJS.Signals | undefined = undefined

const didTerminalSignalProxy = new Set<TestBase>()
const proxySignal = (t: TestBase, signal: NodeJS.Signals) => {
  const { pool, subtests } = t

  const onProc = (proc: ChildProcess | NodeWorker) => {
    const c = proc as ChildProcess
    const w = proc as NodeWorker
    c.kill?.(signal)
    w.terminate?.()
  }

  const onST = (t: Base) => {
    t.options.signal = signal
    // if it's already processed and printed, then this a no-op.
    // but otherwise, we treat any as-yet unprocessed test as a failure.
    if (t.results) {
      t.results.ok = false
      t.parser.ok = false
    } else {
      t.on('complete', results => {
        t.parser.ok = false
        results.ok = false
      })
    }

    const s = t as Spawn
    const w = t as Worker
    s.proc?.kill?.(signal)
    w.worker?.terminate?.()
    if (!s.proc && !w.worker) {
      // don't double up
      s.removeListener('process', onProc)
      s.on('process', onProc)
    }
  }

  for (const st of [...pool, ...subtests]) {
    if (
      st.constructor.name === 'Worker' ||
      st.constructor.name === 'Spawn'
    ) {
      onST(st)
    }
  }

  t.on('spawn', onST)
  t.on('worker', onST)
}

export const proxyFatalSignals = (t: TestBase) => {
  if (didTerminalSignalProxy.has(t)) return
  didTerminalSignalProxy.add(t)

  const p = proc
  /* c8 ignore start */
  if (!p) return
  /* c8 ignore stop */

  const sigListeners: { [k in NodeJS.Signals]?: () => void } = {}
  for (const sig of fatalSignals) {
    const onFatalSignal = () => {
      exitSignal ??= sig
      proxySignal(t, sig)
      // remove after this tick, so signal-exit doesn't
      // get an itchy trigger finger and kill the process
      // before we have a chance to proxy the signal.
      setTimeout(() => p.removeListener(sig, onFatalSignal))
    }
    try {
      p.on(sig, onFatalSignal)
      sigListeners[sig] = onFatalSignal
      /* c8 ignore start */
    } catch {}
    /* c8 ignore stop */
  }

  // stop proxying when tap is complete, and exit with the signal
  t.on('complete', () => {
    for (const [sig, fn] of Object.entries(sigListeners)) {
      p.removeListener(sig, fn)
    }
    if (exitSignal) {
      p.kill(p.pid, exitSignal)
      setTimeout(() => {}, 200)
    }
  })
}
