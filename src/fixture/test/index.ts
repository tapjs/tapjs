import {
  lstatSync,
  readdirSync,
  readFileSync,
  rmdirSync,
  writeFileSync,
} from 'fs'
import t from 'tap'
import { plugin } from '../dist/mjs/index.js'

t.equal(t.pluginLoaded(plugin), true, 'plugin is loaded by default')

t.test('generate some fixtures', t => {
  const dir = t.testdir({
    file: 'some contents',
    dir: {
      symlink: t.fixture('symlink', '../file'),
      link: t.fixture('link', '../file'),
    },
  })

  t.equal(lstatSync(dir + '/dir').isDirectory(), true)
  t.equal(lstatSync(dir + '/dir/symlink').isSymbolicLink(), true)
  t.equal(lstatSync(dir + '/dir/link').isFile(), true)
  t.equal(lstatSync(dir + '/file').isFile(), true)
  t.equal(readFileSync(dir + '/file', 'utf8'), 'some contents')
  t.equal(readFileSync(dir + '/dir/link', 'utf8'), 'some contents')
  writeFileSync(dir + '/file', 'new contents')
  t.equal(readFileSync(dir + '/dir/link', 'utf8'), 'new contents')
  t.equal(dir, t.testdirName)

  t.end()
})

t.test('save fixture', t => {
  let dir!: string
  t.teardown(() => rmdirSync(dir))
  t.test(
    'child test that saves its fixture',
    { saveFixture: true },
    t => {
      dir = t.testdir()
      t.equal(lstatSync(dir).isDirectory(), true)
      t.end()
    }
  )
  t.equal(lstatSync(dir).isDirectory(), true)
  t.end()
})

t.test('change testdirName', t => {
  const dir = t.testdir({
    a: {},
    b: {},
    c: {},
  })
  t.test('child test that changes testdirName', t => {
    t.testdirName = dir + '/a'
    t.testdir({ a: '1' })
    t.testdirName = dir + '/b'
    t.testdir({ a: '1' })
    t.testdirName = dir + '/c'
    t.testdir({ a: '1' })
    t.end()
  })
  t.test('after cleanup', t => {
    t.strictSame(readdirSync(dir), [], 'all 3 got deleted')
    t.end()
  })
  t.end()
})
