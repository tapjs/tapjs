import t from 'tap'
const { default: jack } = t.mockRequire('../dist/cjs/jack.js', {
  '../dist/cjs/jobs.js': { jobs: 16 },
}) as typeof import('../dist/cjs/jack.js')
t.matchSnapshot(jack.toJSON())
t.throws(() =>
  jack.setConfigValues({ 'coverage-report': ['invalid'] })
)
