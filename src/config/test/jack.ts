import t from 'tap'
const { default: jack } = (await t.mockImport('../dist/mjs/jack.js', {
  '../dist/mjs/jobs.js': { jobs: 16 },
})) as typeof import('../dist/mjs/jack.js')
t.matchSnapshot(jack.toJSON())
t.throws(() =>
  //@ts-expect-error
  jack.setConfigValues({ 'unknown key': ['invalid'] })
)
