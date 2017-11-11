var t = require('../..')
var fs = require('fs')
var spawn = require('child_process').spawn

require('signal-exit')(function (code, signal) {
  try { fs.unlinkSync('segv') } catch (er) {}
  try { fs.unlinkSync('segv.c') } catch (er) {}
})

var segv =
  'int main (void) {\n' +
  '   char *s = "hello world";\n' +
  "   *s = 'H';\n" +
  '}\n'

t.test('setup', function (t) {
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

t.spawn('./segv')
