'use strict'

const { Writable } = require('stream')

function polyfill () {
  if (!process.stdout) {
    process.stdout = new Writable({
      write (chunks, encoding, cb) {
        console.log(chunks.toString('utf-8'))
        process.nextTick(cb)
      }
    })
  }

  if (!process.stderr) {
    process.stderr = new Writable({
      write (chunks, encoding, cb) {
        console.error(chunks.toString('utf-8'))
        process.nextTick(cb)
      }
    })
  }
}

module.exports = polyfill
