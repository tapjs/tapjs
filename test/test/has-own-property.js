'use strict'

var tap = require('../..')

Object.prototype[ 'Answer to the Ultimate Question of Life, the Universe, and Everything' ] = 42

function error() {
    throw new Error('fake')
}

tap.test('obj.hasOwnProperty(key) checks', function (test) {
    test.throws(error, 'this fails without internal checks')
    test.end()
})
