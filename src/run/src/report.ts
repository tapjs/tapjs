// this has to do some wicked things with types, because c8's
// declarations are somewhat lacking.
import { LoadedConfig } from '@tapjs/config'
import { tap } from '@tapjs/core'
import { Report } from 'c8'
import { readdir } from 'fs/promises'
import opener from 'opener'
import { resolve } from 'path'

import { mainCommand } from './main-config.js'

const reporterFiles = {
  clover: 'clover.xml',
  cobertura: 'cobertura-coverage.xml',
  json: 'coverage-final.json',
  'json-summary': 'coverage-summary.json',
  lcov: 'lcov.info',
  lcovonly: 'lcov.info',
}

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
    tap().debug('run/report exit=1 no coverage generated')
    process.exitCode = 1
    return
  }

  // C8 report only works when run from the cwd where the files are
  const cwd = process.cwd()
  /* c8 ignore start */
  try {
    process.chdir(config.globCwd)
  } catch {}
  /* c8 ignore stop */

  let showFullCoverage = config.get('show-full-coverage')
  let r = new Report({
    skipFull: !showFullCoverage,
    // no need to include/exclude, we already did that when we captured
    reporter,
    reportsDirectory: resolve(config.globCwd, '.tap/report'),
    tempDirectory: resolve(config.globCwd, '.tap/coverage'),
    excludeNodeModules: true,
  })

  // See if we need to generate a text report, or if we should skip it
  // because --show-full-coverage is false and we have full coverage.
  if (reporter.includes('text') && !showFullCoverage) {
    const summary = await getSummary(r)
    if (isFullCoverage(summary)) {
      if (mainCommand === 'report' && showFullCoverage !== false) {
        r = new Report({
          skipFull: false,
          reporter,
          reportsDirectory: resolve(config.globCwd, '.tap/report'),
          tempDirectory: resolve(config.globCwd, '.tap/coverage'),
          excludeNodeModules: true,
        })
      } else {
        // don't show the text report, it's just noise.
        // but make `tap report html --no-show-full-coverage` still
        // output a summary, at least, so it doesn't seem broken
        const txt = reporter.indexOf('text')
        if (txt !== -1) {
          const none = args.includes('text') ? 'text-summary' : 'none'
          reporter.splice(txt, 1)
          if (reporter.length === 0) {
            reporter.push(none)
          }
        }
      }
    }
  }

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
  for (const [style, filename] of Object.entries(reporterFiles)) {
    if (reporter.includes(style)) {
      const f = resolve(config.globCwd, '.tap/report', filename)
      console.log(`${style} report: ${f}`)
    }
  }
  if (reporter.includes('html')) {
    opener(resolve(config.globCwd, '.tap/report/index.html'))
  } else if (reporter.includes('lcov')) {
    opener(
      resolve(config.globCwd, '.tap/report/lcov-report/index.html')
    )
  }

  await checkCoverage(r, config)
  /* c8 ignore start */
  try {
    process.chdir(cwd)
  } catch {}
  /* c8 ignore stop */
}

interface Summary {
  lines: { pct: number }
  functions: { pct: number }
  statements: { pct: number }
  branches: { pct: number }
}

const summaries = new Map<Report, Summary>()
const getSummary = async (report: Report) => {
  const c = summaries.get(report)
  if (c) return c
  const r = report as Report & {
    getCoverageMapFromAllCoverageFiles(): Promise<{
      getCoverageSummary: () => Summary
    }>
  }
  const map = await r.getCoverageMapFromAllCoverageFiles()
  const summary = map.getCoverageSummary()
  summaries.set(report, summary)
  return summary
}

const thresholds: (keyof Summary)[] = [
  'statements',
  'branches',
  'functions',
  'lines',
]

const isEmptyCoverage = (summary: Summary) =>
  Math.max(...thresholds.map(th => Number(summary[th].pct) || 0)) ===
  0

const isFullCoverage = (summary: Summary) =>
  Math.min(...thresholds.map(th => Number(summary[th].pct) || 0)) ===
  100

const checkCoverage = async (
  report: Report,
  config: LoadedConfig
) => {
  const cr = config.get('coverage-report')
  const comment = cr && !cr.includes('text')
  const summary = await getSummary(report)
  let success = true

  const t = tap()

  // if we didn't get anything, that means that even though it wrote
  // some coverage files, it didn't actually cover anything, which can
  // happen, for example if the test crashes before actually loading.
  if (isEmptyCoverage(summary)) {
    t.comment('No coverage generated')
    t.debug('run/report exit=1 coverage is empty', summary)
    process.exitCode = 1
    return
  }

  // TODO: make levels configurable, just *default* to 100
  // only comment it if not using the text reporter, because that makes
  // it pretty obvious where the shortcomings are already.
  for (const th of thresholds) {
    const coverage = Number(summary[th].pct) || 0
    if (coverage < 100) {
      if (comment) {
        t.comment(`ERROR: incomplete ${th} coverage (${coverage}%)`)
      }
      success = false
    }
  }
  if (success === false) {
    t.debug('run/report exit=1 coverage not 100', summary)
    process.exitCode = 1
  }
}
