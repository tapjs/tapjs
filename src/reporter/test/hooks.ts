import t from 'tap'
// just verify that it exports the stuff we think it does

import * as pkgExport from '@tapjs/reporter/hooks'
import * as hooks from '../dist/hooks.js'

import { useAssertTotals } from '../dist/hooks/use-assert-totals.js'
import { useCleanup } from '../dist/hooks/use-cleanup.js'
import { useSuiteTotals } from '../dist/hooks/use-suite-totals.js'

t.equal(hooks.useAssertTotals, useAssertTotals)
t.equal(hooks.useSuiteTotals, useSuiteTotals)
t.equal(hooks.useCleanup, useCleanup)
t.strictSame(pkgExport, hooks, 'exported on pretty import path')
