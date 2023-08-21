/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap-file.ts > TAP > error on stream > must match snapshot 1`] = `
TAP version 14
# Subtest: file input
    1..1
    not ok 1 - oops
      ---
      stack: Timeout._onTimeout (test/tap-file.ts:##:##)
      at:
        fileName: test/tap-file.ts
        lineNumber: ##
        columnNumber: ##
                              tapCaught: tapFileError
      test: file input
      source: |2
          t.equal(subtest?.name, 'file input')
          tapStream.write('TAP version 14\\n1..1\\n')
          setTimeout(() => tapStream.emit('error', new Error('oops')))
        -------------------------------------------^
          t.matchSnapshot(await parent.concat())
          t.end()
      ...
not ok 1 - file input # time={TIME}
  ---
  timeout: 999
  at:
    fileName: test/tap-file.ts
    lineNumber: ##
    columnNumber: ##
      source: |2
      })
      const tapStream = new Minipass<string>({ encoding: 'utf8' })
      const { subtest } = parent.sub<TapFile, TapFileOpts>(TapFile, {
    -----------------------------^
        tapStream,
        parent,
  ...

1..1

`
