import t from 'tap'

const expect: [number, number][] = [
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 4],
  [9, 7],
  [10, 8],
  [16, 12],
  [20, 12],
  [24, 12],
  [27, 14],
  [32, 16],
  [256, 16],
]

t.test('availableParallelism ramp-up', async t => {
  for (const [o, e] of expect) {
    t.test(`n=${o}`, async t => {
      const { jobs } = await t.mockImport('../dist/esm/jobs.js', {
        os: {
          availableParallelism: () => o,
        },
      })
      t.equal(jobs, e)
    })
  }
})

t.test('cpus().length ramp-up', async t => {
  for (const [o, e] of expect) {
    t.test(`n=${o}`, async t => {
      const { jobs } = await t.mockImport('../dist/esm/jobs.js', {
        os: {
          cpus: () => new Array(o).fill({}),
        },
      })
      t.equal(jobs, e)
    })
  }
})
