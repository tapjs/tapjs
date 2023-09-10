/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/done-called-with-error.ts > TAP > must match snapshot 1`] = `
TAP version 14
# Subtest: unnamed suite
    # Subtest: unnamed test
        not ok 1 - yolo
          ---
          stack: |
            Timeout._onTimeout (test/done-called-with-error.ts:#:#)
          at:
            fileName: test/done-called-with-error.ts
            lineNumber: ##
            columnNumber: ##
            typeName: Timeout
            methodName: _onTimeout
            functionName: Timeout._onTimeout
          source: |
            describe(() => {
              it(done => {
                setTimeout(() => done(new Error('yolo')))
            --------------------------^
              })
            })
          ...
        
        1..1
    not ok 1 - unnamed test # time={TIME}
      ---
      at:
        fileName: test/done-called-with-error.ts
        lineNumber: ##
        columnNumber: ##
        typeName: Test
      source: |
      
        describe(() => {
          it(done => {
        --^
            setTimeout(() => done(new Error('yolo')))
          })
      ...
    
    1..1
not ok 1 - unnamed suite # time={TIME}
  ---
  at:
    fileName: test/done-called-with-error.ts
    lineNumber: ##
    columnNumber: ##
    isToplevel: true
  source: |
    mount(tt)
  
    describe(() => {
    ^
      it(done => {
        setTimeout(() => done(new Error('yolo')))
  ...

1..1

`
