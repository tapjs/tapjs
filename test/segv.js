var tap = require('../')
if (process.platform === 'win32') {
  tap.plan(0, 'skip on windows')
  process.exit()
}
var test = tap.test
var Test = tap.Test
var fs = require('fs')
var spawn = require('child_process').spawn

var segv =
'int main (void) {\n' +
  '   char *s = "hello world";\n' +
  "   *s = 'H';\n" +
  '}\n'

// omit some stuff from the ends of lines that will differ
// we slice the actual output later to just compare the fronts
// also sort the lines, because Node v0.8 sets keys on objects
// in different order.
var expect =
('TAP version 13\n' +
'    # Subtest: ./segv\n' +
'    1..0\n' +
'not ok 1 - ./segv  # time=\n' +
'  ---\n' +
'  at:\n' +
'    file: test/segv.js\n' +
'    line: \n' +
'    column: \n' +
'  results:\n' +
'    ok: false\n' +
'    count: 0\n' +
'    pass: 0\n' +
'    plan:\n' +
'      start: 1\n' +
'      end: 0\n' +
'      skipAll: true\n' +
'  signal: SIG\n' +
'  command: ./segv\n' +
'  arguments: []\n' +
'  source: |\n' +
"    tt.spawn('./segv')\n" +
'  ...\n' +
'\n' +
'1..1\n' +
'# failed 1 of 1 tests\n' +
'# time=\n').trim().split('\n')

test('setup', function (t) {
  fs.writeFile('segv.c', segv, 'utf8', function (er) {
    if (er) {
      throw er
    }
    var cp = spawn('gcc', ['segv.c', '-o', 'segv'])
    cp.on('exit', function (code, sig) {
      if (code !== 0) {
        t.bailout('failed to compile segv program')
        return
      }
      t.pass('compiled seg faulter')
      t.end()
    })
  })
})

test('segv', function (t) {
  var tt = new Test({ bail: false })
  tt.spawn('./segv')
  var res = ''
  tt.on('data', function (c) {
    res += c
  })
  tt.on('end', function () {
    res = res.trim().split('\n')
    res = res.sort()
    expect = expect.sort()
    var ok = true
    expect.forEach(function (line, i) {
      if (ok) {
        ok = t.equal(res[i].substr(0, line.length), line)
      }
    })
    t.end()
  })
  tt.end()
})

test('cleanup', function (t) {
  t.plan(2)
  fs.unlink('segv', function (er) {
    t.ifError(er, 'clean up segv')
  })
  fs.unlink('segv.c', function (er) {
    t.ifError(er, 'clean up segv.c')
  })
})
