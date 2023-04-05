/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/types/error.js TAP > first stringify 1`] = `
EvalError: !error
  name: EvalError
  message: evil
  stack: >-
    EvalError: evil
        {STACK}
RangeError: !error
  name: RangeError
  message: strider
  stack: >-
    RangeError: strider
        {STACK}
ReferenceError: !error
  name: ReferenceError
  message: appendix
  stack: >-
    ReferenceError: appendix
        {STACK}
SyntaxError: !error
  name: SyntaxError
  message: semantics
  stack: >-
    SyntaxError: semantics
        {STACK}
TypeError: !error
  name: TypeError
  message: qwerty
  stack: >-
    TypeError: qwerty
        {STACK}
URIError: !error
  name: URIError
  message: ur:i
  stack: >-
    URIError: ur:i
        {STACK}
Error: !error
  name: Error
  message: just your standard error type
  stack: >-
    Error: just your standard error type
        {STACK}
CustomError: !error
  name: TingTings
  message: no meta, please
  stack: >-
    TingTings: no meta, please
        {STACK}
  foo: bar
ErrorWithToJSON: !error
  name: jsan erawr lol
  message: to json me
  stack: >-
    jsan erawr lol: to json me
        {STACK}
  hello: from tojson
dom: !error
  name: Error
  message: alton brown
  stack: >-
    Error: alton brown
        {STACK}

`

exports[`test/types/error.js TAP > parsed stringified 1`] = `
Object {
  "CustomError": TingTings: no meta, please {
    "foo": "bar",
  },
  "dom": Error: alton brown,
  "Error": Error: just your standard error type,
  "ErrorWithToJSON": jsan erawr lol: to json me {
    "hello": "from tojson",
  },
  "EvalError": EvalError: evil,
  "RangeError": RangeError: strider,
  "ReferenceError": ReferenceError: appendix,
  "SyntaxError": SyntaxError: semantics,
  "TypeError": TypeError: qwerty,
  "URIError": URIError: ur:i,
}
`
