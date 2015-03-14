#!/usr/bin/env node

var spawn = require('child_process').spawn
var path = require('path')
var node = process.execPath
var stackre = new RegExp('^\\s*\\- "')
var fs = require('fs')

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
    output = output.split(file).join('{{{/.*/}}}' + path.basename(file))
    output = output.split(f).join('{{{/.*/}}}' + path.basename(f))

    output = output.split(node + ' {{{/').join('\0N1\0')
    output = output.split(path.basename(node) + ' {{{/').join('\0N1\0')

    output = output.split(node).join('\0N2\0')
    output = output.split(path.basename(node)).join('\0N2\0')

    output = output.split('\0N1\0').join('{{{/.*(node|iojs)')
    output = output.split('\0N2\0').join('{{{/.*(node|iojs)/}}}')
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
