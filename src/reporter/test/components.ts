import t from 'tap'
// just verify that it exports the stuff we think it does

import * as pkgExport from '@tapjs/reporter/components'
import * as components from '../dist/components.js'
import { Diff } from '../dist/diff.js'
import { TimedOut } from '../dist/timed-out.js'

t.equal(components.Diff, Diff)
t.equal(components.TimedOut, TimedOut)
t.strictSame(pkgExport, components, 'exported on pretty import path')
