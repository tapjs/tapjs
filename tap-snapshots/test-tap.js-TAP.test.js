/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tap.js TAP ok > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP ok > stdout 1`] = `
TAP version 13
ok 1 - fine
1..1
# {time}

`

exports[`test/tap.js TAP ok > stderr 1`] = `

`

exports[`test/tap.js TAP notOk > exit status 1`] = `
{ code: 1, signal: null }
`

exports[`test/tap.js TAP notOk > stdout 1`] = `
TAP version 13
not ok 1 - expected
  ---
  at:
    line: #
    column: #
    file: test/tap.js
  source: |
    notOk: t => t.fail('expected'),
  stack: |
    {STACK}
  ...

1..1
# failed 1 test
# {time}

`

exports[`test/tap.js TAP notOk > stderr 1`] = `

`

exports[`test/tap.js TAP bail > exit status 1`] = `
{ code: 1, signal: null }
`

exports[`test/tap.js TAP bail > stdout 1`] = `
TAP version 13
Bail out! cannot proceed

`

exports[`test/tap.js TAP bail > stderr 1`] = `

`

exports[`test/tap.js TAP plan 0 > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP plan 0 > stdout 1`] = `
TAP version 13
1..0 # skip it all
# {time}

`

exports[`test/tap.js TAP plan 0 > stderr 1`] = `

`

exports[`test/tap.js TAP plan unsatisied > exit status 1`] = `
{ code: 1, signal: null }
`

exports[`test/tap.js TAP plan unsatisied > stdout 1`] = `
TAP version 13
1..99
# test count(0) != plan(99)
# failed 1 test
# {time}

`

exports[`test/tap.js TAP plan unsatisied > stderr 1`] = `

`

exports[`test/tap.js TAP too much > exit status 1`] = `
{ code: 1, signal: null }
`

exports[`test/tap.js TAP too much > stdout 1`] = `
TAP version 13
1..1
ok 1 - a little
# {time}

`

exports[`test/tap.js TAP too much > stderr 1`] = `

Error: test count exceeds plan
    {STACK}
{ name: 'TAP', test: 'TAP', plan: 1 }

`

exports[`test/tap.js TAP stdout epipe > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP stdout epipe > stdout 1`] = `
TAP version 13
ok 1 - this is fine
1..1
# {time}

`

exports[`test/tap.js TAP stdout epipe > stderr 1`] = `

`

exports[`test/tap.js TAP close even if exiting hard > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP close even if exiting hard > stdout 1`] = `
TAP version 13
ok 1 - make sure, really
1..1
# {time}

`

exports[`test/tap.js TAP close even if exiting hard > stderr 1`] = `

`

exports[`test/tap.js TAP unhandled promise > exit status 1`] = `
{ code: 1, signal: null }
`

exports[`test/tap.js TAP unhandled promise > stdout 1`] = `
TAP version 13
ok 1 - fine, i promise
not ok 2 - broken
  ---
  at:
    line: #
    column: #
    file: test/tap.js
  source: |
    Promise.reject(new Error('broken'))
  stack: |
    {STACK}
  test: TAP
  ...

1..2
# failed 1 of 2 tests
# {time}

`

exports[`test/tap.js TAP unhandled promise > stderr 1`] = `

`

exports[`test/tap.js TAP teardown event loop > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP teardown event loop > stdout 1`] = `
TAP version 13
ok 1 - fine
1..1
# {time}

`

exports[`test/tap.js TAP teardown event loop > stderr 1`] = `

`

exports[`test/tap.js TAP teardown throw > exit status 1`] = `
{ code: 1, signal: null }
`

exports[`test/tap.js TAP teardown throw > stdout 1`] = `
TAP version 13
ok 1 - x
1..1
# {time}

`

exports[`test/tap.js TAP teardown throw > stderr 1`] = `

Error: poop
    {STACK}
{ name: 'TAP', test: 'TAP' }

`

exports[`test/tap.js TAP process.exitCode polyfill > exit status 1`] = `
{ code: 1, signal: null }
`

exports[`test/tap.js TAP process.exitCode polyfill > stdout 1`] = `
TAP version 13
not ok 1 - v0.10.420
  ---
  at:
    line: #
    column: #
    file: test/tap.js
  source: |
    t.fail(process.version)
  stack: |
    {STACK}
  ...

1..1
# failed 1 test
# {time}

`

exports[`test/tap.js TAP process.exitCode polyfill > stderr 1`] = `

`

exports[`test/tap.js TAP TAP_DEBUG=1 > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP TAP_DEBUG=1 > stdout 1`] = `
TAP version 13
# this is fine
1..0
# {time}

`

exports[`test/tap.js TAP TAP_DEBUG=1 > stderr 1`] = `
TAP {pid} TAP: PROCESSING(TAP) 2
TAP {pid} TAP: > STRING
TAP {pid} TAP: LINE "TAP version 13\\n"
TAP {pid} TAP: < already processing
TAP {pid} TAP: > STRING
TAP {pid} TAP: LINE "# this is fine\\n"
TAP {pid} TAP: done processing [] false
TAP {pid} TAP: PROCESSING(TAP) 1
TAP {pid} TAP: > METHOD
TAP {pid} TAP: END implicit=true
TAP {pid} TAP: END(TAP) implicit plan 0
TAP {pid} TAP: END implicit=true
TAP {pid} TAP: < already processing
TAP {pid} TAP: > STRING
TAP {pid} TAP: LINE "1..0\\n"
TAP {pid} TAP: > EOF TAP
TAP {pid} TAP: ONCOMPLETE "TAP" {"ok":true,"count":0,"pass":0,"fail":0,"bailout":false,"todo":0,"skip":0,"plan":{"start":1,"end":0,"skipAll":true,"skipReason":"","comment":""},"failures":[]}
TAP {pid} TAP: done processing [] false

`

exports[`test/tap.js TAP NODE_DEBUG=tap > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP NODE_DEBUG=tap > stdout 1`] = `
TAP version 13
1..0
# {time}

`

exports[`test/tap.js TAP NODE_DEBUG=tap > stderr 1`] = `
TAP {pid} TAP: END implicit=true
TAP {pid} TAP: PROCESSING(TAP) 3
TAP {pid} TAP: > STRING
TAP {pid} TAP: LINE "TAP version 13\\n"
TAP {pid} TAP: < already processing
TAP {pid} TAP: > STRING
TAP {pid} TAP: LINE "1..0\\n"
TAP {pid} TAP: > METHOD
TAP {pid} TAP: END implicit=true
TAP {pid} TAP: < already processing
TAP {pid} TAP: > EOF TAP
TAP {pid} TAP: ONCOMPLETE "TAP" {"ok":true,"count":0,"pass":0,"fail":0,"bailout":false,"todo":0,"skip":0,"plan":{"start":1,"end":0,"skipAll":true,"skipReason":"","comment":""},"failures":[]}
TAP {pid} TAP: done processing [] false

`

exports[`test/tap.js TAP TAP_GREP > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP TAP_GREP > stdout 1`] = `
TAP version 13
# Subtest: axo
    ok 1 - yellow # SKIP filter: /^y$/i
    # Subtest: Y
        1..0
    ok 2 - Y # {time}
    
    # Subtest: y
        # Subtest: this too
            1..0
        ok 1 - this too # {time}
        
        1..1
    ok 3 - y # {time}
    
    1..3
    # skip: 1
ok 1 - axo # {time}

ok 2 - nope # SKIP filter: /x/
1..2
# skip: 1
# {time}

`

exports[`test/tap.js TAP TAP_GREP > stderr 1`] = `

`

exports[`test/tap.js TAP TAP_GREP_INVERT > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP TAP_GREP_INVERT > stdout 1`] = `
TAP version 13
# Subtest: yes this one
    ok 1 - Y # SKIP filter out: /^y$/i
    # Subtest: yellow
        1..0
    ok 2 - yellow # {time}
    
    # Subtest: apple
        # Subtest: this too
            1..0
        ok 1 - this too # {time}
        
        1..1
    ok 3 - apple # {time}
    
    1..3
    # skip: 1
ok 1 - yes this one # {time}

ok 2 - axo # SKIP filter out: /x/
1..2
# skip: 1
# {time}

`

exports[`test/tap.js TAP TAP_GREP_INVERT > stderr 1`] = `

`

exports[`test/tap.js TAP TAP_ONLY > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP TAP_ONLY > stdout 1`] = `
TAP version 13
# Subtest: only this one
    1..0
ok 1 - only this one # {time}

ok 2 - not this one # SKIP filter: only
1..2
# skip: 1
# {time}

`

exports[`test/tap.js TAP TAP_ONLY > stderr 1`] = `

`

exports[`test/tap.js TAP timeout sigterm > exit status 1`] = `
{ code: null, signal: 'SIGTERM' }
`

exports[`test/tap.js TAP timeout sigterm > stdout 1`] = `
TAP version 13
ok 1 - fine
not ok 2 - timeout!
  ---
  expired: TAP
  handles:
    - type: Timer
  signal: SIGTERM
  stack: |
    {STACK}
  test: TAP
  ...

1..2
# failed 1 of 2 tests
# {time}

`

exports[`test/tap.js TAP timeout sigterm > stderr 1`] = `

`

exports[`test/tap.js TAP timeout sigterm with handle > exit status 1`] = `
{ code: null, signal: 'SIGTERM' }
`

exports[`test/tap.js TAP timeout sigterm with handle > stdout 1`] = `
TAP version 13
ok 1 - fine
not ok 2 - timeout!
  ---
  expired: TAP
  handles:
    - type: Timer
  signal: SIGTERM
  stack: |
    {STACK}
  test: TAP
  ...

1..2
# failed 1 of 2 tests
# {time}

`

exports[`test/tap.js TAP timeout sigterm with handle > stderr 1`] = `

`

exports[`test/tap.js TAP timeout sigterm many times > exit status 1`] = `
{ code: null, signal: 'SIGTERM' }
`

exports[`test/tap.js TAP timeout sigterm many times > stdout 1`] = `
TAP version 13
ok 1 - fine
not ok 2 - timeout!
  ---
  expired: TAP
  requests:
    - type: FSReqWrap
  signal: SIGTERM
  stack: |
    {STACK}
  test: TAP
  ...

1..2
# failed 1 of 2 tests
# {time}

`

exports[`test/tap.js TAP timeout sigterm many times > stderr 1`] = `

`

exports[`test/tap.js TAP autoend(false) with teardown > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP autoend(false) with teardown > stdout 1`] = `
TAP version 13
ok 1 - this is fine
1..1
# {time}
tear it down

`

exports[`test/tap.js TAP autoend(false) with teardown > stderr 1`] = `

`

exports[`test/tap.js TAP autoend=false with teardown > exit status 1`] = `
{ code: 0, signal: null }
`

exports[`test/tap.js TAP autoend=false with teardown > stdout 1`] = `
TAP version 13
ok 1 - this is fine
1..1
# {time}
tear it down

`

exports[`test/tap.js TAP autoend=false with teardown > stderr 1`] = `

`
