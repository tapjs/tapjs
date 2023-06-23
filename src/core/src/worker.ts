// the .worker() method is only added to the root test object
// See https://github.com/tapjs/node-tap/issues/812
import { Base, TapBaseEvents } from './base.js'
import { env } from './proc.js'
import { TestBaseOpts } from './test-base.js'

import { format } from 'node:util'
import { Worker as NodeWorker } from 'node:worker_threads'
import { FinalResults } from 'tap-parser'

export interface WorkerEvents extends TapBaseEvents {}

export interface WorkerOpts extends TestBaseOpts {
  workerData?: any
  threadId?: number
  env?: { [k: string]: string } | NodeJS.ProcessEnv
}

export class Worker extends Base<WorkerEvents> {
  declare options: WorkerOpts

  filename: string
  cb?: () => void
  #worker?: NodeWorker
  #childId: string
  #env: { [k: string]: string } | NodeJS.ProcessEnv
  // doesn't have to be cryptographically secure, just a gut check
  #tapAbortKey: string = String(Math.random())
  #timedOut?: { expired?: string }
  #parserEnded: boolean = false
  #workerEnded: boolean = false

  constructor(options: WorkerOpts) {
    const { filename } = options
    if (!filename) {
      throw new TypeError('no filename provided for t.worker()')
    }
    super(options)
    this.#childId = String(options.childId || env.TAP_CHILD_ID || '0')
    this.filename = filename
    this.#env = options.env || env
  }

  main(cb: () => void) {
    this.cb = cb
    this.setTimeout(this.options.timeout || 0)

    this.parser.on('comment', c => {
      const tomatch = c.match(/# timeout=([0-9]+)\n$/)
      if (tomatch) {
        this.setTimeout(+tomatch[1])
      }
    })

    this.parent?.emit('worker', this)
    const options = {
      ...this.options,
      stdout: true,
      env: {
        ...this.#env,
        TAP: '1',
        TAP_CHILD_ID: this.#childId,
        TAP_BAIL: this.bail ? '1' : '0',
        TAP_ABORT_KEY: this.#tapAbortKey,
      },
    }
    this.emit('preprocess', options)
    this.#worker = new NodeWorker(this.filename, options)
    this.#worker.stdout.pipe(this.parser)
    this.#worker.on('error', e => this.threw(e))
    this.#worker.on('exit', () => this.#onworkerexit())
    this.#worker.on('message', m => this.comment(m))
    this.emit('process', this.#worker)
  }

  #onworkerexit() {
    if (this.#timedOut) super.timeout(this.#timedOut)
    this.#workerEnded = true
    if (this.#parserEnded) this.#callCb()
    this.setTimeout(0)
  }

  timeout(options: { expired?: string } = { expired: this.name }) {
    this.#timedOut = options
    // try to send the timeout signal.  If the child test process is
    // using node-tap as the test runner, and not caught in a busy
    // loop, it will trigger a dump of outstanding handles and refs.
    // If that doesn't do the job, then we fall back to thread termination.
    const worker = this.#worker
    if (worker) {
      try {
        worker.postMessage({
          tapAbort: 'timeout',
          key: this.#tapAbortKey,
          child: this.childId,
        })
        /* c8 ignore start */
      } catch (_) {}
      /* c8 ignore stop */
      const t = setTimeout(() => {
        // try to give it a chance to note the timeout and report handles
        try {
          worker.terminate()
        } catch (er) {}
      }, 500)
      /* c8 ignore start */
      if (t.unref) t.unref()
      /* c8 ignore stop */
    }
  }

  oncomplete(results: FinalResults) {
    super.oncomplete(results)
    this.#parserEnded = true
    if (this.#workerEnded) this.#callCb()
  }

  #callCb() {
    const { cb } = this
    /* c8 ignore start */
    if (!cb) {
      throw new Error(
        'tap worker finished before receiving cb??'
      )
    }
    /* c8 ignore stop */
    cb()
  }

  comment(...args: any[]) {
    const body = format(...args)
    const message =
      ('# ' + body.split(/\r?\n/).join('\n# ')).trim() + '\n'
    if (this.parser.results) {
      console.log(message)
    } else {
      this.parser.write(message)
    }
  }
}
