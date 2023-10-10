import t from 'tap'
import { at } from '@tapjs/stack'
import { locFromCallSite } from '../src/loc-from-callsite.js'

t.matchSnapshot(locFromCallSite(at()), 'from CallSite')
t.matchSnapshot(locFromCallSite(at()?.toJSON()), 'from CallSiteJSON')
t.matchSnapshot(locFromCallSite(), 'from undefined')
t.matchSnapshot(locFromCallSite(null), 'from null')
