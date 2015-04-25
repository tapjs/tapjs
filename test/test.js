var glob = require('glob')
var t = require('../lib/root.js')
var spawn = require('child_process').spawn
var node = process.execPath
var fs = require('fs')
var dir = __dirname + '/test/'
var path = require('path')
var stackre = new RegExp('^\\s*.*(\([^:]:[0-9]+:[0-9]+\)|[^:]:[0-9]+:[0-9]+)$')
var yaml = require('js-yaml')

function regEsc(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

if (process.argv[2])
  runTest(path.resolve(dir, process.argv[2]))
else {
  glob.sync(dir + '*.js').forEach(function (file) {
    runTest(file)
  })
}

function runTest (file) {
  var resfile = file.replace(/\.js$/, '\.tap')
  try {
    var want = fs.readFileSync(resfile, 'utf8').split('\n')
  } catch (er) {
    console.error(er)
    console.error(file)
    console.error(resfile)
    return
  }

  t.test(file.substr(dir.length), function (t) {
    var child = spawn(node, [file], {
      stdio: [ 0, 'pipe', 'pipe' ]
    })

    var found = ''

    child.stdout.setEncoding('utf8')
    child.stdout.on('data', function (c) {
      found += c
    })
    child.on('close', function (er) {
      found = found.split('\n')
      var inyaml = false
      var y = ''

      // walk line by line so yamlish (json) can be handled
      // otherwise making any changes in this lib would hurt
      for (var f = 0, w = 0;
           f < found.length && w < want.length;
           f++, w++) {
        var wline = want[w]
        var fline = found[f]
        var wdata = false
        var startlen = 0

        if (inyaml) {
          if (fline.match(/^\s*\.\.\.$/) && fline.length === startlen) {
            var data = yaml.safeLoad(y)
            inyaml = false
            y = ''
            patternify(wdata)
            t.has(data, wdata)
            f--
          } else {
            y += fline + '\n'
            w--
          }
          continue

        } else {
          t.match(fline, patternify(wline),
                  'line ' + f + ' ' +
                  wline.replace(/# (todo|skip)/gi, '- $1'))

          if (fline.match(/^\s*\-\-\-$/)) {
            startlen = fline.length
            inyaml = true
            y = ''
          }
        }

        if (!t.passing())
          return t.end()
      }
      t.end()
    })
  })
}

function patternify (pattern) {
  if (typeof pattern === 'object' && pattern) {
    Object.keys(pattern).forEach(function (k) {
      pattern[k] = patternify(pattern[k])
    })
    return
  }

  if (typeof pattern !== 'string')
    return pattern

  var re = /___\/(.*?)\/~~~/
  var match = pattern.match(re)
  if (!match)
    return pattern

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
