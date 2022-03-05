const t = require('tap')

if (process.platform === 'win32') {
  t.plan(0, 'not relevant on windows, stdout is synchronous')
  process.exit(0)
}

if (process.argv[2] === 'gen') {
  t.test('generate a lot of output', async (t) => {
    for (let i = 0; i < 10000; i++) {
      // sprinkle in some failures
      const assert = i % 39 > 0 ? 'pass' : 'fail'
      t[assert]('this is some sample output')
    }
  })
} else if (process.argv[2] === 'cmd') {
  process.argv = [process.argv[0], require.resolve('../bin/cmd.js'), '-t']
  require('../bin/cmd.js')
} else if (process.argv[2] === 'pipe') {
  process.stdin.pipe(process.stdout)
} else {
  const { spawn } = require('child_process')
  const node = process.execPath
  const gen = spawn(node, [ __filename, 'gen' ], {
    stdio: ['ignore', 'pipe', 'ignore' ],
  })
  const cmd = spawn(node, [ __filename, 'cmd' ], {
    stdio: [gen.stdout, 'pipe', 'ignore'],
  })
  const pipe = spawn(node, [ __filename, 'pipe' ], {
    stdio: [cmd.stdout, 'pipe', 'ignore'],
  })

  let output = ''
  pipe.stdout.setEncoding('utf8')
  pipe.stdout.on('data', c => {
    output = (output + c).slice(-1000)
  })
  pipe.on('close', () => {
    t.match(output, new RegExp(`
    1..10000
    # failed 257 of 10000 tests
not ok 1 - generate a lot of output # time=[0-9.]+m?s
1..1
# failed 1 test
# time=[0-9.]+m?s\\n*$`))
    t.end()
  })
}
