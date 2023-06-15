import { spawn } from 'child_process'
import t from 'tap'
const buildScript = require.resolve('../scripts/build.mjs')

interface Result {
  target: string
  plugins: string[]
  stdout: string
  stderr: string
  code: number | null
  signal: NodeJS.Signals | null
}
const build = async (target: string, plugins: string[]) => {
  return new Promise<Result>((res, rej) => {
    const c = spawn(
      process.execPath,
      ['--no-warnings', buildScript, ...plugins],
      {
        env: {
          ...process.env,
          _TESTING_TEST_BUILD_TARGET_: target,
        },
      }
    )
    c.on('error', rej)
    const out: Buffer[] = []
    const err: Buffer[] = []
    c.stdout.on('data', c => out.push(c))
    c.stderr.on('data', c => err.push(c))
    c.on('close', (code, signal) => {
      res({
        target,
        plugins,
        code,
        signal,
        stdout: Buffer.concat(out).toString(),
        stderr: Buffer.concat(err).toString(),
      })
    })
  })
}

t.test(
  'build with @tapjs/asserts and @tapjs/dummy-plugin',
  async t => {
    const dir = t.testdir()
    const res = await build(dir, ['@tapjs/asserts', '@tapjs/dummy-plugin'])
    t.same(res, {
      target: dir,
      plugins: ['@tapjs/asserts', '@tapjs/dummy-plugin'],
      code: 0,
      signal: null,
      stderr: '',
      stdout: `
> @tapjs/test-built@0.0.0-0 prepare
> tsc -p tsconfig.json && tsc -p tsconfig-esm.json && bash fixup.sh

`,
    })
  }
)


// TODO: make a dummy plugin that has every kind of config
