"use strict"

var t = require('../')
var spawn = require('child_process').spawn
var node = process.execPath
var run = require.resolve('../bin/run.js')
var ok = require.resolve('./test/ok.js')

t.test('testing piping to Coveralls and Codecov', function (t) {
  var environments = [{COVERALLS_REPO_TOKEN: 'something'}
                    , {CODECOV_TOKEN: 'something'}]
  var args = [run, ok, '--coverage']

  t.plan(4)

  t.test('there should be no coverage export when there is no tokens in env', function(tt) {
    tt.plan(1)
    var env = createEnvironment({})
    doTest(env, function(actual) {
      var expected = /COVERAGE_SERVICE_TEST/g
      tt.ok(!expected.test(actual), 'COVERAGE_SERVICE_TEST should NOT be in output')
      tt.end()
    })
  })
  t.test('coverage should be exported to Coveralls', { bail: true }, function(tt) {
    tt.plan(2)
    var env = createEnvironment(environments[0])
    doTest(env, function(actual) {
      console.log("DEBUG-INFO:", actual);
      var expected = /COVERAGE_SERVICE_TEST/g
      tt.ok(expected.test(actual), 'COVERAGE_SERVICE_TEST expected or test is not valid')

      expected = /Coverallssomething/g
      tt.ok(expected.test(actual), 'Coverallssomething should be in output')

      tt.end()
    })
  })
  t.test('coverage should be exported to Codecov', function(tt) {
    tt.plan(2)
    var env = createEnvironment(environments[1])
    doTest(env, function(actual) {
      var expected = /COVERAGE_SERVICE_TEST/g
      tt.ok(expected.test(actual), 'COVERAGE_SERVICE_TEST expected or test is not valid')

      expected = /Codecovsomething/g
      tt.ok(expected.test(actual), 'Codecovsomething should be in output')

      tt.end()
    })
  })
  t.test('coverage should be exported to both Codecov and Coveralls', function(tt) {
    tt.plan(3)
    var env = createEnvironment(environments.reduce(assign))
    doTest(env, function(actual) {
      var expected = /COVERAGE_SERVICE_TEST/g
      tt.ok(expected.test(actual), 'COVERAGE_SERVICE_TEST expected or test is not valid')

      expected = /Coverallssomething/g
      tt.ok(expected.test(actual), 'Coverallssomethingshould be in output')

      expected = /Codecovsomething/g
      tt.ok(expected.test(actual), 'Codecovsomething be in output')
      tt.end()
    })
  })

  function createEnvironment(env) {
    return assign({
      COVERAGE_SERVICE_TEST: true
    //, TAP_TIMEOUT: 2
    }, env)
  }

  // assign can be dropped when we support es6 in favor of Object.assign
  function assign(target, source) {
    var ret = {}
    each(target, mix)
    each(source, mix)
    return ret

    function mix(value, key) {
      ret[key] = value
    }
  }
  // "each" can be dropped in favor of Map and Map.forEach when we stop support for node 0.10
  function each(ilt, fn) {
    if(Array.isArray(ilt)) return ilt.forEach(fn)
    for(var prop in ilt) {
      if(ilt.hasOwnProperty(prop))
        fn(ilt[prop], prop, ilt)
    }
  }

  function doTest(env, cb) {
    var output = ''
    //var timer
    var child = createTestProcess(env)
    child.stdout.setEncoding('utf-8')
    child.stdout.on('data', function(data) {
      output += data

      /*if(timer)
        clearTimeout(timer)
      timer = setTimeout(function() {
        closeChild(child)
      }, 500)*/
    })
    child.on('close', function() {
      cb(output)
      closeChild(child)
    })
  }

  function createTestProcess(env) {
    return spawn(node, args, {
      stdio: ['ignore', 'pipe', 'ignore']
    , env: env
    })
  }

  function closeChild(child) {
    child.kill('SIGHUP')
  }
})
