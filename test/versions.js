'use strict'

const t = require('..')

const versions = require('libtap/versions')
const ourVersions = {
  libtap: require('libtap/package.json').version,
  tapParser: require('tap-parser/package.json').version,
  tapYaml: require('tap-yaml/package.json').version,
  tcompare: require('tcompare/package.json').version
}

// Verify we're using the same version of selected libraries as libtap
t.same(versions, ourVersions)
