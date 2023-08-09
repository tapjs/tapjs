import { dirname } from 'node:path'
import t from 'tap'
import { tapDir } from '../dist/cjs/tap-dir.js'
t.equal(tapDir, dirname(__dirname))
