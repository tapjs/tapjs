import { readFileSync } from 'fs'
// import it so that node sees the source map
import './error.js'
const errFile = require.resolve('./error.js')
const code = readFileSync(errFile, 'utf8') + '\nerror()'
const evalError = () => {
  eval(code)
}
evalError()
