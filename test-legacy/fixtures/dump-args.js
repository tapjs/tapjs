var t = require('../..')

function s (k) {
  return k.map(JSON.stringify).join(' ').trim()
}

t.pass(process.execPath.replace(/\.exe$/i, '') + ' ' +
  s(process.execArgv.concat(process.argv.slice(1))))
