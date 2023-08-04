import t from 'tap'
// used to raise errors with deps in them
import { createPatch } from 'diff'
import { globSync } from 'glob'
import { dirname } from 'path'
import {
  addIgnoredPackage,
  at,
  CallSiteLike,
  CallSiteLikeJSON,
  capture,
  captureError,
  captureErrorString,
  captureString,
  getCwd,
  getFilterIgnoredPackages,
  getFilterNodeInternals,
  getIgnoredPackages,
  getIgnoredPackagesRE,
  parseStack,
  removeIgnoredPackage,
  setCwd,
  setFilterIgnoredPackages,
  setFilterNodeInternals,
} from '../dist/cjs/index.js'

t.test('capture tests', t => {
  const foo = () => bar()
  const bar = () => baz()
  const baz = () => {
    const er = new Error('trace')
    return {
      at: at(),
      atBar: at(bar),
      captureString: captureString(),
      captureStringBar: captureString(bar),
      captureString4: captureString(4),
      captureString4Bar: captureString(4, bar),
      captureErrorString: captureErrorString(er),
      capture: capture(),
      captureBar: capture(bar),
      capture4: capture(4),
      capture4Bar: capture(4, bar),
      captureError: captureError(er),
    }
  }
  const res = foo()

  t.test('at() methods', t => {
    t.type(res.at, CallSiteLike)
    t.match(res.at, {
      fileName: 'test/index.ts',
      lineNumber: Number,
      columnNumber: Number,
      functionName: 'baz',
      isEval: false,
      isNative: false,
      isToplevel: true,
      isConstructor: false,
      generated: {
        fileName: __filename,
        lineNumber: Number,
        columnNumber: Number,
      },
    })
    t.equal(
      res.at?.toJSON().generated?.fileName,
      undefined,
      'generated fileName omitted, matches source'
    )

    t.type(res.atBar, CallSiteLike)
    t.match(res.atBar, {
      fileName: 'test/index.ts',
      lineNumber: Number,
      columnNumber: Number,
      functionName: 'foo',
      isEval: false,
      isNative: false,
      isToplevel: true,
      isConstructor: false,
      generated: {
        fileName: __filename,
        lineNumber: Number,
        columnNumber: Number,
      },
    })
    t.not(
      res.atBar?.lineNumber,
      res.at?.lineNumber,
      'at() and at(bar) return different lines'
    )
    t.equal(
      res.atBar?.toJSON().generated?.fileName,
      undefined,
      'generated fileName omitted, matches source'
    )
    t.end()
  })

  t.test('string captures', t => {
    t.match(
      res.captureString,
      /^baz \(test\/index\.ts:\d+:\d+\)\nbar \(test\/index\.ts:\d+:\d+\)\nfoo \(test\/index\.ts:\d+:\d+\)\nTest\.<anonymous> \(test\/index\.ts:\d+:\d+\)\n.+/
    )
    t.match(
      res.captureString4,
      /^baz \(test\/index\.ts:\d+:\d+\)\nbar \(test\/index\.ts:\d+:\d+\)\nfoo \(test\/index\.ts:\d+:\d+\)\nTest\.<anonymous> \(test\/index\.ts:\d+:\d+\)\n$/
    )

    t.match(
      res.captureStringBar,
      /^foo \(test\/index\.ts:\d+:\d+\)\nTest.<anonymous> \(test\/index\.ts:\d+:\d+\)\n.*/
    )
    t.match(
      res.captureString4Bar,
      /^foo \(test\/index\.ts:\d+:\d+\)\nTest.<anonymous> \(test\/index\.ts:\d+:\d+\)\n.*/
    )
    t.equal(
      res.captureString4Bar.trim().split('\n').length,
      4,
      'got 4 lines'
    )
    t.match(
      res.captureString,
      'core/dist',
      'includes generated filenames'
    )

    t.match(
      res.captureErrorString,
      /^baz \(test\/index\.ts:\d+:\d+\)\nbar \(test\/index\.ts:\d+:\d+\)\nfoo \(test\/index\.ts:\d+:\d+\)\nTest\.<anonymous> \(test\/index\.ts:\d+:\d+\)\n.+/
    )
    t.notMatch(
      res.captureErrorString,
      'core/dist',
      'no generated filenames in Error stack'
    )
    t.end()
  })

  const stripLineCol = (c?: CallSiteLike | CallSiteLikeJSON) => {
    if (!c) return c
    const { lineNumber, columnNumber, generated, ...rest } = c
    return Object.assign(
      rest,
      generated?.fileName
        ? { generated: { fileName: generated.fileName } }
        : {}
    )
  }

  t.test('object captures', t => {
    t.strictSame(
      stripLineCol(res.capture[0]),
      stripLineCol(res.at),
      'top capture() is same as at()'
    )
    t.equal(res.capture4.length, 4)
    for (let i = 0; i < res.capture4.length; i++) {
      t.strictSame(
        stripLineCol(res.capture4[i]),
        stripLineCol(res.capture[i]),
        'capture(4) is same as top 4 of capture()'
      )
    }

    t.strictSame(
      stripLineCol(res.captureBar[0]),
      stripLineCol(res.atBar),
      'top capture(bar) is same as at(bar)'
    )
    t.equal(res.capture4Bar.length, 4)
    for (let i = 0; i < res.capture4Bar.length; i++) {
      t.strictSame(
        stripLineCol(res.capture4Bar[i]),
        stripLineCol(res.captureBar[i]),
        'capture(4, bar) is same as top 4 of capture(bar)'
      )
    }

    t.end()
  })

  t.end()
})

t.test('filter node internals', async t => {
  const foo = () => bar()
  const bar = async () =>
    new Promise<{
      captureString: ReturnType<typeof captureString>
      captureString1: ReturnType<typeof captureString>
      captureErrorString: ReturnType<typeof captureErrorString>
      capture: ReturnType<typeof capture>
      capture1: ReturnType<typeof capture>
      captureError: ReturnType<typeof captureError>
    }>(res =>
      setTimeout(async function timeout() {
        return res(baz())
      })
    )
  const baz = async () => {
    const er = new Error('trace')
    return {
      captureString: captureString(),
      captureString1: captureString(1),
      captureErrorString: captureErrorString(er),
      capture: capture(),
      capture1: capture(1),
      captureError: captureError(er),
    }
  }

  t.equal(getFilterNodeInternals(), true, 'default filtered')

  const filtered = await foo()
  setFilterNodeInternals(false)
  const unfiltered = await foo()
  setFilterNodeInternals(true)
  t.test('filtered results', t => {
    t.match(
      filtered.captureString,
      /baz \(test\/index\.ts:\d+:\d+\)\n.*\(test\/index\.ts:\d+:\d+\)\n$/
    )
    t.match(
      filtered.captureErrorString,
      /baz \(test\/index\.ts:\d+:\d+\)\n.*\(test\/index\.ts:\d+:\d+\)\n$/
    )
    t.match(
      filtered.captureString1,
      /baz \(test\/index\.ts:\d+:\d+\)\n$/
    )
    t.notMatch(filtered.captureString, 'node:internal')
    t.notMatch(filtered.captureErrorString, 'node:internal')
    t.equal(filtered.capture.length, 2)
    t.equal(filtered.captureError.length, 2)
    t.equal(filtered.capture1.length, 1)
    t.end()
  })

  t.test('unfiltered results', t => {
    t.match(
      unfiltered.captureString,
      /baz \(test\/index\.ts:\d+:\d+\)\n.*\(test\/index\.ts:\d+:\d+\)\n.*node:internal/
    )
    t.match(
      unfiltered.captureErrorString,
      /baz \(test\/index\.ts:\d+:\d+\)\n.*\(test\/index\.ts:\d+:\d+\)\n.*node:internal/
    )
    t.match(
      unfiltered.captureString1,
      /baz \(test\/index\.ts:\d+:\d+\)\n$/
    )
    t.match(unfiltered.captureString, 'node:internal')
    t.match(unfiltered.captureErrorString, 'node:internal')
    t.ok(unfiltered.capture.length > 2)
    t.ok(unfiltered.captureError.length > 2)
    t.equal(unfiltered.capture1.length, 1)
    t.end()
  })
})

t.test('filterDeps', t => {
  // this function raises an error with both glob and diff in the stack
  const getStack = (): string => {
    try {
      globSync('*/README.md', {
        //@ts-expect-error
        ignore: {
          ignored: () => false,
          //@ts-expect-error
          childrenIgnored: () => createPatch({ not: 'a string' }),
        },
      })
      return 'wtf?'
    } catch (e) {
      return ((e as Error).stack as string)
        .split('\n')
        .slice(1)
        .join('\n')
    }
  }

  t.equal(getFilterIgnoredPackages(), true, 'filter by default')
  const defaultIgnored = [
    '@tapjs',
    'ts-node',
    'pirates',
    'function-loop',
    '@cspotcode/source-map-support',
    'signal-exit',
    'async-hook-domain',
  ]
  t.strictSame(getIgnoredPackages(), defaultIgnored)
  const stack = getStack()
  const unfiltered = parseStack(stack)
    .map(c => String(c) + '\n')
    .join('')
  addIgnoredPackage('glob')
  t.strictSame(getIgnoredPackages(), [...defaultIgnored, 'glob'])
  const noGlob = parseStack(stack)
    .map(c => String(c) + '\n')
    .join('')
  addIgnoredPackage('diff')
  t.strictSame(getIgnoredPackages(), [
    ...defaultIgnored,
    'glob',
    'diff',
  ])

  setFilterIgnoredPackages(false)
  t.equal(getFilterIgnoredPackages(), false, 'filter off')
  const unfiltered2 = parseStack(stack)
    .map(c => String(c) + '\n')
    .join('')
  t.equal(
    unfiltered2,
    unfiltered,
    'unfiltered when filter turned off'
  )
  setFilterIgnoredPackages(true)
  t.equal(getFilterIgnoredPackages(), true, 'filter on again')

  const noGlobDiff = parseStack(stack)
    .map(c => String(c) + '\n')
    .join('')
  removeIgnoredPackage('glob')
  t.strictSame(getIgnoredPackages(), [...defaultIgnored, 'diff'])
  const noDiff = parseStack(stack)
    .map(c => String(c) + '\n')
    .join('')
  // put it back as it was
  removeIgnoredPackage('diff')
  t.strictSame(getIgnoredPackages(), defaultIgnored)

  t.match(unfiltered, /node_modules.glob/)
  t.match(unfiltered, /node_modules.diff/)
  t.notMatch(noGlob, /node_modules.glob/)
  t.match(noGlob, /node_modules.diff/)
  t.match(noDiff, /node_modules.glob/)
  t.notMatch(noDiff, /node_modules.diff/)
  t.notMatch(noGlobDiff, /node_modules.glob/)
  t.notMatch(noGlobDiff, /node_modules.diff/)

  t.end()
})

t.test('cwd', t => {
  const d = dirname(__dirname)
  setCwd(d)
  t.equal(getCwd(), d)
  const a = at()
  t.match(a?.fileName, /^test.index.ts$/)
  setCwd(__dirname)
  t.equal(getCwd(), __dirname)
  const b = at()
  t.match(b?.fileName, /^index.ts$/)
  t.end()
})

t.test('parseStack with Error object noise', t => {
  const stack = String(new Error('trace').stack)
  const headless = stack.split('\n').slice(1).join('\n')
  t.match(parseStack(stack), parseStack(headless), 'head is removed')
  t.end()
})

t.test('ignoring @tapjs ignores the built test as well', t => {
  // gutcheck that we start with @tapjs ignored
  t.equal(
    getIgnoredPackages().includes('@tapjs'),
    true,
    'includes @tapjs to start'
  )
  // make sure that isn't there also
  removeIgnoredPackage('@tapjs/test')
  const ignored = getIgnoredPackagesRE()
  t.match(
    ignored?.toString(),
    /\btest-built\b/,
    'ignoring the built test module'
  )
  removeIgnoredPackage('@tapjs')
  removeIgnoredPackage('@tapjs/test')
  t.notMatch(
    getIgnoredPackagesRE()?.toString(),
    /\btest-built\b/,
    'not ignored if tapjs not ignored'
  )
  addIgnoredPackage('@tapjs/test')
  t.match(
    ignored?.toString(),
    /\btest-built\b/,
    'ignoring the built test module if @tapjs/test is present'
  )
  removeIgnoredPackage('@tapjs/test')
  addIgnoredPackage('@tapjs/core')
  t.notMatch(
    getIgnoredPackagesRE()?.toString(),
    /\btest-built\b/,
    'not ignored if other @tapjs modules are ignored, only @tapjs and @tapjs/test'
  )
  // leave it how we found it
  removeIgnoredPackage('@tapjs/core')
  addIgnoredPackage('@tapjs')
  t.end()
})
