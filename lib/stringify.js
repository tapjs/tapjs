'use strict'
const tags = require('./types/index.js')
const yaml = require('yaml')
const Domain = require('domain').Domain

module.exports = src => yaml.stringify(
  Object.keys(src).filter(key => {
    return !(
      key === 'todo' ||
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
      (key === 'at' && !src.at) ||
      (Domain && src[key] instanceof Domain)
    )
  }).reduce((obj, k) => {
    obj[k] = src[k]
    return obj
  }, {}),
  { tags }
)
