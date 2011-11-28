var fs = require("fs"),
    child_process = require("child_process"),
    path = require("path"),
    chain = require("slide").chain,
    asyncMap = require("slide").asyncMap,
    TapProducer = require("./tap-producer"),
    TapConsumer = require("./tap-consumer"),
    assert = require("./tap-assert"),
    inherits = require("inherits"),
    util = require('util'),
    CovHtml = require('./tap-cov-html');



var Runner = module.exports = function(dir, diag, cb) {
  Runner.super.call(this, diag);

  // An array of full paths to files to obtain coverage
  this.coverage_files = [];
  // The source of these files
  this.coverage_files_source = {};
  // Where to write coverage information
  this.coverage_out_dir = './coverage';
  // Temporary test files bunkerified we'll remove later
  this.f2delete = [];
  // Raw coverage stats, as read from JSON files
  this.raw_cov_stats = [];
  // Processed coverage information, per file to cover:
  this.cov_stats = {};

  if (dir) {
    var files_to_cover = './lib',
        coverage_out_dir = './coverage';
    if (process.env.TAP_COV) {
      dir = dir.filter(function(arg) {
        if (arg.match(/^--cover=/)) {
          files_to_cover = arg.split('--cover=')[1];
          return false;
        } else if (arg.match(/^--cover-dir=/)) {
          coverage_out_dir = arg.split('--cover-dir=')[1];
          return false;
        }
        return true;
      });
      coverage_out_dir = path.resolve(coverage_out_dir);
      path.exists(coverage_out_dir, function(exists) {
        if (!exists) {
          fs.mkdir(coverage_out_dir, 0755, function(er) {
            if (er) {
              throw er;
            }
          });
        }
      });
      this.coverage_out_dir = coverage_out_dir;
      this.getFilesToCover(files_to_cover);
    }
    this.run(dir, cb);
  }
}

inherits(Runner, TapProducer);


Runner.prototype.run = function() {
  var self = this,
      args = Array.prototype.slice.call(arguments),
      cb = args.pop() || function (er) {
        if (er) {
          self.emit("error", er);
        }

        if (process.env.TAP_COV) {
          // Cleanup temporary test files with coverage:
          self.f2delete.forEach(function(f) {
            fs.unlinkSync(f);
          });
          self.getFilesToCoverSource(function(err, data) {
            if (err) {
              self.emit('error', err);
            }
            self.getPerFileCovInfo(function(err, data) {
              if (err) {
                self.emit('error', err);
              }
              self.mergeCovStats(function(err, data) {
                if (err) {
                  self.emit('error', err);
                }
                CovHtml(self.cov_stats, self.coverage_out_dir, function() {
                  setTimeout(function() {
                    self.end();
                  }, 500);
                })
              });
            });
          });
        } else {
          self.end();
        }
      };
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  self.runFiles(args, "", cb);
}

Runner.prototype.runDir = function (dir, cb) {
  var self = this;
  fs.readdir(dir, function (er, files) {
    if (er) {
      self.write(assert.fail("failed to readdir " + dir,
                           { error: er }));
      self.end();
      return;
    }
    files = files.sort(function(a, b) {
      return a > b ? 1 : -1;
    });
    files = files.filter(function(f) {
      return !f.match(/^\./);
    });
    files = files.map(path.resolve.bind(path, dir));

    self.runFiles(files, path.resolve(dir), cb);
  })
}


Runner.prototype.runFiles = function (files, dir, cb) {

  var self = this;
  chain(files.map(function(f) {
    return function (cb) {
      var relDir = dir || path.dirname(f),
          fileName = relDir === "." ? f : f.substr(relDir.length + 1);

      self.write(fileName);
      fs.lstat(f, function(er, st) {
        if (er) {
          self.write(assert.fail("failed to stat " + f,
                               {error: er}));
          return cb();
        }

        var cmd = f, args = [], env = {};

        if (path.extname(f) === ".js") {
          cmd = "node";
          args = [fileName];
        } else if (path.extname(f) === ".coffee") {
          cmd = "coffee";
          args = [fileName];
        }

        if (st.isDirectory()) {
          return self.runDir(f, cb);
        }

        if (process.env.TAP_COV && path.extname(f) === ".js") {
          var foriginal = fs.readFileSync(f, 'utf8'),
              fcontents = self.coverHeader() + foriginal + self.coverFooter(),
              tmp_fname = path.dirname(f) + '/' +
                          path.basename(f, path.extname(f)) +
                          '.with-coverage.' + process.pid + path.extname(f),
              i;

          fs.writeFileSync(tmp_fname, fcontents, 'utf8');
          args = [tmp_fname];
        }

        for (i in process.env) {
          env[i] = process.env[i];
        }
        env.TAP = 1;

        var cp = child_process.spawn(cmd, args, { env: env, cwd: relDir }),
          out = "",
          err = "",
          tc = new TapConsumer(),
          childTests = [f];

        tc.on("data", function(c) {
          self.emit("result", c);
          self.write(c);
        });

        cp.stdout.pipe(tc);
        cp.stdout.on("data", function(c) { out += c });
        cp.stderr.on("data", function(c) { err += c });

        cp.on("exit", function(code) {
          //childTests.forEach(function (c) { self.write(c) })
          var res = {
            name: fileName,
            ok: !code
          };

          if (err) {
            res.stderr = err;
            if (tc.results.ok && tc.results.tests === 0) {
              // perhaps a compilation error or something else failed...
              console.error(err);
            }
          }
          res.command = [cmd].concat(args).map(JSON.stringify).join(" ");
          self.emit("result", res);
          self.emit("file", f, res, tc.results);
          self.write(res);
          self.write("\n");
          if (process.env.TAP_COV) {
            self.f2delete.push(tmp_fname);
          }
          cb();
        });
      });
    }
  }), cb);

  return self;
}


// Get an array of full paths to files we are interested into obtain
// code coverage.
Runner.prototype.getFilesToCover = function(files_to_cover) {
  var self = this;
  files_to_cover = files_to_cover.split(',').map(function(f) {
    return path.resolve(f);
  }).filter(function(f) {
    return path.existsSync(f);
  });
  files_to_cover.forEach(function(f) {
    if (path.extname(f) === '') {
      // Is a directory:
      fs.readdirSync(f).forEach(function(p) {
        self.coverage_files.push(f + '/' + p);
      });
    } else {
      self.coverage_files.push(f);
    }
  });
};

// Prepend to every test file to run. Note tap.test at the very top due it
// 'plays' with include paths.
Runner.prototype.coverHeader = function() {
  return 'var test = require(\'tap\').test,\n' +
         '    runforcover = require(\'runforcover\'),\n' +
         '    coverage = runforcover.cover(/.*/g),\n' +
         '    fs = require(\'fs\'),\n' +
         '    path = require(\'path\');\n';
};

// Append at the end of every test file to run. Actually, the stuff which gets
// the coverage information.
// Maybe it would be better to move into a separate file template so editing
// could be easier.
Runner.prototype.coverFooter = function() {
  var self = this;
  // This needs to be a string with proper interpolations:
  return '' +
  'test(\'___coverage\', function(t) {\n' +
  '  var cov_files = ' + util.inspect(self.coverage_files) + ',\n' +
  '    cov_dir = \'' + self.coverage_out_dir + '\',\n' +
  '    test_fn = path.resolve(\'' + process.cwd() + '\',cov_dir) + \'/\' + path.basename(__filename, \'.js\') + \'.json\';\n' +
  '    function asyncForEach(arr, fn, callback) {\n' +
  '      if (!arr.length) {\n' +
  '        return callback();\n' +
  '      }\n' +
  '      var completed = 0;\n' +
  '      arr.forEach(function(i) {\n' +
  '        fn(i, function (err) {\n' +
  '          if (err) {\n' +
  '            callback(err);\n' +
  '            callback = function () {};\n' +
  '          }\n' +
  '          else {\n' +
  '            completed += 1;\n' +
  '            if (completed === arr.length) {\n' +
  '              callback();\n' +
  '            }\n' +
  '          }\n' +
  '        });\n' +
  '      });\n' +
  '    };\n' +
  '  coverage(function(coverageData) {\n' +
  '    var out_obj = {};\n' +
  '    asyncForEach(cov_files, function(f, cb) {\n' +
  '      if (coverageData[f]) {\n' +
  '        var stats = coverageData[f].stats(),\n' +
  '            st_obj = {\n' +
  '          percentage: stats.percentage,\n' +
  '          missing: stats.missing,\n' +
  '          seen: stats.seen,\n' +
  '          lines: stats.lines.map(function(l) {\n' +
  '            return {\n' +
  '              number: l.lineno,\n' +
  '              source: l.source()\n' +
  '            };\n' +
  '          })\n' +
  '        };\n' +
  '        out_obj[f] = st_obj;\n' +
  '        cb();\n' +
  '      } else {\n' +
  '        cb();\n' +
  '      }\n' +
  '    }, function(err) {\n' +
  '         coverage.release();\n' +
  '         fs.writeFileSync(test_fn, JSON.stringify(out_obj));\n' +
  '         t.end();\n' +
  '    });\n' +
  '  });\n' +
  '});\n';
};


Runner.prototype.getFilesToCoverSource = function(cb) {
  var self = this;
  asyncMap(
    self.coverage_files,
    function(f, cb) {
      fs.readFile(f, 'utf8', function(err, data) {
        var lc = 0;
        if (err) {
          cb(err);
        }
        self.coverage_files_source[f] = data.split('\n').map(function(l) {
          lc += 1;
          return {
            number: lc,
            source: l
          }
        });
        cb();
      });
    },
    cb
  );
};

Runner.prototype.getPerFileCovInfo = function(cb) {
  var self = this,
      cov_path = path.resolve(self.coverage_out_dir);

  fs.readdir(cov_path, function(err, files) {
    if (err) {
      self.emit("error", err);
    }
    var cov_files = files.filter(function(f) {
      return path.extname(f) === '.json';
    });
    asyncMap(
      cov_files,
      function(f, cb) {
        fs.readFile(cov_path + '/' + f, 'utf8', function(err, data) {
          if (err) {
            cb(err);
          }
          self.raw_cov_stats.push(JSON.parse(data));
          cb();
        });
      },
      function(f, cb) {
        fs.unlink(cov_path + '/' + f, function(err) {
          if (err) {
            cb(err);
          }
          cb();
        });
      },
      cb
    );
  });
};

Runner.prototype.mergeCovStats = function(cb) {
  var self = this;
  self.raw_cov_stats.forEach(function(st) {
    Object.keys(st).forEach(function(i) {
      // If this is the first time we reach this file, just add the info:
      if (!self.cov_stats[i]) {
        self.cov_stats[i] = {
          missing: st[i].lines
        }
      } else {
        // If we already added info for this file before, we need to remove
        // from self.cov_stats any line not duplicated again (since it has
        // run on such case)
        self.cov_stats[i].missing = self.cov_stats[i].missing.filter(
          function(l) {
            return (st[i].lines.indexOf(l));
          });
      }
    });
  });

  // This is due to a bug into
  // chrisdickinson/node-bunker/blob/feature/add-coverage-interface
  // which is using array indexes for line numbers instead of the right number
  Object.keys(self.cov_stats).forEach(function(f) {
    self.cov_stats[f].missing = self.cov_stats[f].missing.map(function(line) {
      return {
        number: line.number,
        source: line.source
      };
    });
  });

  Object.keys(self.coverage_files_source).forEach(function(f) {
    if (!self.cov_stats[f]) {
      self.cov_stats[f] = {
        missing: self.coverage_files_source[f],
        percentage: 0
      }
    }
    self.cov_stats[f].lines = self.coverage_files_source[f];
    self.cov_stats[f].loc = self.coverage_files_source[f].length;

    if (!self.cov_stats[f].percentage) {
      self.cov_stats[f].percentage =
        1 - (self.cov_stats[f].missing.length / self.cov_stats[f].loc);
    }

  });
  cb();
};


