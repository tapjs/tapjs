import t from 'tap'
import jack from '../dist/cjs/jack.js'
t.matchSnapshot(jack.toJSON())
t.throws(() => jack.setConfigValues({ 'coverage-reporter': ['invalid'] }))
