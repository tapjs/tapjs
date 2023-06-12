import { readFileSync } from 'fs'
// import it so that node sees the source map
import './eval-error.js'
const errFile = require.resolve('./eval-error.js')
const code = readFileSync(errFile, 'utf8') + '\nevalError()'
eval(code)
