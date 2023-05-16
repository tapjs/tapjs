const glob = require('glob')
const path = require('path')
module.exports = t => {
  const parts = path.relative(process.cwd(), path.resolve(t)).split(/\\|\//)
  const unit = path.basename(parts[1], '.js')
  if (unit === 'run')
    return glob.sync('bin/*.js')
  if (unit === 'coverage-map' || unit === 'settings')
    return [ `${unit}.js` ]
  const cov = glob.sync(`lib/${unit}.js`)
  if (!cov.length)
    return null
  return cov
}

/* istanbul ignore next */
if (module === require.main) {
  const tests = process.argv.length > 2
    ? process.argv.slice(2)
    : glob.sync('test/**/*.js')
  console.log(tests.map(t => [t, module.exports(t)]))
}
