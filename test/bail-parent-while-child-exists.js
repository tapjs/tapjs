var tapContent = function () {/*
TAP version 13
ok 1 - this is fine
# Subtest: child
    # this is a child
Bail out! # saw that coming
*/}.toString().split('\n').slice(1, -1).join('\n')

var P = require('../')
var etoa = require('events-to-array')
var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener', 'line' ]
var p = new P()
var events = etoa(p, ignore)
p.end(tapContent)

require('tap').matchSnapshot(events)
