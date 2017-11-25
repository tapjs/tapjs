var t = require('../')
var cp = require('child_process')
var spawn = cp.spawn
var execFile = cp.execFile
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')
var notok = require.resolve('./test/not-ok.js')
var colorRe = new RegExp('\u001b\\[[0-9;]+m') // eslint-disable-line
var bailRe = new RegExp('^Bail out! # this is not ok$', 'm')
var okre = new RegExp('[\\\\/]test[/\\\\]ok\\.js \\.+ 10/10( [0-9\.]+m?s)?$', 'm')
var notokre = new RegExp('[\\\\/]test[/\\\\]not-ok\\.js \\.+ 0/[12]( [0-9\.]+m?s)?$', 'm')
var fs = require('fs')
var which = require('which')
var saveFile = 'runner-save-test-' + process.pid

t.test('save-file', function (t) {
  var bailoutOpts = [true, false]
  t.plan(2)

  bailoutOpts.forEach(function (b) {
    t.test('bailout=' + b, runTest.bind(null, b))
  })

  function runTest (bailout, t) {
    var n = 0
    function saveFileTest (cb) {
      var args = [run, '-s' + saveFile, notok, ok, '-CRclassic']
      if (bailout) {
        args.push('-b')
      }

      // also test the expanded versions for added coverage
      if (++n === 1) {
        args = [
          run, '--save', saveFile,
          notok, ok, '-C', '--reporter', 'classic'
        ]
      }

      var child = spawn(node, args, { env: { TAP: 0 }, stdio: [0, 'pipe', 2] })
      var out = ''
      child.stdout.on('data', function (c) {
        out += c
      })
      child.on('close', function (code) {
        cb(code, out)
      })
    }

    t.test('run with "ok.js" in save file', function (t) {
      fs.writeFileSync(saveFile, ok + '\n')
      saveFileTest(function (code, out) {
        t.equal(code, 0, 'should exit successfully')
        t.match(out, okre, 'should run ok.js test')
        t.notMatch(out, notokre, 'should not run not-ok.js test')
        t.throws(function () {
          fs.statSync(saveFile)
        }, 'should delete save file')
        t.end()
      })
    })

    t.test('run with empty save file', function (t) {
      saveFileTest(function (code, out) {
        t.equal(code, 1, 'should fail test')
        if (!bailout) {
          t.match(out, okre, 'should run ok.js test')
        } else {
          t.notMatch(out, okre, 'should not run ok.js test')
        }
        t.match(out, notokre, 'should run not-ok.js test')
        var saveRes = fs.readFileSync(saveFile, 'utf8')
        if (!bailout) {
          t.equal(saveRes, notok + '\n', 'should save not-ok.js')
        } else {
          t.equal(saveRes, notok + '\n' + ok + '\n', 'should save both files')
        }

        t.end()
      })
    })

    t.test('run with "not-ok.js" in save file', function (t) {
      saveFileTest(function (code, out) {
        t.equal(code, 1, 'should fail test')
        t.notMatch(out, okre, 'should not run ok.js test')
        t.match(out, notokre, 'should run not-ok.js test')
        var saveRes = fs.readFileSync(saveFile, 'utf8')
        if (!bailout) {
          t.equal(saveRes, notok + '\n', 'should save not-ok.js')
        } else {
          t.equal(saveRes, notok + '\n' + ok + '\n', 'should save both files')
        }
        t.end()
      })
    })

    t.test('cleanup', function (t) {
      fs.unlinkSync(saveFile)
      t.end()
    })

    t.end()
  }
})

t.test('cleanup', function (t) {
  try { fs.unlinkSync(saveFile) } catch (er) {}
  t.end()
})
