import t from 'tap'
// just verify that it exports the stuff we think it does

import * as utils from '../dist/utils.js'
import * as pkgExport from '@tapjs/reporter/utils'

import { assertName } from '../dist/assert-name.js'
import { listenCleanup } from '../dist/listen-cleanup.js'
import { ms } from '../dist/ms.js'

t.equal(utils.ms, ms)
t.equal(utils.assertName, assertName)
t.equal(utils.listenCleanup, listenCleanup)
t.strictSame(pkgExport, utils, 'exported on pretty import path')
