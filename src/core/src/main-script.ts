import { argv, proc } from './proc.js'
/**
 * Get the name of the main script for this process
 */
export const mainScript = (def: string = 'TAP') => {
  //@ts-ignore
  if (
    typeof repl !== 'undefined' ||
    proc._forceRepl ||
    '_eval' in proc
  ) {
    return def
  }
  return argv[1] || def
}
