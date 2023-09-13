import t from 'tap'
const { default: jack } = (await t.mockImport('../dist/esm/jack.js', {
  '../dist/esm/jobs.js': { jobs: 16 },
})) as typeof import('../dist/esm/jack.js')
t.matchSnapshot(jack.toJSON())
t.throws(() =>
  //@ts-expect-error
  jack.setConfigValues({ 'unknown key': ['invalid'] })
)
