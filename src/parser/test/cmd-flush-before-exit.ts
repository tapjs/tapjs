import { createRequire } from 'module'
import t from 'tap'
import { fileURLToPath } from 'url'

const require = createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)

const args = [
  '--no-warnings',
  '--enable-source-maps',
  '--loader',
  'ts-node/esm',
  __filename,
]

if (process.platform === 'win32') {
  t.plan(0, 'not relevant on windows, stdout is synchronous')
  process.exit(0)
}

if (process.argv[2] === 'gen') {
  t.test('generate a lot of output', async t => {
    for (let i = 0; i < 10000; i++) {
      // sprinkle in some failures
      const assert = i % 39 > 0 ? 'pass' : 'fail'
      t[assert]('this is some sample output', {
        diagnostic: false,
      })
    }
  })
} else if (process.argv[2] === 'cmd') {
  process.argv = [
    process.execPath,
    require.resolve('../bin/cmd.cjs'),
    '-t',
  ]
  require('../bin/cmd.cjs')
} else if (process.argv[2] === 'pipe') {
  process.stdin.pipe(process.stdout)
} else {
  const { spawn } = require('child_process')
  const node = process.execPath
  const gen = spawn(node, [...args, 'gen'], {
    env: {
      ...process.env,
      NODE_DEBUG: '',
      TAP_DEBUG: '0',
      TAP_BAIL: '0',
      TAP_DIAG: '0',
    },
    stdio: ['ignore', 'pipe', 'ignore'],
  })
  const cmd = spawn(node, [...args, 'cmd'], {
    stdio: [gen.stdout, 'pipe', 'ignore'],
  })
  const pipe = spawn(node, [...args, 'pipe'], {
    stdio: [cmd.stdout, 'pipe', 'ignore'],
  })

  let output = ''
  pipe.stdout.setEncoding('utf8')
  pipe.stdout.on('data', (c: Buffer) => {
    output = (output + c).slice(-1000)
  })
  pipe.on('close', () => {
    t.match(
      output,
      new RegExp(`
    1..10000
not ok 1 - generate a lot of output # time=[0-9.]+m?s`)
    )
    t.end()
  })
}
