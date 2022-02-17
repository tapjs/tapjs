/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/types/function.js TAP > first stringify 1`] = `
f: !function |-
  "foo"
  function foo () {
    return 'i have a name'
  }
a: !function |-
  "anon"
  function () { throw 'do not call' }
m: !function |-
  "jack"
  function john () {throw 'do not call'}
s: !function |-
  "spacey"
  function                 spacey              (
    im,

       not, the,
  man,
            they,

    think,

        i,
         am,
    at,
       home

  ) {





  throw 'do not call'

                  ground.control.to.major.tom()







  }
b: !function |-
  ""
  (x) => 'no name'
y: !function |-
  ""
  y => 'yolo'
c: !function |-
  "arrow"
  (x, y, z) => 'time flies like me'
d: !function |-
  "arrowBraces"
  (x, y, z) => {
    'fruit flies like me'
    throw 'do not call'
  }

`

exports[`test/types/function.js TAP > parsed stringified 1`] = `
Object {
  "a": Function anon(),
  "b": Function (x),
  "c": Function arrow(x, y, z),
  "d": Function arrowBraces(x, y, z),
  "f": Function foo(),
  "m": Function jack(),
  "s": Function spacey(im, not, the, man, they, think, i, am, at, home),
  "y": Function (y),
}
`
