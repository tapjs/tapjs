import yaml from 'yaml'
import { customTags } from './types/index.js'
export const parse = (str: string) =>
  yaml.parse(str, { customTags, prettyErrors: true })
