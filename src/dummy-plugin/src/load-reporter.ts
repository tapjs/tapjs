// This module is excluded from the CommonJS build, and the package.json
// `"exports"` maps the import path to ./no-op
//@ts-ignore
import { addType } from '@tapjs/reporter'
//@ts-ignore
import DummyReporter from './reporter.js'
export default addType('dummy', DummyReporter)
