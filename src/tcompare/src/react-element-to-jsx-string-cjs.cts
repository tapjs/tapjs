// See: https://github.com/algolia/react-element-to-jsx-string/pull/819
const r =
  require('react-element-to-jsx-string') as typeof import('react-element-to-jsx-string')

import type { Options as ReactElementToJSXStringOptions } from 'react-element-to-jsx-string'

export type { ReactElementToJSXStringOptions }

export default r.default
