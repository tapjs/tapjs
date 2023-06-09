import { TestBase } from '@tapjs/core'
import { plugin as SnapshotPlugin } from '@tapjs/snapshot'
import { CallSiteLike } from '@tapjs/stack'
import { mkdirSync, readFileSync, writeFileSync } from 'fs'

import nock from 'nock'
import { dirname } from 'path'

import { ErrMissingSnapshotData } from './errors.js'

const PAUSED = Symbol('nock.tap.paused')
const RECORDING = Symbol('nock.tap.recording')
const STOPPED = Symbol('nock.tap.stopped')

export interface ScopeWithAt extends nock.Scope {
  _at?: CallSiteLike
}

export interface NockRecorderOptions {
  key: string
  clean: (scope: nock.Definition) => nock.Definition
}
export interface NockRecorderOptionsMaybe {
  key?: string
  clean?: (scope: nock.Definition) => nock.Definition
}
export interface NockRecorderLoadOptions {
  load?: (def: nock.Definition) => nock.Definition
}

class NockRecorder {
  #caller: Function | ((...a: any[]) => any)
  #indexes = new Map<string, number>()
  #snapshot: { [k: string]: nock.Definition[] } = {}
  #snapshotFile
  #stack: NockRecorderOptions[] = []
  #state = STOPPED
  #test

  constructor(
    test: TestBase,
    caller: Function | ((...a: any[]) => any)
  ) {
    this.#test = test

    // safety precaution.
    /* c8 ignore start */
    if (!this.#test.t.pluginLoaded(SnapshotPlugin)) {
      throw new Error(
        '@tapjs/nock: cannot record if snapshots are not enabled'
      )
    }
    /* c8 ignore stop */

    // used for findCallLocation within errors
    this.#caller = caller
    // the snapshotFile for us will be the test's snapshot file with
    // a different extension
    this.#snapshotFile = this.#test.t.snapshotFile.replace(
      /\.test\.cjs$/,
      '.nock.json'
    )
    this.#test.t.teardown(() => {
      this.writeSnapshot()
    })
  }

  #getKey(name: string) {
    const index = this.#indexes.get(name) || 1
    this.#indexes.set(name, index + 1)
    const key = `${name} ${index}`
    return key
  }

  #saveState({ key, clean }: NockRecorderOptions) {
    if (!this.#snapshot[key]) {
      this.#snapshot[key] = []
    }
    const plays = nock.recorder.play() as nock.Definition[]
    const recordings = plays.map(scope => clean(scope))
    this.#snapshot[key].push(...recordings)
    nock.recorder.clear()
  }

  get paused() {
    return this.#state === PAUSED
  }

  get recording() {
    return this.#state === RECORDING
  }

  load(name: string, options: NockRecorderLoadOptions = {}) {
    const key = this.#getKey(name)

    // if we haven't read the snapshotFile, do it now
    if (!Object.keys(this.#snapshot).length) {
      try {
        this.#snapshot = JSON.parse(
          readFileSync(this.#snapshotFile, 'utf8')
        )
      } catch (e) {
        throw new ErrMissingSnapshotData(this.#test, this.#caller)
      }
    }

    // if the snapshot file has no data for our test, throw an error here
    if (!Array.isArray(this.#snapshot[key])) {
      throw new ErrMissingSnapshotData(this.#test, this.#caller)
    }

    const load: (scope: nock.Definition) => nock.Definition =
      typeof options.load === 'function'
        ? options.load
        : scope => scope

    // turn the json data into real nocks and return them
    const nocks = this.#snapshot[key].map(scope => load(scope))
    const scopes = nock.define(nocks)
    return scopes
  }

  start(name: string, options: NockRecorderOptionsMaybe = {}) {
    if (this.#stack.length) {
      this.#saveState(this.#stack[this.#stack.length - 1])
    }

    const key = this.#getKey(name)
    this.#stack.push({
      key,
      clean:
        typeof options.clean === 'function'
          ? options.clean
          : scope => scope,
    })

    if (!this.recording) {
      this.#state = RECORDING
      nock.recorder.rec({
        dont_print: true,
        output_objects: true,
      })
    }
  }

  finish() {
    // finish will be called in the reverse order that start was called in, so
    // we pop the most recent test off the stack, store the recorded data for
    // it, and then clear the nock recorder state
    const def = this.#stack.pop()
    if (def) this.#saveState(def)
  }

  pause() {
    if (!this.recording) {
      return
    }

    if (this.#stack.length) {
      this.#saveState(this.#stack[this.#stack.length - 1])
    }

    nock.restore()
    nock.activate()
    this.#state = PAUSED
  }

  resume() {
    if (!this.paused) {
      return
    }

    // no need to do anything other than start the recorder back up
    this.#state = RECORDING
    nock.recorder.rec({
      dont_print: true,
      output_objects: true,
    })
  }

  writeSnapshot() {
    if (!this.recording) {
      return
    }

    this.#state = STOPPED
    // stop the recorder
    nock.restore()
    nock.activate()
    // this will only run when the root test is being torn down, which means
    // everything else is finished and now we just need to actually write the
    // snapshot file
    mkdirSync(dirname(this.#snapshotFile), { recursive: true })
    writeFileSync(
      this.#snapshotFile,
      JSON.stringify(this.#snapshot, null, 2)
    )
  }
}

export default NockRecorder
