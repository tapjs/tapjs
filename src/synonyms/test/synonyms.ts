import t from 'tap'
import { synonyms } from '../dist/mjs/synonyms.js'
t.matchSnapshot(synonyms)
