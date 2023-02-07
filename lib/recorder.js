'use strict'

const fs = require('fs')
const nock = require('nock')
const path = require('path')

const { ErrMissingSnapshotData } = require('./errors.js')

const _getKey = Symbol('nock.tap.getKey')
const _saveState = Symbol('nock.tap.saveState')
const PAUSED = Symbol('nock.tap.paused')
const RECORDING = Symbol('nock.tap.recording')
const STOPPED = Symbol('nock.tap.stopped')

class NockRecorder {
  #ctor
  #indexes = new Map()
  #snapshot = {}
  #snapshotFile
  #stack = []
  #state = STOPPED
  #test

  constructor (test, ctor) {
    this.#ctor = ctor // used for findCallLocation within errors
    this.#test = test
    // the snapshotFile for us will be the test's snapshot file with a different extension
    this.#snapshotFile = this.#test.snapshotFile.replace(/\.js\.test\.cjs$/, '.nock.json')
    this.#test.teardown(() => this.writeSnapshot())
  }

  [_getKey] (name) {
    const index = +this.#indexes.get(name) || 1
    this.#indexes.set(name, index + 1)
    const key = `${name} ${index}`
    return key
  }

  [_saveState] ({ key, clean }) {
    if (!this.#snapshot[key]) {
      this.#snapshot[key] = []
    }
    const recordings = nock.recorder.play()
      .map((scope) => clean(scope))
    this.#snapshot[key].push(...recordings)
    nock.recorder.clear()
  }

  get paused () {
    return this.#state === PAUSED
  }

  get recording () {
    return this.#state === RECORDING
  }

  load (name, options = {}) {
    const key = this[_getKey](name)

    // if we haven't read the snapshotFile, do it now
    if (!Object.keys(this.#snapshot).length) {
      try {
        this.#snapshot = JSON.parse(fs.readFileSync(this.#snapshotFile))
      } catch (e) {
        throw new ErrMissingSnapshotData(this.#test, this.#ctor)
      }
    }

    // if the snapshot file has no data for our test, throw an error here
    if (!Object.prototype.hasOwnProperty.call(this.#snapshot, key)) {
      throw new ErrMissingSnapshotData(this.#test, this.#ctor)
    }

    const load = typeof options.load === 'function'
      ? options.load
      : (scope) => scope

    // turn the json data into real nocks and return them
    const nocks = this.#snapshot[key]
      .map((scope) => load(scope))
    const scopes = nock.define(nocks)
    return scopes
  }

  start (name, options = {}) {
    if (this.#stack.length) {
      this[_saveState](this.#stack[this.#stack.length - 1])
    }

    const key = this[_getKey](name)
    this.#stack.push({
      key,
      clean: typeof options.clean === 'function'
        ? options.clean
        : (scope) => scope,
    })

    if (!this.recording) {
      this.#state = RECORDING
      nock.recorder.rec({
        dont_print: true,
        output_objects: true,
      })
    }
  }

  finish () {
    // finish will be called in the reverse order that start was called in, so
    // we pop the most recent test off the stack, store the recorded data for it,
    // and then clear the nock recorder state
    this[_saveState](this.#stack.pop())
  }

  pause () {
    if (!this.recording) {
      return
    }

    if (this.#stack.length) {
      this[_saveState](this.#stack[this.#stack.length - 1])
    }

    nock.restore()
    nock.activate()
    this.#state = PAUSED
  }

  resume () {
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

  writeSnapshot () {
    if (!this.recording) {
      return
    }

    this.#state = STOPPED
    // stop the recorder
    nock.restore()
    nock.activate()
    // this will only run when the root test is being torn down, which means everything
    // else is finished and now we just need to actually write the snapshot file
    fs.mkdirSync(path.dirname(this.#snapshotFile), { recursive: true })
    fs.writeFileSync(this.#snapshotFile, JSON.stringify(this.#snapshot, null, 2))
  }
}

module.exports = NockRecorder
