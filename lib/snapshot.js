'use strict'

const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const rimraf = require('rimraf')
const cwd = process.cwd()

class Snapshot {
  constructor (test) {
    this.indexes = new Map()
    this.test = test
    // name them .test.js so that nyc ignores them
    this.file = path.resolve(
      cwd,
      'tap-snapshots',
      this.test.fullname.trim().replace(/[^a-zA-Z0-9\._\-]+/g, '-')
    ) + '.test.js'
    this.snapshot = null
  }

  // should only ever call _one_ of read/save
  read (message) {
    const index = +this.indexes.get(message) || 1
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

    const entry = message + ' ' + index
    const s = this.snapshot[entry]
    if (s === undefined)
      throw new Error(
        'Snapshot entry not found: "' + entry + '"\n' +
        'Run with TAP_SNAPSHOT=1 in the environment\n' +
        'to create snapshots'
      )

    return s.replace(/^\n|\n$/g, '')
  }

  snap (data, message) {
    const index = +this.indexes.get(message) || 1
    this.indexes.set(message, index + 1)
    this.snapshot = this.snapshot || {}
    this.snapshot[message + ' ' + index] = data
  }

  save () {
    if (!this.snapshot)
      rimraf.sync(this.file)
    else {
      const escape = s => s
        .replace(/\\/g, '\\\\')
        .replace(/\`/g, '\\\`')
        .replace(/\$\{/g, '\\${')

      const data =
        '/* IMPORTANT\n' +
        ' * This snapshot file is auto-generated, but designed for humans.\n' +
        ' * It should be checked into source control and tracked carefully.\n' +
        ' * Re-generate by setting TAP_SNAPSHOT=1 and running tests.\n' +
        ' * Make sure to inspect the output below.  Do not ignore changes!\n' +
        ' */\n\'use strict\'\n' + (
        Object.keys(this.snapshot).sort().map(s =>
          `exports[\`${
            escape(s)
          }\`] = \`\n${
            escape(this.snapshot[s])
          }\n\`\n`).join('\n'))
      mkdirp.sync(path.dirname(this.file))
      const writeFile = require('write-file-atomic')
      writeFile.sync(this.file, data, 'utf8')
    }
  }
}

module.exports = Snapshot
