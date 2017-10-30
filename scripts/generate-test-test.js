#!/usr/bin/env node

'use strict'

const spawn = require('child_process').spawn
const path = require('path')
const node = process.execPath
const fs = require('fs')
const yaml = require('js-yaml')

const queue = []
let running = false

for (let i = 2; i < process.argv.length; i++) {
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
  const cwd = process.cwd()
  let f = file
  if (f.indexOf(cwd) === 0) {
    f = './' + file.substr(cwd.length + 1)
  }

  const outfile = file.replace(/\.js$/,
   (bail ? '--bail' : '') +
   (buffer ? '--buffer' : '') +
   '.tap')
  console.error(outfile)

  let output = ''
  const c = spawn(node, [file], {
    env: {
      TAP_BAIL: bail ? 1 : 0,
      TAP_BUFFER: buffer ? 1 : 0
    }
  })

  c.stdout.on('data', function (d) {
    output += d
  })

  c.on('close', function (code, signal) {
    if (bail && code === 0 && signal === null) {
      // no point testing bailouts if no bailout happens
      try { fs.unlinkSync(outfile) } catch (er) {}
    } else {

      const timep = '# time=[0-9.]+(ms)?'
      const timere = new RegExp(timep, 'g')
      output = output.replace(timere, '___/' + timep + '/~~~')

      // raw stack traces vary in depth between node versions, and always
      // cause problems.  Replace them with an obvious failure.
      output = output.replace(
        /^    at .*?:[0-9]+:[0-9]+\)?$/mg,
        'ERROR: stacks will cause problems, please fix this in the test')

      output = output.split(file).join('___/.*/~~~' + path.basename(file))
      output = output.split(f).join('___/.*/~~~' + path.basename(f))

      const dir = path.dirname(file)
      output = output.split(dir + '/').join('___/.*/~~~')
      output = output.split(dir).join('___/.*/~~~' + path.basename(dir))

      output = output.split(cwd + '/').join('___/.*/~~~')
      output = output.split(cwd).join('___/.*/~~~')

      output = output.split(node + ' ___/').join('\0N1\0')
      output = output.split(path.basename(node) + ' ___/').join('\0N1\0')

      output = output.split(node).join('\0N2\0')
      output = output.split(path.basename(node)).join('\0N2\0')

      output = output.split('\0N1\0').join('___/.*(node(js)?|iojs)(\.exe)?')
      output = output.split('\0N2\0').join('___/.*(node(js)?|iojs)(\.exe)?/~~~')

      output = yamlishToJson(output)

      fs.writeFileSync(outfile, output)
    }

    running = false
    if (queue.length) {
      const q = queue.shift()
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
    } else if (k === 'function' && typeof data[k] === 'string') {
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
  const lines = output.split(/\n/)
  let ret = ''
  let inyaml = false
  let y = ''
  let startlen = 0
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (inyaml) {
      if (line.match(/^\s+\.\.\.$/) && line.length === startlen) {
        const yload = yaml.safeLoad(y)
        delete yload.stdio
        const data = JSON.stringify(deStackify(yload))
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
