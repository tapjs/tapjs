// put tests here
import t from 'tap'
import * as core from '../dist/mjs/index.js'
t.equal(core.proc, process)
t.equal(core.env, process.env)
t.equal(core.argv, process.argv)
t.equal(t, core.tap())
