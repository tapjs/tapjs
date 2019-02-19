const tags = require('./types/index.js')
const yaml = require('yaml')
module.exports = str => yaml.parse(str, { tags })
