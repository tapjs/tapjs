// This module is excluded from the CommonJS build, and the package.json
// `"exports"` maps the import path to ./no-op
import { addType } from '@tapjs/reporter'
import DummyReporter from './reporter.js'
export default addType('dummy', DummyReporter)
