if (typeof Promise === 'undefined')
  Promise = require('bluebird')

var tap = require('../..')
tap.comment('this is fine')

function Poo () {
  // Initially set the loaded status to a rejected promise
  this.dump = Promise.reject(new Error('💩'))
}

new Poo()
