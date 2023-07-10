import {
  at,
  CallSiteLike,
  CallSiteLikeJSON,
  captureString,
} from '@tapjs/stack'
import t from 'tap'
import { cleanYamlObject } from '../dist/cjs/clean-yaml-object.js'

t.cleanSnapshot = s =>
  s
    .replace(/lineNumber: [0-9]+/, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/, 'columnNumber: ##')
    .replace(/"lineNumber": [0-9]+/, '"lineNumber": ##')
    .replace(/"columnNumber": [0-9]+/, '"columnNumber": ##')

t.matchSnapshot(cleanYamlObject({}), 'empty object')

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
    'handle array stacks that tap used to use long ago'
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
        '    at Fake.foo() (this file does not exist:420:69)'
      ),
    }),
    'invalid callsite is fine'
  )
  const nc: CallSiteLike | CallSiteLikeJSON = at() || {}
  nc.columnNumber = Infinity
  t.matchSnapshot(
    cleanYamlObject({
      no: 'caret',
      at: nc,
    }),
    'no caret'
  )
  t.end()
})

t.test('diffs', t => {
  t.matchSnapshot(
    cleanYamlObject({
      found: 'hello\nworld',
      wanted: 'helper\nworld',
    }),
    'string comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: 'hello\nworld',
      wanted: 123,
    }),
    'string/number comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: 123,
      wanted: 'hello\nworld',
    }),
    'string/number comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: '123',
      wanted: 123,
    }),
    'matching string/number comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: 123,
      wanted: '123',
    }),
    'matching string/number comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: { a: 1 },
      wanted: { b: 2 },
    }),
    'differently shaped objects'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: { a: 1 },
      wanted: { a: 1 },
    }),
    'matching unique objects'
  )
  const a = { a: 1 }
  t.matchSnapshot(
    cleanYamlObject({
      found: a,
      wanted: a,
    }),
    'identical objects'
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
    {}
  )

  t.end()
})
