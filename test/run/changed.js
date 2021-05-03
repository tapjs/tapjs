const {
  tmpfile,
  tap,
  t,
  dir,
  bin,
} = require('./')

const {getChangedFilter, filterFiles} = require(bin)
const fs = require('fs')

const rewrite = file => fs.writeFileSync(file, fs.readFileSync(file))

const mkdirp = require('mkdirp')
mkdirp.sync(dir)
const cwd = process.cwd()
process.chdir(dir)
t.teardown(() => process.chdir(cwd))

const oktest = tmpfile(t, 'ok.test.js', `
const t = require(${tap})
t.match(require('./ok.js), { ok: true })
`)

const oktest2 = tmpfile(t, 'ok2.test.js', `
const t = require(${tap})
t.pass('just ok, no files loaded')
`)

const oktest3 = tmpfile(t, 'ok3.test.js', `
const t = require(${tap})
t.pass('just ok, not tracked in index, though')
`)

const okjs = tmpfile(t, 'ok.js', `module.exports = {
  ok: true,
  message: 'this is ok',
}`)

t.test('allow everything when not using -n', t => {
  const filter = getChangedFilter({ changed: false })
  t.ok(filter(), 'no --changed, run everything')
  t.end()
})

t.test('require coverage', t => {
  t.throws(() => getChangedFilter({changed: true}), {
    message: '--changed requires coverage to be enabled'
  })
  t.end()
})

t.test('no index file means we let everything through', t => {
  const filter = getChangedFilter({
    changed: true,
    coverage: true,
  })
  t.ok(filter(), 'no index, let it all through')
  t.end()
})

t.test('with a real index', t => {
  mkdirp.sync('.nyc_output/processinfo')
  const pauseLength = 10
  const index = '.nyc_output/processinfo/index.json'
  const indexData = {
    files: {
      [okjs]: [
        'test root',
      ],
    },
    externalIds: {
      [oktest]: {
        root: 'test root',
        children: [
          'test child 1',
          'test child 2',
        ]
      },
      [oktest2]: {
        root: 'irrelevant test',
        children: [],
      },
    },
  }
  fs.writeFileSync(index, JSON.stringify(indexData))

  let filter = getChangedFilter({
    changed: true,
    coverage: true,
  })

  t.same([
    filter(oktest),
    filter(oktest2),
  ], [false, false], 'should not run any tests, brand new index')

  t.ok(filter(oktest3), 'will run new test not previously run')

  { const until = Date.now() + pauseLength; while (Date.now() < until); }
  rewrite(oktest2)

  t.same([
    filter(oktest),
    filter(oktest2),
  ], [false, true], 're-run a test when it changes')

  rewrite(index)
  // need a new filter, because indexDate is cached
  filter = getChangedFilter({
    changed: true,
    coverage: true,
  })
  { const until = Date.now() + pauseLength; while (Date.now() < until); }
  rewrite(okjs)

  t.same([
    filter(oktest),
    filter(oktest2),
  ], [true, false], 're-run a test when covered file changes, root')

  indexData.files[okjs] = ['test child 1']
  fs.writeFileSync(index, JSON.stringify(indexData))
  filter = getChangedFilter({
    changed: true,
    coverage: true,
  })
  { const until = Date.now() + pauseLength; while (Date.now() < until); }
  rewrite(okjs)

  t.same([
    filter(oktest),
    filter(oktest2),
  ], [true, false], 're-run a test when covered file changes, children')

  const filteredFiles = filterFiles([oktest, oktest2, oktest3], {
    changed: true,
    changedFilter: filter,
  }, {})
  t.same(filteredFiles, [ oktest, oktest3 ], 'filtered files')

  t.end()
})
