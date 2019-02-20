'use strict'
const path = require('path')
const Module = require('module')
const fs = require('fs')
const binpath = path.resolve(__dirname, '../bin')
const stack = require('./stack.js')

const hasOwn = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key)

const cleanDiag = object => {
  const res = { ...object }
  if (hasOwn(res, 'stack') && !hasOwn(res, 'at'))
    res.at = stack.parseLine(res.stack.split('\n')[0])

  const file = res.at && res.at.file && path.resolve(res.at.file)
  if (file && (file.indexOf(__dirname) === 0 || file.indexOf(binpath) === 0))
    delete res.at

  if (file && res.at && res.at.file && res.at.line && !res.source) {
    const content = (() => {
      try {
        return Module.wrap(fs.readFileSync(file))
      } catch (er) {}
    })()
    if (content) {
      const csplit = (content.split('\n')[res.at.line - 1] || '').trim()
      if (csplit)
        res.source = csplit + '\n'
    }
  }

  for (const [key, value] of Object.entries(res)) {
    if (key === 'todo' ||
        key === 'time' ||
        /^_?tapChild/.test(key) ||
        /^tapStream/.test(key) ||
        /^tapMochaTest/.test(key) ||
        key === 'cb' ||
        key === 'name' ||
        key === 'indent' ||
        key === 'skip' ||
        key === 'bail' ||
        key === 'grep' ||
        key === 'grepInvert' ||
        key === 'only' ||
        key === 'diagnostic' ||
        key === 'buffered' ||
        key === 'parent' ||
        key === 'domainEmitter' ||
        key === 'domainThrew' ||
        key === 'domain' ||
        key === 'at' && !value ||
        key === 'stack' && !value)
      delete res[key]
  }

  return res
}

module.exports = cleanDiag
