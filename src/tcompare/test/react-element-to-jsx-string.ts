import { createRequire } from 'module'
import t from 'tap'
import reactElementToJsxString from '../dist/esm/react-element-to-jsx-string.js'
const req = createRequire(import.meta.url)
const dep = req('react-element-to-jsx-string').default
t.equal(dep, reactElementToJsxString)
