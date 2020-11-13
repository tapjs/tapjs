const t = require('../')
const Fixture = require('../lib/fixture.js')

const dir = t.testdirName
require('rimraf').sync(dir)

const f = new Fixture('file', 'bar')
t.match(f, {
  type: 'file',
  content: 'bar',
  constructor: Fixture,
})
t.equal(f.toString(), '[object Fixture<file>]')

t.throws(() => new Fixture('foo', 'bar'), {
  message: 'invalid fixture type: foo'
})

t.throws(() => Fixture.make(`${dir}/nope`, 1234), {
  message: 'invalid fixture type: 1234'
})

t.throws(() => new Fixture('dir', 'not an object'), {
  message: 'dir fixture must have object content'
})
t.throws(() => new Fixture('link'), {
  message: 'link fixture must have string target'
})
t.throws(() => new Fixture('symlink'), {
  message: 'symlink fixture must have string target'
})
t.throws(() => new Fixture('file'), {
  message: 'file fixture must have string/buffer content'
})

Fixture.make(dir, {
  file: 'content',
  dir: {},
  symlink: new Fixture('symlink', 'file'),
  dirlink: new Fixture('symlink', 'dir'),
  link: new Fixture('link', 'file'),
  dir: new Fixture('dir', {}),
  noexist: new Fixture('symlink', 'non-existent-file'),
})
const fs = require('fs')
t.ok(fs.statSync(dir).isDirectory(), 'dir is a dir')
t.equal(fs.readFileSync(`${dir}/file`, 'utf8'), 'content', 'file written')
t.match(fs.statSync(`${dir}/link`), fs.statSync(`${dir}/file`),
  'hardlink is hard link')
t.equal(fs.readlinkSync(`${dir}/symlink`), 'file', 'symlink is symlink')
t.ok(fs.statSync(`${dir}/dir`).isDirectory(), 'subdir is a dir')

require('rimraf').sync(dir)
