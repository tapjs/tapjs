var Parser = require('../')
var etoa = require('events-to-array')

var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener' ]
var glob = require('glob')
const t = require('tap')
var path = require('path')
var fs = require('fs')

t.jobs = 8
glob.sync(__dirname + '/fixtures/*.tap').forEach(function (tapfile) {
  const tapContent = fs.readFileSync(tapfile, 'utf8')
  t.test(path.basename(tapfile), { buffer: true }, t => {
    t.plan(2)
    for (const bail of [true, false]) {
      const parser = new Parser({bail})
      const found = etoa(parser, ignore)
      parser.on('complete', () => {
        t.matchSnapshot(found, `output bail=${bail}`)
      })
      parser.end(tapContent)
    }
  })
})
