import { spawn } from 'child_process'
import { dirname, resolve } from 'path'
import { Readable, Writable } from 'stream'
import t from 'tap'
import { fileURLToPath } from 'url'
import { Init } from '../dist/mjs/index.js'

// filter out node's --loader warnings
const loaderLine =
  /is an experimental feature|to show where the warning was created/
const versionLine = /Node\.js v\d+\.\d+\.\d+/
t.cleanSnapshot = s =>
  s
    .split('\n')
    .filter(
      l => !loaderLine.test(l) && !versionLine.test(l) && l.trim()
    )
    .join('\n')
    .replace(
      /file:\/\/.*?test\/fixture\/index\.mjs:[0-9]+$/gm,
      '{CWD}/test/fixture/index.mjs:##'
    )
    .replace(/^    at .*$/gm, '')
    .replace(/\n+$/, '')

const node = process.execPath
const fixture = resolve(
  dirname(fileURLToPath(import.meta.url)),
  'fixture'
)
const script = resolve(fixture, 'index.mjs')

const respond = async (
  r: Readable,
  w: Writable,
  responses: string[]
): Promise<void> => {
  if (!responses.length) {
    w.end()
    return
  }
  return new Promise<void>(res => {
    const [resp, ...rest] = responses
    r.once('data', () => {
      w.write(resp)
      res(respond(r, w, rest))
    })
  })
}

const bridgeKeeper = async (
  args: string[],
  env: Record<string, string>,
  cwd: string,
  response: string[]
) => {
  const p = spawn(node, [script, ...args], {
    cwd,
    stdio: 'pipe',
    env,
  })

  const { stdin, stdout, stderr } = p
  if (!stdin || !stdout || !stderr)
    throw new Error('did not open stdio??')

  const out: Buffer[] = []
  stdout.on('data', c => {
    // process.stderr.write(c)
    out.push(c)
  })

  const err: Buffer[] = []
  stderr.on('data', c => {
    // process.stderr.write(c)
    err.push(c)
  })
  await respond(stdout, stdin, response)

  return await new Promise<{
    code: number | null
    signal: NodeJS.Signals | null
    stderr: string
    stdout: string
  }>(res => {
    p.on('close', (code, signal) => {
      res({
        code,
        signal,
        stderr: Buffer.concat(err).toString(),
        stdout: Buffer.concat(out).toString(),
      })
    })
  })
}

t.test('lancelot: basic init script behavior', async t => {
  const cwd = t.testdir()
  const response = [
    'Sir Lancelot of Camelot\n',
    'To seek the Holy Grail\n',
    'blue\n',
  ]
  const { code, signal, stderr, stdout } = await bridgeKeeper(
    ['--includeExtra'],
    {},
    cwd,
    response
  )
  t.equal(code, 0, 'exit 0 status code')
  t.equal(signal, null, 'no termination signal')
  t.matchSnapshot(stdout, 'stdout')
  t.matchSnapshot(stderr, 'stderr')
})

t.test('arthur: set cli options', async t => {
  const cwd = t.testdir()
  const response = [
    'Arthur, King of the Britons\n',
    'I seek the Holy Grail\n',
  ]
  const { code, signal, stderr, stdout } = await bridgeKeeper(
    ['--answer=an african or european swallow?', '--blerp'],
    {},
    cwd,
    response
  )
  t.equal(code, 0, 'exit 0 status code')
  t.equal(signal, null, 'no termination signal')
  t.matchSnapshot(stdout, 'stdout')
  t.matchSnapshot(stderr, 'stderr')
})

t.test('galahad: accept default (to great peril)', async t => {
  const cwd = t.testdir()
  const response = [
    'Sir Galahad of Camelot\n',
    'To seek the Holy Grail, yes, yes, get on with it\n',
  ]
  const { code, signal, stderr, stdout } = await bridgeKeeper(
    [],
    { npm_config_yes: 'true' },
    cwd,
    response
  )
  t.equal(code, 1, 'thrown off the bridge')
  t.equal(signal, null, 'no termination signal')
  t.matchSnapshot(stdout, 'stdout')
  t.matchSnapshot(stderr, 'stderr')
})

t.test('other unit testy stuff', async t => {
  const i = new Init(import.meta.url)
  await t.rejects(() => i.run('echo hello'))
})
