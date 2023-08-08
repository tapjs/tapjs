/**
 * The main tap export, ESM style
 *
 * Essentially just a re-export of everything defined in the index,
 * but with the `t` member as the default export.
 *
 * @module
 */
import { t } from './index.js'
export * from './index.js'
export default t
