module.exports = Deferred

var Promise = require('bluebird')

function Deferred () {
  this.resolve = null
  this.reject = null
  this.promise = new Promise(function (resolve, reject) {
    this.reject = reject
    this.resolve = resolve
  }.bind(this))
}
