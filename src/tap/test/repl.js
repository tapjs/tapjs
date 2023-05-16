const EE = require('events')
const fakeWatch = Object.assign(new EE(), {
  args: ['tap'],
  positionals: [],
  proc: null,
  fileList: [],
  queue: [],
  saveFile: 'filename',
  kill (signal) {
    this.proc && this.proc.emit('close', null, signal)
  },
  watcher: {},
  pause () {
    this.emit('pause')
    this.watcher = null
  },
  resume () {
    this.emit('resume')
    this.watcher = {}
  },
  run () {
    if (this.proc)
      throw new Error('calling run while already with a proc')
    this.proc = new EE()
    this.proc.once('close', (code, signal) => {
      this.proc = null
      this.emit('afterProcess', {code, signal})
    })
    setTimeout(() => this.proc && this.proc.emit('close', 0, null))
  },
  main () {
    this.watcher = true
    this.emit('main')
  },
  env: {},
})

const fs = require('fs')
function FakeWatch () {
  return fakeWatch
}

const Minipass = require('minipass')

require('../lib/watch.js').Watch = FakeWatch

const t = require('../')

const originalCwd = process.cwd()
const rimraf = require('rimraf').sync

const dir = 'repl-test'
const mkdirp = require('mkdirp')
mkdirp.sync(dir)
process.chdir(dir)
t.teardown(() => {
  process.chdir(originalCwd)
  rimraf(dir)
})

const {Repl} = require('../lib/repl.js')

const input = new Minipass({encoding: 'utf8'})
const output = new Minipass({encoding: 'utf8'})
const repl = new Repl({}, input, output)

// save into node_modules/.cache instead of ~
process.env.HOME = ''

t.test('start on main event', t => {
  t.equal(repl.repl, null)
  fakeWatch.emit('main')
  t.ok(repl.repl)
  t.notOk(repl.running)
  t.end()
})

t.test('show help', t => {
  input.write('help\n')
  setTimeout(() => {
    t.matchSnapshot(output.read(), 'output')
    t.end()
  })
})

t.test('save/load history', t => {
  repl.saveHistory()
  const hist = 'node_modules/.cache/tap/.tap_repl_history'
  t.matchSnapshot(fs.readFileSync(hist, 'utf8'), 'history file')
  t.matchSnapshot(repl.loadHistory(), 'load history')
  const rfs = fs.readFileSync
  fs.readFileSync = () => {
    throw new Error('read fail')
  }
  const wfs = fs.writeFileSync
  fs.writeFileSync = () => {
    throw new Error('write fail')
  }
  t.same(repl.loadHistory(), [], 'empty array if read fails')
  t.doesNotThrow(() => repl.saveHistory(), 'save ok if write fails')
  fs.readFileSync = rfs
  fs.writeFileSync = wfs
  t.end()
})

t.test('run on change', t => {
  t.notOk(repl.running)
  fakeWatch.run()
  t.ok(repl.running)
  // try to run, but please wait
  input.write('r\n')
  fakeWatch.once('afterProcess', () => process.nextTick(() => {
    t.matchSnapshot(output.read(), 'ran the suite on change')
    t.end()
  }))
})

t.test('kill process', t => {
  fakeWatch.run()
  // try to run, but please wait
  fakeWatch.once('afterProcess', () => process.nextTick(() => {
    t.matchSnapshot(output.read(), 'killed process')
    t.end()
  }))
  repl.repl.emit('SIGINT')
})

t.test('manual run tests', t => {
  input.write('r\n')
  t.ok(repl.running)
  fakeWatch.once('afterProcess', () => process.nextTick(() => {
    t.matchSnapshot(output.read(), 'ran the suite again')
    t.end()
  }))
})

t.test('add test', t => {
  fakeWatch.positionals.push('foo.js')
  input.write('r bar.js\n')
  t.same(fakeWatch.positionals, ['foo.js', 'bar.js'])
  t.same(fakeWatch.queue, ['bar.js'])
  fakeWatch.kill('fake')
  fakeWatch.queue.length = 0
  fakeWatch.positionals.length = 0
  input.write('r bar.js\n')
  t.same(fakeWatch.positionals, [])
  t.same(fakeWatch.queue, ['bar.js'])
  fakeWatch.args = ['tap']
  fakeWatch.kill('fake')
  t.end()
})

t.test('pause/resume', t => {
  let sawPause = false
  fakeWatch.once('pause', () => sawPause = true)
  let sawResume = false
  fakeWatch.once('resume', () => sawResume = true)

  input.write('p\n')
  input.write('p\n')
  t.matchSnapshot(output.read(), 'output')
  t.same([sawPause, sawResume], [true, true])
  t.end()
})

t.test('update', t => {
  input.write('u\n')
  t.same(fakeWatch.env, { TAP_SNAPSHOT: '1' })
  fakeWatch.once('afterProcess', () => process.nextTick(() => {
    output.read()
    t.same(fakeWatch.env, {})
    t.end()
  }))
})

t.test('changed', t => {
  input.write('n\n')
  t.same(fakeWatch.args, ['tap', '--changed'])
  fakeWatch.once('afterProcess', () => process.nextTick(() => {
    output.read()
    t.same(fakeWatch.args, ['tap'])
    t.end()
  }))
})

t.test('coverage report', t => {
  input.write('c\n')
  t.same(fakeWatch.args, ['tap', '--coverage-report=text'])
  fakeWatch.once('afterProcess', () => process.nextTick(() => {
    output.read()
    t.same(fakeWatch.args, ['tap'])
    t.end()
  }))
})

t.test('clear', t => {
  mkdirp.sync('.nyc_output')
  input.write('clear\n')
  t.notOk(fs.existsSync('.nyc_output'))
  fakeWatch.once('afterProcess', () => process.nextTick(() => {
    output.read()
    t.end()
  }))
})

t.test('completer', t => {
  mkdirp.sync('test/foo')
  mkdirp.sync('temp/orary')
  fs.writeFileSync('test/foo/bar.js', '')
  fs.writeFileSync('test/follow.js', '')
  const tests = [
    '',
    'ex',
    'r te',
    'r tes',
    'r test/',
    'r test/fo',
    'r test/foo',
    'r test/fol',
    'r test/blerg',
    'u bl/erg',
  ]
  tests.forEach(test =>
    t.matchSnapshot(repl.completer(test), test || 'empty'))
  t.end()
})

t.test('cls', t => {
  input.write('cls\n')
  setTimeout(() => {
    // JSON.stringify it so that it doesn't look gross in patches
    t.matchSnapshot(JSON.stringify(output.read()), 'clear screen')
    t.end()
  })
})

t.test('exit', t => {
  repl.repl.emit('SIGINT')
  t.matchSnapshot(output.read(), 'output')
  t.end()
})

t.test('throw if input/output not a stream', t => {
  const proc = process
  global.process = null
  t.teardown(() => global.process = proc)
  const {Repl} = t.mock('../lib/repl.js')
  t.throws(() => new Repl({}, input, null), {
    message: 'output stream not provided, stdout unavailable',
  })
  t.throws(() => new Repl({}, null, output), {
    message: 'input stream not provided, stdin unavailable',
  })
  t.end()
})
