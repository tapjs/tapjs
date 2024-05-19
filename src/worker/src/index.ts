import {
  PromiseWithSubtest,
  TapPlugin,
  TestBase,
  Worker,
  WorkerOpts,
} from '@tapjs/core'

import { isMainThread, workerData } from 'node:worker_threads'

export type PromiseWithWorker = PromiseWithSubtest<Worker>

export class WorkerPlugin {
  #t: TestBase
  #workerData?: any

  /**
   * True if in the main thread. False when running in a worker thread
   * spawned by {@link @tapjs/worker!WorkerPlugin#worker | t.worker}
   *
   * @group Test Reflection
   */
  isMainThread: boolean

  constructor(t: TestBase) {
    this.#t = t
    this.isMainThread = isMainThread
    // covered by tests, but V8 coverage doesn't extend to worker threads
    /* c8 ignore start */
    if (!isMainThread) this.#workerData = workerData
    /* c8 ignore stop */
  }

  /**
   * In the worker thread, the worker data that was provided to the
   * {@link @tapjs/worker!WorkerPlugin#worker | t.worker} method.
   *
   * In the main thread, this field is `undefined`.
   */
  get workerData() {
    return this.#workerData
  }

  /**
   * Start a Node Worker thread and parse its standard output as a child test
   *
   * @group Subtest Methods
   */
  worker(filename: string): PromiseWithWorker
  worker(filename: string, name?: string): PromiseWithWorker
  worker(
    filename: string,
    options: WorkerOpts,
    name?: string,
  ): PromiseWithWorker
  worker(
    filename: string,
    options?: WorkerOpts | string,
    name?: string,
  ): PromiseWithWorker {
    if (typeof options === 'string') {
      name = options
      options = {}
    }
    options = options || {}
    if (options.name === undefined && name !== undefined) {
      options.name = name
    }
    options.filename = filename
    return this.#t.sub(Worker, options, this.#t.t.worker)
  }
}

export const plugin: TapPlugin<WorkerPlugin> = (t: TestBase) =>
  new WorkerPlugin(t)
