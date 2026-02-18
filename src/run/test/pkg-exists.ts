import t from 'tap'
import { pkgExists } from '../dist/esm/pkg-exists.js'
t.equal(pkgExists('tap'), true)
t.equal(pkgExists('nope no package by that name'), false)
