// Heuristic to find a nice ergonomic number of jobs
// to do in parallel by default.
// If we use ALL the available CPUs, then that can actually
// make tests more flaky in some cases, because things will
// start to drag.
// Especially, if there's a ton of CPUs, like on a hosted CI
// system, we don't want to flood the system too aggressively.
// But, we do want to parallelize tests quite a bit by default.

import * as os from 'node:os'
const max = Math.max(
  1,
  typeof os.availableParallelism === 'function'
    ? os.availableParallelism()
    : os.cpus().length
)

// If we only have a few CPUs, ok, use em all
export const jobs =
  // it's the only one, we have to use it.
  max <= 1
    ? 1
    : // leave one CPU free
    max <= 4
    ? max - 1
    : // if we have up to 16, use 3/4 of them
    max <= 16
    ? Math.ceil(max * 0.75)
    : // if we have up to 32, use 1/2 of them
    max <= 32
    ? Math.max(12, Math.ceil(max * 0.5))
    : // top out at 16
      16
