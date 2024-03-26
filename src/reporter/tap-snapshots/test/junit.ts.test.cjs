/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/junit.ts > TAP > junit 1`] = `
<?xml version="1.0" encoding="UTF-8" ?>
<testsuites id="{ID}" name="TAP Tests" tests="41" failures="14" assertions="30" skipped="18" time="0.507733">
<properties>
<property name="plan"><![CDATA[
start: 1
end: 1
skipAll: false
skipReason: ""
comment: ""
]]></property>
</properties>
<testsuite name="test/fixtures/example-tap.ts" tests="40" failures="13" assertions="30" skipped="18" time="0.484581">
<properties>
<property name="plan"><![CDATA[
start: 1
end: 13
skipAll: false
skipReason: ""
comment: ""
]]></property>
</properties>
<testsuite name="passing suite" tests="7" failures="0" assertions="5" skipped="0" time="0.005817">
<properties>
<property name="ok" value="true" />
<property name="plan"><![CDATA[
start: 1
end: 3
skipAll: false
skipReason: ""
comment: ""
]]></property>
</properties>
<testsuite name="subtest" tests="3" failures="0" assertions="2" skipped="0" time="0.000822">
<properties>
<property name="ok" value="true" />
<property name="plan"><![CDATA[
start: 1
end: 2
skipAll: false
skipReason: ""
comment: ""
]]></property>
</properties>

<testcase id="1" name="test point in subtest" classname="test/fixtures/example-tap.ts &gt; passing suite &gt; subtest" />
<testcase id="2" name="second test point in subtest" classname="test/fixtures/example-tap.ts &gt; passing suite &gt; subtest" />
</testsuite>
<testcase id="1" name="test point before subtest" classname="test/fixtures/example-tap.ts &gt; passing suite" />
<testcase id="2" name="subtest" classname="test/fixtures/example-tap.ts &gt; passing suite" time="0.000822" />
<testcase id="3" name="test point after subtest" classname="test/fixtures/example-tap.ts &gt; passing suite" />
</testsuite>

<testsuite name="failing suite" tests="3" failures="3" assertions="2" skipped="0" time="0.01127">
<properties>
<property name="plan"><![CDATA[
start: 1
end: 2
skipAll: false
skipReason: ""
comment: ""
]]></property>
</properties>

<testcase id="1" name="this fails" classname="test/fixtures/example-tap.ts &gt; failing suite" file="test/fixtures/example-tap.ts" line="15" column="5">
<failure><![CDATA[
at:
  fileName: test/fixtures/example-tap.ts
  lineNumber: 15
  columnNumber: 5
  typeName: Test
stack: >
  Test.<anonymous> (test/fixtures/example-tap.ts:15:5)

  Test.cb (../core/dist/esm/test-base.js:170:42)
  (../core/src/test-base.ts:341:17)

  ../core/dist/esm/test-base.js:858:29 (../core/src/test-base.ts:1116:21)

  Test.main (../core/dist/esm/test-base.js:867:11)
  (../core/src/test-base.ts:1124:7)

  Test.runMain (../core/dist/esm/base.js:392:19) (../core/src/base.ts:584:15)

  TAP.#processSubtest (../core/dist/esm/test-base.js:906:15)
  (../core/src/test-base.ts:1169:9)

  TAP.#process (../core/dist/esm/test-base.js:614:37)
  (../core/src/test-base.ts:859:29)

  TAP.sub (../core/dist/esm/test-base.js:1038:22)
  (../core/src/test-base.ts:1319:18)

  test/fixtures/example-tap.ts:14:3
source: |
  
  t.test('failing suite', t => {
    t.fail('this fails')
  ----^
    t.strictSame(
      {
]]></failure>
</testcase>

<testcase id="2" name="has a diff" classname="test/fixtures/example-tap.ts &gt; failing suite" file="test/fixtures/example-tap.ts" line="16" column="5">
<failure><![CDATA[
extra: diags
diff: |
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
at:
  fileName: test/fixtures/example-tap.ts
  lineNumber: 16
  columnNumber: 5
  typeName: Test
stack: >
  Test.<anonymous> (test/fixtures/example-tap.ts:16:5)

  Test.cb (../core/dist/esm/test-base.js:170:42)
  (../core/src/test-base.ts:341:17)

  ../core/dist/esm/test-base.js:858:29 (../core/src/test-base.ts:1116:21)

  Test.main (../core/dist/esm/test-base.js:867:11)
  (../core/src/test-base.ts:1124:7)

  Test.runMain (../core/dist/esm/base.js:392:19) (../core/src/base.ts:584:15)

  TAP.#processSubtest (../core/dist/esm/test-base.js:906:15)
  (../core/src/test-base.ts:1169:9)

  TAP.#process (../core/dist/esm/test-base.js:614:37)
  (../core/src/test-base.ts:859:29)

  TAP.sub (../core/dist/esm/test-base.js:1038:22)
  (../core/src/test-base.ts:1319:18)

  test/fixtures/example-tap.ts:14:3
source: |
  t.test('failing suite', t => {
    t.fail('this fails')
    t.strictSame(
  ----^
      {
        a: {
]]></failure>
</testcase>
</testsuite>

<testsuite name="suite with skipAll" tests="1" failures="0" assertions="0" skipped="1">
<properties>
<property name="ok" value="true" />
<property name="plan"><![CDATA[
start: 1
end: 0
skipAll: true
skipReason: no tests found
comment: no tests found
]]></property>
</properties>


</testsuite>

<testsuite name="suite with skipAll, no msg" tests="1" failures="0" assertions="0" skipped="1" time="0.000067">
<properties>
<property name="ok" value="true" />
<property name="plan"><![CDATA[
start: 1
end: 0
skipAll: true
skipReason: ""
comment: ""
]]></property>
</properties>


</testsuite>

<testsuite name="suite with no points" tests="1" failures="0" assertions="0" skipped="1" time="0.00007">
<properties>
<property name="ok" value="true" />
<property name="plan"><![CDATA[
start: 1
end: 0
skipAll: true
skipReason: ""
comment: ""
]]></property>
</properties>


</testsuite>

<testsuite name="suite with todo/skip test points" tests="9" failures="4" assertions="8" skipped="9" time="0.000397">
<properties>
<property name="ok" value="true" />
<property name="plan"><![CDATA[
start: 1
end: 8
skipAll: false
skipReason: ""
comment: ""
]]></property>
</properties>

<testcase id="1" name="pass with todo: true" classname="test/fixtures/example-tap.ts &gt; suite with todo/skip test points">
<properties>
<property name="todo" value="true" />
</properties>
</testcase>

<testcase id="2" name="pass with skip: true" classname="test/fixtures/example-tap.ts &gt; suite with todo/skip test points">
<properties>
<property name="skip" value="true" />
</properties>
</testcase>

<testcase id="3" name="pass with todo message" classname="test/fixtures/example-tap.ts &gt; suite with todo/skip test points">
<properties>
<property name="todo" value="msg" />
</properties>
</testcase>

<testcase id="4" name="pass with skip message" classname="test/fixtures/example-tap.ts &gt; suite with todo/skip test points">
<properties>
<property name="skip" value="msg" />
</properties>
</testcase>

<testcase id="5" name="fail with todo: true" classname="test/fixtures/example-tap.ts &gt; suite with todo/skip test points">
<failure><![CDATA[
name: "fail with todo: true"
]]></failure>
</testcase>

<testcase id="6" name="fail with skip: true" classname="test/fixtures/example-tap.ts &gt; suite with todo/skip test points">
<failure><![CDATA[
name: "fail with skip: true"
]]></failure>
</testcase>

<testcase id="7" name="fail with todo message" classname="test/fixtures/example-tap.ts &gt; suite with todo/skip test points">
<failure><![CDATA[
name: fail with todo message
]]></failure>
</testcase>

<testcase id="8" name="fail with skip message" classname="test/fixtures/example-tap.ts &gt; suite with todo/skip test points">
<failure><![CDATA[
name: fail with skip message
]]></failure>
</testcase>
</testsuite>

<testsuite name="excessive test" tests="2" failures="0" assertions="1" skipped="0" time="0.000109">
<properties>
<property name="ok" value="true" />
<property name="plan"><![CDATA[
start: 1
end: 1
skipAll: false
skipReason: ""
comment: ""
]]></property>
</properties>

<testcase id="1" name="this is fine" classname="test/fixtures/example-tap.ts &gt; excessive test" />
</testsuite>

<testsuite name="unfinished test" tests="2" failures="1" assertions="1" skipped="0" time="0.000197">
<properties>
<property name="plan"><![CDATA[
start: 1
end: 3
skipAll: false
skipReason: ""
comment: ""
]]></property>
</properties>

<testcase id="1" name="going to fail" classname="test/fixtures/example-tap.ts &gt; unfinished test" />
</testsuite>
<testcase id="1" name="passing suite" classname="test/fixtures/example-tap.ts" time="0.005817" />
<testcase id="2" name="failing suite" classname="test/fixtures/example-tap.ts" time="0.01127" file="test/fixtures/example-tap.ts" line="14" column="3">
<failure><![CDATA[
at:
  fileName: test/fixtures/example-tap.ts
  lineNumber: 14
  columnNumber: 3
  isToplevel: true
source: |
  })

  t.test('failing suite', t => {
  --^
    t.fail('this fails')
    t.strictSame(
]]></failure>
</testcase>

<testcase id="3" name="suite with todo: true" classname="test/fixtures/example-tap.ts">
<properties>
<property name="todo" value="true" />
</properties>
</testcase>

<testcase id="4" name="suite with skip: true" classname="test/fixtures/example-tap.ts">
<properties>
<property name="skip" value="true" />
</properties>
</testcase>

<testcase id="5" name="suite with todo message" classname="test/fixtures/example-tap.ts">
<properties>
<property name="todo" value="msg" />
</properties>
</testcase>

<testcase id="6" name="suite with skip message" classname="test/fixtures/example-tap.ts">
<properties>
<property name="skip" value="msg" />
</properties>
</testcase>

<testcase id="7" name="suite with skipAll" classname="test/fixtures/example-tap.ts">
<properties>
<property name="skip" value="no tests found" />
</properties>
</testcase>

<testcase id="8" name="suite with skipAll, no msg" classname="test/fixtures/example-tap.ts" time="0.000067" />
<testcase id="9" name="suite with no points" classname="test/fixtures/example-tap.ts" time="0.00007" />
<testcase id="10" name="suite with todo/skip test points" classname="test/fixtures/example-tap.ts" time="0.000397" />
<testcase id="11" name="excessive test" classname="test/fixtures/example-tap.ts" time="0.000109" file="test/fixtures/example-tap.ts" line="56" column="3">
<failure><![CDATA[
at:
  fileName: test/fixtures/example-tap.ts
  lineNumber: 56
  columnNumber: 3
  isToplevel: true
source: |
  })

  t.test('excessive test', t => {
  --^
    t.plan(1)
    t.pass('this is fine')
]]></failure>
</testcase>

<testcase id="12" name="test assertion count exceeds plan" classname="test/fixtures/example-tap.ts" file="test/fixtures/example-tap.ts" line="59" column="5">
<failure><![CDATA[
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
source: |2
    t.plan(1)
    t.pass('this is fine')
    t.pass('this is not')
  ----^
  })
]]></failure>
</testcase>

<testcase id="13" name="unfinished test" classname="test/fixtures/example-tap.ts" time="0.000197" file="test/fixtures/example-tap.ts" line="62" column="3">
<failure><![CDATA[
at:
  fileName: test/fixtures/example-tap.ts
  lineNumber: 62
  columnNumber: 3
  isToplevel: true
source: |
  })

  t.test('unfinished test', t => {
  --^
    t.plan(3)
    t.pass('going to fail')
]]></failure>
</testcase>
</testsuite>
</testsuites>

`
