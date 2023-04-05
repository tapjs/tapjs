import yaml from 'tap-yaml'
import { cleanYamlObject } from './clean-yaml-object.js'

export const diags = (obj: { [k: string]: any }) => {
  const clean = cleanYamlObject(obj)
  if (
    !clean ||
    typeof clean !== 'object' ||
    !Object.keys(clean).length
  ) {
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
