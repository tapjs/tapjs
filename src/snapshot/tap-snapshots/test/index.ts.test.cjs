/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > config 1`] = `
Object {
  "snapshot": Object {
    "description": String(
      Generate snapshot files for \`t.matchSnapshot()\`
                        assertions.
      
                        Defaults to true if the \`TAP_SNAPSHOT\` environment variable
                        is set to \`1\`, or if the \`npm_lifecycle_event\` environment
                        variable is set to either \`snap\` or \`snapshot\`.
      
                        That is, if you put \`"scripts": { "snap": "tap" }\` in your
                        package.json file, then \`npm run snap\` will generate
                        snapshots.
          
    ),
    "short": "S",
    "type": "boolean",
  },
}
`

exports[`test/index.ts > TAP > just some basic snapshots > array 1`] = `
Array [
  "x",
  "y",
  "z",
]
`

exports[`test/index.ts > TAP > just some basic snapshots > null 1`] = `
null
`

exports[`test/index.ts > TAP > just some basic snapshots > null object 1`] = `
Null Object {
  "a": 1,
}
`

exports[`test/index.ts > TAP > just some basic snapshots > object 1`] = `
Object {
  "a": 1,
}
`

exports[`test/index.ts > TAP > just some basic snapshots > regexp 1`] = `
/xyz/
`

exports[`test/index.ts > TAP > just some basic snapshots > resolve match 1`] = `
Object {
  "p": true,
}
`

exports[`test/index.ts > TAP > just some basic snapshots > string 1`] = `
hello
`
