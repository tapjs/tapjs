import {
  at,
  CallSiteLike,
  CallSiteLikeJSON,
  captureString,
} from '@tapjs/stack'
import t from 'tap'
import { cleanYamlObject } from '../dist/esm/clean-yaml-object.js'

t.cleanSnapshot = s =>
  s
    .replace(/lineNumber: [0-9]+/g, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/g, 'columnNumber: ##')
    .replace(/"lineNumber": [0-9]+/g, '"lineNumber": ##')
    .replace(/"columnNumber": [0-9]+/g, '"columnNumber": ##')

t.matchSnapshot(cleanYamlObject({}), 'empty object')

t.strictSame(
  cleanYamlObject({
    at: [],
    context: {},
    runOnly: null,
  }),
  {},
  'deleteIfEmpty fields',
)

t.matchOnly(
  cleanYamlObject({
    cause: new Error('result', {
      cause: new Error('cause', { cause: 'ok' }),
    }),
  }),
  {
    cause: {
      message: 'result',
      stack: String,
      at: {
        fileName: 'test/clean-yaml-object.ts',
        lineNumber: 31,
        columnNumber: 12,
        functionName: '<anonymous>',
      },
      source: String,
      cause: {
        message: 'cause',
        stack: String,
        at: Object,
        source: String,
        cause: 'ok',
      },
    },
  },
)

t.matchOnly(
  cleanYamlObject({
    cause: new AggregateError(
      [
        'string',
        { obj: 'that', is: 'not', an: 'Error' },
        { message: 'hello' },
        new Error('actual error'),
        new SyntaxError('syns of the past'),
      ],
      'aggro',
      {
        cause: new Error('cause', { cause: 'ok' }),
      },
    ),
  }),
  {
    cause: {
      message: 'aggro',
      stack: String,
      type: 'AggregateError',
      at: {
        fileName: 'test/clean-yaml-object.ts',
        lineNumber: Number,
        columnNumber: Number,
        functionName: '<anonymous>',
      },
      source: String,
      cause: {
        message: 'cause',
        stack: String,
        at: Object,
        source: String,
        cause: 'ok',
      },
      errors: [
        'string',
        { obj: 'that', is: 'not', an: 'Error' },
        { message: 'hello' },
        {
          stack: String,
          at: {
            fileName: 'test/clean-yaml-object.ts',
            lineNumber: Number,
            columnNumber: Number,
            functionName: '<anonymous>',
          },
          source: String,
          message: 'actual error',
        },
        {
          stack: String,
          at: {
            fileName: String,
            lineNumber: Number,
            columnNumber: Number,
            functionName: '<anonymous>',
          },
          type: 'SyntaxError',
          source: String,
          message: 'syns of the past',
        },
      ],
    },
  },
)

t.test('callsite reporting', t => {
  const stack = captureString()
  const b = cleanYamlObject({
    stack: stack.trimEnd().split('\n'),
  })
  t.matchOnly(
    b,
    {
      stack: b.stack,
      at: {
        columnNumber: Number,
        fileName: 'test/clean-yaml-object.ts',
        lineNumber: Number,
        methodName: '<anonymous>',
        typeName: 'Test',
        functionName: 'Test.<anonymous>',
      },
      source: String,
    },
    'handle array stacks that tap used to use long ago',
  )
  const c = cleanYamlObject({
    stack,
  })
  t.matchOnly(c, {
    stack: String,
    at: {
      columnNumber: Number,
      fileName: 'test/clean-yaml-object.ts',
      lineNumber: Number,
      methodName: '<anonymous>',
      typeName: 'Test',
      functionName: 'Test.<anonymous>',
    },
    source: String,
  })
  t.matchSnapshot(c.source)
  const a = at()
  const d = cleanYamlObject({ at: a })
  t.matchOnly(d, {
    source: String,
    at: a?.toJSON(),
  })
  t.matchSnapshot(d.source)
  t.matchSnapshot(
    cleanYamlObject({
      at: new CallSiteLike(
        null,
        '    at Fake.foo() (this file does not exist:420:69)',
      ),
    }),
    'invalid callsite is fine',
  )
  const nc: CallSiteLike | CallSiteLikeJSON = at() || {}
  nc.columnNumber = Infinity
  t.matchSnapshot(
    cleanYamlObject({
      no: 'caret',
      at: nc,
    }),
    'no caret',
  )
  t.end()
})

t.test('callsite reporting with error origin', t => {
  const originStack = captureString()
  // just a line here so it's clearly not the same
  const stack = captureString()
  const b = cleanYamlObject({
    stack: stack.trimEnd().split('\n'),
    errorOrigin: {
      stack: originStack.trimEnd().split('\n'),
    },
  })
  t.matchOnly(
    b,
    {
      stack: b.stack,
      at: {
        columnNumber: Number,
        fileName: 'test/clean-yaml-object.ts',
        lineNumber: Number,
        methodName: '<anonymous>',
        typeName: 'Test',
        functionName: 'Test.<anonymous>',
      },
      source: String,
      errorOrigin: {
        stack: b.errorOrigin.stack,
        at: {
          columnNumber: Number,
          fileName: 'test/clean-yaml-object.ts',
          lineNumber: Number,
          methodName: '<anonymous>',
          typeName: 'Test',
          functionName: 'Test.<anonymous>',
        },
        source: String,
      },
    },
    'handle array stacks that tap used to use long ago',
  )

  const c = cleanYamlObject({
    stack,
    errorOrigin: { stack: originStack },
  })
  t.matchOnly(c, {
    stack: String,
    at: {
      columnNumber: Number,
      fileName: 'test/clean-yaml-object.ts',
      lineNumber: Number,
      methodName: '<anonymous>',
      typeName: 'Test',
      functionName: 'Test.<anonymous>',
    },
    source: String,
    errorOrigin: {
      stack: String,
      at: {
        columnNumber: Number,
        fileName: 'test/clean-yaml-object.ts',
        lineNumber: Number,
        methodName: '<anonymous>',
        typeName: 'Test',
        functionName: 'Test.<anonymous>',
      },
      source: String,
    },
  })
  t.matchSnapshot(c.source)
  t.matchSnapshot(c.errorOrigin.source)
  const a = at()
  // just a line so they're clearly different
  const oat = at()
  const d = cleanYamlObject({ at: a, errorOrigin: { at: oat } })
  t.matchOnly(d, {
    source: String,
    at: a?.toJSON(),
    errorOrigin: {
      source: String,
      at: oat?.toJSON(),
    },
  })
  t.matchSnapshot(d.source)
  t.matchSnapshot(d.errorOrigin.source)
  t.matchSnapshot(
    cleanYamlObject({
      at: new CallSiteLike(
        null,
        '    at Fake.foo() (this file does not exist:420:69)',
      ),
      errorOrigin: new CallSiteLike(
        null,
        '    at Fake.errorOrigin() (other not exist file:420:69)',
      ),
    }),
    'invalid callsite is fine',
  )
  const nc: CallSiteLike | CallSiteLikeJSON = at() || {}
  nc.columnNumber = Infinity
  const onc: CallSiteLike | CallSiteLikeJSON = at() || {}
  onc.columnNumber = Infinity
  t.matchSnapshot(
    cleanYamlObject({
      no: 'caret',
      at: nc,
      errorOrigin: { at: onc },
    }),
    'no caret',
  )
  t.end()
})

t.test('diffs', t => {
  t.matchSnapshot(
    cleanYamlObject({
      found: 'hello\nworld',
      wanted: 'helper\nworld',
    }),
    'string comparison',
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: 'hello\nworld',
      wanted: 123,
    }),
    'string/number comparison',
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: 123,
      wanted: 'hello\nworld',
    }),
    'string/number comparison',
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: '123',
      wanted: 123,
    }),
    'matching string/number comparison',
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: 123,
      wanted: '123',
    }),
    'matching string/number comparison',
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: { a: 1 },
      wanted: { b: 2 },
    }),
    'differently shaped objects',
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: { a: 1 },
      wanted: { a: 1 },
    }),
    'matching unique objects',
  )
  const a = { a: 1 }
  t.matchSnapshot(
    cleanYamlObject({
      found: a,
      wanted: a,
    }),
    'identical objects',
  )
  t.end()
})

t.test('pruning keys', t => {
  t.strictSame(
    cleanYamlObject({
      todo: true,
      skip: 'some skip message',
      childId: 123,
      cb: 'anything',
      name: 'name',
      indent: 99,
      bail: true,
      parent: { name: 'parent' },
      buffered: { banana: 'stand' },
      grep: '/apple/',
      grepInvert: true,
      only: true,
      saveFixture: true,
      env: process.env,
      at: {},
      stack: '',
      context: null,
      runOnly: false,
      compareOptions: {},
      _tapChildBlah: 'blerg',
      tapChildKey: '123',
      tapMochaTest: t,
    }),
    {},
  )

  t.end()
})

t.test('elide inline t.worker code', t => {
  t.strictSame(
    cleanYamlObject({
      eval: true,
      filename: 'some\ninline\ncode',
    }),
    { eval: true, filename: '<inline code>' },
  )
  t.end()
})

t.test('do not delete non-string message', t => {
  t.strictSame(cleanYamlObject({ message: true }), { message: true })
  t.strictSame(cleanYamlObject({ message: 'x' }), {})
  t.end()
})

t.test('normalize stack line ending', t => {
  const st = new Error('test')
    .stack!.split('\n')
    .slice(1)
    .join('\n')
    .trimEnd()
  t.equal(
    cleanYamlObject({ at: null, stack: st }).stack.endsWith('\n'),
    true,
  )
  t.end()
})
