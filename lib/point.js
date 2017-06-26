'use strict'
module.exports = TestPoint

const path = require('path')
const binpath = path.resolve(__dirname, '../bin')
const util = require('util')
const diags = require('./diags.js')

function TestPoint (ok, message, extra) {
  if (typeof ok !== 'boolean')
    throw new TypeError('ok must be boolean')

  if (!(this instanceof TestPoint))
    return new TestPoint(ok, message, extra)

  this.ok = ok ? 'ok ' : 'not ok '
  this.message = tpMessage(message, extra)
}

function tpMessage (message, extra) {
  message = message + ''
  if (message)
    message = ' - ' + message
  message = message.replace(/[\n\r]/g, ' ').replace(/\t/g, '  ')
  extra = extra || {}

  if (extra.skip) {
    message += ' # SKIP'
    if (typeof extra.skip === 'string')
      message += ' ' + extra.skip
  } else if (extra.todo) {
    message += ' # TODO'
    if (typeof extra.todo === 'string')
      message += ' ' + extra.todo
  } else if (extra.time)
    message += ' # time=' + extra.time + 'ms'

  const diagYaml = extra.diagnostic ? diags(extra) : ''
  message += diagYaml

  if (extra.tapChildBuffer || extra.tapChildBuffer === '') {
    if (!diagYaml)
      message += ' '
    message += '{\n' + extra.tapChildBuffer.trimRight() + '\n}\n'
  }

  message += '\n'
  return message
}
