#!/usr/bin/env node

var spawn = require('child_process').spawn
var path = require('path')
var node = process.execPath
var stackre = new RegExp('^\\s*.*(\([^:]:[0-9]+:[0-9]+\)|[^:]:[0-9]+:[0-9]+)$')
var fs = require('fs')
var yaml = require('js-yaml')

for (var i = 2; i < process.argv.length; i++) {
  generate(process.argv[i])
}

function generate(file) {
  file = path.resolve(file)
  var f = file
  if (f.indexOf(process.cwd()) === 0)
    f = './' + file.substr(process.cwd().length + 1)

  console.error(f)
  var outfile = file.replace(/\.js$/, '.tap')
  var output = ''
  var c = spawn(node, [file])
  c.stdout.on('data', function (d) {
    output += d
  })
  c.on('close', function () {
    var timep = '# time=[0-9.]+(ms)?'
    var timere = new RegExp(timep, 'g')
    output = output.replace(timere, '___/' + timep + '/~~~')

    output = output.split(file).join('___/.*/~~~' + path.basename(file))
    output = output.split(f).join('___/.*/~~~' + path.basename(f))

    output = output.split(node + ' ___/').join('\0N1\0')
    output = output.split(path.basename(node) + ' ___/').join('\0N1\0')

    output = output.split(node).join('\0N2\0')
    output = output.split(path.basename(node)).join('\0N2\0')

    output = output.split('\0N1\0').join('___/.*(node|iojs)')
    output = output.split('\0N2\0').join('___/.*(node|iojs)/~~~')

    output = yamlishToJson(output)

    fs.writeFileSync(outfile, output)
  })
}

function deStackify (data) {
  Object.keys(data).forEach(function (k) {
    if (k === 'stack' && typeof data[k] === 'string')
      delete data[k]
    else if (k === 'time' && typeof data[k] === 'number')
      delete data[k]
    else if (typeof data[k] === 'object' && data[k])
      deStackify(data[k])
  })
}

function yamlishToJson (output) {
  var lines = output.split(/\n/)
  var ret = ''
  var inyaml = false
  var y = ''
  var startlen = 0
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i]
    if (inyaml) {
      if (line.match(/^\s+\.\.\.$/) && line.length === startlen) {
        var data = yaml.safeLoad(y)
        deStackify(data)
        data = JSON.stringify(data)
        ret += new Array(startlen - 2).join(' ') +
          data + '\n' + line + '\n'
        inyaml = false
        y = ''
      } else {
        y += line + '\n'
      }
    } else if (line.match(/^\s*---$/)) {
      startlen = line.length
      inyaml = true
      y = ''
      ret += line + '\n'
    } else {
      ret += line + '\n'
    }
  }
  if (inyaml) {
    throw new Error('neverending yaml\n' + y)
  }
  return ret
}
