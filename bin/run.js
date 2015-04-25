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

var isExe
if (process.platform == "win32") {
  // On windows, there is no good way to check that a file is executable
  isExe = function isExe () { return true }
} else {
  isExe = function isExe (stat) {
    var mod = stat.mode
    var uid = stat.uid
    var gid = stat.gid
    var u = parseInt('100', 8)
    var g = parseInt('010', 8)
    var o = parseInt('001', 8)
    var ug = u | g

    var ret = (mod & o)
        || (mod & g) && process.getgid && gid === process.getgid()
        || (mod & u) && process.getuid && uid === process.getuid()
        || (mod & ug) && process.getuid && 0 === process.getuid()

    return ret
  }
}

var tap = require('../lib/root.js')
var fs = require('fs')
for (var i = 0; i < args.length; i++) {
  var file = args[i]
  var st = fs.statSync(args[i])

  if (file.match(/\.js$/))
    tap.spawn(process.execPath, [ file ])
  else if (st.isDirectory()) {
    args.push.apply(args, fs.readdirSync(file).map(function (f) {
      return file + '/' + f
    }))
  }
  else if (isExe(st))
    tap.spawn(args[i], [])
}
