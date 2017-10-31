'use strict'

const writeFile = require('write-file-atomic')
const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const rimraf = require('rimraf')

class Snapshot {
  constructor (test) {
    this.indexes = new Map()
    this.test = test
    this.file = path.resolve(
      process.cwd(),
      'tap-snapshots',
      this.test.fullname.replace(/[^a-zA-Z0-9\._\-]+/g, '-')
    ) + '.js'
    this.snapshot = null
  }

  // should only ever call _one_ of match/save
  match (data, message) {
    // XXX test line-by-line instead of all at once
    const index = this.indexes.get(message) || 0
    this.indexes.set(message, index + 1)
    try {
      this.snapshot = this.snapshot || require(this.file)
    } catch (er) {
      throw new Error(
        'Snapshot file not found: ' + this.file + '\n' +
        'Run with TAP_SNAPSHOT=1 in the environment\n' +
        'to create snapshot files'
      )
    }
    return this.snapshot[message + '_' + index] === data
  }

  snap (data, message) {
    const index = this.indexes.get(message) || 0
    this.indexes.set(message, index + 1)
    this.snapshot = this.snapshot || {}
    this.snapshot[message + '_' + index] = data
  }

  save () {
    if (!this.snapshot)
      rimraf.sync(this.file)
    else {
      const data = `'use strict'\n` + (
        Object.keys(this.snapshot).map(s =>
          `exports[\`${s}\`] = \`${this.snapshot[s]}\`\n`).join('\n'))
      mkdirp.sync(path.dirname(this.file))
      writeFile.sync(this.file, data, 'utf8')
    }
  }
}

module.exports = Snapshot
