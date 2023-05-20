import { signature } from '@tapjs/test'
import { readFileSync } from 'fs'
import { createRequire } from 'module'
import { resolve } from 'path'
import * as yaml from 'yaml'
import type { Config } from './index.js'

const require = createRequire(import.meta.url)

const allPkgs = [
  'tap',
  '@tapjs/config',
  '@tapjs/core',
  '@tapjs/processinfo',
  '@tapjs/run',
  '@tapjs/stack',
  '@tapjs/test',
  'tcompare',
  'treport',
  'tap-parser',
]

const tryGetVersion = (pkg: string): string | undefined => {
  try {
    const v = require(`${pkg}/package.json`)?.version
    if (v && typeof v === 'string') return v
  } catch {}
  // maybe it wasn't exported, so try to see if it's in node_modules
  try {
    const p = require.resolve(pkg)
    const nm = p.split(/[\\\/]node_modules[\\\/]/i)
    if (nm.length > 1) {
      nm.pop()
      const json = readFileSync(
        resolve(nm.join('/node_modules/'), 'package.json'),
        'utf8'
      )
      const v = JSON.parse(json).version
      if (v && typeof v === 'string') return v
    }
    // last ditch effort, see if it's built a dist folder
    const d = p.split(/[\\\/]dist[\\\/]/i)
    if (d.length > 1) {
      d.pop()
      const json = readFileSync(
        resolve(d.join('/dist/'), 'package.json'),
        'utf8'
      )
      const v = JSON.parse(json).version
      if (v && typeof v === 'string') return v
    }
  } catch {}
}

export const version = async (args: string[], config: Config) => {
  const showAll = config.get('versions') || args[0] === 'versions'
  return showAll ? printAllVersions() : printTapVersion()
}

const printAllVersions = async () => {
  // find all packages anywhere named 'tap', '@tapjs/*', 'tap-*',
  // treport, or tcompare
  const versions: Record<string, string | Record<string, string>> = {}
  for (const p of allPkgs) {
    const v = tryGetVersion(p)
    if (v) versions[p] = v
  }

  const plugs = signature
    .split('\n')
    .sort((a, b) => a.localeCompare(b, 'en'))
  const pluginVersions: Record<string, string> = {}
  for (const p of plugs) {
    if (allPkgs.includes(p)) continue
    if (p.startsWith('@tapjs/core/')) continue
    const v = tryGetVersion(p)
    if (v) {
      versions.plugins = pluginVersions
      pluginVersions[p] = v
    }
  }
  // also try to get all the plugins that aren't part of core
  console.log((yaml.stringify || yaml.default.stringify)(versions))
}

const printTapVersion = async () => {
  const tv = tryGetVersion('tap')
  if (tv) return console.log(tv)
  const cv = tryGetVersion('@tapjs/core')
  if (cv) return `@tapjs/core@${cv}`
  const rv = tryGetVersion('@tapjs/run')
  if (rv) return `@tapjs/run@${rv}`
  throw new Error(
    'Could not get version for tap, @tapjs/core, or @tapjs/run'
  )
}
