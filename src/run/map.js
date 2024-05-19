import { basename, dirname, join } from 'node:path'
export default t => {
  const self = t.replace('test', 'src')
  return basename(self) === 'run.ts' ?
      [self, join(dirname(self), 'execute-test-suite.ts')]
    : self
}
