'use strict'
const cleanYamlObject = require('clean-yaml-object')
const path = require('path')
const Module = require('module')
const fs = require('fs')
const binpath = path.resolve(__dirname, '../bin')
const stack = require('./stack.js')
const Domain = require('domain').Domain

const hasOwn = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key)

const cleanTapYamlObject = object => {
  if (hasOwn(object, 'stack') && !hasOwn(object, 'at'))
    object.at = stack.parseLine(object.stack.split('\n')[0])

  const file = object.at && object.at.file && path.resolve(object.at.file)
  if (file && (file.indexOf(__dirname) === 0 || file.indexOf(binpath) === 0))
    delete object.at

  if (file && object.at && object.at.file && object.at.line && !object.source) {
    const content = (() => {
      try {
        return Module.wrap(fs.readFileSync(file))
      } catch (er) {}
    })()
    if (content) {
      const csplit = (content.split('\n')[object.at.line - 1] || '').trim()
      if (csplit)
        object.source = csplit + '\n'
    }
  }

  return cleanYamlObject(object, yamlFilter)
}

const yamlFilter = (propertyName, isRoot, source, target) =>
  source instanceof Domain ? false
    : !isRoot ? true
    : propertyName === 'stack' ? (
      (source.stack ? target.stack = source.stack : false), false)
    : !(propertyName === 'todo' ||
      propertyName === 'time' ||
      /^_?tapChild/.test(propertyName) ||
      /^tapStream/.test(propertyName) ||
      /^tapMochaTest/.test(propertyName) ||
      propertyName === 'cb' ||
      propertyName === 'name' ||
      propertyName === 'indent' ||
      propertyName === 'skip' ||
      propertyName === 'bail' ||
      propertyName === 'grep' ||
      propertyName === 'grepInvert' ||
      propertyName === 'only' ||
      propertyName === 'diagnostic' ||
      propertyName === 'buffered' ||
      propertyName === 'parent' ||
      propertyName === 'domainEmitter' ||
      propertyName === 'domainThrew' ||
      propertyName === 'domain' ||
      (propertyName === 'at' && !source.at))

module.exports = cleanTapYamlObject
