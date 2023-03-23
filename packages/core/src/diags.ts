import yaml from 'tap-yaml'
import { cleanYamlObject } from './clean-yaml-object.js'
import { TestBaseOpts } from './test-base.js'

export const diags = (
  obj: { [k: string]: any },
  options: TestBaseOpts = {}
) => {
  const clean = cleanYamlObject(obj, options)
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
