import { basename } from 'path'

export default t =>
  basename(t) === 'serdes.ts' ?
    ['src/serialize.ts', 'src/deserialize.ts']
  : basename(t) === 'stream.ts' ? 'src/test-stream*.ts'
  : t.replace(/test/, 'src')
