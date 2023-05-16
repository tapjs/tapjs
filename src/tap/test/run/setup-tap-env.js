const setup = require('../../bin/run.js').setupTapEnv
const t = require('../../lib/tap.js')

const cases = [
  [{timeout: 999}, {TAP_TIMEOUT: 999}],
  [{color: false}, {TAP_COLORS: '0'}],
  [{color: true}, {TAP_COLORS: '1'}],
  [{snapshot: true}, {TAP_SNAPSHOT: '1'}],
  [{bail: true}, {TAP_BAIL: '1'}],
  [{invert: true}, {TAP_GREP_INVERT: '1'}],
  [{grep: [/a/, /b/]}, {TAP_GREP: '/a/\n/b/'}],
  [{only: true}, {TAP_ONLY: '1'}],
]

const env = {...process.env}
cases.forEach(c => {
  c[0].grep = c[0].grep || []
  setup(c[0])
  t.match(process.env, c[1])
  for (let k in c[1]) {
    process.env[k] = env[k]
  }
})
t.end()
