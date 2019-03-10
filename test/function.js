const t = require('tap')
const yaml = require('../')
function foo () {
  return 'i have a name'
}

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

const anon = function () { throw 'do not call' }

const misnamed = function john () {throw 'do not call'}
Object.defineProperty(misnamed, 'name', { value: 'jack' })

const x = (function () {
  return (x) => 'no name'
})()

const y = (function () {
  return y => 'yolo'
})()

const arrow = (x, y, z) => 'time flies like me'

const arrowBraces = (x, y, z) => {
  'fruit flies like me'
  throw 'do not call'
}

const obj = {
  f: foo,
  a: anon,
  m: misnamed,
  s: spacey,
  b: x,
  y: y,
  c: arrow,
  d: arrowBraces,
}

const s1 = yaml.stringify(obj)
t.matchSnapshot(s1, 'first stringify')
const p1 = yaml.parse(s1)
t.matchSnapshot(p1, 'parsed stringified')
// the parsed functions are all no-ops.
for (const [key,fn] of Object.entries(p1)) {
  t.equal(fn(), undefined)
  t.equal(fn.name, obj[key].name)
}
const s2 = yaml.stringify(p1)
t.equal(s2, s1, 'second stringify matches first')
