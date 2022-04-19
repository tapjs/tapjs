'use strict'

const fs = require('fs')
const mkdirp = require('mkdirp').sync
const nock = require('nock')
const path = require('path')

const { ErrMissingSnapshotData } = require('./errors.js')

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

  get paused () {
    return this.#state === PAUSED
  }

  get recording () {
    return this.#state === RECORDING
  }

  load (name) {
    const index = +this.#indexes.get(name) || 1
    this.#indexes.set(name, index + 1)
    const fullname = `${name} ${index}`

    // if we haven't read the snapshotFile, do it now
    if (!Object.keys(this.#snapshot).length) {
      try {
        this.#snapshot = JSON.parse(fs.readFileSync(this.#snapshotFile))
      } catch (e) {
        throw new ErrMissingSnapshotData(this.#test, this.#ctor)
      }
    }

    // if the snapshot file has no data for our test, throw an error here
    if (!Object.prototype.hasOwnProperty.call(this.#snapshot, fullname)) {
      throw new ErrMissingSnapshotData(this.#test, this.#ctor)
    }

    // turn the json data into real nocks and return them
    const nocks = this.#snapshot[fullname]
    const scopes = nock.define(nocks)
    return scopes
  }

  start (name) {
    const index = +this.#indexes.get(name) || 1
    this.#indexes.set(name, index + 1)
    const fullname = `${name} ${index}`

    if (this.#stack.length) {
      // if our stack already has stuff in it, then we need to store whatever has
      // been recorded up to this point under the most recent test then clear the
      // state of the recorder
      const old = this.#stack[this.#stack.length - 1]
      if (!this.#snapshot[old]) {
        this.#snapshot[old] = []
      }
      this.#snapshot[old].push(...nock.recorder.play())
      nock.recorder.clear()
    }

    this.#stack.push(fullname)

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
    const fullname = this.#stack.pop()
    const recordings = nock.recorder.play()
    nock.recorder.clear()
    if (!this.#snapshot[fullname]) {
      this.#snapshot[fullname] = []
    }
    this.#snapshot[fullname].push(...recordings)
  }

  pause () {
    if (!this.recording) {
      return
    }

    this.#state = PAUSED
    const fullname = this.#stack[this.#stack.length - 1]
    const recordings = nock.recorder.play()
    nock.recorder.clear()
    if (!this.#snapshot[fullname]) {
      this.#snapshot[fullname] = []
    }
    this.#snapshot[fullname].push(...recordings)
    nock.restore()
    nock.activate()
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
    mkdirp(path.dirname(this.#snapshotFile))
    fs.writeFileSync(this.#snapshotFile, JSON.stringify(this.#snapshot, null, 2))
  }
}

module.exports = NockRecorder
