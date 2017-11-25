var tap = require('../..')

setInterval(function () {
  console.log('this should not happen')
}, 1000)

console.log('log in root, before child')
tap.test('child', function (t) {
  console.log('log in child, before grandchild')
  t.test('grandchild', function (t) {
    console.log('log in grandchild, before bailout')
    t.bailout('cannot continue')
    console.log('log in grandchild, after bailout')
  })
  console.log('log in child, after grandchild')
})
console.log('log in root, after child')
