'use strict'
const tags = require('./types/index.js')
const yaml = require('yaml')
module.exports = obj => yaml.stringify(obj, { tags })
