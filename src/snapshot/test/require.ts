import t from 'tap'
import { req } from '../dist/cjs/require.js'
const { resolve } = require
t.equal(req.resolve('./index.js'), resolve('../dist/cjs/index.js'))
