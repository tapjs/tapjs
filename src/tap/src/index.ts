/**
 * The main tap export, ESM style
 *
 * Essentially just a re-export of everything defined in the index,
 * but with the `t` member as the default export.
 *
 * @module
 */
import { t } from './main.js'
export * from './main.js'
export default t
