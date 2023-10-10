import t from 'tap'

// any time the runner loads, it sets the envs to the resolved config
// reset it after every test. Use a fake intercept version instead.
const originalEnv = { ...process.env }
t.beforeEach(t =>
  t.intercept(process, 'env', { value: { ...originalEnv } })
)

t.test('help', async t => {
  t.equal(process.title, process.execPath, 'starts out as node bin')
  const cases = ['--help', 'help']
  for (const c of cases) {
    t.test(c, async t => {
      t.intercept(process, 'argv', {
        value: [process.argv[0], process.argv[1], c],
      })
      let helpRan = false
      t.not(process.env.TAP_HELP, '1')
      await t.mockImport('../dist/esm/index.js', {
        '../dist/esm/help.js': {
          help: () => {
            helpRan = true
          },
        },
      })
      t.equal(process.title, 'tap')
      t.equal(helpRan, true)
      if (c.startsWith('--')) t.equal(process.env.TAP_HELP, '1')
    })
  }
})

t.test('version', async t => {
  const cases = ['--version', 'version', 'versions']
  for (const c of cases) {
    t.test(c, async t => {
      t.intercept(process, 'argv', {
        value: [...process.argv.slice(0, 2), c],
      })
      t.not(process.env.TAP_VERSION, '1')
      let versionRan = false
      await t.mockImport('../dist/esm/index.js', {
        '../dist/esm/version.js': {
          version: () => {
            versionRan = true
          },
        },
      })
      t.equal(versionRan, true)
      if (c.startsWith('--')) t.equal(process.env.TAP_VERSION, '1')
    })
  }
})

t.test('run', async t => {
  const cases = ['<no args>', 'run']
  for (const c of cases) {
    t.test(c, async t => {
      if (c !== '<no args>') {
        t.intercept(process, 'argv', {
          value: [...process.argv.slice(0, 2), c],
        })
      }
      let runRan = false
      await t.mockImport('../dist/esm/index.js', {
        '../dist/esm/run.js': {
          run: () => {
            runRan = true
          },
        },
      })
      t.equal(runRan, true)
    })
  }
})

t.test('config', async t => {
  let configRan = false
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), 'config'],
  })
  await t.mockImport('../dist/esm/index.js', {
    '../dist/esm/config.js': {
      config: () => {
        configRan = true
      },
    },
  })
  t.equal(configRan, true)
})

t.test('other commands', t => {
  const commands = [
    'build',
    'plugin',
    'list',
    'report',
    'repl',
    'replay',
  ]
  t.plan(commands.length)
  for (const cmd of commands) {
    t.test(cmd, async t => {
      t.intercept(process, 'argv', {
        value: [...process.argv.slice(0, 2), cmd],
      })
      let cmdRan = false
      await t.mockImport('../dist/esm/index.js', {
        [`../dist/esm/${cmd}.js`]: {
          [cmd]: () => {
            cmdRan = true
            return []
          },
        },
      })
      t.equal(cmdRan, true)
    })
  }
})
