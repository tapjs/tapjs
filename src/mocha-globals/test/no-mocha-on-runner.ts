import tap from 'tap'
tap.context = Symbol.for('tap.isRunner')
import {
  mounted,
  plugin,
} from '../dist/esm/index.js'

const t = tap.applyPlugin(plugin)
t.equal(mounted(), undefined, 'not mounted automatically on runner')
