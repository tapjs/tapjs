const {
  tmpfile,
  clean,
  bin,
  tap,
  node,
  dir,
  t,
  winSkip,
} = require('./')

// monkey-patch child_process.spawn
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
  setTimeout(() => {
    try {
      fs.unlinkSync('node_modules/.cache/tap/watch-' + process.pid)
    } catch (_) {}
    ee.emit('close', null, null)
  }, 500)
  return ee
}
require('child_process').spawn = fakeSpawn

const { watchStart, watchMain } = require('../../bin/run.js')

const path = require('path')
const fs = require('fs')

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
    [dir + "/ko.js"]: [
      "2d3328f2-7787-42c1-b4cb-fb0370e3ba4a"
    ],
    [dir + "/ok.js"]: [
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

const ok = tmpfile(t, 'ok.js', `
module.exports = (x, y) => {
  if (x)
    return y || x
  else
    return y
}`)

const ko = tmpfile(t, 'ko.js', `
module.exports = (x, y) => {
  if (!x)
    return y || x
  else
    return x
}`)

const t1 = tmpfile(t, '1.test.js', `'use strict'
  const ok = require('./ok.js')
  require(${tap}).equal(ok(1), 1)`)

const t2 = tmpfile(t, '2.test.js', `'use strict'
  const ok = require('./ok.js')
  require(${tap}).equal(ok(1, 2), 2)`)

const t3 = tmpfile(t, '3.test.js', `'use strict'
  const ok = require('./ok.js')
  require(${tap}).equal(ok(0, 3), 3)`)

const t4 = tmpfile(t, '4.test.js', `'use strict'
  const ko = require('./ko.js')
  const t = require(${tap})
  t.equal(ko(0, 3), 3)
  t.equal(ko(null, 0), null)
  t.equal(ko(true, Infinity), true)`)

const indexFile = tmpfile(t, '.nyc_output/processinfo/index.json',
  JSON.stringify(index))

const options = {
  coverage: true,
  _: {
    parsed: [
      '--watch',
      '1.test.js',
      '2.test.js',
      '3.test.js',
      '4.test.js',
    ]
  }
}

const logs = []
const errs = []
console.log = (...msg) => logs.push(msg)
console.error = (...msg) => errs.push(msg)

const originalCwd = process.cwd()
process.chdir(dir)
t.teardown(() => {
  process.chdir(originalCwd)
  watchMain.close()
})

t.throws(() => watchStart({}), {
  message: '--watch requires coverage to be enabled'
})

const read = file => fs.existsSync(file) && fs.readFileSync(file, 'utf8')
const saveFile = 'node_modules/.cache/tap/watch-' + process.pid

t.test('watch files', t => {
  spawnTrack.once('spawn', ee => {
    t.matchSnapshot(read(saveFile), 'spawn initial test run')
    t.matchSnapshot(clean(logs.join('\n')), 'console.log')
    t.matchSnapshot(clean(errs.join('\n')), 'console.error')
    logs.length = errs.length = 0
    ee.on('close', () => setTimeout(() => t.end(), 1000))
  })
  watchStart(options)
})

t.test('run tests on changes', t => {
  spawnTrack.once('spawn', ee => {
    t.matchSnapshot(read(saveFile), 'spawn test run on change')
    t.matchSnapshot(clean(logs.join('\n')), 'console.log')
    t.matchSnapshot(clean(errs.join('\n')), 'console.error')
    logs.length = errs.length = 0
    spawnTrack.once('spawn', ee => {
      t.matchSnapshot(read(saveFile), 'spawn queued test')
      t.matchSnapshot(clean(logs.join('\n')), 'console.log')
      t.matchSnapshot(clean(errs.join('\n')), 'console.error')
      const newfile = dir + '/new.js'
      fs.writeFileSync(newfile, 'console.log("new!")\n')
      index.files[newfile] = [index.files[dir + '/ok.js'].pop()]
      fs.writeFileSync('.nyc_output/processinfo/index.json',
        JSON.stringify(index))
      logs.length = errs.length = 0
      ee.on('close', () => t.end())
    })
  })
  fs.writeFileSync('ko.js', fs.readFileSync('ko.js'))
  // edit a test file while a test is already running
  setTimeout(() =>
    fs.writeFileSync('1.test.js', fs.readFileSync('1.test.js')), 100)
})

t.test('edit the new file', t => {
  spawnTrack.once('spawn', ee => {
    t.matchSnapshot(read(saveFile), 'spawn test run on change to newly tracked file')
    t.matchSnapshot(clean(logs.join('\n')), 'console.log')
    t.matchSnapshot(clean(errs.join('\n')), 'console.error')
    logs.length = errs.length = 0
    ee.on('close', () => t.end())
  })
  fs.writeFileSync('new.js', fs.readFileSync('new.js'))
})
