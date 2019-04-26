/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap/uncaught-exception.js TAP > exit status 1`] = `
Object {
  "code": 1,
  "signal": null,
}
`

exports[`test/tap/uncaught-exception.js TAP > stderr 1`] = `

`

exports[`test/tap/uncaught-exception.js TAP > stdout 1`] = `
TAP version 13
ok 1 - this is fine
ok 2 - i am sure things are ok
not ok 3 - poop
  ---
  at:
    line: #
    column: #
    file: test/tap/uncaught-exception.js
  source: |2
      t.pass('this is fine')
      setTimeout(() => { throw new Error('poop') })
    --^
      t.pass('i am sure things are ok')
    }
  tapCaught: uncaughtException
  test: TAP
  ...

1..3
# failed 1 of 3 tests
# {time}

`
