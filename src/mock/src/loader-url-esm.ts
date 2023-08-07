/**
 * Get the file url string of the loader, from ESM environment
 *
 * Overrides the 'loader-url' module in the ESM build.
 */

import { dirname, resolve } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

export default `${pathToFileURL(
  resolve(dirname(fileURLToPath(import.meta.url)), 'loader.js')
)}`
