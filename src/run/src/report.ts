// this has to do some wicked things with types, because c8's
// declarations are somewhat lacking.
import { tap } from '@tapjs/core'
import { Report } from 'c8'
import { readdir } from 'fs/promises'
import opener from 'opener'
import { resolve } from 'path'
import { LoadedConfig } from '@tapjs/config'

export const report = async (args: string[], config: LoadedConfig) => {
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

  // verify that we actually have coverage, otherwise don't even try
  const tempDirectory = resolve(config.globCwd, '.tap/coverage')
  const ok = await readdir(tempDirectory).then(
    () => true,
    () => false
  )
  if (!ok) {
    tap().comment('No coverage generated')
    return
  }

  const r = new Report({
    // no need to include/exclude, we already did that when we captured
    reporter,
    reportsDirectory: resolve(config.globCwd, '.tap/report'),
    tempDirectory: resolve(config.globCwd, '.tap/coverage'),
    excludeNodeModules: true,
  })
  // XXX: istanbul-reports just dumps to process.stderr, which collides
  // with our ink-based reporters. Hijack it and write with console.log
  // so that patch-console can put it in the intended place (or ignore it).
  // TODO: make istanbul-reports more configurable.
  const { write } = process.stdout
  const stdout: (string)[] = []
  process.stdout.write = c => {
    stdout.push(String(c))
    return true
  }
  await r.run()
  process.stdout.write = write
  console.log(stdout.join('').trimEnd())
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
  // TODO: emit these as test failures?
  // TODO: make levels configurable, just *default* to 100
  const t = tap()
  for (const th of thresholds) {
    const coverage = summary[th].pct
    if (coverage < 100) {
      t.comment(`ERROR: incomplete ${th} coverage (${coverage}%)`)
      success = false
    }
  }
  if (success === false) process.exitCode = 1
}
