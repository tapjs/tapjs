var glob = require('glob')
var t = require('../')
var spawn = require('child_process').spawn
var node = process.execPath
var fs = require('fs')
var dir = __dirname + '/test/'
var path = require('path')
var yaml = require('js-yaml')

process.env.TAP_BUFFER = 1
// don't turn on parallelization for `npm test`, because it also
// has coverage and this makes the spawn timeouts stuff break.
if (process.env.npm_lifecycle_event !== 'test')
  t.jobs = 2

function regEsc (str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
}

module.exports = function (pattern, bail, buffer) {
  pattern = path.basename(pattern)
  glob.sync(dir + pattern).forEach(function (f) {
    runTests(f, bail, buffer)
  })
}

if (module === require.main) {
  if (process.argv[2]) {
    var bail, buffer
    process.argv.slice(3).forEach(function (x) {
      switch (x) {
        case 'bail': return bail = true
        case 'buffer': return buffer = true
        case 'nobail': return bail = false
        case 'nobuffer': return buffer = false
      }
    })
    module.exports(process.argv[2], bail, buffer)
  } else {
    module.exports('*.js', false, false)
  }
}

function runTests (file, bail, buffer) {
  var bails = [ !!bail ]
  var buffs = [ !!buffer ]

  if (bail === undefined) {
    bails = [ true, false ]
  }

  if (buffer === undefined) {
    buffs = [ true, false ]
  }

  var skip = false
  if (file.match(/\b(timeout.*|pending-handles)\.js$/)) {
    if (process.env.TRAVIS) {
      skip = 'timeout and handles tests too timing dependent for Travis'
    } else if (process.platform === 'win32') {
      skip = 'timeout and handles tests rely on sinals windows cannot do'
    }
  }

  if (file.match(/\bsegv\b/)) {
    if (process.platform === 'win32')
      skip = 'skip segv on windows'
    else if (process.env.TRAVIS)
      skip = 'skip segv on CI'
  }

  if (file.match(/\bsigterm\b/)) {
    if (process.version.match(/^v0\.10\./)) {
      skip = 'sigterm handling test does not work on 0.10'
    } else if (process.platform === 'win32') {
      skip = 'sigterm handling is weird on windows'
    }
  }

  var f = file.substr(dir.length)
  t.test(f, { skip: skip }, function (t) {
    t.plan(bails.length * buffs.length)
    bails.forEach(function (bail) {
      buffs.forEach(function (buff) {
        t.test('bail=' + bail + ' buffer=' + buff, function (t) {
          runTest(t, bail, buff, file)
        })
      })
    })
  })
}

function runTest (t, bail, buffer, file) {
  var resfile = file.replace(/\.js$/,
    (bail ? '--bail' : '') +
    (buffer ? '--buffer' : '') +
    '.tap')

  var want
  try {
    want = fs.readFileSync(resfile, 'utf8').split(/\r?\n/)
  } catch (er) {
    // there isn't an output file for bail tests that pass.
    if (bail)
      return t.end()
    else
      throw er
  }

  var child = spawn(node, [file], {
    stdio: [ 0, 'pipe', 'pipe' ],
    env: {
      TAP_BAIL: bail ? 1 : 0,
      TAP_BUFFER: buffer ? 1 : 0,
      PATH: process.env.PATH
    }
  })

  var found = ''

  child.stdout.setEncoding('utf8')
  child.stdout.on('data', function (c) {
    found += c
  })
  child.on('close', function (er) {
    found = found.split(/\r?\n/)
    var inyaml = false
    var startlen = 0
    var y = ''

    // walk line by line so yamlish (json) can be handled
    // otherwise making any changes in this lib would hurt
    for (var f = 0, w = 0;
         f < found.length && w < want.length;
         f++, w++) {
      var wline = want[w]
      var fline = found[f]
      var wdata = false

      if (inyaml) {
        if (fline.match(/^\s*\.\.\.$/) && fline.length === startlen) {
          var data = yaml.safeLoad(y)
          inyaml = false
          y = ''
          wdata = JSON.parse(wline)
          patternify(wdata)
          var msg = 'line ' + f + ' '
          if (wline.length < 50)
            msg += wline
          else
            msg += wline.substr(0, 45) + '...'
          t.match(data, wdata, msg)
          f--
        } else {
          y += fline + '\n'
          w--
        }
        continue
      } else {
        t.match(fline, patternify(wline),
                'line ' + f + ' ' +
                wline.replace(/# (todo|skip)/gi, '- $1'),
                { test: f })

        if (fline.match(/^\s*\-\-\-$/)) {
          startlen = fline.length
          inyaml = true
          y = ''
        }
      }

      if (!t.passing()) {
        return t.end()
      }
    }
    t.end()
  })
}

function patternify (pattern, key) {
  var root = !key
  if (typeof pattern === 'object' && pattern) {
    Object.keys(pattern).forEach(function (k) {
      pattern[k] = patternify(pattern[k], k)
      // sigbus an sigsegv are more or less the same thing.
      if (root && k === 'signal' && pattern[k] === 'SIGBUS')
        pattern[k] = /^SIG(BUS|SEGV)$/
    })
    return pattern
  }

  if (typeof pattern !== 'string') {
    return pattern
  }

  var re = /___\/(.*?)\/~~~/
  var match = pattern.match(re)
  if (!match) {
    return pattern
  }

  var pl = pattern.split('___/')
  var p = '^' + regEsc(pl.shift())

  pl.forEach(function (wlpart) {
    var wlp = wlpart.split('/~~~')
    p += wlp.shift()
    p += regEsc(wlp.join('/~~~'))
  })
  p += '$'
  return new RegExp(p)
}
