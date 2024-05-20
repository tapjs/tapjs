import yaml from 'tap-yaml'
import { cleanYamlObject } from './clean-yaml-object.js'
import { Extra } from './index.js'

const hasDefinedKey = (o: Extra) => {
  for (const v of Object.values(o)) {
    if (v !== undefined && v !== null) return true
  }
  return false
}

/**
 * Print the YAML diagnostics based on the {@link @tapjs/core!index.Extra}
 * object received
 */
export const diags = (obj: Extra) => {
  const clean = cleanYamlObject(obj)
  if (!clean || typeof clean !== 'object' || !hasDefinedKey(clean)) {
    return ''
  }
  return (
    '  ---\n' +
    yaml
      .stringify(clean)
      .split('\n')
      .map(l => (l.trim() ? '  ' + l : l.trim()))
      .join('\n') +
    '  ...\n'
  )
}
