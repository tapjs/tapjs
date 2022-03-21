const Parser = require('../')
const etoa = require('events-to-array')

const ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener' ]
const glob = require('glob')
const t = require('tap')
const path = require('path')
const fs = require('fs')

t.jobs = 8
const tapFiles = fs.readdirSync(__dirname + '/fixtures')
  .filter(f => /\.tap$/.test(f))

for (const tapFile of tapFiles) {
  const f = `${__dirname}/fixtures/${tapFile}`
  t.test(tapFile, async t => {
    t.snapshotFile = path.resolve(__dirname, '..', `tap-snapshots/test/parser/${tapFile}.test.cjs`)
    t.plan(2)
    const tapContent = await fs.promises.readFile(f, 'utf8')
    for (const bail of [true, false]) {
      const parser = new Parser({bail})
      const found = etoa(parser, ignore)
      parser.on('complete', () => {
        t.matchSnapshot(found, `output bail=${bail}`)
      })
      parser.end(tapContent)
    }
  })
}
