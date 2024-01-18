import t from 'tap'
const logs = t.capture(console, 'log').args
import { debug } from '../dist/esm/debug.js'
import { TapConfig } from '@tapjs/config'
import { parse } from 'tap-yaml'
const config = await TapConfig.load()
await debug([], config)
const output = logs()[0]?.[0]
t.type(output, 'string')
const parsed = parse(output)
t.match(parsed, {
  tap: String,
  config: {},
  plugins: String,
  versions: {
    tap: String,
    '@tapjs/core': String,
    '@tapjs/run': String,
    plugins: {
      '@tapjs/after': String,
    },
  },
  'npm ls': {
    status: 0,
    signal: null,
    output: [null, String, ''],
    pid: Number,
    stderr: '',
  },
  env: String,
})
