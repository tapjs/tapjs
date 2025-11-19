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
import { watch, FSWatcher } from 'chokidar'
import { options } from './chokidar-options.js'

export class Watch {
  processInfo: ProcessInfo
  fileWatcher?: FSWatcher
  watchedFiles: string[] = []
  onChange: () => any

  get watching(): boolean {
    return !!this.fileWatcher
  }

  constructor(processInfo: ProcessInfo, onChange: () => any) {
    this.processInfo = processInfo
    this.onChange = onChange
  }

  // Validate that a change which occurs mid-process is still relevant
  // later. If a change is made to a test file while tests are running,
  // it might end up being made obsolete by the test running after the
  // change has occurred.
  async validateChanges() {
    // only care about top-level externalID processes here.
    // if the user set an externalID on a t.spawn() process in a test,
    // then that's not relevant.
    const c = await this.processInfo.externalIDsChanged(
      (_, c) => !c.parent,
    )
    return c.size !== 0
  }

  start() {
    const files: string[] = []
    for (const f of this.processInfo.files.keys()) {
      /* c8 ignore start */
      if (!f) continue
      /* c8 ignore stop */
      files.push(f)
    }

    // if the number of files changed, definitely dirty
    let filesDirty: boolean = files.length !== this.watchedFiles.length
    if (!filesDirty) {
      for (const f of this.processInfo.files.keys()) {
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
      this.fileWatcher?.on('all', (ev: string) => {
        // don't care about adds here, we already know what files
        // we care about.
        if (ev === 'add') return
        this.onChange()
      })
    }
  }

  close() {
    if (!this.watching) return
    this.fileWatcher?.close()
    this.fileWatcher = undefined
  }
}
