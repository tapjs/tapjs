import { createRequire } from "node:module"
//@ts-ignore
const require = createRequire(import.meta.url)
const serviceKeyCJS = require('../commonjs/service-key.js')
export const { serviceKey } = serviceKeyCJS as { serviceKey: string }
