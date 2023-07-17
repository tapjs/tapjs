import { LoadedConfig } from '@tapjs/config'
import { mkdirp } from 'mkdirp'
import { readFileSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import t from 'tap'

let globCwd = t.testdirName
t.beforeEach(t => (globCwd = t.testdirName))

interface Summary {
  lines: { pct: number | 'Unknown' }
  functions: { pct: number | 'Unknown' }
  statements: { pct: number | 'Unknown' }
  branches: { pct: number | 'Unknown' }
}

const validCoverageReports = new Set(['text', 'none', 'html'])
class MockConfig {
  #coverageReport: string[]
  validated: boolean = false
  globCwd: string = globCwd
  jack: {
    validate: (obj: { 'coverage-report': any }) => void
  }
  constructor(coverageReport: string[] = []) {
    this.#coverageReport = coverageReport
    this.jack = {
      validate: () => (this.validated = true),
    }
  }
  get(k: string) {
    if (k !== 'coverage-report') {
      throw new Error('should only look up coverage-report config')
    }
    return this.#coverageReport
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
    await mkdirp(this.reportsDirectory)
    if (this.reporter.includes('html')) {
      await writeFile(
        resolve(this.reportsDirectory, 'index.html'),
        'report'
      )
    }
    if (this.reporter.includes('text')) {
      process.stdout.write('report')
    }
  }

  async getCoverageMapFromAllCoverageFiles() {
    return {
      getCoverageSummary: () => this.summary,
    }
  }
}

const mockTap = { comment: () => {} }
const mockCore = {
  tap: () => mockTap,
}

t.test('run a text report', async t => {
  summary = summary100
  t.testdir({
    '.tap': {
      coverage: {
        'file.json': '{}',
      },
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = (await t.mockImport('../dist/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
  })) as typeof import('../dist/report.js')
  const config = new MockConfig(['text'])
  const logs = t.capture(console, 'log')
  await report([], config as unknown as LoadedConfig)
  t.equal(config.validated, false, 'nothing to validate')
  t.strictSame(logs.args(), [['report']])
  t.strictSame(comments.args(), [])
})

t.test('run an html report', async t => {
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
  const htmlReport = resolve(globCwd, '.tap/report/index.html')
  const exitCode = t.intercept(process, 'exitCode')
  const { report } = (await t.mockImport('../dist/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
    opener: (file: string) => {
      t.equal(file, htmlReport)
      openerRan = true
    },
  })) as typeof import('../dist/report.js')
  const config = new MockConfig([])
  const logs = t.capture(console, 'log')
  await report(['html'], config as unknown as LoadedConfig)
  t.equal(config.validated, true)
  t.strictSame(logs.args(), [])
  t.strictSame(comments.args(), [])
  t.equal(openerRan, true)
  t.equal(readFileSync(htmlReport, 'utf8'), 'report')
  t.strictSame(exitCode(), [])
})

t.test('no coverage files generated', async t => {
  summary = summaryZero
  t.testdir({
    '.tap': {
      coverage: {},
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = (await t.mockImport('../dist/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
  })) as typeof import('../dist/report.js')
  const config = new MockConfig([])
  const logs = t.capture(console, 'log')
  const exitCode = t.intercept(process, 'exitCode')
  await report([], config as unknown as LoadedConfig)
  t.equal(config.validated, false, 'nothing to validate')
  t.strictSame(logs.args(), [])
  t.strictSame(comments.args(), [['No coverage generated']])
  t.match(exitCode(), [{ type: 'set', value: 1, success: true }])
})

t.test('no coverage summary generated', async t => {
  summary = summaryZero
  t.testdir({
    '.tap': {
      coverage: { 'file.json': '{}' },
    },
  })
  const comments = t.capture(mockTap, 'comment')
  const { report } = (await t.mockImport('../dist/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
  })) as typeof import('../dist/report.js')
  const config = new MockConfig([])
  const logs = t.capture(console, 'log')
  const exitCode = t.intercept(process, 'exitCode')
  await report([], config as unknown as LoadedConfig)
  t.equal(config.validated, false, 'nothing to validate')
  t.strictSame(logs.args(), [['report']])
  t.strictSame(comments.args(), [['No coverage generated']])
  t.match(exitCode(), [{ type: 'set', value: 1, success: true }])
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
  const htmlReport = resolve(globCwd, '.tap/report/index.html')
  const { report } = (await t.mockImport('../dist/report.js', {
    c8: { Report: MockReport },
    '@tapjs/core': mockCore,
    opener: (file: string) => {
      t.equal(file, htmlReport)
      openerRan = true
    },
  })) as typeof import('../dist/report.js')
  const config = new MockConfig([])
  const logs = t.capture(console, 'log')
  const exitCode = t.intercept(process, 'exitCode')
  await report(['html'], config as unknown as LoadedConfig)
  t.equal(config.validated, true)
  t.strictSame(logs.args(), [])
  t.strictSame(comments.args(), [
    ['ERROR: incomplete statements coverage (50%)'],
    ['ERROR: incomplete branches coverage (50%)'],
    ['ERROR: incomplete functions coverage (0%)'],
    ['ERROR: incomplete lines coverage (50%)'],
  ])
  t.equal(openerRan, true)
  t.equal(readFileSync(htmlReport, 'utf8'), 'report')
  t.match(exitCode(), [{ type: 'set', value: 1, success: true }])
})
