#!/usr/bin/env node
'use strict'
const tap = require('../lib/tap.js')
const args = process.argv.slice(2)

if (args.length === 1) {
  const path = require('path')
  const file = path.resolve(args[0])
  tap.mochaGlobals()
  require(file)
} else {
  for (let i = 0; i < args.length; i++) {
    tap.spawn(process.execPath, [__filename, args[i]])
  }
}
