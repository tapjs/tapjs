import { dirname, resolve } from 'path'
import t from 'tap'
import { CallSiteLike as CSLCJS } from '../dist/commonjs/index.js'
import { CallSiteLike as CSLMJS } from '../dist/esm/index.js'
import { callSiteStack } from './fixtures/eval-call-site.js'

const __dirname = resolve(
  fileURLToPath(new URL('.', import.meta.url))
)
const cwd = resolve(__dirname, '..')

t.options.compareOptions = { style: 'js' }

import { fileURLToPath, pathToFileURL } from 'url'
import { at, capture, error, stack } from './fixtures/capture.js'

t.plan(3)

t.test('relativize no-ops if path methods throw', async t => {
  const nope = () => {
    throw new Error('nope')
  }
  const overrides = { resolve: nope, relative: nope }
  const PATH = await import('node:path')
  const { CallSiteLike } = await t.mockImport<
    typeof import('../dist/esm/call-site-like.js')
  >('../dist/esm/call-site-like.js', {
    path: {
      ...PATH,
      ...overrides,
      posix: { ...PATH.posix, ...overrides },
      win32: { ...PATH.win32, ...overrides },
    },
  })
  const c = new CallSiteLike(
    null,
    '/some/path/to/file.js:1:2 (/src/x.js:33:44)'
  )
  t.equal(c.generated?.fileName, '/some/path/to/file.js')
  c.cwd = '/some/path'
  t.equal(c.generated?.fileName, '/some/path/to/file.js')
  c.cwd = undefined
  t.equal(c.generated?.fileName, '/some/path/to/file.js')
})

for (const [dialect, CallSiteLike] of Object.entries({
  mjs: CSLMJS,
  cjs: CSLCJS,
})) {
  t.test(dialect, t => {
    t.test('create with invalid content throws', t => {
      //@ts-expect-error
      t.throws(() => new CallSiteLike(null, {}))
      //@ts-expect-error
      t.throws(() => new CSLCJS(null, {}))
      t.end()
    })

    t.test('turn into js style stack trace line', t => {
      const c = capture[0]
      if (!c) throw new Error('did not get capture')
      c.cwd = undefined
      const ts = c.toString(true)
      t.match(ts, /.+test.fixtures.capture.js/)

      if (typeof c.generated?.fileName !== 'string') {
        throw new Error('did not get generated sourcemap bits')
      }
      c.generated.fileName = String(
        pathToFileURL(c.generated.fileName as string)
      )
      t.equal(
        c.toString(true),
        ts,
        'same toString(true) when file url'
      )
      t.end()
    })

    t.test('no relativize/derelativize builtin module paths', t => {
      const c = new CallSiteLike(null, 'node:fs:1:3')
      t.equal(c.fileName, 'node:fs')
      // not sure how this would ever happen, but it works
      c.generated = { fileName: 'node:url' }
      c.cwd = '/x'
      t.equal(c.fileName, 'node:fs')
      t.equal(c.generated.fileName, 'node:url')
      c.cwd = undefined
      t.equal(c.fileName, 'node:fs')
      t.equal(c.generated.fileName, 'node:url')
      t.end()
    })

    t.test('no relativize/derelativize fileName-less paths', t => {
      const c = new CallSiteLike(null, 'Foo.bar (native)')
      t.equal(c.fileName, null)
      c.generated = { fileName: null }
      c.cwd = '/x'
      t.equal(c.fileName, null)
      t.equal(c.generated.fileName, null)
      c.cwd = undefined
      t.equal(c.fileName, null)
      t.equal(c.generated.fileName, null)
      t.end()
    })

    t.test('turn tap stack into js stack, absolute path', t => {
      const c = new CallSiteLike(
        null,
        '/a/b/c:1:2 (/a/b/c.ts:420:69)'
      )
      t.equal(c.fileName, '/a/b/c.ts')
      t.equal(c.generated?.fileName, '/a/b/c')
      const j = c.toString(true)
      t.matchSnapshot(j)
      c.cwd = '/x/y/z'
      t.equal(c.fileName, '/a/b/c.ts')
      t.equal(c.generated?.fileName, '/a/b/c')
      t.equal(c.toString(true), j)
      c.cwd = undefined
      t.equal(c.fileName, '/a/b/c.ts')
      t.equal(c.generated?.fileName, '/a/b/c')
      t.equal(c.toString(true), j)
      t.end()
    })

    t.test(
      'turn pretty stack into tap stack, relative external path',
      t => {
        const c = new CallSiteLike(
          null,
          '/a/b/c:1:2 (/a/b/d/c.ts:420:69)'
        )
        t.equal(c.fileName, '/a/b/d/c.ts')
        t.equal(c.generated?.fileName, '/a/b/c')
        const j = c.toString(true)
        t.matchSnapshot(j)
        c.cwd = '/a/b/d'
        t.equal(c.fileName, 'c.ts')
        t.equal(c.generated?.fileName, '../c')
        t.equal(c.toString(true), '    at /a/b/d/c.ts:420:69')
        c.cwd = undefined
        t.equal(c.fileName, '/a/b/d/c.ts')
        t.equal(c.generated?.fileName, '/a/b/c')
        t.equal(c.toString(true), j)
        t.end()
      }
    )

    t.test('create from string error stack line', t => {
      const line = String(error.stack.split('\n')[1])
      const c = new CallSiteLike(error, line)
      t.match(c.fileName, /.+test\/fixtures\/capture\.ts$/)
      t.match(
        c.toString(true),
        /.+test\/fixtures\/capture\.ts:[0-9]+:[0-9]+\)$/
      )
      c.cwd = cwd
      t.equal(c.cwd, cwd)
      t.equal(c.fileName, 'test/fixtures/capture.ts')
      t.equal(
        c.absoluteFileName,
        resolve(cwd, 'test/fixtures/capture.ts')
      )
      t.equal(c.generated, undefined)
      t.matchOnly(c.toJSON(), {
        fileName: 'test/fixtures/capture.ts',
        lineNumber: Number,
        columnNumber: Number,
        functionName: 'getError',
      })
      t.matchSnapshot({
        toString: c.toString(),
        jsStyle: c.toString(true),
      })
      t.end()
    })

    t.test('file url becomes regular path', t => {
      const line = 'file:///path/to/x.js:1:3'
      const c = new CallSiteLike(null, line)
      c.cwd = '/path/to'
      t.equal(c.absoluteFileName, '/path/to/x.js')
      t.equal(c.fileName, 'x.js')
      t.end()
    })

    t.test('create from node call site', t => {
      const cs = stack[0] as NodeJS.CallSite
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
      t.match(c.generated?.fileName, c.fileName?.replace(/ts$/, 'js'))
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
        methodName: 'map',
      })
      t.end()
    })

    t.test('just a lineref', t => {
      const line = 'some/file.js:1:2'
      const c = new CallSiteLike(null, line)
      t.matchOnly(c.toJSON(), {
        fileName: 'some/file.js',
        lineNumber: 1,
        columnNumber: 2,
      })
      t.equal(String(c), line)
      t.end()
    })

    t.test('lineref with generated callsite', t => {
      const line = 'dist/file.js:100:200 (src/file.ts:50:60)'
      const c = new CallSiteLike(null, line)
      t.matchOnly(c.toJSON(), {
        fileName: 'src/file.ts',
        lineNumber: 50,
        columnNumber: 60,
        generated: {
          fileName: 'dist/file.js',
          lineNumber: 100,
          columnNumber: 200,
        },
      })
      t.equal(String(c), line)
      t.end()
    })

    t.test('function name', t => {
      const line = 'blorp (src/file.ts:50:60)'
      const c = new CallSiteLike(null, line)
      t.matchOnly(c.toJSON(), {
        functionName: 'blorp',
        fileName: 'src/file.ts',
        lineNumber: 50,
        columnNumber: 60,
      })
      t.equal(String(c), line)
      t.end()
    })

    t.test('function name with generated ref', t => {
      const line = 'blorp (dist/file.js:100:200) (src/file.ts:50:60)'
      const c = new CallSiteLike(null, line)
      t.matchOnly(c.toJSON(), {
        functionName: 'blorp',
        fileName: 'src/file.ts',
        lineNumber: 50,
        columnNumber: 60,
        generated: {
          fileName: 'dist/file.js',
          lineNumber: 100,
          columnNumber: 200,
        },
      })
      t.equal(String(c), line)
      t.end()
    })

    t.test('function name with dots', t => {
      const line =
        'SomeObject.blorp (dist/file.js:100:200) (src/file.ts:50:60)'
      const c = new CallSiteLike(null, line)
      t.matchOnly(c.toJSON(), {
        functionName: 'SomeObject.blorp',
        typeName: 'SomeObject',
        methodName: 'blorp',
        fileName: 'src/file.ts',
        lineNumber: 50,
        columnNumber: 60,
        generated: {
          fileName: 'dist/file.js',
          lineNumber: 100,
          columnNumber: 200,
        },
      })
      t.equal(String(c), line)
      t.end()
    })

    t.test('line with non-lineref paren section', t => {
      const line = '    at Cls.[foo (paren) weird] (file.ts:1:3)'
      const c = new CallSiteLike(null, line)
      t.equal(c.fileName, 'file.ts')
      t.equal(c.generated, undefined)
      t.equal(String(c), 'Cls.[foo (paren) weird] (file.ts:1:3)')
      t.matchOnly(c.toJSON(), {
        typeName: 'Cls',
        functionName: 'Cls.[foo (paren) weird]',
        methodName: '[foo (paren) weird]',
        fileName: 'file.ts',
        lineNumber: 1,
        columnNumber: 3,
      })
      t.end()
    })

    t.test('complicated evalOrigin line', t => {
      const line =
        '[(funky:433:42)] (eval at Object.evalError (test/fixtures/eval-error.js:9:5) (test/fixtures/eval-error.ts:7:3), <anonymous>:99:22 (<anonymous>:2:9))'
      const c = new CallSiteLike(null, line)
      t.matchOnly(c.toJSON(), {
        fileName: '<anonymous>',
        lineNumber: 2,
        columnNumber: 9,
        evalOrigin: {
          fileName: 'test/fixtures/eval-error.ts',
          lineNumber: 7,
          columnNumber: 3,
          typeName: 'Object',
          methodName: 'evalError',
          functionName: 'Object.evalError',
          generated: {
            fileName: 'test/fixtures/eval-error.js',
            lineNumber: 9,
            columnNumber: 5,
          },
        },
        functionName: '[(funky:433:42)]',
        isEval: true,
        generated: {
          fileName: '<anonymous>',
          lineNumber: 99,
          columnNumber: 22,
        },
      })
      t.equal(String(c), line)
      t.end()
    })

    t.test('new Foo', t => {
      const line =
        '    at new Foo (__dirname/generate-parse-fixture.js:420:69)'
      const c = new CallSiteLike(null, line)
      t.matchOnly(c.toJSON(), {
        fileName: '__dirname/generate-parse-fixture.js',
        lineNumber: 420,
        columnNumber: 69,
        functionName: 'Foo',
        isConstructor: true,
      })
      t.equal(String(c), line.replace(/^ +at /, ''))
      t.end()
    })

    t.test('method with weird symbolic name', t => {
      const line =
        'Object.[some (weird) [<symbolism>]] [as foo] (__dirname/generate-parse-fixture.js:420:69)'
      const c = new CallSiteLike(null, line)
      t.matchOnly(c.toJSON(), {
        fileName: '__dirname/generate-parse-fixture.js',
        lineNumber: 420,
        columnNumber: 69,
        typeName: 'Object',
        methodName: 'foo',
        functionName: 'Object.[some (weird) [<symbolism>]]',
      })
      t.equal(String(c), line)
      t.end()
    })

    t.test('getter/setter stack', t => {
      const line =
        'Foo.get stringStack (test/fixtures/eval-call-site.ts:17:33)'
      const c = new CallSiteLike(null, line)
      t.matchOnly(c.toJSON(), {
        fileName: 'test/fixtures/eval-call-site.ts',
        lineNumber: 17,
        columnNumber: 33,
        methodName: 'stringStack',
        functionName: 'Foo.get stringStack',
        typeName: 'Foo',
      })
      t.equal(String(c), line)
      t.end()
    })

    t.test('call site with an eval origin', t => {
      const cs = callSiteStack()[0]
      const c = new CallSiteLike(null, cs)
      t.matchOnly(c.toJSON(), {
        lineNumber: Number,
        columnNumber: Number,
        evalOrigin: {
          fileName: String,
          lineNumber: Number,
          columnNumber: Number,
          functionName: '<anonymous>',
        },
        functionName: 'stack',
        isEval: true,
        isToplevel: true,
      })
      t.match(
        String(c),
        /stack \(eval at <anonymous> \([^:]+:\d+:\d+\), <anonymous>:\d+:\d+\)/
      )
      t.equal(c.cwd, c.evalOrigin?.cwd, 'eo has same cwd initially')
      c.cwd = dirname(__dirname)
      t.equal(c.cwd, c.evalOrigin?.cwd, 'eo has same cwd after set')
      t.equal(
        c.absoluteFileName,
        null,
        'no filename, no abs filename'
      )
      t.end()
    })

    t.test('relativizing path outside of cwd returns abs', t => {
      const p = resolve('/a/b/c')
      const c = new CallSiteLike(
        null,
        `    at Type.method (${p}:420:69)`
      )
      c.cwd = process.cwd()
      t.equal(c.fileName, p)
      t.equal(c.absoluteFileName, p)
      t.end()
    })

    t.test('use typeName as functionName if needed', t => {
      const p = resolve('/a/b/c')
      const c = new CallSiteLike(
        null,
        `    at Type.method (${p}:420:69)`
      )
      // missing functionName only happens when loading from an actual
      // CallSite object, so simulate it here for convenience
      c.functionName = null
      t.equal(c.toString(), `Type.method (${p}:420:69)`)
      t.end()
    })

    t.test('<anonymous> method name', t => {
      const p = resolve('/a/b/c')
      const c = new CallSiteLike(
        null,
        `    at Type.method (${p}:420:69)`
      )
      // missing functionName only happens when loading from an actual
      // CallSite object, so simulate it here for convenience
      c.functionName = null
      c.methodName = null
      t.equal(c.toString(), `Type.<anonymous> (${p}:420:69)`)
      t.end()
    })

    t.end()
  })
}
