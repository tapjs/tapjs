/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/markdown.ts > TAP > markdown 1`] = `
# TAP Tests

## test/fixtures/example-tap.ts

### passing suite

1. <b style="color:green">pass</b> test point before subtest

#### subtest

1. <b style="color:green">pass</b> test point in subtest

2. <b style="color:green">pass</b> second test point in subtest


----

**test/fixtures/example-tap.ts > passing suite > subtest**

\`\`\`yaml
level: 3
ok: true
id: 2
time: 0.822
closingTestPoint: true
plan:
  start: 1
  end: 2
tests: 2
failures: 0
assertions: 2
skipped: 0
\`\`\`

3. <b style="color:green">pass</b> test point after subtest


----

**test/fixtures/example-tap.ts > passing suite**

\`\`\`yaml
level: 2
ok: true
id: 1
time: 5.817
closingTestPoint: true
plan:
  start: 1
  end: 3
tests: 5
failures: 0
assertions: 4
skipped: 0
\`\`\`

### failing suite

1. <b style="color:red">fail</b> this fails

    \`\`\`ts

    t.test('failing suite', t => {
      t.fail('this fails')
    ----^
      t.strictSame(
        {
    \`\`\`

    \`\`\`yaml
    at:
      fileName: test/fixtures/example-tap.ts
      lineNumber: 15
      columnNumber: 5
      typeName: Test
    stack: >
      Test.<anonymous> (test/fixtures/example-tap.ts:15:5)

      Test.cb (../core/dist/esm/test-base.js:170:42) (../core/src/test-base.ts:341:17)

      ../core/dist/esm/test-base.js:858:29 (../core/src/test-base.ts:1116:21)

      Test.main (../core/dist/esm/test-base.js:867:11) (../core/src/test-base.ts:1124:7)

      Test.runMain (../core/dist/esm/base.js:392:19) (../core/src/base.ts:584:15)

      TAP.#processSubtest (../core/dist/esm/test-base.js:906:15) (../core/src/test-base.ts:1169:9)

      TAP.#process (../core/dist/esm/test-base.js:614:37) (../core/src/test-base.ts:859:29)

      TAP.sub (../core/dist/esm/test-base.js:1038:22) (../core/src/test-base.ts:1319:18)

      test/fixtures/example-tap.ts:14:3
    \`\`\`
2. <b style="color:red">fail</b> has a diff

    \`\`\`diff
    --- expected
    +++ actual
    @@ -1,5 +1,5 @@
     Object {
    -  "b": Object {
    -    "a": 1,
    +  "a": Object {
    +    "b": "1",
       },
     }
    \`\`\`

    \`\`\`ts
    t.test('failing suite', t => {
      t.fail('this fails')
      t.strictSame(
    ----^
        {
          a: {
    \`\`\`

    \`\`\`yaml
    extra: diags
    at:
      fileName: test/fixtures/example-tap.ts
      lineNumber: 16
      columnNumber: 5
      typeName: Test
    stack: >
      Test.<anonymous> (test/fixtures/example-tap.ts:16:5)

      Test.cb (../core/dist/esm/test-base.js:170:42) (../core/src/test-base.ts:341:17)

      ../core/dist/esm/test-base.js:858:29 (../core/src/test-base.ts:1116:21)

      Test.main (../core/dist/esm/test-base.js:867:11) (../core/src/test-base.ts:1124:7)

      Test.runMain (../core/dist/esm/base.js:392:19) (../core/src/base.ts:584:15)

      TAP.#processSubtest (../core/dist/esm/test-base.js:906:15) (../core/src/test-base.ts:1169:9)

      TAP.#process (../core/dist/esm/test-base.js:614:37) (../core/src/test-base.ts:859:29)

      TAP.sub (../core/dist/esm/test-base.js:1038:22) (../core/src/test-base.ts:1319:18)

      test/fixtures/example-tap.ts:14:3
    \`\`\`

----

**test/fixtures/example-tap.ts > failing suite**

\`\`\`ts
})

t.test('failing suite', t => {
--^
  t.fail('this fails')
  t.strictSame(

\`\`\`

\`\`\`yaml
level: 2
ok: false
id: 2
diag:
  at:
    fileName: test/fixtures/example-tap.ts
    lineNumber: 14
    columnNumber: 3
    isToplevel: true
time: 11.27
closingTestPoint: true
plan:
  start: 1
  end: 2
tests: 2
failures: 2
assertions: 2
skipped: 0
\`\`\`

3. <b style="color:magenta">todo</b> suite with todo: true

4. <b style="color:cyan">skip</b> suite with skip: true

5. <b style="color:magenta">todo</b> suite with todo message<span color="magenta">msg</span>

6. <b style="color:cyan">skip</b> suite with skip message<span color="cyan">msg</span>

### suite with skipAll


----

**test/fixtures/example-tap.ts > suite with skipAll**

\`\`\`yaml
level: 2
ok: true
id: 7
skip: no tests found
closingTestPoint: true
plan:
  start: 1
  end: 0
  skipAll: true
  skipReason: no tests found
  comment: no tests found
tests: 0
failures: 0
assertions: 0
skipped: 1
\`\`\`

### suite with skipAll, no msg


----

**test/fixtures/example-tap.ts > suite with skipAll, no msg**

\`\`\`yaml
level: 2
ok: true
id: 8
time: 0.067
closingTestPoint: true
plan:
  start: 1
  end: 0
  skipAll: true
tests: 0
failures: 0
assertions: 0
skipped: 1
\`\`\`

### suite with no points


----

**test/fixtures/example-tap.ts > suite with no points**

\`\`\`yaml
level: 2
ok: true
id: 9
time: 0.07
closingTestPoint: true
plan:
  start: 1
  end: 0
  skipAll: true
tests: 0
failures: 0
assertions: 0
skipped: 1
\`\`\`

### suite with todo/skip test points

1. <b style="color:magenta">todo</b> pass with todo: true

2. <b style="color:cyan">skip</b> pass with skip: true

3. <b style="color:magenta">todo</b> pass with todo message<span color="magenta">msg</span>

4. <b style="color:cyan">skip</b> pass with skip message<span color="cyan">msg</span>

5. <b style="color:magenta">todo</b> fail with todo: true

6. <b style="color:cyan">skip</b> fail with skip: true

7. <b style="color:magenta">todo</b> fail with todo message<span color="magenta">msg</span>

8. <b style="color:cyan">skip</b> fail with skip message<span color="cyan">msg</span>


----

**test/fixtures/example-tap.ts > suite with todo/skip test points**

\`\`\`yaml
level: 2
ok: true
id: 10
time: 0.397
closingTestPoint: true
plan:
  start: 1
  end: 8
tests: 8
failures: 8
assertions: 8
skipped: 8
\`\`\`

### excessive test

1. <b style="color:green">pass</b> this is fine


----

**test/fixtures/example-tap.ts > excessive test**

\`\`\`ts
})

t.test('excessive test', t => {
--^
  t.plan(1)
  t.pass('this is fine')

\`\`\`

\`\`\`yaml
level: 2
ok: false
id: 11
diag:
  at:
    fileName: test/fixtures/example-tap.ts
    lineNumber: 56
    columnNumber: 3
    isToplevel: true
time: 0.109
closingTestPoint: true
plan:
  start: 1
  end: 1
tests: 1
failures: 0
assertions: 1
skipped: 0
\`\`\`

12. <b style="color:red">fail</b> test assertion count exceeds plan

    \`\`\`ts
      t.plan(1)
      t.pass('this is fine')
      t.pass('this is not')
    ----^
    })
    \`\`\`

    \`\`\`yaml
    stack: |
      Test.<anonymous> (test/fixtures/example-tap.ts:59:5)
      Test.cb (../core/src/test-base.ts:341:17)
      <anonymous> (../core/src/test-base.ts:1116:21)
      Test.main (../core/src/test-base.ts:1124:7)
      Test.runMain (../core/src/base.ts:584:15)
      TAP.#processSubtest (../core/src/test-base.ts:1169:9)
    at:
      fileName: test/fixtures/example-tap.ts
      lineNumber: 59
      columnNumber: 5
      typeName: Test
      methodName: <anonymous>
      functionName: Test.<anonymous>
    test: excessive test
    \`\`\`
### unfinished test

1. <b style="color:green">pass</b> going to fail


----

**test/fixtures/example-tap.ts > unfinished test**

\`\`\`ts
})

t.test('unfinished test', t => {
--^
  t.plan(3)
  t.pass('going to fail')

\`\`\`

\`\`\`yaml
level: 2
ok: false
id: 13
diag:
  at:
    fileName: test/fixtures/example-tap.ts
    lineNumber: 62
    columnNumber: 3
    isToplevel: true
time: 0.197
closingTestPoint: true
plan:
  start: 1
  end: 3
tests: 1
failures: 0
assertions: 1
skipped: 0
\`\`\`


----

**test/fixtures/example-tap.ts**

\`\`\`yaml
level: 1
ok: false
id: 1
diag:
  stdio: inherit
  cwd: /cwd/src/reporter
  externalID: test/fixtures/example-tap.ts
  command: /usr/local/bin/node
  args:
    - --import=file:///cwd/node_modules/@tapjs/mock/dist/esm/import.mjs
    - --loader=file:///cwd/node_modules/@isaacs/ts-node-temp-fork-for-pr-2009/esm.mjs
    - --no-warnings
    - --enable-source-maps
    - --import=file:///cwd/node_modules/@tapjs/processinfo/dist/mjs/import.mjs
    - /cwd/src/reporter/test/fixtures/example-tap.ts
  context: !symbol/shared tap.isRunner
  exitCode: 1
time: 484.581
closingTestPoint: true
plan:
  start: 1
  end: 13
tests: 30
failures: 15
assertions: 21
skipped: 15
\`\`\`


----

**TAP Tests**

\`\`\`yaml
level: 0
plan:
  start: 1
  end: 1
tests: 31
failures: 15
assertions: 21
skipped: 15
\`\`\`


`
