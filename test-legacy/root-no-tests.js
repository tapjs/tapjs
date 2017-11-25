// verify that just loading tap doesn't cause it to
// print out some TAP stuff, unless an actual thing happens.
var t = require('../')
var spawn = require('child_process').spawn

switch (process.argv[2]) {
  case 'child-plan':
    childPlan()
    break

  case 'child-pragma':
    childPragma()
    break

  case 'child-pipe':
    childPipe()
    break

  case 'child-bail':
    childBail()
    break

  case 'child-assert':
    childAssert()
    break

  case 'child-nothing':
    childNothing()
    break

  case undefined:
    parent()
    break

  default:
    throw new Error('oops')
}

function parent () {
  t.test('non-zero plan has output', runTest('child-plan', true))
  t.test('bailout has output', runTest('child-bail', true))
  t.test('explicit pipe has output', runTest('child-pipe', true))
  t.test('pragma has output', runTest('child-pragma', true))
  t.test('assert has output', runTest('child-assert', true))
  t.test('loading tap has no output', runTest('child-nothing', false))
}

function childPragma () {
  t.pragma({ fine: true, ok: false })
}

function childPipe () {
  t.pipe(process.stdout)
}

function childAssert () {
  t.pass('this is fine')
}

function childBail () {
  t.bailout('bo')
}

function childPlan () {
  t.plan(2)
}

function childNothing () {
  // nothing to see here
}

function runTest (arg, expectOutput) { return function (t) {
  var node = process.execPath
  var args = [__filename, arg]
  var child = spawn(node, args)
  var output = ''

  child.stdout.on('data', function (c) {
    output += c
  })

  child.on('close', function () {
    if (expectOutput) {
      t.notEqual(output.trim(), '')
    } else {
      t.equal(output, '')
    }
    t.end()
  })
}}
