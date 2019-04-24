// test/async.js
// this is a silly test.
var tap = require('tap')
var fs = require('fs')
tap.test('some async stuff', childTest => {
  fs.readdir(__dirname, (er, files) => {
    if (er) {
      throw er // tap will handle this
    }
    childTest.match(files.join(','), /\basync\.js\b/)
    childTest.end()
  })
})

tap.test('this waits until after', childTest => {
  // no asserts?  no problem!
  // the lack of throwing means "success"
  childTest.end()
})
