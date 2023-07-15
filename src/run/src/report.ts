// this has to do some wicked things with types, because c8's
// declarations are somewhat lacking.
import { LoadedConfig } from '@tapjs/config'
import { tap } from '@tapjs/core'
import { Report } from 'c8'
import { readdir } from 'fs/promises'
import opener from 'opener'
import { resolve } from 'path'

export const report = async (
  args: string[],
  config: LoadedConfig
) => {
  const rconf = config.get('coverage-report')
  // if there are args passed in, use that. The config is used if
  // calling this at the end of `tap run`
  if (args.length) {
    config.jack.validate({ 'coverage-report': args })
  }
  const reporter = args.length
    ? args
    : rconf && rconf.length
    ? rconf
    : ['text']

  // verify that we actually have coverage, otherwise don't even try
  const tempDirectory = resolve(config.globCwd, '.tap/coverage')
  const ok = await readdir(tempDirectory).then(
    entries => !!entries.length,
    () => false
  )
  if (!ok) {
    tap().comment('No coverage generated')
    process.exitCode = 1
    return
  }

  const r = new Report({
    // no need to include/exclude, we already did that when we captured
    reporter,
    reportsDirectory: resolve(config.globCwd, '.tap/report'),
    tempDirectory: resolve(config.globCwd, '.tap/coverage'),
    excludeNodeModules: true,
  })

  // XXX: istanbul-reports just dumps to process.stdout, which collides
  // with our ink-based reporters. Hijack it and write with console.log
  // so that patch-console can put it in the intended place (or ignore it).
  // TODO: make istanbul-reports more configurable.
  const { write } = process.stdout
  const stdout: string[] = []
  process.stdout.write = c => {
    stdout.push(String(c))
    return true
  }
  await r.run()
  process.stdout.write = write
  const s = stdout.join('').trimEnd()
  if (s) console.log(s)
  if (reporter.includes('html')) {
    opener(resolve(config.globCwd, '.tap/report/index.html'))
  }
  await checkCoverage(r, config)
}

const checkCoverage = async (
  report: Report,
  config: LoadedConfig
) => {
  const cr = config.get('coverage-report')
  const comment = cr && !cr.includes('text')
  interface Summary {
    lines: { pct: number }
    functions: { pct: number }
    statements: { pct: number }
    branches: { pct: number }
  }
  const r = report as Report & {
    getCoverageMapFromAllCoverageFiles(): Promise<{
      getCoverageSummary: () => Summary
    }>
  }
  const map = await r.getCoverageMapFromAllCoverageFiles()
  const thresholds: (keyof Summary)[] = [
    'statements',
    'branches',
    'functions',
    'lines',
  ]
  const summary = map.getCoverageSummary()
  let success = true

  const t = tap()

  // if we didn't get anything, that means that even though it wrote
  // some coverage files, it didn't actually cover anything, which can
  // happen, for example if the test crashes before actually loading.
  if (
    Math.max(...Object.values(summary).map(({ pct }) => pct)) === 0
  ) {
    tap().comment('No coverage generated')
    process.exitCode = 1
    return
  }

  // TODO: make levels configurable, just *default* to 100
  // only comment it if not using the text reporter, because that makes
  // it pretty obvious where the shortcomings are already.
  for (const th of thresholds) {
    const coverage = summary[th].pct
    if (coverage < 100) {
      if (comment) {
        t.comment(`ERROR: incomplete ${th} coverage (${coverage}%)`)
      }
      success = false
    }
  }
  if (success === false) process.exitCode = 1
}
