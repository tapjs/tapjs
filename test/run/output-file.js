const {
  tmpfile,
  run,
  tap,
  dir,
  t
} = require('./')

const path = require('path')
const fs = require('fs')

const tapdata = `TAP version 13
1..1
ok 1 - totally fine result from stdin
`

t.test('output-file', t => {
  const ok = tmpfile(t, 'ok.js', `require(${tap}).pass('this is fine')`)
  t.test('ok.js', t => {
    run([ok, `--output-file=${dir}/output.tap`], (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.matchSnapshot(fs.readFileSync(`${dir}/output.tap`, 'utf8'),
        'output file')
      t.end()
    })
  })
  t.test('stdin', t => {
    run(['-', `-o${dir}/output.tap`], (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.matchSnapshot(fs.readFileSync(`${dir}/output.tap`, 'utf8'),
        'output file')
      t.end()
    }).stdin.end(tapdata)
  })
  t.test('file and stdin together', t => {
    run(['-', ok, `-o${dir}/output.tap`], (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.matchSnapshot(fs.readFileSync(`${dir}/output.tap`, 'utf8'),
        'output file')
      t.end()
    }).stdin.end(tapdata)
  })
  t.end()
})

t.test('output-file', t => {
  const d = `${dir}/output/${path.basename(dir)}`
  const ok = tmpfile(t, 'ok.js', `require(${tap}).pass('this is fine')`)
  t.test('ok.js', t => {
    run([ok, `--output-dir=${dir}/output`], (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.matchSnapshot(fs.readFileSync(`${d}/ok.js.tap`, 'utf8'),
        'output file')
      t.end()
    })
  })
  t.test('stdin', t => {
    run(['-', `-d${dir}/output`], (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.matchSnapshot(fs.readFileSync(`${dir}/output/stdin.tap`, 'utf8'),
        'output file')
      t.end()
    }).stdin.end(tapdata)
  })
  t.test('file and stdin together', t => {
    run(['-', ok, `-d${dir}/output`], (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(o, 'output')
      t.matchSnapshot(e, 'stderr')
      t.matchSnapshot(fs.readFileSync(`${d}/ok.js.tap`, 'utf8'),
        'ok.js output file')
      t.matchSnapshot(fs.readFileSync(`${dir}/output/stdin.tap`, 'utf8'),
        'stdin output file')
      t.end()
    }).stdin.end(tapdata)
  })
  t.end()
})
