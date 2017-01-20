#!/usr/bin/env node

var spawn = require('child_process').spawn
var path = require('path')
var node = process.execPath
var fs = require('fs')
var yaml = require('js-yaml')

var queue = []
var running = false

for (var i = 2; i < process.argv.length; i++) {
  generate(process.argv[i], false, false)
  generate(process.argv[i], true, false)
  generate(process.argv[i], false, true)
  generate(process.argv[i], true, true)
}

function generate (file, bail, buffer) {
  if (running) {
    queue.push([file, bail, buffer])
    return
  }
  running = true

  file = path.resolve(file)
  var cwd = process.cwd()
  var f = file
  if (f.indexOf(cwd) === 0) {
    f = './' + file.substr(cwd.length + 1)
  }

  var outfile = file.replace(/\.js$/,
   (bail ? '--bail' : '') +
   (buffer ? '--buffer' : '') +
   '.tap')
  console.error(outfile)

  var output = ''
  var c = spawn(node, [file], {
    env: {
      TAP_BAIL: bail ? 1 : 0,
      TAP_BUFFER: buffer ? 1 : 0
    }
  })

  c.stdout.on('data', function (d) {
    output += d
  })
  c.on('close', function () {
    var timep = '# time=[0-9.]+(ms)?'
    var timere = new RegExp(timep, 'g')
    output = output.replace(timere, '___/' + timep + '/~~~')

    output = output.split(file).join('___/.*/~~~' + path.basename(file))
    output = output.split(f).join('___/.*/~~~' + path.basename(f))

    var dir = path.dirname(file)
    output = output.split(dir + '/').join('___/.*/~~~')
    output = output.split(dir).join('___/.*/~~~' + path.basename(dir))

    output = output.split(cwd + '/').join('___/.*/~~~')
    output = output.split(cwd).join('___/.*/~~~')

    output = output.split(node + ' ___/').join('\0N1\0')
    output = output.split(path.basename(node) + ' ___/').join('\0N1\0')

    output = output.split(node).join('\0N2\0')
    output = output.split(path.basename(node)).join('\0N2\0')

    output = output.split('\0N1\0').join('___/.*(node|iojs)(\.exe)?')
    output = output.split('\0N2\0').join('___/.*(node|iojs)(\.exe)?/~~~')

    output = yamlishToJson(output)

    fs.writeFileSync(outfile, output)

    running = false
    if (queue.length) {
      var q = queue.shift()
      generate(q[0], q[1], q[2])
    }
  })
}

function deStackify (data) {
  return Object.keys(data).sort().reduce(function (res, k) {
    // a few keys vary across node versions, or based on the machine
    // or specific run.  Just throw those out.
    if (k === 'stack' && typeof data[k] === 'string') {
      return res
    } else if (k === 'time' && typeof data[k] === 'number') {
      return res
    } else if (k === 'msecs' && typeof data[k] === 'number') {
      return res
    } else if (k === 'function' && typeof data[k] === 'string' && data[k].indexOf('._onTimeout') !== -1) {
      return res
    } else if (typeof data[k] === 'object' && data[k]) {
      if (k === 'at') {
        delete data[k].type
      }
      res[k] = deStackify(data[k])
    } else {
      res[k] = data[k]
    }
    return res
  }, Array.isArray(data) ? [] : {})
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
        data = deStackify(data)
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
