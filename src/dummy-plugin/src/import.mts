//@ts-ignore added in 20.6, not in @types/node yet
import { register } from 'node:module'
Object.assign(globalThis, { DUMMY_PLUGIN_LOADED: true })
register(new URL('./loader.mjs', import.meta.url))
