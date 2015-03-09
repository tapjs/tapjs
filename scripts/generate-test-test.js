#!/usr/bin/env node

var spawn = require('child_process').spawn
var node = process.execPath
var path = require('path')
var stackre = new RegExp('^\\s*\\- "')
var fs = require('fs')

for (var i = 2; i < process.argv.length; i++) {
  generate(process.argv[i])
}

function generate(file) {
  file = path.resolve(file)
  console.error(file)
  var outfile = file.replace(/\.js$/, '.tap')
  var output = ''
  var c = spawn(node, [file])
  c.stdout.on('data', function (d) {
    output += d
  })
  c.on('close', function () {
    output = output.split(file).join('{{{/.*/}}}' + path.basename(file))
    output = output.split(node + ' {{{/').join('{{{/.*(node|iojs)')
    output = output.split(node).join('{{{/.*(node|iojs)/}}}')
    var stacks = output.split('stack:\n')
    output = stacks.shift()
    stacks.forEach(function (stack) {
      var lines = stack.split('\n')
      for (var p = 0; p < lines.length && stackre.test(lines[p]); p++);
      output += 'stack:\n{{{STACK}}}\n' + lines.slice(p).join('\n')
    })
    fs.writeFileSync(outfile, output)
  })
}
