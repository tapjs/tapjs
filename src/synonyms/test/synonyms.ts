import t from 'tap'
import { synonyms } from '../dist/esm/synonyms.js'
t.matchSnapshot(synonyms)
