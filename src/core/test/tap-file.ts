import { Minipass } from 'minipass'
import { relative, resolve } from 'path'
import t from 'tap'
import { Minimal } from '../dist/mjs/minimal.js'
import { TapFile, TapFileOpts } from '../dist/mjs/tap-file.js'

t.cleanSnapshot = s =>
  s
    .replace(/# time=[^\n]+/, '# time={TIME}')
    .replace(/lineNumber: \d+/g, 'lineNumber: ##')
    .replace(/columnNumber: \d+/g, 'columnNumber: ##')
    .replace(
      /(typename|methodname|functionname|toplevel): [^\n]+\n/gi,
      ''
    )
    .replace(/test[\\\/]tap-file.ts:\d+:\d+/g, 'test/tap-file.ts:##:##')

t.test('replay a tap file', t => {
  const content = `TAP version 14
ok 1 - this is fine
1..1
`
  const dir = t.testdir({
    'file.tap': content,
  })
  const tf = new TapFile({
    filename: resolve(dir, 'file.tap'),
    cwd: dir,
  })
  t.equal(tf.name, 'file')
  t.equal(
    new TapFile({
      filename: resolve(dir, 'file'),
      cwd: process.cwd(),
    }).name,
    relative(process.cwd(), resolve(dir, 'file'))
  )
  tf.main(async () => {
    t.equal(await tf.concat(), content)
    t.end()
  })
})

t.test('replay a tap stream', t => {
  const content = `TAP version 14
ok 1 - this is fine
1..1
`
  const tapStream = new Minipass<string>({ encoding: 'utf8' }).end(
    content
  )
  const tf = new TapFile({
    tapStream,
  })
  t.equal(tf.name, 'file input')
  tf.main(async () => {
    t.equal(await tf.concat(), content)
    t.end()
  })
})

t.test('need either tapStream or a filename', t => {
  const tf = new TapFile({ name: 'no tap provided' })
  t.equal(tf.name, 'no tap provided')
  t.throws(() => tf.main(() => {}), {
    message: 'either tapStream or filename must be provided',
  })
  t.end()
})

t.test('error on stream', async t => {
  const parent = new Minimal({
    name: 'parent to catch the throw',
  })
  const tapStream = new Minipass<string>({ encoding: 'utf8' })
  const { subtest } = parent.sub<TapFile, TapFileOpts>(TapFile, {
    tapStream,
    parent,
    timeout: 999,
  })
  parent.end()

  t.equal(subtest?.name, 'file input')
  tapStream.write('TAP version 14\n1..1\n')
  setTimeout(() => tapStream.emit('error', new Error('oops')))
  t.matchSnapshot(await parent.concat())
  t.end()
})
