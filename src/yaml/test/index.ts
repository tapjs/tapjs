import t from 'tap'
import * as tapYaml from '../src/index.js'
// not much to test here, just that it loads and is there.
t.matchSnapshot(tapYaml, 'root api is a thing')
