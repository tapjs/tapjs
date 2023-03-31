import { pathToFileURL } from 'url'

export default `${pathToFileURL(require.resolve('../mjs/loader.js'))}`
