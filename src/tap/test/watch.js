// just load this to assign the runner test's output cleaner
require('./run/index.js')
const mkdirp = require('mkdirp')

// spawn mock
// log what's being run, and then write out the index
const EE = require('events')
const spawnLog = []
const spawnTrack = new EE()
const fakeSpawn = (file, args, options) => {
  spawnLog.push([file, args, options])
  const ee = spawnTrack.current = new EE()
  ee.file = file
  ee.args = args
  ee.options = options
  spawnTrack.emit('spawn', ee)
  ee.on('close', () => spawnTrack.current = null)
  const to = setTimeout(() => {
    try {
      fs.unlinkSync('node_modules/.cache/tap/watch-' + process.pid)
    } catch (_) {}
    ee.emit('close', null, null)
  })
  ee.kill = signal => {
    clearTimeout(to)
    try {
      fs.unlinkSync('node_modules/.cache/tap/watch-' + process.pid)
    } catch (_) {}
    ee.emit('close', null, signal)
  }
  return ee
}
require('child_process').spawn = fakeSpawn

// chokidar mock
const watcher = new EE()
const triggerWatchEvent = (event, file) => {
  if (watcher.filelist.includes(file)) {
    process.nextTick(() => {
      watcher.emit(event, file)
      watcher.emit('all', event, file)
    })
  }
}
watcher.add = file => {
  watcher.filelist.push(file)
  process.nextTick(() => triggerWatchEvent('add', file))
}
watcher.close = () => watcher.filelist = []
require('chokidar').watch = filelist => {
  watcher.filelist = []
  process.nextTick(() => filelist.forEach(f => watcher.add(f)))
  return watcher
}

const changeFile = file => triggerWatchEvent('change', file)

const {Watch} = require('../lib/watch.js')
const bin = require.resolve('../bin/run.js')

const dir = 'watch-test'
const index = {
  "processes": {
    "2d3328f2-7787-42c1-b4cb-fb0370e3ba4a": {
      "parent": "a1160d95-3d31-4828-a0e0-abdfaa94e816",
      "externalId": "4.test.js",
      "children": []
    },
    "64951cad-dda0-4e8f-931f-709eb25c7c1f": {
      "parent": "a1160d95-3d31-4828-a0e0-abdfaa94e816",
      "externalId": "2.test.js",
      "children": []
    },
    "7cb8d2d0-cad5-4b49-86a8-d7d693c48d89": {
      "parent": "a1160d95-3d31-4828-a0e0-abdfaa94e816",
      "externalId": "1.test.js",
      "children": []
    },
    "a1160d95-3d31-4828-a0e0-abdfaa94e816": {
      "parent": null,
      "children": [
        "2d3328f2-7787-42c1-b4cb-fb0370e3ba4a",
        "64951cad-dda0-4e8f-931f-709eb25c7c1f",
        "7cb8d2d0-cad5-4b49-86a8-d7d693c48d89",
        "ef4091b9-a036-474e-ba54-0dccf3b5c3ee"
      ]
    },
    "ef4091b9-a036-474e-ba54-0dccf3b5c3ee": {
      "parent": "a1160d95-3d31-4828-a0e0-abdfaa94e816",
      "externalId": "3.test.js",
      "children": []
    }
  },
  "files": {
    "ko.js": [
      "2d3328f2-7787-42c1-b4cb-fb0370e3ba4a"
    ],
    "ok.js": [
      "64951cad-dda0-4e8f-931f-709eb25c7c1f",
      "7cb8d2d0-cad5-4b49-86a8-d7d693c48d89",
      "ef4091b9-a036-474e-ba54-0dccf3b5c3ee"
    ]
  },
  "externalIds": {
    "4.test.js": {
      "root": "2d3328f2-7787-42c1-b4cb-fb0370e3ba4a",
      "children": []
    },
    "2.test.js": {
      "root": "64951cad-dda0-4e8f-931f-709eb25c7c1f",
      "children": []
    },
    "1.test.js": {
      "root": "7cb8d2d0-cad5-4b49-86a8-d7d693c48d89",
      "children": []
    },
    "3.test.js": {
      "root": "ef4091b9-a036-474e-ba54-0dccf3b5c3ee",
      "children": []
    }
  }
}

const rimraf = require('rimraf').sync
const fs = require('fs')
const pidir = dir + '/.nyc_output/processinfo'
mkdirp.sync(pidir)
const read = file => fs.existsSync(file) && fs.readFileSync(file, 'utf8')
const saveFile = 'node_modules/.cache/tap/watch-' + process.pid

const options = {
  watch: true,
  coverage: true,
  _: [
    '1.test.js',
    '2.test.js',
    '3.test.js',
    '4.test.js',
  ]
}

options._.parsed = [...options._, '--watch']

const originalCwd = process.cwd()
process.chdir(dir)
const indexFile = '.nyc_output/processinfo/index.json'
fs.writeFileSync(indexFile, JSON.stringify(index))

const t = require('../')
t.teardown(() => {
  process.chdir(originalCwd)
  if (process.env._TAP_TEST_NO_TEARDOWN_TMP !== '1')
    rimraf(dir)
})

t.throws(() => new Watch({}), {
  message: '--watch requires coverage to be enabled'
})

t.test('not available when no node process', t => {
  const proc = process
  global.process = null
  t.teardown(() => global.process = proc)
  const {Watch} = t.mock('../lib/watch.js')
  t.throws(() => new Watch({ coverage: true }), {
    message: '--watch requires working node.js process object',
  })
  t.end()
})

t.test('run tests on changes', t => {
  t.test('initial test', t => {
    spawnTrack.once('spawn', proc => {
      t.match(proc, {
        file: process.execPath,
        args: [
          bin,
          '1.test.js',
          '2.test.js',
          '3.test.js',
          '4.test.js',
          '--watch',
          '--no-watch'
        ],
        options: { stdio: 'inherit' },
      })
      t.matchSnapshot(read(saveFile), 'spawn initial test run')
      t.matchSnapshot(Buffer.concat(out).toString(), 'logs')
      out.length = 0
      // wait for all the files to be added to the watcher
      proc.once('close', () => setTimeout(() => t.end()))
    })
  })

  const out = []
  const w = new Watch(options)
  w.setEncoding('utf8')
  w.on('data', c => out.push(c))

  t.test('change a file', t => {
    // initial test done, change a file
    spawnTrack.once('spawn', () => {
      t.matchSnapshot(read(saveFile), 'spawn test run on change')
      t.matchSnapshot(out.join(''), 'logs')
      out.length = 0
      // don't wait for this one to close, that's the point.
      t.end()
    })
    changeFile('ko.js')
  })

  t.test('change a file mid-test', t => {
    changeFile('1.test.js')
    spawnTrack.once('spawn', proc => {
      t.matchSnapshot(read(saveFile), 'spawn queued test')
      t.matchSnapshot(out.join(''), 'logs')
      out.length = 0

      // add a new covered file to the equation
      const newfile = 'new.js'
      index.files[newfile] = [index.files['ok.js'].pop()]
      fs.writeFileSync(indexFile, JSON.stringify(index))
      // set timeout to give it time to add the new file
      proc.once('close', () => setTimeout(() => t.end()))
    })
  })

  t.test('new file added', t => {
    t.matchSnapshot(out.join(''), 'logs')
    out.length = 0
    spawnTrack.once('spawn', proc => {
      t.matchSnapshot(read(saveFile), 'spawn test for new file')
      t.matchSnapshot(out.join(''), 'log after spawn')
      out.length = 0
      process.nextTick(() => w.kill('SIGTERM'))
      proc.once('close', (code, signal) => {
        t.same({code, signal}, {code: null, signal: 'SIGTERM'})
        // give the watcher cleanup a tick to remove proc
        process.nextTick(() => t.end())
      })
    })
    changeFile('new.js')
  })

  t.test('killing if no proc is a noop', t => {
    w.kill('no op')
    t.end()
  })

  t.test('pause/resume', t => {
    w.pause()
    t.equal(w.watcher, null)
    w.pause()
    w.resume()
    t.not(w.watcher, null)
    t.end()
  })

  t.end()
})
