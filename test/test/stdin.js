var t = require('../..')
var Stdin = t.Stdin
var PT = require('stream').PassThrough

var p = new PT()
t.stdin({ tapStream: p, name: 'fake stdin' })

console.log('# before')

p.write(
  'TAP version 13\n' +
  '1..3\n' +
  'ok 1 - child {\n' +
  '    1..1\n' +
  '    ok\n' +
  '}\n' +
  'ok 2 - empty {\n' +
  '    \n' +
  '}\n' +
  'ok 3\n'
)
p.emit('end')

console.log('# between')

p = new PT()
var s = new Stdin({ tapStream: p, indent: '#### ' })
s.pipe(process.stdout)
s.main(function (e) { if (e) throw e })
p.write(
  'TAP version 13\n' +
  '1..3\n' +
  'ok 1 - child {\n' +
  '    1..1\n' +
  '    ok\n' +
  '}\n' +
  'ok 2 - empty {\n' +
  '    \n' +
  '}\n' +
  'ok 3\n'
)
p.emit('end')

console.log('# after')

p = new PT()
t.stdin({ tapStream: p })
p.write(
  'TAP version 13\n' +
  '1..3\n' +
  'ok 1 - child {\n' +
  '    1..1\n' +
  '    ok\n' +
  '}\n' +
  'ok 2 - empty {\n' +
  '    \n' +
  '}\n' +
  'ok 3\n'
)
p.emit('error', new Error('expect to throw this'))
p.emit('end')
