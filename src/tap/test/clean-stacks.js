'use strict'

// Just a utility to clean up the snapshots for output tests

const yaml = require('tap-yaml')
const internals = Object.keys(process.binding('natives'))

module.exports = out => out
  // sort keys in yaml blocks
  .replace(/\n(   *)---\n((\1.*\n)*)\1\.\.\.\n/g, ($0, $1, $2) => {
    let o
    try {
      o = yaml.parse($2)
    } catch (er) {
      return $0
    }
    const out = Object.keys(o).sort().reduce((s, k) => {
      if (k === 'requests' || k === 'handles')
        o[k] = o[k].map(r => ({ type: r.type }))
      s[k] = o[k]
      return s
    }, {})
    return '\n' + $1 + '---\n' + $1 +
      yaml.stringify(out).trim().split('\n').join('\n' + $1)
      + '\n' + $1 + '...\n'
  })

  // https://github.com/nodejs/node/issues/25806
  .replace(/  handles:\n    - type: Timer\n/g, '')

  // this key has changed names
  .replace(/FSReqWrap/g, 'FSReqCallback')

  // remove time details
  .replace(/ # time=[0-9\.]+m?s( \{.*)?\n/g, ' # {time}$1\n')
  .replace(/\n# time=.*/g, '\n# {time}')

  // debug output
  .replace(/(\n|^)TAP ([0-9]+) /g, '$1TAP {pid} ')

  // stacks are always changing
  .replace(/\n(( {2})+)stack: \|-?\n((\1  .*).*\n)+/gm,
    '\n$1stack: |\n$1  {STACK}\n')
  .replace(/\n(( {2})+)stack: \>-?\n((\1  .*).*\n(\1\n)?)+/gm,
    '\n$1stack: |\n$1  {STACK}\n')
  .replace(/(?:\n|^)([a-zA-Z]*Error): (.*)\n((    at .*\n)*)+/gm,
    '\n$1: $2\n    {STACK}\n')
  .replace(/:[0-9]+:[0-9]+(\)?\n)/g, '#:#$1')
  .replace(/(line|column): [0-9]+/g, '$1: #')

  // type and function change often between node/v8 versions
  .replace(/\n( +)function: .*(\n\1  .*)*\n/g, '\n')
  .replace(/\n( +)method: .*(\n\1  .*)*\n/g, '\n')
  .replace(/\n( +)type: .*\n/g, '\n')
  .replace(/\n( +)file: (.*)\n/g, ($0, $1, $2) =>
    internals.indexOf($2.replace(/\.js$/, '')) === -1 &&
    !/\bnode:\b/.test($2) ? $0
      : '\n' + $1 + 'file: #INTERNAL#\n'
  )

  // timeout values are different when coverage is present
  .replace(/\n( *)timeout: (30000|240000)(\n|$)/g, '\n$1timeout: {default}$3')

  // fix references to cwd
  .split(process.cwd()).join('{CWD}')
  .split(require('path').resolve(__dirname, '..')).join('{TAPDIR}')
  .split(process.execPath).join('{NODE}')

  .split(process.env.HOME).join('{HOME}')

  // the arrows in source printing bits, make that consistent
  .replace(/^(\s*)-+\^$/mg, '$1--^')

  // remove presumptuous node version output on all crashes
  .replace(/\nNode.js v[0-9\.]+\n/g, '')

// nothing to see here
if (module === require.main)
  console.log('TAP version 13\n1..1\nok - 1\n')
