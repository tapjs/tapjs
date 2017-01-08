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
var expect = [
  'TAP version 13',
  '# Subtest: ./segv ',
  '    1..0 # no tests found',
  'not ok 1 - ./segv  # time=',
  '  ---',
  '  signal: SIG',
  '  command: ./segv',
  '  arguments: []',
  '  ...',
  '',
  '1..1',
  '# failed 1 of 1 tests',
  '# time='
]

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
  var tt = new Test({ bail: false, buffered: false })
  tt.spawn('./segv')
  var res = ''
  tt.on('data', function (c) {
    res += c
  })
  tt.on('end', function () {
    // TODO: parse the yaml and test it against an object pattern
    // much more future-proof than this string monkeybusiness.
    res = res.trim().split('\n')
    res = res.sort()
    expect = expect.sort()
    var ok = true
    for (var e = 0, r = 0;
        e < expect.length && r < res.length && ok;
        e++, r++) {
      // skip the type: global that newer nodes add to the error.
      if (res[r].match(/^\s*type: global$/)) {
        e --
        continue
      }
      ok = t.equal(res[r].substr(0, expect[e].length), expect[e])
    }
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
