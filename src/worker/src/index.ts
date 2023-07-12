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
  isMainThread: boolean
  constructor(t: TestBase) {
    this.#t = t
    this.isMainThread = isMainThread
    // covered by tests, but V8 coverage doesn't extend to worker threads
    /* c8 ignore start */
    if (!isMainThread) this.#workerData = workerData
    /* c8 ignore stop */
  }

  get workerData() {
    return this.#workerData
  }

  worker(filename: string): PromiseWithWorker
  worker(filename: string, name?: string): PromiseWithWorker
  worker(
    filename: string,
    options: WorkerOpts,
    name?: string
  ): PromiseWithWorker
  worker(
    filename: string,
    options?: WorkerOpts | string,
    name?: string
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
