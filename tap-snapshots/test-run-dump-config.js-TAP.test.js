/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/dump-config.js TAP empty rc file > output 1`] = `
bail: false
branches: 100
browser: true
changed: false
check-coverage: true
color: true
comments: false
coverage: false
coverage-map: null
coverage-report: null
debug: false
esm: false
functions: 100
grep: []
help: false
invert: false
jobs: {number}
lines: 100
node-arg: []
nyc-arg: []
nyc-help: false
nyc-version: false
only: false
output-dir: null
output-file: null
parser-version: false
rcfile: cli-tests/taprc
reporter: base
reporter-arg: []
save: null
show-process-tree: false
statements: 100
test-arg: []
test-env: []
test-ignore: /(^|/)cli-tests-[0-9]+/
test-regex: ((\\/|^)(tests?|__tests?__)\\/.*|\\.(test|spec))\\.(mjs|[jt]sx?)$
timeout: 30
version: false
versions: false


`

exports[`test/run/dump-config.js TAP good rc file > output 1`] = `
bail: false
branches: 100
browser: true
changed: false
check-coverage: true
color: false
comments: false
coverage: false
coverage-map: null
coverage-report: null
debug: false
esm: false
functions: 100
grep: []
help: false
invert: false
jobs: {number}
lines: 100
node-arg: []
nyc-arg: []
nyc-help: false
nyc-version: false
only: false
output-dir: null
output-file: null
parser-version: false
rcfile: cli-tests/taprc
reporter: spec
reporter-arg: []
save: null
show-process-tree: false
statements: 100
test-arg: []
test-env: []
test-ignore: /(^|/)cli-tests-[0-9]+/
test-regex: ((\\/|^)(tests?|__tests?__)\\/.*|\\.(test|spec))\\.(mjs|[jt]sx?)$
timeout: 30
version: false
versions: false


`

exports[`test/run/dump-config.js TAP package.json parsing bad > output 1`] = `
bail: false
branches: 100
browser: true
changed: false
check-coverage: false
color: false
comments: false
coverage: false
coverage-map: null
coverage-report: null
debug: false
esm: false
functions: 100
grep: []
help: false
invert: false
jobs: {number}
lines: 100
node-arg: []
nyc-arg: []
nyc-help: false
nyc-version: false
only: false
output-dir: null
output-file: null
parser-version: false
rcfile: {CWD}/cli-tests/.taprc
reporter: tap
reporter-arg: []
save: null
show-process-tree: false
statements: 100
test-arg: []
test-env: []
test-ignore: $.
test-regex: ((\\/|^)(tests?|__tests?__)\\/.*|\\.(test|spec))\\.(mjs|[jt]sx?)$
timeout: 30
version: false
versions: false


`

exports[`test/run/dump-config.js TAP package.json parsing good > output 1`] = `
bail: false
branches: 100
browser: true
changed: false
check-coverage: false
color: false
comments: false
coverage: false
coverage-map: null
coverage-report: null
debug: false
esm: false
functions: 100
grep: []
help: false
invert: false
jobs: {number}
lines: 69
node-arg: []
nyc-arg: []
nyc-help: false
nyc-version: false
only: false
output-dir: null
output-file: null
parser-version: false
rcfile: {CWD}/cli-tests/.taprc
reporter: tap
reporter-arg: []
save: null
show-process-tree: false
statements: 100
test-arg: []
test-env: []
test-ignore: $.
test-regex: ((\\/|^)(tests?|__tests?__)\\/.*|\\.(test|spec))\\.(mjs|[jt]sx?)$
timeout: 30
version: false
versions: false


`

exports[`test/run/dump-config.js TAP package.json parsing missing > output 1`] = `
bail: false
branches: 100
browser: true
changed: false
check-coverage: false
color: false
comments: false
coverage: false
coverage-map: null
coverage-report: null
debug: false
esm: false
functions: 100
grep: []
help: false
invert: false
jobs: {number}
lines: 100
node-arg: []
nyc-arg: []
nyc-help: false
nyc-version: false
only: false
output-dir: null
output-file: null
parser-version: false
rcfile: {CWD}/cli-tests/.taprc
reporter: tap
reporter-arg: []
save: null
show-process-tree: false
statements: 100
test-arg: []
test-env: []
test-ignore: $.
test-regex: ((\\/|^)(tests?|__tests?__)\\/.*|\\.(test|spec))\\.(mjs|[jt]sx?)$
timeout: 30
version: false
versions: false


`

exports[`test/run/dump-config.js TAP short options as well as short flags > output 1`] = `
bail: true
branches: 100
browser: true
changed: false
check-coverage: true
color: false
comments: false
coverage: false
coverage-map: null
coverage-report: null
debug: false
esm: false
functions: 100
grep: []
help: false
invert: false
jobs: {number}
lines: 100
node-arg: []
nyc-arg: []
nyc-help: false
nyc-version: false
only: false
output-dir: null
output-file: null
parser-version: false
rcfile: {CWD}/.taprc
reporter: tap
reporter-arg: []
save: null
show-process-tree: false
statements: 100
test-arg: []
test-env: []
test-ignore: /(^|/)cli-tests-[0-9]+/
test-regex: ((\\/|^)(tests?|__tests?__)\\/.*|\\.(test|spec))\\.(mjs|[jt]sx?)$
timeout: 0
version: false
versions: false


`

exports[`test/run/dump-config.js TAP shotgun a bunch of option parsing junk > output 1`] = `
bail: false
branches: 99
browser: false
changed: false
check-coverage: true
color: false
comments: true
coverage: true
coverage-map: null
coverage-report: html
debug: true
esm: false
functions: 100
grep:
  - x
  - /y/i
help: false
invert: false
jobs: {number}
lines: 100
node-arg:
  - --expose-gc
  - --strict
  - --debug-brk
  - --harmony
  - xyz
  - abc
nyc-arg:
  - abc
nyc-help: false
nyc-version: false
only: true
output-dir: null
output-file: out.txt
parser-version: false
rcfile: {CWD}/.taprc
reporter: spec
reporter-arg: []
save: foo.txt
show-process-tree: false
statements: 100
test-arg:
  - xyz
  - abc
test-env: []
test-ignore: /(^|/)cli-tests-[0-9]+/
test-regex: ((\\/|^)(tests?|__tests?__)\\/.*|\\.(test|spec))\\.(mjs|[jt]sx?)$
timeout: 99
version: false
versions: false


`

exports[`test/run/dump-config.js TAP turn color off and back on again > output 1`] = `
bail: false
branches: 100
browser: true
changed: false
check-coverage: true
color: true
comments: false
coverage: false
coverage-map: null
coverage-report: null
debug: false
esm: false
functions: 100
grep: []
help: false
invert: false
jobs: {number}
lines: 100
node-arg: []
nyc-arg: []
nyc-help: false
nyc-version: false
only: false
output-dir: null
output-file: null
parser-version: false
rcfile: {CWD}/.taprc
reporter: base
reporter-arg: []
save: null
show-process-tree: false
statements: 100
test-arg: []
test-env: []
test-ignore: /(^|/)cli-tests-[0-9]+/
test-regex: ((\\/|^)(tests?|__tests?__)\\/.*|\\.(test|spec))\\.(mjs|[jt]sx?)$
timeout: 30
version: false
versions: false


`
