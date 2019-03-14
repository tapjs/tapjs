var t = require('tap')

var tapContent = function () {/*
TAP version 13
1..2
ok 1 this is fine
  ---
  message: 1 passed
  ...
not ok 2
  ---
  message: 2 failed
  ...
*/}.toString().split('\n').slice(1, -1).join('\n')

var P = require('../')
var etoa = require('events-to-array')
var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener', 'line', 'version' ]
var p = new P({ passes: true })
var events = etoa(p, ignore)
p.end(tapContent)
t.matchSnapshot(events, 'saw expected events')
