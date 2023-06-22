import t from 'tap'
import { IMPLICIT } from '../dist/cjs/implicit-end-sigil.js'
t.equal(String(IMPLICIT), 'Symbol(implicit end)')
