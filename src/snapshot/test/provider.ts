import { mkdirSync, statSync, unlinkSync } from 'fs'
import { resolve } from 'path'
import t from 'tap'
import { SnapshotProviderDefault } from '../dist/cjs/provider.js'

t.type(SnapshotProviderDefault, Function)

t.test('load and save a snapshot', t => {
  const d = t.testdir({
    empty: '/* no snapshot data here */',
    empty2: '',
    empty3: '',
  })
  const file = resolve(d, 'snapshot.test.cjs')
  const p = new SnapshotProviderDefault(file)
  // file doesn't exist, so can't read it yet
  t.throws(
    () => p.read('msg'),
    {
      message: `Snapshot file not found: ${file}
Run with TAP_SNAPSHOT=1 in the environment to create snapshots`,
    },
    'file not found throws'
  )
  p.snap('snapshot data', 'exists')
  p.save()
  t.throws(
    () => p.read('msg'),
    {
      message: `Snapshot entry not found: "msg"
Run with TAP_SNAPSHOT=1 in the environment to create snapshots`,
    },
    'entry not found throws'
  )

  // have to create a new provider, can't read and write on the same one
  const pp = new SnapshotProviderDefault(file)
  t.equal(pp.read('exists'), 'snapshot data')

  const pd = new SnapshotProviderDefault(d)
  t.throws(
    () => pd.read('exists'),
    {
      message: `Snapshot file not found: ${d}
Run with TAP_SNAPSHOT=1 in the environment to create snapshots`,
    },
    'snapshot not a file throws on read'
  )

  const pf = new SnapshotProviderDefault(file)
  pf.snap('snapshot data', 'exists')
  unlinkSync(file)
  mkdirSync(file)
  t.throws(() => pf.save(), {
    code: 'EISDIR',
  })

  // writing an empty snapshot just the file
  const pe = new SnapshotProviderDefault(resolve(d, 'empty'))
  pe.save()
  t.throws(
    () => statSync(resolve(d, 'empty')),
    { code: 'ENOENT' },
    'deleted'
  )

  // if it's gone already that's fine
  const pe2 = new SnapshotProviderDefault(resolve(d, 'empty2'))
  unlinkSync(resolve(d, 'empty2'))
  pe2.save()
  t.throws(
    () => statSync(resolve(d, 'empty2')),
    { code: 'ENOENT' },
    'deleted'
  )

  // throw unlink error if it isn't enoent
  const e3 = resolve(d, 'empty3')
  const pe3 = new SnapshotProviderDefault(e3)
  unlinkSync(e3)
  mkdirSync(e3)
  t.throws(() => pe3.save(), { code: /EPERM|EISDIR/ })

  t.end()
})
