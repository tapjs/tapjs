/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/repl.js TAP cls > clear screen 1`] = `
"\\u001b[2J\\u001b[HTAP> "
`

exports[`test/repl.js TAP completer > empty 1`] = `
Array [
  Array [
    "r",
    "u",
    "n",
    "p",
    "c",
    "exit",
    "clear",
    "cls",
  ],
  "",
]
`

exports[`test/repl.js TAP completer > ex 1`] = `
Array [
  Array [
    "exit",
  ],
  "ex",
]
`

exports[`test/repl.js TAP completer > r te 1`] = `
Array [
  Array [
    "r temp/",
    "r test/",
  ],
  "r te",
]
`

exports[`test/repl.js TAP completer > r tes 1`] = `
Array [
  Array [
    "r test/",
  ],
  "r tes",
]
`

exports[`test/repl.js TAP completer > r test/ 1`] = `
Array [
  Array [
    "r test/follow.js",
    "r test/foo/",
  ],
  "r test/",
]
`

exports[`test/repl.js TAP completer > r test/blerg 1`] = `
Array [
  Array [
    "r test/follow.js",
    "r test/foo/",
  ],
  "r test/blerg",
]
`

exports[`test/repl.js TAP completer > r test/fo 1`] = `
Array [
  Array [
    "r test/follow.js",
    "r test/foo/",
  ],
  "r test/fo",
]
`

exports[`test/repl.js TAP completer > r test/fol 1`] = `
Array [
  Array [
    "r test/follow.js",
  ],
  "r test/fol",
]
`

exports[`test/repl.js TAP completer > r test/foo 1`] = `
Array [
  Array [
    "r test/foo/",
  ],
  "r test/foo",
]
`

exports[`test/repl.js TAP completer > u bl/erg 1`] = `
Array [
  Array [
    "u",
  ],
  "u bl/erg",
]
`

exports[`test/repl.js TAP exit > output 1`] = `
null
`

exports[`test/repl.js TAP kill process > killed process 1`] = `
code: null
signal: SIGTERM
TAP> 
`

exports[`test/repl.js TAP manual run tests > ran the suite again 1`] = `
code: 0
signal: null

TAP> 
`

exports[`test/repl.js TAP pause/resume > output 1`] = `
code: null
signal: fake

TAP> code: null
signal: fake

TAP> paused
TAP> resumed
TAP> 
`

exports[`test/repl.js TAP run on change > ran the suite on change 1`] = `
test in progress, please wait

TAP> code: 0
signal: null
TAP> 
`

exports[`test/repl.js TAP save/load history > history file 1`] = `

`

exports[`test/repl.js TAP save/load history > load history 1`] = `
Array [
  "",
]
`

exports[`test/repl.js TAP show help > output 1`] = `
TAP> TAP Repl Commands:

r [<filename>]
  run test suite, or the supplied filename

u [<filename>]
  update snapshots in the suite, or in the supplied filename

n
  run the suite with --changed

p
  pause/resume the file watcher

c [<report style>]
  run coverage report. Default to 'text' style.

exit
  exit the repl

clear
  delete all coverage info and re-run the test suite

cls
  clear the screen
TAP> 
`
