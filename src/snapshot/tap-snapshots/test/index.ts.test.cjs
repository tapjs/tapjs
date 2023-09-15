/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > config 1`] = `
Object {
  "no-snapshot-clean-cwd": Object {
    "description": String(
      Do not clean the current working directory out of snapshots
      
                        May be required when using fixtures or other snapshot data
                        sources that intentionally include strings which happen to
                        match the current working directory.
      
                        Not recommended! It's better to leave this protection on, and
                        edit your fixtures so that they do not include the cwd.
    ),
    "type": "boolean",
  },
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
  "snapshot-clean-cwd": Object {
    "default": true,
    "description": String(
      Automatically clean the current working directory out of
                        snapshot data, replacing it with a token.
      
                        This helps prevent frustrating "works on my machine" when
                        tests capture an error message or file path, but then fail
                        when run on any other system, and so is enabled by default.
    ),
    "type": "boolean",
  },
}
`

exports[`test/index.ts > TAP > curl f > do not get confused by the escape 1`] = `
line 1\\r
line 2\\r
line 3\\r
line 4\\r

`

exports[`test/index.ts > TAP > curl f > escape CRLF line endings 1`] = `
Buffer <
  0000: 6c69 6e65 2031 0d0a 6c69 6e65 2032 0d0a  line.1..line.2..
  0010: 6c69 6e65 2033 0d0a 6c69 6e65 2034 0d0a  line.3..line.4..
>
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
