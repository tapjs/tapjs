import * as os from 'node:os'
import t from 'tap'
const p = os.availableParallelism?.() || os.cpus().length || 1
if (undefined === process.argv[2]) {
  t.jobs = p
  for (let i = 0; i < t.jobs * 4; i++) {
    t.spawn(
      process.execPath,
      [
        __filename,
        String(i),
      ],
      'expensive computation'
    )
  }
} else {
  const i = +process.argv[2]
  const start = Date.now()
  while (Date.now() < start + 1000);
  t.pass(`expensive computation ${i} completed`)
}
