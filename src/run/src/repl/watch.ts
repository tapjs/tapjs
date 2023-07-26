// a watcher that watches files for changes
//
// A watcher is set on the .tap/processinfo folder if it exists,
// which marks the ProcessInfo db as dirty. If it's dirty, then
// we need to reload it before computing changes.
//
// Because the tap runner can already do a --changed run, we can
// just emit that *some* change happened. The specific files changed
// doesn't matter, just that it was one of the files involved in a
// test.

import { ProcessInfo } from '@tapjs/processinfo'
import { watch } from 'chokidar'
import EventEmitter from 'events'
import { FSWatcher } from 'fs'
import { resolve } from 'path'
import { options } from './chokidar-options.js'

export class Watch extends EventEmitter {
  pi: ProcessInfo
  piDir: string
  piDirty: boolean = true
  fileWatcher?: FSWatcher
  watchedFiles: string[] = []
  dir: string
  #starting: boolean = false

  get watching(): boolean {
    return !!this.fileWatcher
  }

  constructor(dir: string, processInfo: ProcessInfo) {
    super()
    this.dir = dir
    this.piDir = resolve(dir, 'processinfo')
    this.pi = processInfo
  }

  async start() {
    if (this.#starting) return
    this.#starting = true

    const files:string[] = []
    for (const f of this.pi.files.keys()) {
      /* c8 ignore start */
      if (!f) continue
      /* c8 ignore stop */
      files.push(f)
    }

    // if the number of files changed, definitely dirty
    let filesDirty: boolean =
      files.length !== this.watchedFiles.length
    if (!filesDirty) {
      for (const f of this.pi.files.keys()) {
        if (!this.watchedFiles.includes(f)) {
          filesDirty = true
          break
        }
      }
    }
    // if already watching and no change to file list, nothing to do
    if (filesDirty || !this.fileWatcher) {
      this.watchedFiles = files
      if (this.fileWatcher) this.fileWatcher.close()
      this.fileWatcher = watch(this.watchedFiles, options)
      this.fileWatcher.on('all', (ev: string) => {
        // don't care about adds here, we already know what files
        // we care about.
        if (ev === 'add') return
        this.emit('change')
      })
    }
    this.#starting = false
  }

  close() {
    this.fileWatcher?.close()
    this.fileWatcher = undefined
  }
}
