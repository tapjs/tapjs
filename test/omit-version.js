var t = require('tap')

var tapContent = function () {/*
TAP version 13
ok 1 - this is fine
1..1
*/}.toString().split('\n').slice(1, -1).join('\n')

var P = require('../')
var etoa = require('events-to-array')
var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener', 'line' ]
var p = new P({ omitVersion: true })
var events = etoa(p, ignore)
p.on('version', function (v) {
  t.fail('should not see version event')
})
var lines = []
p.on('line', lines.push.bind(lines))
p.end(tapContent)
t.matchSnapshot(lines, 'saw expected lines')
t.matchSnapshot(events, 'saw expected events')
