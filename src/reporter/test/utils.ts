import t from 'tap'
// just verify that it exports the stuff we think it does

import * as utils from '../dist/esm/utils.js'
import * as pkgExport from '@tapjs/reporter/utils'

import { assertName } from '../dist/esm/assert-name.js'
import { listenCleanup } from '../dist/esm/listen-cleanup.js'
import { ms } from '../dist/esm/ms.js'

t.equal(utils.ms, ms)
t.equal(utils.assertName, assertName)
t.equal(utils.listenCleanup, listenCleanup)
t.strictSame(pkgExport, utils, 'exported on pretty import path')
