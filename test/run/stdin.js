const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

const fs = require('fs')
const tapcode = 'TAP version 13\n1..1\nok\n'

t.test('with output file', t => {
  const c = run(['-', '-c', '-Rspec', '-ofoo.txt', '--cov'], { env: {
    TAP: '0'
  }}, (er, o, e) => {
    t.equal(er, null)
    t.equal(e, '')
    t.match(o, /✓|√/)
    t.equal(fs.readFileSync('foo.txt', 'utf8'), tapcode)
    fs.unlinkSync('foo.txt')
    t.end()
  })
  c.stdin.end(tapcode)
})

t.test('no output file', t => {
  const c = run(['-', '--only', '-gx', '-iC', '-Rclassic'], { env: {
    TAP: '0'
  }}, (er, o, e) => {
    t.equal(er, null)
    t.equal(e, '')
    t.match(o, /total \.+ 1\/1/)
    t.throws(() => fs.statSync('foo.txt'))
    t.end()
  })
  c.stdin.end(tapcode)
})

t.test('with file', t => {
  const foo = tmpfile(t, 'foo.test.js', `
    'use strict'
    require(${tap}).test('child', t => {
      t.pass('this is fine')
      t.end()
    })
  `)
  const args = ['-', foo, '-CRclassic', '-ofoo.txt']
  const c = run(args, { env: { TAP: 0, TAP_BUFFER: 1 }}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(fs.readFileSync('foo.txt', 'utf8'))
    t.match(o, /foo.test.js \.+ 1\/1.*\n\/dev\/stdin \.+ 1\/1\n/)
    fs.unlinkSync('foo.txt')
    t.end()
  })
  c.stdin.end(tapcode)
})
