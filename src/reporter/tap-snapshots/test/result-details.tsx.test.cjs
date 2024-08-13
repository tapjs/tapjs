/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/result-details.tsx > TAP > aggregate error > diags and details 1`] = `
  AT
  SOURCE
  DIFF
  [2mtype: AggregateError[22m
  [2mtapCaught: returnedPromiseRejection[22m
  STACK

  [1m[37merrors: [[39m[22m
    [1m[37m- [39m[2m.nan[22m

    [1m[37m- [39m[22m  AT
        SOURCE
        DIFF
        STACK

    [1m[37m- Error: weird thing got in there somehow[39m[22m
      AT
      SOURCE
      DIFF
      STACK

    [1m[37m- CustomError: hello[39m[22m
      AT
      SOURCE
      DIFF
      [2mtype: CustomError[22m
      STACK

    [1m[37m- Error: 2[39m[22m
      AT {"fileName":"ae.js","lineNumber":9,"columnNumber":17}
      SOURCE
            await Promise.any(
              a.map(async c => {
                throw new Error(String(c), {
      ----------------^
                  cause: c === 5 ? new Error('five') : c,
                })
      DIFF
      STACK ae.js:9:17


      [37m[1mcause: [39m[2m2[22m

    [1m[37m- Error: 3[39m[22m
      AT {"fileName":"ae.js","lineNumber":9,"columnNumber":17}
      SOURCE
            await Promise.any(
              a.map(async c => {
                throw new Error(String(c), {
      ----------------^
                  cause: c === 5 ? new Error('five') : c,
                })
      DIFF
      STACK ae.js:9:17

      [37m[1mcause: [39m[2m3[22m

    [1m[37m- Error: 4[39m[22m
      AT {"fileName":"ae.js","lineNumber":9,"columnNumber":17}
      SOURCE
            await Promise.any(
              a.map(async c => {
                throw new Error(String(c), {
      ----------------^
                  cause: c === 5 ? new Error('five') : c,
                })
      DIFF
      STACK ae.js:9:17


      [37m[1mcause: [39m[2m4[22m

    [1m[37m- Error: 5[39m[22m
      AT {"fileName":"ae.js","lineNumber":9,"columnNumber":17}
      SOURCE
            await Promise.any(
              a.map(async c => {
                throw new Error(String(c), {
      ----------------^
                  cause: c === 5 ? new Error('five') : c,
                })
      DIFF
      STACK ae.js:9:17


      [1m[37mcause: Error: five[39m[22m
      AT {"fileName":"ae.js","lineNumber":10,"columnNumber":30}
      SOURCE
              a.map(async c => {
                throw new Error(String(c), {
                  cause: c === 5 ? new Error('five') : c,
      -----------------------------^
                })
              }),
      DIFF
      STACK ae.js:10:30

  [1m[37m][39m[22m
`

exports[`test/result-details.tsx > TAP > diff > diags and details 1`] = `
  AT {"mock":"callsite"}
  SOURCE mock source
  DIFF mock diff
  [2mcompare: ===[22m
  [2msome:[22m
  [2m  other:[22m
  [2m    diags: true[22m
  STACK mock stack
`

exports[`test/result-details.tsx > TAP > error that is not a string > diags and details 1`] = `
  AT {"mock":"callsite"}
  SOURCE mock source
  DIFF mock diff
  [2merror:[22m
    number: 42069
    msg: lolz
  STACK mock stack
`

exports[`test/result-details.tsx > TAP > error with cause > diags and details 1`] = `
  AT {"fileName":"ec.js","lineNumber":20,"columnNumber":7,"typeName":"Test"}
  SOURCE t.test('parent', t => {
    t.test('child', t => {
      t.error(e)
  ------^
      t.end()
    })

  DIFF
  STACK Test.<anonymous> (ec.js:20:7)
  ec.js:18:3

  [1m[37mcause: Error: hello[39m[22m
  AT {"fileName":"ec.js","lineNumber":2,"columnNumber":11}
  SOURCE import t from 'tap'
  const e = new Error('hello', {
  ----------^
    cause: new SyntaxError('xyz', {
      cause: {

  DIFF
  STACK ec.js:2:11


  [1m[37mcause: SyntaxError: xyz[39m[22m
  AT {"fileName":"ec.js","lineNumber":3,"columnNumber":10}
  SOURCE import t from 'tap'
  const e = new Error('hello', {
    cause: new SyntaxError('xyz', {
  ---------^
      cause: {
        some: 'stuff',

  DIFF
  [2mtype: SyntaxError[22m
  STACK ec.js:3:10


  [1m[37mcause: [39m[22m
  AT
  SOURCE
  DIFF
  [2msome: stuff[22m
  STACK just a string
  not something we can parse
  oh well


  [1m[37mcause: Error: this is the message[39m[22m
  AT
  SOURCE
  DIFF
  [2ma: cause[22m
  [2mwith: message[22m
  STACK

  [1m[37mcause: Error: deeper[39m[22m
  AT {"fileName":"ec.js","lineNumber":11,"columnNumber":16}
  SOURCE with: 'message',
          message: 'this is the message',
          cause: new Error('deeper', {
  ---------------^
            cause: true,
          }),

  DIFF
  STACK ec.js:11:16


  [37m[1mcause: [39m[2mtrue[22m
`

exports[`test/result-details.tsx > TAP > error without code > diags and details 1`] = `
  AT {"mock":"callsite"}
  SOURCE mock source
  DIFF mock diff
  [2merror:[22m message
  STACK mock stack
`

exports[`test/result-details.tsx > TAP > no diff, but expected and actual > generated diff 1`] = `
  AT {"mock":"callsite"}
  SOURCE mock source
  DIFF --- expected
  +++ actual
  @@ -1,3 +1,5 @@
   Object {
  -  "something": true,
  +  "some": Object {
  +    "thing": true,
  +  },
   }

  [2moperator: deepEqual[22m
  STACK mock stack
`

exports[`test/result-details.tsx > TAP > result with only known diags > diags and details 1`] = `
  AT {"mock":"callsite"}
  SOURCE mock source
  DIFF mock diff
  [2merror:[22m message
  [2mcode:[22m ERR_EXPECTED
  STACK mock stack
`
