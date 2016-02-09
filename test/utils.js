var fs = require('fs')
var t = require('../')
var utils = require('../bin/utils')

var validYmlPath = './test/fixtures/valid-rc-file.yml'
var validYml = fs.readFileSync(validYmlPath)

t.test('parseYaml', function (t) {
  t.test('returns null', function (t) {
    t.equals(utils.parseYaml('a: b c: d'), null)
    t.end()
  })

  t.test('returns {} when not valid yaml', function (t) {
    t.strictSame(utils.parseYaml(''), {})
    t.strictSame(utils.parseYaml('# this is a comment'), {})
    t.end()
  })

  t.test('parses when valid yaml', function (t) {
    var expected = {
      timeout: 9999,
      coverage: false,
      coverageReport: false,
      reporter: 'classic'
    }
    t.strictSame(utils.parseYaml(validYml), expected)
    t.end()
  })

  t.end()
})

t.test('parseRcFile', function (t) {
  t.test('fails gracefully, returns empty object', function (t) {
    t.strictSame(utils.parseRcFile('./this-file-does-not-exist'), {})
    t.end()
  })

  t.test('returns empty object when not valid yaml', function (t) {
    var expected = {
      timeout: 9999,
      coverage: false,
      coverageReport: false,
      reporter: 'classic'
    }
    t.strictSame(utils.parseRcFile(validYmlPath), expected)
    t.end()
  })

  t.end()
})
