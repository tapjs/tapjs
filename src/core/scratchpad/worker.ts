import * as os from 'node:os'
import t from 'tap'
const p = os.availableParallelism?.() || os.cpus().length || 1
if (t.isMainThread) {
  t.jobs = p
  for (let i = 0; i < t.jobs * 4; i++) {
    t.worker(
      __filename,
      { workerData: i },
      'expensive computation'
    )
  }
} else {
  const i = t.workerData
  const start = Date.now()
  while (Date.now() < start + 1000);
  t.pass(`expensive computation ${i} completed`)
}
