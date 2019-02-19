/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/error.js TAP > first stringify 1`] = `
&a1
EvalError:
  !error
  name: EvalError
  message: evil
  stack: >-
    EvalError: evil
        {STACK}
RangeError:
  !error
  name: RangeError
  message: strider
  stack: >-
    RangeError: strider
        {STACK}
ReferenceError:
  !error
  name: ReferenceError
  message: appendix
  stack: >-
    ReferenceError: appendix
        {STACK}
SyntaxError:
  !error
  name: SyntaxError
  message: semantics
  stack: >-
    SyntaxError: semantics
        {STACK}
TypeError:
  !error
  name: TypeError
  message: qwerty
  stack: >-
    TypeError: qwerty
        {STACK}
URIError:
  !error
  name: URIError
  message: ur:i
  stack: >-
    URIError: ur:i
        {STACK}
Error:
  !error
  name: Error
  message: just your standard error type
  stack: >-
    Error: just your standard error type
        {STACK}
assertion:
  !error
  name: AssertionError [ERR_ASSERTION]
  message: 1 == 2
  stack: >-
    AssertionError [ERR_ASSERTION]: 1 == 2
        {STACK}
  generatedMessage: true
  code: ERR_ASSERTION
  actual: 1
  expected: 2
  operator: ==
questionbegging:
  !error
  name: AssertionError [ERR_ASSERTION]
  message: >-
    {
      Error: Error: just your standard error type
          {STACK}
  stack: >-
    AssertionError [ERR_ASSERTION]: {
      Error: Error: just your standard error type
        {STACK}
  generatedMessage: true
  code: ERR_ASSERTION
  actual: *a1
  expected: 99
  operator: ==
dom:
  !error
  name: Error
  message: alton brown
  stack: >-
    Error: alton brown
        {STACK}

`

exports[`test/error.js TAP > parsed stringified 1`] = `
{ EvalError:
   { EvalError: evil
       {STACK}
  RangeError:
   { RangeError: strider
       {STACK}
  ReferenceError:
   { ReferenceError: appendix
       {STACK}
  SyntaxError:
   { SyntaxError: semantics
       {STACK}
  TypeError:
   { TypeError: qwerty
       {STACK}
  URIError:
   { URIError: ur:i
       {STACK}
  Error:
   { Error: just your standard error type
       {STACK}
  assertion:
   { AssertionError [ERR_ASSERTION]: 1 == 2
       {STACK}
     name: 'AssertionError [ERR_ASSERTION]',
     generatedMessage: true,
     code: 'ERR_ASSERTION',
     actual: 1,
     expected: 2,
     operator: '==' },
  questionbegging:
   { AssertionError [ERR_ASSERTION]: {
     Error: Error: just your standard error type
       {STACK}
     name: 'AssertionError [ERR_ASSERTION]',
     generatedMessage: true,
     code: 'ERR_ASSERTION',
     actual: [Circular],
     expected: 99,
     operator: '==' },
  dom:
   { Error: alton brown
       {STACK}

`
