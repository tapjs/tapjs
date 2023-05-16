require('../lib/tap.js').mochaGlobals()
/* standard ignore next */
describe('parent', function () {

  before('name', function () {
    console.error('before')
  });

  after(function () {
    console.error('after')
  });

  beforeEach(function () {
    console.error('beforeEach')
  });

  afterEach(function () {
    console.error('afterEach')
  });

  it('first', function () {
    console.error('first it')
  })
  it('second', function () {
    console.error('second it')
  })

  describe('child 1', function () {
    console.error('in child 1')
    before(function () {
      console.error('before 2')
    });

    after(function () {
      console.error('after 2')
    });

    beforeEach(function () {
      console.error('beforeEach 2')
    });

    afterEach(function () {
      console.error('afterEach 2')
    });

    it('first x', function () {
      console.error('first it')
    })
    it('second', function (done) {
      console.error('second it')
      setTimeout(done)
    })
    describe('gc 1', function () {
      it('first y', function () {
        console.error('first it')
      })
      it('second', function (done) {
        console.error('second it')
        setTimeout(done)
      })
      it('third', function (done) {
        console.error('third it')
        done()
      })
    })
    it('third after gc 1', function () {
      console.error('second it')
    })
  })

  describe('child 2', function () {
    console.error('in child 2')
    it('first z', function () {
      console.error('first it')
    })
    it('second', function (done) {
      console.error('second it')
      setTimeout(done)
    })
    it('third', function (done) {
      console.error('third it')
      done()
    })
  })

  it('third', function () {
    console.error('second it')
  })
})
