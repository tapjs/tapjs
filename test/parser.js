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
    t.plan(3)
    for (const bail of [true, false]) {
      const parser = new Parser({bail})
      const found = etoa(parser, ignore)
      parser.on('complete', () => {
        t.matchSnapshot(found, `output bail=${bail}`)
      })
      parser.end(tapContent)
    }
    t.test('Parser.parse/stringify methods', t => {
      t.test('default settings', t => {
        const res = Parser.parse(tapContent)
        t.matchSnapshot(res, 'parsed')
        const str = Parser.stringify(res)
        t.matchSnapshot(str, 'stringified')
        const flat = Parser.stringify(res, { flat: true })
        t.matchSnapshot(str, 'stringified flat')
        t.end()
      })
      for (const [name, opt] of Object.entries({
        bail: { bail: true },
        strict: { strict: true },
        strictBail: { strict: true, bail: true },
      })) {
        t.test(name, t => {
          const res = Parser.parse(tapContent, opt)
          t.matchSnapshot(res, 'parsed')
          const str = Parser.stringify(res)
          t.matchSnapshot(str, 'stringified')
          const flat = Parser.stringify(res, { flat: true })
          t.matchSnapshot(str, 'stringified flat')
          t.end()
        })
      }
      t.end()
    })
  })
})
