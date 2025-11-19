import { LoadedConfig } from '@tapjs/config'
import * as CORE from '@tapjs/core'
import { mkdirp } from 'mkdirp'
import { readFileSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import t from 'tap'

let projectRoot = t.testdirName
t.beforeEach(t => (projectRoot = t.testdirName))

interface Summary {
  lines: { pct: number | 'Unknown' }
  functions: { pct: number | 'Unknown' }
  statements: { pct: number | 'Unknown' }
  branches: { pct: number | 'Unknown' }
}

const mockMainConf: { mainCommand: 'run' | 'report' } = {
  mainCommand: 'run',
}

const validCoverageReports = new Set([
  'clover',
  'cobertura',
  'html',
  'json',
  'json-summary',
  'lcov',
  'lcovonly',
  'none',
  'teamcity',
  'text',
  'text-lcov',
  'text-summary',
])
class MockConfig {
  #coverageReport: string[]
  projectRoot: string = projectRoot
  showFullCoverage?: boolean
  allowEmptyCoverage?: boolean
  allowIncompleteCoverage?: boolean
  browser?: boolean
  constructor(coverageReport: string[] = []) {
    this.#coverageReport = coverageReport
  }
  get(k: string) {
    switch (k) {
      case 'coverage-report':
        return this.#coverageReport
      case 'show-full-coverage':
        return this.showFullCoverage
      case 'allow-empty-coverage':
        return this.allowEmptyCoverage
      case 'allow-incomplete-coverage':
        return this.allowIncompleteCoverage
      case 'browser':
        return this.browser !== false
      default:
        throw new Error('should only look up coverage configs')
    }
  }
}

// set this explicitly in tests
const summaryZero: Summary = {
  lines: { pct: 'Unknown' },
  functions: { pct: 'Unknown' },
  statements: { pct: 'Unknown' },
  branches: { pct: 'Unknown' },
}
const summary50: Summary = {
  lines: { pct: 50 },
  functions: { pct: 'Unknown' },
  statements: { pct: 50 },
  branches: { pct: 50 },
}
const summary100: Summary = {
  lines: { pct: 100 },
  functions: { pct: 100 },
  statements: { pct: 100 },
  branches: { pct: 100 },
}

let summary: Summary = summaryZero

class MockReport {
  reporter: string[]
  reportsDirectory: string
  tempDirectory: string
  excludeNodeModules: boolean

  summary: Summary = summary

  constructor({
    reporter,
    reportsDirectory,
    tempDirectory,
    excludeNodeModules,
  }: {
    reporter: string[]
    reportsDirectory: string
    tempDirectory: string
    excludeNodeModules: boolean
  }) {
    if (!excludeNodeModules) {
      throw new Error('node_modules should always be excluded')
    }
    this.reporter = reporter
    for (const c of this.reporter) {
      if (!validCoverageReports.has(c)) {
        throw new Error('invalid coverage report: ' + c)
      }
    }
    this.reportsDirectory = reportsDirectory
    this.tempDirectory = tempDirectory
    this.excludeNodeModules = excludeNodeModules
  }

  async run() {
    await mkdirp(resolve(this.reportsDirectory, 'lcov-report'))
    if (this.reporter.includes('html')) {
      await writeFile(
        resolve(this.reportsDirectory, 'index.html'),
        'report',
      )
    }
    if (this.reporter.includes('lcov')) {
      await writeFile(
        resolve(this.reportsDirectory, 'lcov-report/index.html'),
        'report',
      )
    }
    if (this.reporter.includes('text')) {
      process.stdout.write('report')
    }
    if (this.reporter.includes('text-summary')) {
      process.stdout.write('summary')
    }
  }

  async getCoverageMapFromAllCoverageFiles() {
    return {
      getCoverageSummary: () => this.summary,
    }
  }
}

const mockTap = {
  comment: () => {},
  debug: () => {},
}
const mockCore = t.createMock(CORE, {
  tap: () => mockTap,
})

t.test('omit text report for full coverage run', async t => {
  summary = summary100
  t.testdir({
    '.tap': {
      coverage: {
        'file.json': '{}',
      },
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = await t.mockImport<
    typeof import('../dist/esm/report.js')
  >('../dist/esm/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
    '../dist/esm/main-config.js': mockMainConf,
  })
  const config = new MockConfig(['text'])
  const logs = t.capture(console, 'log')
  await report([], config as unknown as LoadedConfig)
  t.strictSame(logs.args(), [], 'show nothing if full coverage')
  t.strictSame(comments.args(), [])
})

t.test('show full coverage explicit report', async t => {
  summary = summary100
  t.testdir({
    '.tap': {
      coverage: {
        'file.json': '{}',
      },
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = await t.mockImport('../dist/esm/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
    '../dist/esm/main-config.js': { mainCommand: 'report' },
  })
  const config = new MockConfig(['text'])
  const logs = t.capture(console, 'log')
  await report([], config as unknown as LoadedConfig)
  t.strictSame(logs.args(), [['report']], 'show full coverage report')
  t.strictSame(comments.args(), [])
})

t.test('explicit report, full cov report explicit off', async t => {
  summary = summary100
  t.testdir({
    '.tap': {
      coverage: {
        'file.json': '{}',
      },
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = await t.mockImport<
    typeof import('../dist/esm/report.js')
  >('../dist/esm/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
    '../dist/esm/main-config.js': { mainCommand: 'report' },
  })
  const config = new MockConfig(['text'])
  config.showFullCoverage = false
  const logs = t.capture(console, 'log')
  await report(['text'], config as unknown as LoadedConfig)
  t.strictSame(logs.args(), [['summary']], 'show full coverage summary')
  t.strictSame(comments.args(), [])
})

t.test('run an html report', async t => {
  const cases: [string, string][] = [
    ['html', 'index.html'],
    ['lcov', 'lcov-report/index.html'],
  ]
  for (const [style, file] of cases) {
    t.test(style, async t => {
      summary = summary100
      t.testdir({
        '.tap': {
          coverage: {
            'file.json': JSON.stringify({}),
          },
        },
      })
      const comments = t.capture(mockTap, 'comment')
      let openerRan = false
      const htmlReport = resolve(projectRoot, '.tap/report', file)
      const { report } = await t.mockImport<
        typeof import('../dist/esm/report.js')
      >('../dist/esm/report.js', {
        c8: { Report: MockReport },
        '@tapjs/core': mockCore,
        opener: (file: string) => {
          t.equal(file, htmlReport)
          openerRan = true
        },
        '../dist/esm/main-config.js': { mainCommand: 'report' },
      })
      const config = new MockConfig([])
      const logs = t.capture(console, 'log')
      await report([style], config as unknown as LoadedConfig)
      if (style === 'html') t.strictSame(logs.args(), [])
      else {
        const expect = `lcov report: ${resolve(
          t.testdirName,
          '.tap/report/lcov.info',
        )}`
        t.strictSame(logs.args(), [[expect]])
      }
      t.strictSame(comments.args(), [])
      t.equal(openerRan, true)
      t.equal(readFileSync(htmlReport, 'utf8'), 'report')
    })
  }
})

t.test('run an html report, but no browser open', async t => {
  const cases: [string, string][] = [
    ['html', 'index.html'],
    ['lcov', 'lcov-report/index.html'],
  ]
  for (const [style, file] of cases) {
    t.test(style, async t => {
      summary = summary100
      t.testdir({
        '.tap': {
          coverage: {
            'file.json': JSON.stringify({}),
          },
        },
      })
      const comments = t.capture(mockTap, 'comment')
      let openerRan = false
      const htmlReport = resolve(projectRoot, '.tap/report', file)
      const { report } = await t.mockImport<
        typeof import('../dist/esm/report.js')
      >('../dist/esm/report.js', {
        c8: { Report: MockReport },
        '@tapjs/core': mockCore,
        opener: (file: string) => {
          t.equal(file, htmlReport)
          openerRan = true
        },
        '../dist/esm/main-config.js': { mainCommand: 'report' },
      })
      const config = new MockConfig([])
      config.browser = false
      const logs = t.capture(console, 'log')
      await report([style], config as unknown as LoadedConfig)
      if (style === 'html')
        t.strictSame(logs.args(), [
          [
            `html report: ${resolve(t.testdirName, '.tap/report/index.html')}`,
          ],
        ])
      else {
        const expect = [
          [
            `lcov report: ${resolve(
              t.testdirName,
              '.tap/report/lcov.info',
            )}`,
          ],
          [
            `html report: ${resolve(
              t.testdirName,
              '.tap/report/lcov-report/index.html',
            )}`,
          ],
        ]
        t.strictSame(logs.args(), expect)
      }
      t.strictSame(comments.args(), [])
      t.equal(openerRan, false)
      t.equal(readFileSync(htmlReport, 'utf8'), 'report')
    })
  }
})

t.test('no coverage files generated', async t => {
  summary = summaryZero
  t.testdir({
    '.tap': {
      coverage: {},
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = await t.mockImport<
    typeof import('../dist/esm/report.js')
  >('../dist/esm/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
  })
  const config = new MockConfig([])
  const logs = t.capture(console, 'log')
  await report([], config as unknown as LoadedConfig)
  t.strictSame(logs.args(), [])
  t.strictSame(comments.args(), [['No coverage generated']])
  t.equal(process.exitCode, 1)
  process.exitCode = 0
})

t.test('no coverage files generated, allowed', async t => {
  summary = summaryZero
  t.testdir({
    '.tap': {
      coverage: {},
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = await t.mockImport<
    typeof import('../dist/esm/report.js')
  >('../dist/esm/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
  })
  const config = new MockConfig([])
  config.allowEmptyCoverage = true
  const logs = t.capture(console, 'log')
  await report([], config as unknown as LoadedConfig)
  t.strictSame(logs.args(), [])
  t.strictSame(comments.args(), [['No coverage generated']])
  t.equal(process.exitCode, 0)
})

t.test('no coverage summary generated', async t => {
  summary = summaryZero
  t.testdir({
    '.tap': {
      coverage: { 'file.json': '{}' },
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = await t.mockImport<
    typeof import('../dist/esm/report.js')
  >('../dist/esm/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
  })
  const config = new MockConfig([])
  const logs = t.capture(console, 'log')
  await report([], config as unknown as LoadedConfig)
  t.strictSame(logs.args(), [])
  t.strictSame(comments.args(), [['No coverage generated']])
  t.equal(process.exitCode, 1)
  process.exitCode = 0
})

t.test('no coverage summary generated, allowed', async t => {
  summary = summaryZero
  t.testdir({
    '.tap': {
      coverage: { 'file.json': '{}' },
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = await t.mockImport<
    typeof import('../dist/esm/report.js')
  >('../dist/esm/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
  })
  const config = new MockConfig([])
  config.allowEmptyCoverage = true
  const logs = t.capture(console, 'log')
  await report([], config as unknown as LoadedConfig)
  t.strictSame(logs.args(), [])
  t.strictSame(comments.args(), [['No coverage generated']])
  t.equal(process.exitCode, 0)
})

t.test('not full coverage', async t => {
  summary = summary50
  t.testdir({
    '.tap': {
      coverage: { 'file.json': '{}' },
    },
  })
  const comments = t.capture(mockTap, 'comment')
  let openerRan = false
  const htmlReport = resolve(projectRoot, '.tap/report/index.html')
  const { report } = await t.mockImport<
    typeof import('../dist/esm/report.js')
  >('../dist/esm/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
    opener: (file: string) => {
      t.equal(file, htmlReport)
      openerRan = true
    },
  })
  const config = new MockConfig([])
  const logs = t.capture(console, 'log')
  await report(['html'], config as unknown as LoadedConfig)
  t.strictSame(logs.args(), [])
  t.strictSame(comments.args(), [
    ['ERROR: incomplete statements coverage (50%)'],
    ['ERROR: incomplete branches coverage (50%)'],
    ['ERROR: incomplete functions coverage (0%)'],
    ['ERROR: incomplete lines coverage (50%)'],
  ])
  t.equal(openerRan, true)
  t.equal(readFileSync(htmlReport, 'utf8'), 'report')
  t.equal(process.exitCode, 1)
  process.exitCode = 0
})

t.test('not full coverage, allowed', async t => {
  summary = summary50
  t.testdir({
    '.tap': {
      coverage: { 'file.json': '{}' },
    },
  })
  const comments = t.capture(mockTap, 'comment')
  let openerRan = false
  const htmlReport = resolve(projectRoot, '.tap/report/index.html')
  const { report } = await t.mockImport<
    typeof import('../dist/esm/report.js')
  >('../dist/esm/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
    opener: (file: string) => {
      t.equal(file, htmlReport)
      openerRan = true
    },
  })
  const config = new MockConfig([])
  config.allowIncompleteCoverage = true
  const logs = t.capture(console, 'log')
  await report(['html'], config as unknown as LoadedConfig)
  t.strictSame(logs.args(), [])
  t.strictSame(comments.args(), [
    ['ERROR: incomplete statements coverage (50%)'],
    ['ERROR: incomplete branches coverage (50%)'],
    ['ERROR: incomplete functions coverage (0%)'],
    ['ERROR: incomplete lines coverage (50%)'],
  ])
  t.equal(openerRan, true)
  t.equal(readFileSync(htmlReport, 'utf8'), 'report')
  t.equal(process.exitCode, 0)
  process.exitCode = 0
})
