/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/watch.js TAP run tests on changes change a file > logs 1`] = `
initial test run
- {TAPDIR}/bin/run.js
- 1.test.js
- 2.test.js
- 3.test.js
- 4.test.js
- --watch
- --no-watch

change ko.js
running tests
- 4.test.js


`

exports[`test/watch.js TAP run tests on changes change a file > spawn test run on change 1`] = `
4.test.js

`

exports[`test/watch.js TAP run tests on changes change a file mid-test > logs 1`] = `
change 1.test.js
test in progress, queuing for next run
running tests
- 1.test.js


`

exports[`test/watch.js TAP run tests on changes change a file mid-test > spawn queued test 1`] = `
1.test.js

`

exports[`test/watch.js TAP run tests on changes initial test > logs 1`] = `

`

exports[`test/watch.js TAP run tests on changes initial test > spawn initial test run 1`] = `
false
`

exports[`test/watch.js TAP run tests on changes new file added > log after spawn 1`] = `
change new.js
running tests
- 3.test.js


`

exports[`test/watch.js TAP run tests on changes new file added > logs 1`] = `

`

exports[`test/watch.js TAP run tests on changes new file added > spawn test for new file 1`] = `
3.test.js

`
