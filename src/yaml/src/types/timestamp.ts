// this just sets the !!timestamp tag to be not considered a default,
// so that we don't confuse date strings and actual dates.
// See: https://github.com/eemeli/yaml/issues/475
import { Schema } from 'yaml'
const schema = new Schema({ resolveKnownTags: true })
export const timestamp = schema.knownTags['tag:yaml.org,2002:timestamp']
timestamp.default = false
