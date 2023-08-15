/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap.ts > TAP > bailout > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "bailout",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    Bail out! cannot proceed
    
  ),
}
`

exports[`test/tap.ts > TAP > closeEvenIfExitingHard > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "closeEvenIfExitingHard",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - make sure, really
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > doubleRegister > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "doubleRegister",
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/tap.ts > TAP > nodeDebugTap > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "nodeDebugTap",
  "signal": null,
  "stderr": String(
    TAP {PID} TAP: BASE runMain
    TAP {PID} TAP: MAIN pre TAP
    TAP {PID} TAP: MAIN post TAP
    TAP {PID} TAP: END TAP implicit=true
    TAP {PID} TAP: push obe
    TAP {PID} TAP: PROCESSING(TAP) 3
    TAP {PID} TAP: > STRING
    TAP {PID} TAP: LINE "TAP version 14\\\\n" [ 'TAP', '' ]
    TAP {PID} TAP: > STRING
    TAP {PID} TAP: LINE "1..0\\\\n" [ 'TAP', '' ]
    TAP {PID} TAP: > FUNCTION
    TAP {PID} TAP: > end of queue
    TAP {PID} TAP: done processing [] null
    TAP {PID} TAP: set ended=true
    TAP {PID} TAP: PROCESSING(TAP) 1
    TAP {PID} TAP: > EOF TAP
    TAP {PID} TAP: call onEOF TAP
    TAP {PID} TAP: eof end parser TAP
    TAP {PID} TAP: ONCOMPLETE "TAP" {"ok":true,"count":0,"pass":0,"fail":0,"bailout":false,"todo":0,"skip":0,"failures":[],"time":null,"plan":{"start":1,"end":0,"skipAll":true,"skipReason":"","comment":""},"skips":[],"todos":[]}
    TAP {PID} TAP: > end of queue
    TAP {PID} TAP: done processing [] null
    TAP {PID} TAP: END TAP implicit=true
    TAP {PID} TAP: already ended, ignore implicit end
    
  ),
  "stdout": String(
    TAP version 14
    1..0
    
  ),
}
`

exports[`test/tap.ts > TAP > notOk > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "notOk",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    not ok 1 - not fine
      ---
      at:
        fileName: test/tap.ts
        lineNumber: ##
        columnNumber: ##
        functionName: notOk
        isToplevel: true
      stack: |-
        notOk (test/tap.ts:##:##)
        test/tap.ts:##:##
      source: |2
      
          ok: () => tap().pass('this is fine'),
          notOk: () => tap().fail('not fine'),
        ---------------------^
      
          teardown: () => {
      ...
    
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > ok > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "ok",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - this is fine
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > pipe > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "pipe",
  "signal": null,
  "stderr": "",
  "stdout": String(
    1
    TAP version 14
    ok 1 - 2
    3
    ok 2 - 4
    ok 3 - 5
    1..3
    
  ),
}
`

exports[`test/tap.ts > TAP > planExceeded > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "planExceeded",
  "signal": null,
  "stderr": String(
    Error: test assertion count exceeds plan
      ---
      stack: |-
        planExceeded (test/tap.ts:##:##)
        test/tap.ts:##:##
      at:
        fileName: test/tap.ts
        lineNumber: ##
        columnNumber: ##
        functionName: planExceeded
      test: TAP
      source: |2
            t.plan(1)
            t.pass('fine')
            t.pass('not fine')
        ------^
          },
      ...
    
    
  ),
  "stdout": String(
    TAP version 14
    1..1
    ok 1 - fine
    
  ),
}
`

exports[`test/tap.ts > TAP > planUnsatisfied > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "planUnsatisfied",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    1..99
    # test count(0) != plan(99)
    
  ),
}
`

exports[`test/tap.ts > TAP > processMissing > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "processMissing",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - this is fine
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > setTimeout > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "setTimeout",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - fine
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > stdoutEpipe > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "stdoutEpipe",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - this is fine
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > tapDebug > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "tapDebug",
  "signal": null,
  "stderr": String(
    TAP {PID} TAP: BASE runMain
    TAP {PID} TAP: MAIN pre TAP
    TAP {PID} TAP: MAIN post TAP
    TAP {PID} TAP: END TAP implicit=true
    TAP {PID} TAP: push obe
    TAP {PID} TAP: PROCESSING(TAP) 3
    TAP {PID} TAP: > STRING
    TAP {PID} TAP: LINE "TAP version 14\\\\n" [ 'TAP', '' ]
    TAP {PID} TAP: > STRING
    TAP {PID} TAP: LINE "1..0\\\\n" [ 'TAP', '' ]
    TAP {PID} TAP: > FUNCTION
    TAP {PID} TAP: > end of queue
    TAP {PID} TAP: done processing [] null
    TAP {PID} TAP: set ended=true
    TAP {PID} TAP: PROCESSING(TAP) 1
    TAP {PID} TAP: > EOF TAP
    TAP {PID} TAP: call onEOF TAP
    TAP {PID} TAP: eof end parser TAP
    TAP {PID} TAP: ONCOMPLETE "TAP" {"ok":true,"count":0,"pass":0,"fail":0,"bailout":false,"todo":0,"skip":0,"failures":[],"time":null,"plan":{"start":1,"end":0,"skipAll":true,"skipReason":"","comment":""},"skips":[],"todos":[]}
    TAP {PID} TAP: > end of queue
    TAP {PID} TAP: done processing [] null
    TAP {PID} TAP: END TAP implicit=true
    TAP {PID} TAP: already ended, ignore implicit end
    
  ),
  "stdout": String(
    TAP version 14
    1..0
    
  ),
}
`

exports[`test/tap.ts > TAP > teardown > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "teardown",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - fine
    1..1
    teardown running
    
  ),
}
`

exports[`test/tap.ts > TAP > teardownReject > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "teardownReject",
  "signal": null,
  "stderr": String(
    Error: poop
      ---
      stack: >-
        TAP.<anonymous> (test/tap.ts:##:##)
    
        After.#callTeardown (...)
    
        TAP.#t.onEOF (...)
    
        TAP.#process (src/test-base.ts:##:##)
    
        TAP.#end (src/test-base.ts:##:##)
    
        TAP.end (src/test-base.ts:##:##)
    
        Timeout.<anonymous> (src/tap.ts:##:##)
      at:
        fileName: test/tap.ts
        lineNumber: ##
        columnNumber: ##
        typeName: TAP
        methodName: <anonymous>
        functionName: TAP.<anonymous>
      test: TAP
      source: |2
            const t = tap()
            t.teardown(async () => {
              throw new Error('poop')
        ------------^
            })
            t.pass('x')
      ...
    
    
  ),
  "stdout": String(
    TAP version 14
    ok 1 - x
    1..1
    # error thrown in teardown
    
  ),
}
`

exports[`test/tap.ts > TAP > teardownServer > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "teardownServer",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - fine
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > teardownThrowError > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "teardownThrowError",
  "signal": null,
  "stderr": String(
    Error: poop
      ---
      stack: >-
        TAP.<anonymous> (test/tap.ts:##:##)
    
        After.#callTeardown (...)
    
        TAP.#t.onEOF (...)
    
        TAP.#process (src/test-base.ts:##:##)
    
        TAP.#end (src/test-base.ts:##:##)
    
        TAP.end (src/test-base.ts:##:##)
    
        Timeout.<anonymous> (src/tap.ts:##:##)
      at:
        fileName: test/tap.ts
        lineNumber: ##
        columnNumber: ##
        typeName: TAP
        methodName: <anonymous>
        functionName: TAP.<anonymous>
      test: TAP
      source: |2
            const t = tap()
            t.teardown(() => {
              throw new Error('poop')
        ------------^
            })
            t.pass('x')
      ...
    
    
  ),
  "stdout": String(
    TAP version 14
    ok 1 - x
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > teardownThrowNonerror > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "teardownThrowNonerror",
  "signal": null,
  "stderr": "{ message: 'poop', at: null, test: 'TAP' }\\n",
  "stdout": String(
    TAP version 14
    ok 1 - x
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > throwBeforeRegister > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "throwBeforeRegister",
  "signal": null,
  "stderr": "'not yet registered'\\n",
  "stdout": "",
}
`

exports[`test/tap.ts > TAP > throwError > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "throwError",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - this is fine
    not ok 2 - poop
      ---
      stack: |
        throwError (test/tap.ts:##:##)
        test/tap.ts:##:##
      at:
        fileName: test/tap.ts
        lineNumber: ##
        columnNumber: ##
        functionName: throwError
      tapCaught: unhandledRejection
      test: TAP
      source: |2
            const t = tap()
            t.pass('this is fine')
            throw new Error('poop')
        ----------^
          },
      ...
    
    1..2
    
  ),
}
`

exports[`test/tap.ts > TAP > throwNonError > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "throwNonError",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - this is fine
    not ok 2 - not an error
      ---
      tapCaught: unhandledRejection
      test: TAP
      ...
    
    1..2
    
  ),
}
`

exports[`test/tap.ts > TAP > timeoutMessage > must match snapshot 1`] = `
Object {
  "code": null,
  "name": "timeoutMessage",
  "signal": "SIGNAL",
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - this is fine
    not ok 2 - timeout!
      ---
      signal: SIGALRM
      requests:
        - type: FileHandleCloseReq
      expired: TAP
      test: TAP
      ...
    
    1..2
    
  ),
}
`

exports[`test/tap.ts > TAP > timeoutSigalrm > must match snapshot 1`] = `
Object {
  "code": null,
  "name": "timeoutSigalrm",
  "signal": "SIGNAL",
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - this is fine
    not ok 2 - timeout!
      ---
      signal: SIGALRM
      requests:
        - type: FileHandleCloseReq
      expired: TAP
      test: TAP
      ...
    
    1..2
    
  ),
}
`

exports[`test/tap.ts > TAP > timeoutSigalrmWithChild > must match snapshot 1`] = `
Object {
  "code": null,
  "name": "timeoutSigalrmWithChild",
  "signal": "SIGNAL",
  "stderr": "",
  "stdout": String(
    TAP version 14
    # Subtest: child test
        not ok 1 - timeout!
          ---
          signal: SIGALRM
          requests:
            - type: FileHandleCloseReq
          expired: TAP
          ...
        
        1..1
    not ok 1 - child test # time={TIME}
      ---
      at:
        fileName: test/tap.ts
        lineNumber: ##
        columnNumber: ##
        functionName: timeoutSigalrmWithChild
        isToplevel: true
      source: |2
          timeoutSigalrmWithChild: () => {
            const t = tap()
            t.test('child test', () => {})
        ------^
            process.emit('SIGALRM')
          },
      ...
    
    1..1
    
  ),
}
`

exports[`test/tap.ts > TAP > timeoutSigalrmWithHandle > must match snapshot 1`] = `
Object {
  "code": null,
  "name": "timeoutSigalrmWithHandle",
  "signal": "SIGNAL",
  "stderr": "",
  "stdout": String(
    TAP version 14
    # Subtest: server
        ok 1 - this is fine
        not ok 2 - timeout!
          ---
          signal: SIGALRM
          requests:
            - type: FileHandleCloseReq
          handles:
            - type: Server
              events:
                - request
                - connection
              connectionKey: {...}
          expired: TAP
          ...
        
        1..2
    
  ),
}
`

exports[`test/tap.ts > TAP > topLevel > must match snapshot 1`] = `
Object {
  "code": 0,
  "name": "topLevel",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    ok 1 - this is fine
    1..1
    # { total: 1, pass: 1 }
    # time={TIME}
    
  ),
}
`

exports[`test/tap.ts > TAP > unfinished > must match snapshot 1`] = `
Object {
  "code": 1,
  "name": "unfinished",
  "signal": null,
  "stderr": "",
  "stdout": String(
    TAP version 14
    # Subtest: child test
        not ok 1 - test unfinished
          ---
          at:
            fileName: test/tap.ts
            lineNumber: ##
            columnNumber: ##
            functionName: unfinished
            isToplevel: true
          stack: |-
            unfinished (test/tap.ts:##:##)
            test/tap.ts:##:##
          test: child test
          source: |2
              unfinished: () => {
                const t = tap()
                t.test('child test', () => {})
            ------^
              },
            }
          ...
        
        1..1
    not ok 1 - child test # time={TIME}
      ---
      at:
        fileName: test/tap.ts
        lineNumber: ##
        columnNumber: ##
        functionName: unfinished
        isToplevel: true
      source: |2
          unfinished: () => {
            const t = tap()
            t.test('child test', () => {})
        ------^
          },
        }
      ...
    
    1..1
    
  ),
}
`
