/**
 * Get the file url string of the loader, from CommonJS environment
 *
 * Overrides the 'loader-url' module in the CommonJS build.
 */

import { pathToFileURL } from 'url'

export default `${pathToFileURL(require.resolve('../mjs/loader.js'))}`
