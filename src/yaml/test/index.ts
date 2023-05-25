import t from 'tap'
import * as tapYaml from '../'
// not much to test here, just that it loads and is there.
t.matchSnapshot(tapYaml, 'root api is a thing')
