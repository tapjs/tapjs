import { createRequire } from 'module'
import t from 'tap'
const req = createRequire(import.meta.url)
const reactElementToJsxString = req(
  '../dist/commonjs/react-element-to-jsx-string.js'
).default
const dep = req('react-element-to-jsx-string').default
t.equal(dep, reactElementToJsxString)
