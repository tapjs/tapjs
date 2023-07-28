import t from 'tap'
import { options } from '../../dist/repl/chokidar-options.js'
t.matchSnapshot(options)
