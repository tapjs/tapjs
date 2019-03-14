var tapContent = function () {/*
TAP version 13
ok 1 - this is fine
not ok 2 - going to bail
Bail out! # saw that coming
*/}.toString().split('\n').slice(1, -1).join('\n')

var P = require('../')
var etoa = require('events-to-array')
var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener', 'line' ]
var p = new P()
var events = etoa(p, ignore)
p.on('bailout', function (reason) {
  p.bailout('new ' + reason)
})
p.end(tapContent)
require('tap').matchSnapshot(events)
