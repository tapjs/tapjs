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
          stack: >
            Test.<anonymous> (test/done-called-with-error.ts:21:21)
          
            Test.<anonymous> (src/index.ts:121:25)
          
            Test.cb ({}/core/src/test-base.ts:339:17)
          
            {}/core/src/test-base.ts:1068:21
          
            Test.main ({}/core/src/test-base.ts:1076:7)
          
            Test.runMain ({}/core/src/base.ts:563:15)
          
            Test.#processSubtest ({}/core/src/test-base.ts:1104:9)
          at:
            fileName: test/done-called-with-error.ts
            lineNumber: 21
            columnNumber: 21
            typeName: Test
            methodName: <anonymous>
            functionName: Test.<anonymous>
          source: |
            describe(() => {
              it(done => {
                setTimeout(done(new Error('yolo')))
            --------------------^
              })
            })
          ...
        
        1..1
    not ok 1 - unnamed test # time={TIME}
      ---
      at:
        fileName: test/done-called-with-error.ts
        lineNumber: 20
        columnNumber: 3
        typeName: Test
      source: |
      
        describe(() => {
          it(done => {
        --^
            setTimeout(done(new Error('yolo')))
          })
      ...
    
    not ok 2 - The "callback" argument must be of type function. Received undefined
      ---
      stack: >
        TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type
        function. Received undefined
      
        Test.<anonymous> (test/done-called-with-error.ts:21:5)
      
        Test.<anonymous> (src/index.ts:121:25)
      
        Test.cb ({}/core/src/test-base.ts:339:17)
      
        {}/core/src/test-base.ts:1068:21
      
        Test.main ({}/core/src/test-base.ts:1076:7)
      
        Test.runMain ({}/core/src/base.ts:563:15)
      
        Test.#processSubtest ({}/core/src/test-base.ts:1104:9)
      
        Test.#process ({}/core/src/test-base.ts:824:29)
      
        Test.sub ({}/core/src/test-base.ts:1261:18)
      
        it (src/index.ts:99:6)
      
        Test.<anonymous> (test/done-called-with-error.ts:20:3)
      
        Test.<anonymous> (src/index.ts:55:8)
      
        Test.cb ({}/core/src/test-base.ts:339:17)
      
        {}/core/src/test-base.ts:1068:21
      
        Test.main ({}/core/src/test-base.ts:1076:7)
      
        Test.runMain ({}/core/src/base.ts:563:15)
      
        Test.#processSubtest ({}/core/src/test-base.ts:1104:9)
      
        Test.#process ({}/core/src/test-base.ts:824:29)
      
        Test.sub ({}/core/src/test-base.ts:1261:18)
      
        describe (src/index.ts:53:18)
      
        test/done-called-with-error.ts:19:1
      at:
        typeName: 'TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of
          type function'
        methodName: " Received undefined"
        functionName: 'TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be
          of type function. Received undefined'
      type: TypeError
      code: ERR_INVALID_ARG_TYPE
      tapCaught: testFunctionThrow
      test: unnamed test
      ...
    
    1..2
not ok 1 - unnamed suite # time={TIME}
  ---
  at:
    fileName: test/done-called-with-error.ts
    lineNumber: 19
    columnNumber: 1
    isToplevel: true
  source: |
    mount(tt)
  
    describe(() => {
    ^
      it(done => {
        setTimeout(done(new Error('yolo')))
  ...

1..1

`
