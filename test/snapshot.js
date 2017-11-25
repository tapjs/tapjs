'use strict'
const t = require('../')
const Snapshot = require('../lib/snapshot.js')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const path = require('path')
const dir = path.resolve(__dirname, 'snapshot')
const fs = require('fs')

t.test('cleanup first', t => {
  rimraf.sync(dir)
  mkdirp.sync(dir)
  process.chdir(dir)
  t.end()
})

t.test('actual test', t => {
  t.comment('not using subtests, because snapshots are per-test')

  t.test('checking snapshot without creating throws', t => {
    const s = new Snapshot(t)
    t.throws(_ => s.read('asdf', 'asdf'))
    t.end()
  })

  const s = new Snapshot(t)
  t.comment('create some snapshots')
  s.snap(fs.readFileSync(__filename, 'utf8'), 'this file')
  s.snap('this is fine', 'a statement of acceptance')
  s.save()

  t.comment('now check that the snapshots are valid')
  const ss = new Snapshot(t)
  t.equal(fs.readFileSync(__filename, 'utf8'), ss.read('this file'))
  t.equal('this is fine', ss.read('a statement of acceptance'))
  t.throws(_ => ss.read('this is not in the file'))

  t.comment('saving without snapping anything removes the file')
  const sss = new Snapshot(t)
  sss.save()
  t.throws(_ => fs.statSync(sss.file), 'file is gone')

  t.end()
})

t.test('cleanup after', t => {
  rimraf.sync(dir)
  process.chdir(__dirname)
  t.end()
})
