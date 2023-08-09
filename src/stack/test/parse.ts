import t from 'tap'
import {
  isCompiledCallSiteLine,
  parseCallSiteLine,
} from '../dist/mjs/parse.js'

t.equal(isCompiledCallSiteLine({}), false)
t.equal(isCompiledCallSiteLine(null), false)

const cases = [
  '    at Object.[foo] (__dirname/generate-parse-fixture.js:420:69)',
  '    at Object.<anonymous> (__dirname/generate-parse-fixture.js:420:69)',
  '    at Module._compile (module.js:571:32)',
  '    at Object.Module._extensions..js (module.js:580:10)',
  '    at Module.load (module.js:488:32)',
  '    at tryModuleLoad (module.js:447:12)',
  '    at Function.Module._load (module.js:439:3)',
  '    at Module.runMain (module.js:605:10)',
  '    at run (bootstrap_node.js:418:7)',
  '    at startup (bootstrap_node.js:139:9)',
  '    at Object.asdf ][)( \x00\x01\x02\x03\x1B[44;37m foo (__dirname/generate-parse-fixture.js:420:69)',
  '    at Object.asdf (__dirname/generate-parse-fixture.js:420:69) (__dirname/generate-parse-fixture.js:420:69)',
  '    at Object.eval (__dirname/generate-parse-fixture.js:420:69)',
  '    at eval (eval at <anonymous> (__dirname/generate-parse-fixture.js:420:69), <anonymous>:1:5)',
  '    at Object.a (s) d [f] (__dirname/generate-parse-fixture.js:420:69)',
  '    at eval (eval at fooeval (a file with eval .js:1:23), <anonymous>:1:5)',
  '    at fooeval (a file with eval .js:1:23)',
  '    at a file with eval .js:1:41',
  '    at ContextifyScript.Script.runInContext (vm.js:32:29)',
  '    at ContextifyScript.Script.runInNewContext (vm.js:38:15)',
  '    at Object.exports.runInNewContext (vm.js:69:17)',
  '    at eval (eval at <anonymous> (a file with eval .js:1:1), <anonymous>:1:5)',
  '    at a file with eval .js:1:1',
  '    at Object.function ctor (file.js:1:2)     <anonymous> (__dirname/generate-parse-fixture.js:420:69)',
  '    at eval (eval at <anonymous> (__dirname/generate-parse-fixture.js:420:69), <anonymous>:3:5)',
  '    at Object.[Symbol.iterator] (__dirname/generate-parse-fixture.js:420:69)',
  '    at Classy.[Symbol.iterator] (__dirname/generate-parse-fixture.js:420:69)',
  '    at [some (weird) [<symbolism>]] (__dirname/generate-parse-fixture.js:420:69)',
  '    at Object.[some (weird) [<symbolism>]] [as foo] (__dirname/generate-parse-fixture.js:420:69)',
  '    at OtherClass.[some (weird) [<symbolism>]] [as foo] (__dirname/generate-parse-fixture.js:420:69)',
  '    at Object.a (w) [<s>] (__dirname/generate-parse-fixture.js:420:69)',
  '    at evalmachine.<anonymous>:1:17',
  '    at x (     f[i](l<e>:.js:1:2)    :1:33)',
  '    at      f[i](l<e>:.js:1:2)    :2:1',
  '    at new Foo (__dirname/generate-parse-fixture.js:420:69)',
  '    at arr.map.n (__dirname/generate-parse-fixture.js:420:69)',
  '    at Array.map (native)',
  '    at native',
  '    at some/file.js:1:2',
  '    at dist/file.js:100:200 (src/file.ts:50:60)',
  '    at blorp (src/file.ts:50:60)',
  '    at blorp (dist/file.js:100:200) (src/file.ts:50:60)',
  '    at SomeObject.blorp (dist/file.js:100:200) (src/file.ts:50:60)',
  '    at Cls.[foo (paren) weird] (file.ts:1:3)',
  '    at [(funky:433:42)] (eval at Object.evalError (test/fixtures/eval-error.js:9:5) (test/fixtures/eval-error.ts:7:3), <anonymous>:99:22 (<anonymous>:2:9))',
  '    at Object.[some (weird) [<symbolism>]] [as foo] (__dirname/generate-parse-fixture.js:420:69)',
  '    at Foo.get stringStack (test/fixtures/eval-call-site.ts:17:33)',
]

for (const c of cases) {
  const d = c.replace(/^\s+at /, '')
  t.test(d, t => {
    const cp = parseCallSiteLine(c)
    t.matchSnapshot(cp)
    t.strictSame(parseCallSiteLine(d), cp, 'same without at')
    t.end()
  })
}
