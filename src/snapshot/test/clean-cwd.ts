import t from 'tap'

t.capture(process, 'cwd', () => 'D:\\some\\TEST-Path')
const { cleanCWD } = (await t.mockImport('../dist/esm/clean-cwd.js', {
  '@tapjs/core': {
    cwd: 'D:\\some\\TEST-Path',
  },
})) as typeof import('../dist/esm/clean-cwd.js')

const s = process.cwd()
const p = s.replace(/\\/g, '/')

const obj = { s: [s, p, s, p] }
const j1 = JSON.stringify(obj)
const j2 = JSON.stringify({ json: j1 })
const j3 = JSON.stringify({ json: j2 })
const j4 = JSON.stringify({ json: j3 })
const tests = new Set([s, p, j1, j2, j3, j4])
for (const s of [...tests]) {
  tests.add(s.toUpperCase())
  tests.add(s.toLowerCase())
}

for (const c of tests) {
  t.equal(
    cleanCWD(c).toLowerCase().indexOf('test-path'),
    -1,
    'escaped',
    {
      string: c,
    }
  )
}

// just capture the limit. only 4 levels of escaping supported
t.not(
  cleanCWD(JSON.stringify(j4)).toLowerCase().indexOf('test-path'),
  -1,
  'does not escape beyond 4 levels'
)
