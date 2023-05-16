const t = require('../')
const coverageMap = require('../coverage-map.js')
t.strictSame(coverageMap('test/coverage-map.js'), ['coverage-map.js'])
t.strictSame(coverageMap('test/run/xyz.js'), [
  'bin/jack.js',
  'bin/jsx.js',
  'bin/run.js'
])
t.strictSame(coverageMap('test/glorp.js'), null)
t.strictSame(coverageMap('test/mocha.js'), ['lib/mocha.js'])
