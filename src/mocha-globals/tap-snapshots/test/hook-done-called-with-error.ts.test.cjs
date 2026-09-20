/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/hook-done-called-with-error.ts > TAP > must match snapshot 1`] = `
TAP version 14
# Subtest: before done(err) sync
    not ok 1 - sync yolo
      ---
      stack: |
        test/hook-done-called-with-error.ts:#:#
        src/index.ts:#:#
        new Promise (<anonymous>)
        runHookBlock (src/index.ts:#:#)
        Test.<anonymous> (src/index.ts:#:#)
        Before.#call (../before/src/index.ts:#:#)
        Before.before (../before/src/index.ts:#:#)
        before (src/index.ts:#:#)
        Test.<anonymous> (test/hook-done-called-with-error.ts:#:#)
      at:
        fileName: test/hook-done-called-with-error.ts
        lineNumber: ##
        columnNumber: ##
        functionName: <anonymous>
      source: |
        describe('before done(err) sync', () => {
          before(done => {
            done(new Error('sync yolo'))
        ---------^
          })
          it('should not run', () => {})
      ...
    
    1..1
not ok 1 - before done(err) sync # time={TIME}
  ---
  at:
    fileName: test/hook-done-called-with-error.ts
    lineNumber: ##
    columnNumber: ##
    isToplevel: true
  source: |
    mount(tt)
  
    describe('before done(err) sync', () => {
    ^
      before(done => {
        done(new Error('sync yolo'))
  ...

# Subtest: before done(err)
    not ok 1 - before yolo
      ---
      stack: |
        Immediate.<anonymous> (test/hook-done-called-with-error.ts:#:#)
      at:
        fileName: test/hook-done-called-with-error.ts
        lineNumber: ##
        columnNumber: ##
        typeName: Immediate
        methodName: <anonymous>
        functionName: Immediate.<anonymous>
      source: |
        describe('before done(err)', () => {
          before(done => {
            setImmediate(() => done(new Error('before yolo')))
        ----------------------------^
          })
          it('should not run', () => {})
      ...
    
    1..1
not ok 2 - before done(err) # time={TIME}
  ---
  at:
    fileName: test/hook-done-called-with-error.ts
    lineNumber: ##
    columnNumber: ##
    isToplevel: true
  source: |
    })
  
    describe('before done(err)', () => {
    ^
      before(done => {
        setImmediate(() => done(new Error('before yolo')))
  ...

# Subtest: beforeEach done(err)
    # Subtest: should not run
        not ok 1 - beforeEach yolo
          ---
          stack: |
            Immediate.<anonymous> (test/hook-done-called-with-error.ts:#:#)
          at:
            fileName: test/hook-done-called-with-error.ts
            lineNumber: ##
            columnNumber: ##
            typeName: Immediate
            methodName: <anonymous>
            functionName: Immediate.<anonymous>
          source: |
            describe('beforeEach done(err)', () => {
              beforeEach(done => {
                setImmediate(() => done(new Error('beforeEach yolo')))
            ----------------------------^
              })
              it('should not run', () => {})
          ...
        
        1..1
    not ok 1 - should not run # time={TIME}
      ---
      at:
        fileName: test/hook-done-called-with-error.ts
        lineNumber: ##
        columnNumber: ##
        typeName: Test
      source: |2
            setImmediate(() => done(new Error('beforeEach yolo')))
          })
          it('should not run', () => {})
        --^
        })
      ...
    
    1..1
not ok 3 - beforeEach done(err) # time={TIME}
  ---
  at:
    fileName: test/hook-done-called-with-error.ts
    lineNumber: ##
    columnNumber: ##
    isToplevel: true
  source: |
    })
  
    describe('beforeEach done(err)', () => {
    ^
      beforeEach(done => {
        setImmediate(() => done(new Error('beforeEach yolo')))
  ...

# Subtest: before returned promise rejects
    not ok 1 - promise yolo
      ---
      stack: |
        test/hook-done-called-with-error.ts:#:#
        src/index.ts:#:#
        new Promise (<anonymous>)
        runHookBlock (src/index.ts:#:#)
        Test.<anonymous> (src/index.ts:#:#)
        Before.#call (../before/src/index.ts:#:#)
        Before.before (../before/src/index.ts:#:#)
        before (src/index.ts:#:#)
        Test.<anonymous> (test/hook-done-called-with-error.ts:#:#)
      at:
        fileName: test/hook-done-called-with-error.ts
        lineNumber: ##
        columnNumber: ##
        functionName: <anonymous>
      source: |
      
        describe('before returned promise rejects', () => {
          before(done => Promise.reject(new Error('promise yolo')))
        --------------------------------^
          it('should not run', () => {})
        })
      ...
    
    1..1
not ok 4 - before returned promise rejects # time={TIME}
  ---
  at:
    fileName: test/hook-done-called-with-error.ts
    lineNumber: ##
    columnNumber: ##
    isToplevel: true
  source: |
    })
  
    describe('before returned promise rejects', () => {
    ^
      before(done => Promise.reject(new Error('promise yolo')))
      it('should not run', () => {})
  ...

# Subtest: after done(err)
    # Subtest: runs
        1..0
    ok 1 - runs # time={TIME}
    
    1..1
# error thrown in teardown
not ok 5 - after done(err) # time={TIME}
  ---
  at:
    fileName: test/hook-done-called-with-error.ts
    lineNumber: ##
    columnNumber: ##
    isToplevel: true
  source: |
    })
  
    describe('after done(err)', () => {
    ^
      it('runs', () => {})
      after(done => {
  ...

not ok 6 - after yolo
  ---
  stack: |
    Immediate.<anonymous> (test/hook-done-called-with-error.ts:#:#)
  at:
    fileName: test/hook-done-called-with-error.ts
    lineNumber: ##
    columnNumber: ##
    typeName: Immediate
    methodName: <anonymous>
    functionName: Immediate.<anonymous>
  test: after done(err)
  source: |2
      it('runs', () => {})
      after(done => {
        setImmediate(() => done(new Error('after yolo')))
    ----------------------------^
      })
    })
  ...

1..6

`
