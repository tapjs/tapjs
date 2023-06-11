import { resolve } from 'path'
import t from 'tap'
import { CallSiteLike } from '../dist/cjs/index.js'
const cwd = resolve(__dirname, '..')

t.options.compareOptions = { style: 'js' }

import { at, error, stack } from './fixtures/capture.js'

t.test('create from string error stack line', t => {
  const line = error.stack.split('\n')[1]
  const c = new CallSiteLike(error, line)
  t.match(c.fileName, /.+test\/fixtures\/capture\.ts$/)
  c.cwd = cwd
  t.equal(c.fileName, 'test/fixtures/capture.ts')
  t.equal(c.generated, undefined)
  t.matchOnly(c.toJSON(), {
    fileName: 'test/fixtures/capture.ts',
    lineNumber: Number,
    columnNumber: Number,
    functionName: 'getError',
  })
  t.end()
})

t.test('create from node call site', t => {
  const cs = stack[0]
  const c = new CallSiteLike(null, cs)
  t.match(c.fileName, /.+test\/fixtures\/capture\.ts$/)
  t.match(c.generated?.fileName, /.+test\/fixtures\/capture\.js$/)
  const s = String(c)
  t.match(
    s,
    /^getStack \(.+test\/fixtures\/capture\.js:\d+:\d+\) \(.+test\/fixtures\/capture\.ts:\d+:\d+\)$/
  )
  t.matchOnly(c.toJSON(), {
    fileName: /.+\/test\/fixtures\/capture\.ts$/,
    lineNumber: Number,
    columnNumber: Number,
    functionName: 'getStack',
    isToplevel: true,
    generated: {
      fileName: /.+\/test\/fixtures\/capture\.js$/,
      lineNumber: Number,
      columnNumber: Number,
    },
  })
  t.end()
})

t.test('from at() method', t => {
  const c = at
  if (!c) throw new Error('no callsite found')
  // cwd set by default by at() method
  t.equal(c.fileName, 'test/fixtures/capture.ts')
  // generated is always full path, rarely used anyway
  t.match(c.generated?.fileName, /.+test\/fixtures\/capture\.js$/)
  const s = String(c)
  t.match(
    s,
    /^getAt \(test\/fixtures\/capture\.js:\d+:\d+\) \(test\/fixtures\/capture\.ts:\d+:\d+\)$/
  )
  t.matchOnly(c.toJSON(), {
    fileName: 'test/fixtures/capture.ts',
    lineNumber: Number,
    columnNumber: Number,
    functionName: 'getAt',
    isToplevel: true,
    generated: {
      fileName: 'test/fixtures/capture.js',
      lineNumber: Number,
      columnNumber: Number,
    },
  })
  t.end()
})

t.test('create from native line', t => {
  const line = '    at Array.map (native)'
  const c = new CallSiteLike(null, line)
  t.equal(c.fileName, null)
  t.equal(c.generated, undefined)
  t.equal(String(c), 'Array.map (native)')
  t.matchOnly(c.toJSON(), {
    isNative: true,
    typeName: 'Array',
    functionName: 'Array.map',
  })
  t.end()
})

t.test('line with non-lineref paren section', t => {
  const line = '    at Cls.[foo (paren) weird] (file.ts:1:3)'
  const c = new CallSiteLike(null, line)
  t.equal(c.fileName, null)
  t.equal(c.generated, undefined)
  t.equal(String(c), 'Cls.[foo (paren) weird]')
  t.matchOnly(c.toJSON(), {
    typeName: 'Cls',
    functionName: 'Cls.[foo (paren) weird]',
    fileName: 'file.ts',
    lineNumber: 1,
    columnNumber: 3,
  })
  t.end()

})
