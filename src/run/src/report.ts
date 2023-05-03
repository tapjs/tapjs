// this has to do some wicked things with types, because c8's
// declarations are somewhat lacking.
import { Report } from 'c8'
import opener from 'opener'
import { resolve } from 'path'
import type { Config } from './index.js'

export const report = async (args: string[], config: Config) => {
  const rconf = config.get('coverage-reporter')
  // if there are args passed in, use that. The config is used if
  // calling this at the end of `tap run`
  if (args.length) {
    config.jack.validate({ 'coverage-reporter': args })
  }
  const reporter = args.length
    ? args
    : rconf && rconf.length
    ? rconf
    : ['text']

  const r = new Report({
    // no need to include/exclude, we already did that when we captured
    reporter,
    reportsDirectory: resolve(config.globCwd, '.tap/report'),
    tempDirectory: resolve(config.globCwd, '.tap/coverage'),
    excludeNodeModules: true,
  })
  await r.run()
  if (reporter.includes('html')) {
    opener(resolve(config.globCwd, '.tap/report/index.html'))
  }
  await checkCoverage(r)
}

const checkCoverage = async (report: Report) => {
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
  for (const th of thresholds) {
    const coverage = summary[th].pct
    if (coverage < 100) {
      console.error(`ERROR: incomplete ${th} coverage (${coverage}%)`)
      success = false
    }
  }
  if (success === false) process.exitCode = 1
}
