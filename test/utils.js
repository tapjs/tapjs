var fs = require('fs')
var t = require('../')
var utils = require('../bin/utils')

t.test('parseYaml', function (t) {
  t.test('returns empty object when not valid yaml', function (t) {
    t.strictSame(utils.parseYaml('a: b c: d'), {})
    t.end()
  })

  t.test('returns empty object when empty file', function (t) {
    t.strictSame(utils.parseYaml(''), {})
    t.end()
  })

  t.test('returns empty object when only comments', function (t) {
    t.strictSame(utils.parseYaml('# this is a comment'), {})
    t.end()
  })

  t.end()
})

t.test('parseRcFile', function (t) {
  t.test('when file does not exist, returns empty object', function (t) {
    t.strictSame(utils.parseRcFile('./this-file-does-not-exist'), {})
    t.end()
  })

  t.test('returns empty object when not valid yaml', function (t) {
    t.strictSame(utils.parseRcFile('./test/fixtures/invalid-rc-file.yml'), {})
    t.end()
  })

  t.test('parses when valid yaml', function (t) {
    var expected = {
      timeout: 9999,
      coverage: false,
      coverageReport: false,
      reporter: 'classic'
    }
    var actual = utils.parseRcFile('./test/fixtures/valid-rc-file.yml')
    t.strictSame(actual, expected)
    t.end()
  })

  t.end()
})
