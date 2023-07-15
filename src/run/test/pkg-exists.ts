import t from 'tap'
import { pkgExists } from '../dist/pkg-exists.js'
t.equal(await pkgExists('tap'), true)
t.equal(await pkgExists('nope no package by that name'), false)
