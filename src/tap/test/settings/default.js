'use strict'

const t = require('../..')
const settings = require('../../settings.js')
const cleanForSnapshot = require('./clean-for-snapshot.js')

t.ok(Array.isArray(settings.stackUtils.internals), 'Array.isArray(settings.stackUtils.internals)')
t.not(settings.stackUtils.internals.length, 0)

t.matchSnapshot(cleanForSnapshot(settings))
