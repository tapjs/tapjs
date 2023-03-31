import { dirname, resolve } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

export default `${pathToFileURL(
  resolve(dirname(fileURLToPath(import.meta.url)), 'loader.js')
)}`
