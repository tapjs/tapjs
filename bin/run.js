#!/usr/bin/env node
var args = process.argv.slice(2)

if (!args.length) {
  console.error(usage())
  process.exit(1)
}

if (args.indexOf('-h') !== -1)
  return console.log(usage())

function usage () {
  return function () {/*
Usage:
  tap <files>

Executes all the files and interprets their output as TAP
formatted test result data.
*/}.toString().split('\n').slice(1, -1).join('\n')
}

var tap = require('../lib/root.js')
for (var i = 0; i < args.length; i++)
  tap.spawn(process.execPath, [ args[i] ])
