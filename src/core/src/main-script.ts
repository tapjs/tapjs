import { proc, argv } from './proc.js'
export const mainScript = (def: string = 'TAP') => {
  //@ts-ignore
  if (typeof repl !== 'undefined' || ('_eval' in proc)) {
    return def
  }
  return argv[1] || def
}
