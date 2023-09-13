import t from 'tap'
import { options } from '../../dist/esm/repl/chokidar-options.js'
t.matchSnapshot(options)
