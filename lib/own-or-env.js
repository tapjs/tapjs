var ownOr = require('./own-or.js')
module.exports = function ownOrEnv (object, field, env, bool) {
  var res = ownOr(object, field, process.env[env])
  if (bool)
    res = !!+(res)
  return res
}
