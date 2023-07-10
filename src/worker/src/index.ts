import {
  BaseOpts,
  PromiseWithSubtest,
  Worker,
  TapPlugin,
  TestBase,
} from '@tapjs/core'

export interface WorkerOpts extends BaseOpts {}

import { isMainThread, workerData } from 'node:worker_threads'

export type PromiseWithWorker = PromiseWithSubtest<Worker>

export class WorkerPlugin {
  #t: TestBase
  #workerData?: any
  isMainThread: boolean
  constructor(t: TestBase) {
    this.#t = t
    this.isMainThread = isMainThread
    if (!isMainThread) this.#workerData = workerData
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
    if (options.name === undefined) {
      options.name = name
    }
    options.filename = filename
    return this.#t.sub(Worker, options, this.worker)
  }
}

export const plugin: TapPlugin<WorkerPlugin> = (t: TestBase) =>
  new WorkerPlugin(t)
