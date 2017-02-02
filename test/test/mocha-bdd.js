if (typeof describe === 'undefined')
  require('../..').mochaGlobals()
if (typeof Promise === 'undefined')
  Promise = require('bluebird')

describe('Array', function () {
  before('name', function (cb) {
    console.log('before')
    setTimeout(cb)
  })

  after(function () {
    console.log('after')
  })

  after('named', function () {
    console.log('after named')
  })

  beforeEach(function () {
    console.log('beforeEach', this.name)
    return new Promise(function (res) {
      setTimeout(res)
    })
  })

  afterEach(function (cb) {
    console.log('afterEach', this.name)
    return setTimeout(cb)
  })

  describe('#indexOf()', function() {
    context('when not present', function() {
      it('should not throw an error', function() {
        console.log('during', this.name)
      })
      it('should return -1', function() {
        console.log('during', this.name)
      })
    })
    context('when present', function() {
      it('should return the index where the element first appears in the array', function() {
        console.log('during', this.name)
      })
    })
  })
})
