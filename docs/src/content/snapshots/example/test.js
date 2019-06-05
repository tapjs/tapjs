const t = require('tap')
const tagger = require('./index.js')
t.matchSnapshot(tagger('tagName', 'content'), 'output')
