var fs = require("fs")
  , child_process = require("child_process")
  , path = require("path")
  , chain = require("slide").chain
  , asyncMap = require("slide").asyncMap
  , TapProducer = require("./tap-producer.js")
  , TapConsumer = require("./tap-consumer.js")
  , assert = require("./tap-assert.js")
  , inherits = require("inherits")
  , util = require("util")
  , CovHtml = require("./tap-cov-html.js")
  , doCoverage = process.env.TAP_COV
               || process.env.npm_package_config_coverage
               || process.env.npm_config_coverage

var Runner = module.exports = function (dir, diag, cb) {
  Runner.super.call(this, diag)

  this.doCoverage = doCoverage
  // An array of full paths to files to obtain coverage
  this.coverageFiles = []
  // The source of these files
  this.coverageFilesSource = {}
  // Where to write coverage information
  this.coverageOutDir = "./coverage"
  // Temporary test files bunkerified we'll remove later
  this.f2delete = []
  // Raw coverage stats, as read from JSON files
  this.rawCovStats = []
  // Processed coverage information, per file to cover:
  this.covStats = {}

  if (dir) {
    var filesToCover = "./lib"
      , coverageOutDir = "./coverage"

    if (doCoverage) {
      dir = dir.filter(function(arg) {
        if (arg.match(/^--cover=/)) {
          filesToCover = arg.split("--cover=")[1]
          return false
        } else if (arg.match(/^--cover-dir=/)) {
          coverageOutDir = arg.split("--cover-dir=")[1]
          return false
        }
        return true
      })
      coverageOutDir = path.resolve(coverageOutDir)
      path.exists(coverageOutDir, function(exists) {
        if (!exists) {
          fs.mkdir(coverageOutDir, 0755, function(er) {
            if (er) {
              throw er
            }
          })
        }
      })
      this.coverageOutDir = coverageOutDir
      this.getFilesToCover(filesToCover)
    }
    this.run(dir, cb)
  }
}

inherits(Runner, TapProducer)


Runner.prototype.run = function() {
  var self = this
    , args = Array.prototype.slice.call(arguments)
    , cb = args.pop() || function (er) {
        if (er) {
          self.emit("error", er)
        }

        if (doCoverage) {
          // Cleanup temporary test files with coverage:
          self.f2delete.forEach(function(f) {
            fs.unlinkSync(f)
          })
          self.getFilesToCoverSource(function(err, data) {
            if (err) {
              self.emit("error", err)
            }
            self.getPerFileCovInfo(function(err, data) {
              if (err) {
                self.emit("error", err)
              }
              self.mergeCovStats(function(err, data) {
                if (err) {
                  self.emit("error", err)
                }
                CovHtml(self.covStats, self.coverageOutDir, function() {
                  self.end()
                })
              })
            })
          })
        } else {
          self.end()
        }
      }
  if (Array.isArray(args[0])) {
    args = args[0]
  }
  self.runFiles(args, "", cb)
}

Runner.prototype.runDir = function (dir, cb) {
  var self = this
  fs.readdir(dir, function (er, files) {
    if (er) {
      self.write(assert.fail("failed to readdir " + dir, { error: er }))
      self.end()
      return
    }
    files = files.sort(function(a, b) {
      return a > b ? 1 : -1
    })
    files = files.filter(function(f) {
      return !f.match(/^\./)
    })
    files = files.map(path.resolve.bind(path, dir))

    self.runFiles(files, path.resolve(dir), cb)
  })
}


Runner.prototype.runFiles = function (files, dir, cb) {

  var self = this
  chain(files.map(function(f) {
    return function (cb) {
      var relDir = dir || path.dirname(f)
        , fileName = relDir === "." ? f : f.substr(relDir.length + 1)

      self.write(fileName)
      fs.lstat(f, function(er, st) {
        if (er) {
          self.write(assert.fail("failed to stat " + f, {error: er}))
          return cb()
        }

        var cmd = f, args = [], env = {}

        if (path.extname(f) === ".js") {
          cmd = "node"
          args = [fileName]
        } else if (path.extname(f) === ".coffee") {
          cmd = "coffee"
          args = [fileName]
        }

        if (st.isDirectory()) {
          return self.runDir(f, cb)
        }

        if (doCoverage && path.extname(f) === ".js") {
          var foriginal = fs.readFileSync(f, "utf8")
            , fcontents = self.coverHeader() + foriginal + self.coverFooter()
            , tmpBaseName = path.basename(f, path.extname(f))
                          + ".with-coverage." + process.pid + path.extname(f)
            , tmpFname = path.resolve(path.dirname(f), tmpBaseName)
            , i

          fs.writeFileSync(tmpFname, fcontents, "utf8")
          args = [tmpFname]
        }

        for (i in process.env) {
          env[i] = process.env[i]
        }
        env.TAP = 1

        var cp = child_process.spawn(cmd, args, { env: env, cwd: relDir })
          , out = ""
          , err = ""
          , tc = new TapConsumer()
          , childTests = [f]

        var timeout = setTimeout(function () {
          if (!cp._ended) {
            cp._timedOut = true
            cp.kill()
          }
        }, ((process.env.TAP_TIMEOUT || 30) * 1000))

        tc.on("data", function(c) {
          self.emit("result", c)
          self.write(c)
        })

        cp.stdout.pipe(tc)
        cp.stdout.on("data", function(c) { out += c })
        cp.stderr.on("data", function(c) { err += c })

        cp.on("exit", function (code) {
          cp._ended = true
          var ok = !cp._timedOut && !code
          clearTimeout(timeout)
          //childTests.forEach(function (c) { self.write(c) })
          var res = { name: path.dirname(f).replace(process.cwd() + "/", "")
                          + "/" + fileName
                    , ok: ok
                    , timedOut: cp._timedOut
                    , exit: code }

          if (err) {
            res.stderr = err
            if (tc.results.ok && tc.results.tests === 0) {
              // perhaps a compilation error or something else failed...
              console.error(err)
            }
          }
          // tc.results.ok = tc.results.ok && ok
          tc.results.add(res)
          res.command = [cmd].concat(args).map(JSON.stringify).join(" ")
          self.emit("result", res)
          self.emit("file", f, res, tc.results)
          self.write(res)
          self.write("\n")
          if (doCoverage) {
            self.f2delete.push(tmpFname)
          }
          cb()
        })
      })
    }
  }), cb)

  return self
}


// Get an array of full paths to files we are interested into obtain
// code coverage.
Runner.prototype.getFilesToCover = function(filesToCover) {
  var self = this
  filesToCover = filesToCover.split(",").map(function(f) {
    return path.resolve(f)
  }).filter(function(f) {
    return path.existsSync(f)
  })

  function recursive(f) {
    if (path.extname(f) === "") {
      // Is a directory:
      fs.readdirSync(f).forEach(function(p) {
        recursive(f + "/" + p)
      })
    } else {
      self.coverageFiles.push(f)
    }
  }
  filesToCover.forEach(function(f) {
    recursive(f)
  })
}

// Prepend to every test file to run. Note tap.test at the very top due it
// "plays" with include paths.
Runner.prototype.coverHeader = function() {
  // semi here since we're injecting it before the first line,
  // and don't want to mess up line numbers in the test files.
  return "var ___TAP_COVERAGE = require("
       + JSON.stringify(require.resolve("runforcover"))
       + ").cover(/.*/g);"
}

// Append at the end of every test file to run. Actually, the stuff which gets
// the coverage information.
// Maybe it would be better to move into a separate file template so editing
// could be easier.
Runner.prototype.coverFooter = function() {
  var self = this
  // This needs to be a string with proper interpolations:
  return [ ""
  , "var ___TAP = require(" + JSON.stringify(require.resolve("./main.js")) + ")"
  , "if (typeof ___TAP._plan === 'number') ___TAP._plan ++"
  , "___TAP.test(" + JSON.stringify("___coverage") + ", function(t) {"
  , "  var covFiles = " + JSON.stringify(self.coverageFiles)
  , "    , covDir = " + JSON.stringify(self.coverageOutDir)
  , "    , path = require('path')"
  , "    , fs = require('fs')"
  , "    , testFnBase = path.basename(__filename, '.js') + '.json'"
  , "    , testFn = path.resolve(covDir, testFnBase)"
  , ""
  , "  function asyncForEach(arr, fn, callback) {"
  , "    if (!arr.length) {"
  , "      return callback()"
  , "    }"
  , "    var completed = 0"
  , "    arr.forEach(function(i) {"
  , "      fn(i, function (err) {"
  , "        if (err) {"
  , "          callback(err)"
  , "          callback = function () {}"
  , "        } else {"
  , "          completed += 1"
  , "          if (completed === arr.length) {"
  , "            callback()"
  , "          }"
  , "        }"
  , "      })"
  , "    })"
  , "  }"
  , ""
  , "  ___TAP_COVERAGE(function(coverageData) {"
  , "    var outObj = {}"
  , "    asyncForEach(covFiles, function(f, cb) {"
  , "      if (coverageData[f]) {"
  , "        var stats = coverageData[f].stats()"
  , "          , stObj = stats"
  , "        stObj.lines = stats.lines.map(function (l) {"
  , "          return { number: l.lineno, source: l.source() }"
  , "        })"
  , "        outObj[f] = stObj"
  , "      }"
  , "      cb()"
  , "    }, function(err) {"
  , "      ___TAP_COVERAGE.release()"
  , "      fs.writeFileSync(testFn, JSON.stringify(outObj))"
  , "      t.end()"
  , "    })"
  , "  })"
  , "})" ].join("\n")
}


Runner.prototype.getFilesToCoverSource = function(cb) {
  var self = this
  asyncMap(self.coverageFiles, function(f, cb) {
    fs.readFile(f, "utf8", function(err, data) {
      var lc = 0
      if (err) {
        cb(err)
      }
      self.coverageFilesSource[f] = data.split("\n").map(function(l) {
        lc += 1
        return { number: lc, source: l }
      })
      cb()
    })
  }, cb)
}

Runner.prototype.getPerFileCovInfo = function(cb) {
  var self = this
    , covPath = path.resolve(self.coverageOutDir)

  fs.readdir(covPath, function(err, files) {
    if (err) {
      self.emit("error", err)
    }
    var covFiles = files.filter(function(f) {
      return path.extname(f) === ".json"
    })
    asyncMap(covFiles, function(f, cb) {
      fs.readFile(path.resolve(covPath, f), "utf8", function(err, data) {
        if (err) {
          cb(err)
        }
        self.rawCovStats.push(JSON.parse(data))
        cb()
      })
    }, function(f, cb) {
      fs.unlink(path.resolve(covPath, f), cb)
    }, cb)
  })
}

Runner.prototype.mergeCovStats = function(cb) {
  var self = this
  self.rawCovStats.forEach(function(st) {
    Object.keys(st).forEach(function(i) {
      // If this is the first time we reach this file, just add the info:
      if (!self.covStats[i]) {
        self.covStats[i] = {
          missing: st[i].lines
        }
      } else {
        // If we already added info for this file before, we need to remove
        // from self.covStats any line not duplicated again (since it has
        // run on such case)
        self.covStats[i].missing = self.covStats[i].missing.filter(
          function(l) {
            return (st[i].lines.indexOf(l))
          })
      }
    })
  })

  // This is due to a bug into
  // chrisdickinson/node-bunker/blob/feature/add-coverage-interface
  // which is using array indexes for line numbers instead of the right number
  Object.keys(self.covStats).forEach(function(f) {
    self.covStats[f].missing = self.covStats[f].missing.map(function(line) {
      return { number: line.number, source: line.source }
    })
  })

  Object.keys(self.coverageFilesSource).forEach(function(f) {
    if (!self.covStats[f]) {
      self.covStats[f] = { missing: self.coverageFilesSource[f]
                          , percentage: 0
      }
    }
    self.covStats[f].lines = self.coverageFilesSource[f]
    self.covStats[f].loc = self.coverageFilesSource[f].length

    if (!self.covStats[f].percentage) {
      self.covStats[f].percentage =
        1 - (self.covStats[f].missing.length / self.covStats[f].loc)
    }

  })
  cb()
}


