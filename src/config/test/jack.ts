import t from 'tap'
const { default: jack } = await t.mockImport<
  typeof import('../dist/esm/jack.js')
>('../dist/esm/jack.js', {
  '../dist/esm/jobs.js': { jobs: 16 },
})
t.matchSnapshot(jack.toJSON())
t.throws(() =>
  //@ts-expect-error
  jack.setConfigValues({ 'unknown key': ['invalid'] }),
)

t.test('coverage threshold validation', async t => {
  const coverageSettings = [
    'statements',
    'branches',
    'functions',
    'lines'
  ]
  for (const setting of coverageSettings) {
    t.throws(() => {
      const conf = jack.parse([`--${setting}=invalid`])
      const data: Record<string, any> = Object.fromEntries(
        Object.entries(conf.values).map(([k, v]) => [
          k,
          Array.isArray(v) ? [...v] : v,
        ]),
      )
      //@ts-expect-error
      jack.validate(data)
    })
    t.throws(() => {
      const conf = jack.parse([`--${setting}=-1`])
      const data: Record<string, any> = Object.fromEntries(
        Object.entries(conf.values).map(([k, v]) => [
          k,
          Array.isArray(v) ? [...v] : v,
        ]),
      )
      //@ts-expect-error
      jack.validate(data)
    })
    t.throws(() => {
      const conf = jack.parse([`--${setting}=101`])
      const data: Record<string, any> = Object.fromEntries(
        Object.entries(conf.values).map(([k, v]) => [
          k,
          Array.isArray(v) ? [...v] : v,
        ]),
      )
      //@ts-expect-error
      jack.validate(data)
    })
    t.doesNotThrow(() => {
      const conf = jack.parse([`--${setting}=0`])
      const data: Record<string, any> = Object.fromEntries(
        Object.entries(conf.values).map(([k, v]) => [
          k,
          Array.isArray(v) ? [...v] : v,
        ]),
      )
      //@ts-expect-error
      jack.validate(data)
    })
  }
})
