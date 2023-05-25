import yaml from 'yaml'
import { customTags } from './types/index.js'
export const stringify = (obj: any) =>
  yaml.stringify(obj, { customTags, prettyErrors: true })
