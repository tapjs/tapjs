'use strict'
const tap = require('../')
const mocha = require('../lib/mocha.js')
const synonyms = require('../lib/synonyms.js')

function testSynonyms(settings) {
  let warnings;

  process.emitWarning = (msg) => {
    warnings.push(msg)
  }

  for (const [id, args] of Object.entries(settings)) {
    tap.test(`${id} synonyms`, t => {
      for (const fn of Object.values(synonyms[id])) {
        warnings = []
        t[fn](...[].concat(args))
        if (id === fn) {
          t.equal(warnings.length, 0, `no deprecation for ${fn}`)
        } else {
          t.same(
            warnings,
            [`${fn}() is deprecated, use ${id}() instead`],
            `deprecation for ${fn}`
          )
        }
      }

      t.end()
    })
  }
}

tap.test('check exports', async t => {
  t.type(tap, 'object')
  t.equal(tap.mocha, mocha)
  t.equal(tap.mochaGlobals, mocha.global)
  t.equal(tap.synonyms, synonyms)
})

testSynonyms({
  ok: true,
  notOk: false,
  error: null,
  throws: () => { throw new Error('test') },
  doesNotThrow: () => {},
  equal: [1, 1],
  not: [2 + 2, 5],
  same: [1, '1'],
  notSame: [1, '2'],
  strictSame: [{a: 1}, {a: 1}],
  strictNotSame: [{a: 1}, {a: 2}],
  match: [{a: 1, b: 1}, {a: Number}],
  notMatch: [{a: 1, b: 1}, {a: String}],
  type: ['test', 'string']
})
