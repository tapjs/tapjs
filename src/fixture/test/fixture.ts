import { lstatSync, statSync } from 'fs'
import t from 'tap'
import { Fixture } from '../dist/mjs/fixture.js'

t.test('fixture type validation', t => {
  t.equal(new Fixture('file', 'hello').type, 'file')
  t.equal(new Fixture('file', Buffer.from('hello')).type, 'file')
  t.equal(
    new Fixture('file', new Uint8Array(Buffer.from('hello'))).type,
    'file'
  )
  t.equal(
    Object.prototype.toString.call(new Fixture('dir', {})),
    '[object Fixture<dir>]'
  )
  t.equal(new Fixture('link', 'target').type, 'link')
  t.equal(new Fixture('symlink', 'target').type, 'symlink')
  //@ts-expect-error
  t.throws(() => new Fixture('asdf'))
  //@ts-expect-error
  t.throws(() => new Fixture('dir', 'string'))
  //@ts-expect-error
  t.throws(() => new Fixture('file', {}))
  //@ts-expect-error
  t.throws(() => new Fixture('symlink', {}))
  //@ts-expect-error
  t.throws(() => new Fixture('link', {}))
  //@ts-expect-error
  t.throws(() => new Fixture('dir', { a: 1 }))
  const d = { a: { d: {} } }
  d.a.d = d
  t.throws(() => new Fixture('dir', d), {
    message: 'cycle detected in t.fixture contents at d',
  })
  // #1 Dad!
  d.a.d = 1
  t.throws(() => new Fixture('dir', d))

  const c = {
    f: 'content',
    d: {
      a: new Fixture('symlink', 'x'),
      b: new Fixture('link', 'x'),
    },
  }
  t.equal(new Fixture('dir', c).content, c)

  t.end()
})

t.test('make stuff the long way', t => {
  const dir = t.testdir(
    new Fixture('dir', {
      file: new Fixture('file', 'hello'),
      subdir: new Fixture('dir', {
        subf: new Fixture('file', 'subs'),
      }),
      link: new Fixture('link', 'file'),
      sym: new Fixture('symlink', 'subdir'),
      missing: new Fixture('symlink', 'missing'),
    })
  )
  t.type(dir, 'string')
  t.equal(lstatSync(dir).isDirectory(), true)
  t.equal(lstatSync(dir + '/subdir').isDirectory(), true)
  t.equal(lstatSync(dir + '/subdir/subf').isFile(), true)
  t.equal(lstatSync(dir + '/file').isFile(), true)
  t.equal(lstatSync(dir + '/link').isFile(), true)
  t.equal(lstatSync(dir + '/sym').isSymbolicLink(), true)
  t.equal(statSync(dir + '/sym').isDirectory(), true)
  t.equal(lstatSync(dir + '/missing').isSymbolicLink(), true)
  t.throws(() => statSync(dir + '/missing'))
  t.end()
})

t.test('make stuff the short way', t => {
  const dir = t.testdir({
    file: 'hello',
    subdir: {
      subf: 'subs',
    },
    link: new Fixture('link', 'file'),
    sym: new Fixture('symlink', 'subdir'),
    missing: new Fixture('symlink', 'missing'),
  })
  t.type(dir, 'string')
  t.equal(lstatSync(dir).isDirectory(), true)
  t.equal(lstatSync(dir + '/subdir').isDirectory(), true)
  t.equal(lstatSync(dir + '/subdir/subf').isFile(), true)
  t.equal(lstatSync(dir + '/file').isFile(), true)
  t.equal(lstatSync(dir + '/link').isFile(), true)
  t.equal(lstatSync(dir + '/sym').isSymbolicLink(), true)
  t.equal(statSync(dir + '/sym').isDirectory(), true)
  t.equal(lstatSync(dir + '/missing').isSymbolicLink(), true)
  t.throws(() => statSync(dir + '/missing'))
  t.end()
})
