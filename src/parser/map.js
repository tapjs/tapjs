import { basename } from 'path'
export default t =>
  basename(t) === 'cmd.ts' ? 'bin/cmd.cjs' : ['src/*.ts']
