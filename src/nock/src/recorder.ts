/**
 * Implementation of the `t.nock.snapshot()` functionality, which records
 * actual requests and then writes them to a file when snapshots are being
 * generated, or returns the cached values normally.
 */
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

/**
 * Same as a {@link nock.Scope | nock.Scope}, but decorated with
 * call site information about where the scope was created.
 */
export interface ScopeWithAt extends nock.Scope {
  _at?: CallSiteLike
}

/**
 * Options passed to the {@link @tapjs/nock!recorder.NockRecorder}
 *
 * @internal
 */
export interface NockRecorderOptions {
  key: string
  clean: (scope: nock.Definition) => nock.Definition
}

/**
 * Options where we might not actually have the fields
 */
export interface NockRecorderOptionsMaybe {
  key?: string
  clean?: (scope: nock.Definition) => nock.Definition
}

/**
 * Options for the {@link @tapjs/nock!recorder.NockRecorder#load} method
 */
export interface NockRecorderLoadOptions {
  load?: (def: nock.Definition) => nock.Definition
}

/**
 * Class providing the implementation of the `t.nock.snapshot()`
 * functionality
 */
export class NockRecorder {
  #caller: Function | ((...a: any[]) => any)
  #indexes = new Map<string, number>()
  #snapshot: { [k: string]: nock.Definition[] } = {}
  #snapshotFile
  #stack: NockRecorderOptions[] = []
  #state = STOPPED
  #test

  constructor(
    test: TestBase,
    caller: Function | ((...a: any[]) => any),
  ) {
    this.#test = test

    // safety precaution.
    /* c8 ignore start */
    if (!this.#test.t.pluginLoaded(SnapshotPlugin)) {
      throw new Error(
        '@tapjs/nock: cannot record if snapshots are not enabled',
      )
    }
    /* c8 ignore stop */

    // used for findCallLocation within errors
    this.#caller = caller
    // the snapshotFile for us will be the test's snapshot file with
    // a different extension
    this.#snapshotFile = this.#test.t.snapshotFile.replace(
      /\.test\.cjs$/,
      '.nock.json',
    )
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
    this.#snapshot[key]?.push(...recordings)
    nock.recorder.clear()
  }

  get paused() {
    return this.#state === PAUSED
  }

  get recording() {
    return this.#state === RECORDING
  }

  /**
   * Attempt to load the recorded nock snapshot json file.
   *
   * If snapshots are being written, then make actual requests and
   * save the recorded values to the snapshot json file.
   *
   * Otherwise, load http request results from the snapshot json.
   */
  load(name: string, options: NockRecorderLoadOptions = {}) {
    const key = this.#getKey(name)

    // if we haven't read the snapshotFile, do it now
    if (!Object.keys(this.#snapshot).length) {
      try {
        this.#snapshot = JSON.parse(
          readFileSync(this.#snapshotFile, 'utf8'),
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
      typeof options.load === 'function' ?
        options.load
      : scope => scope

    // turn the json data into real nocks and return them
    const nocks = this.#snapshot[key]?.map(scope => load(scope))
    /* c8 ignore start */
    if (!nocks) {
      throw new Error(`could not get nocks for ${key}`)
    }
    /* c8 ignore stop */
    const scopes = nock.define(nocks)
    return scopes
  }

  /**
   * Start recording http requests
   */
  start(name: string, options: NockRecorderOptionsMaybe = {}) {
    if (this.#stack.length) {
      const state = this.#stack[this.#stack.length - 1]
      /* c8 ignore start */
      if (!state) throw new Error('could not get current nock state')
      /* c8 ignore stop */
      this.#saveState(state)
    }

    const key = this.#getKey(name)
    this.#stack.push({
      key,
      clean:
        typeof options.clean === 'function' ?
          options.clean
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

  /**
   * Finish the recording and write state
   */
  finish() {
    // finish will be called in the reverse order that start was called in, so
    // we pop the most recent test off the stack, store the recorded data for
    // it, and then clear the nock recorder state
    const def = this.#stack.pop()
    if (def) this.#saveState(def)
  }

  /**
   * pause the recording
   */
  pause() {
    if (!this.recording) {
      return
    }

    if (this.#stack.length) {
      const state = this.#stack[this.#stack.length - 1]
      /* c8 ignore start */
      if (!state) throw new Error('could not get current nock state')
      /* c8 ignore stop */
      this.#saveState(state)
    }

    nock.restore()
    nock.activate()
    this.#state = PAUSED
  }

  /**
   * resume recording
   */
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

  /**
   * Write the recorded snapshot json to the appropriate file
   */
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
      JSON.stringify(this.#snapshot, null, 2),
    )
  }
}
