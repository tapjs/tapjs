import t from 'tap'
import { Test as TestBuilt } from '@tapjs/test/test-built'
import { TestBase } from '@tapjs/core'
import { Test } from '../dist/esm/index.js'

// not much to test here of the actual code, really
t.equal(Test, TestBuilt, 'exports built test')
t.ok(t instanceof Test)
t.ok(t instanceof TestBase)
