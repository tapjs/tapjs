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
            Test.<anonymous> (test/done-called-with-error.ts:#:#)
          
            Test.<anonymous> (src/index.ts:#:#)
          
            Test.cb ({}/core/src/test-base.ts:#:#)
          
            {}/core/src/test-base.ts:#:#
          
            Test.main ({}/core/src/test-base.ts:#:#)
          
            Test.runMain ({}/core/src/base.ts:#:#)
          
            Test.#processSubtest ({}/core/src/test-base.ts:#:#)
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
      
        Test.<anonymous> (test/done-called-with-error.ts:#:#)
      
        Test.<anonymous> (src/index.ts:#:#)
      
        Test.cb ({}/core/src/test-base.ts:#:#)
      
        {}/core/src/test-base.ts:#:#
      
        Test.main ({}/core/src/test-base.ts:#:#)
      
        Test.runMain ({}/core/src/base.ts:#:#)
      
        Test.#processSubtest ({}/core/src/test-base.ts:#:#)
      
        Test.#process ({}/core/src/test-base.ts:#:#)
      
        Test.sub ({}/core/src/test-base.ts:#:#)
      
        it (src/index.ts:#:#)
      
        Test.<anonymous> (test/done-called-with-error.ts:#:#)
      
        Test.<anonymous> (src/index.ts:#:#)
      
        Test.cb ({}/core/src/test-base.ts:#:#)
      
        {}/core/src/test-base.ts:#:#
      
        Test.main ({}/core/src/test-base.ts:#:#)
      
        Test.runMain ({}/core/src/base.ts:#:#)
      
        Test.#processSubtest ({}/core/src/test-base.ts:#:#)
      
        Test.#process ({}/core/src/test-base.ts:#:#)
      
        Test.sub ({}/core/src/test-base.ts:#:#)
      
        describe (src/index.ts:#:#)
      
        test/done-called-with-error.ts:#:#
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
