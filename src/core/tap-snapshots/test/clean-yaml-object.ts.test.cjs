/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/clean-yaml-object.ts > TAP > callsite reporting > invalid callsite is fine 1`] = `
Object {
  "at": Object {
    "columnNumber": ##,
    "fileName": "this file does not exist",
    "functionName": "Fake.foo()",
    "lineNumber": ##,
    "methodName": "foo()",
    "typeName": "Fake",
  },
}
`

exports[`test/clean-yaml-object.ts > TAP > callsite reporting > must match snapshot 1`] = `

t.test('callsite reporting', t => {
  const stack = captureString()
----------------^
  const b = cleanYamlObject({
    stack: stack.trimEnd().split('\\n'),

`

exports[`test/clean-yaml-object.ts > TAP > callsite reporting > must match snapshot 2`] = `
  })
  t.matchSnapshot(c.source)
  const a = at()
------------^
  const d = cleanYamlObject({ at: a })
  t.matchOnly(d, {

`

exports[`test/clean-yaml-object.ts > TAP > callsite reporting > no caret 1`] = `
Object {
  "at": Object {
    "columnNumber": null,
    "fileName": "test/clean-yaml-object.ts",
    "lineNumber": ##,
    "typeName": "Test",
  },
  "no": "caret",
  "source": String(
        'invalid callsite is fine',
      )
      const nc: CallSiteLike | CallSiteLikeJSON = at() || {}
      nc.columnNumber = Infinity
      t.matchSnapshot(
    
  ),
}
`

exports[`test/clean-yaml-object.ts > TAP > callsite reporting with error origin > invalid callsite is fine 1`] = `
Object {
  "at": Object {
    "columnNumber": ##,
    "fileName": "this file does not exist",
    "functionName": "Fake.foo()",
    "lineNumber": ##,
    "methodName": "foo()",
    "typeName": "Fake",
  },
  "errorOrigin": Object {
    "columnNumber": ##,
    "evalOrigin": undefined,
    "function": undefined,
    "functionName": "Fake.errorOrigin()",
    "generated": undefined,
    "isConstructor": false,
    "isEval": false,
    "isNative": false,
    "isToplevel": false,
    "lineNumber": ##,
    "methodName": "errorOrigin()",
    "this": undefined,
    "typeName": "Fake",
  },
}
`

exports[`test/clean-yaml-object.ts > TAP > callsite reporting with error origin > must match snapshot 1`] = `
  const originStack = captureString()
  // just a line here so it's clearly not the same
  const stack = captureString()
----------------^
  const b = cleanYamlObject({
    stack: stack.trimEnd().split('\\n'),

`

exports[`test/clean-yaml-object.ts > TAP > callsite reporting with error origin > must match snapshot 2`] = `

t.test('callsite reporting with error origin', t => {
  const originStack = captureString()
----------------------^
  // just a line here so it's clearly not the same
  const stack = captureString()

`

exports[`test/clean-yaml-object.ts > TAP > callsite reporting with error origin > must match snapshot 3`] = `
  t.matchSnapshot(c.source)
  t.matchSnapshot(c.errorOrigin.source)
  const a = at()
------------^
  // just a line so they're clearly different
  const oat = at()

`

exports[`test/clean-yaml-object.ts > TAP > callsite reporting with error origin > must match snapshot 4`] = `
  const a = at()
  // just a line so they're clearly different
  const oat = at()
--------------^
  const d = cleanYamlObject({ at: a, errorOrigin: { at: oat } })
  t.matchOnly(d, {

`

exports[`test/clean-yaml-object.ts > TAP > callsite reporting with error origin > no caret 1`] = `
Object {
  "at": Object {
    "columnNumber": null,
    "fileName": "test/clean-yaml-object.ts",
    "lineNumber": ##,
    "typeName": "Test",
  },
  "errorOrigin": Object {
    "at": Object {
      "columnNumber": null,
      "fileName": "test/clean-yaml-object.ts",
      "lineNumber": ##,
      "typeName": "Test",
    },
    "source": String(
        const nc: CallSiteLike | CallSiteLikeJSON = at() || {}
        nc.columnNumber = Infinity
        const onc: CallSiteLike | CallSiteLikeJSON = at() || {}
        onc.columnNumber = Infinity
        t.matchSnapshot(
      
    ),
  },
  "no": "caret",
  "source": String(
        'invalid callsite is fine',
      )
      const nc: CallSiteLike | CallSiteLikeJSON = at() || {}
      nc.columnNumber = Infinity
      const onc: CallSiteLike | CallSiteLikeJSON = at() || {}
    
  ),
}
`

exports[`test/clean-yaml-object.ts > TAP > diffs > differently shaped objects 1`] = `
Object {
  "diff": String(
    --- expected
    +++ actual
    @@ -1,3 +1,3 @@
     Object {
    -  "b": 2,
    +  "a": 1,
     }
    
  ),
}
`

exports[`test/clean-yaml-object.ts > TAP > diffs > identical objects 1`] = `
Object {
  "found": Object {
    "a": 1,
  },
  "wanted": Object {
    "a": 1,
  },
}
`

exports[`test/clean-yaml-object.ts > TAP > diffs > matching string/number comparison 1`] = `
Object {
  "found": "123",
  "wanted": 123,
}
`

exports[`test/clean-yaml-object.ts > TAP > diffs > matching string/number comparison 2`] = `
Object {
  "found": 123,
  "wanted": "123",
}
`

exports[`test/clean-yaml-object.ts > TAP > diffs > matching unique objects 1`] = `
Object {
  "found": Object {
    "a": 1,
  },
  "note": "object identities differ",
  "wanted": Object {
    "a": 1,
  },
}
`

exports[`test/clean-yaml-object.ts > TAP > diffs > string comparison 1`] = `
Object {
  "diff": String(
    --- expected
    +++ actual
    @@ -1,2 +1,2 @@
    -helper
    +hello
     world
    
  ),
}
`

exports[`test/clean-yaml-object.ts > TAP > diffs > string/number comparison 1`] = `
Object {
  "diff": String(
    --- expected
    +++ actual
    @@ -1,1 +1,2 @@
    -123
    +hello
    +world
    
  ),
}
`

exports[`test/clean-yaml-object.ts > TAP > diffs > string/number comparison 2`] = `
Object {
  "diff": String(
    --- expected
    +++ actual
    @@ -1,2 +1,1 @@
    -hello
    -world
    +123
    
  ),
}
`

exports[`test/clean-yaml-object.ts > TAP > empty object 1`] = `
Object {}
`
