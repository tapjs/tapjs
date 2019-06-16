const t = require('tap')
const tagger = require('./index.js')
t.equal(tagger('tagName', 'content'), '<tagName>content</tagName>')
