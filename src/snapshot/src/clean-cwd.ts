import { cwd } from '@tapjs/core'
import { pathToFileURL } from 'node:url'

// escape a string to json, then unwrap the "
// used for cwd detection
const esc = (s: string) => {
  const j = JSON.stringify(s)
  return j.substring(1, j.length - 1)
}
const cwdURL = String(pathToFileURL(cwd)).substring('file://'.length)
const cwdPosix = cwd.replace(/\\/g, '/')
const cwdLcase = cwd.toLowerCase()
const cwdPosixLcase = cwdPosix.toLowerCase()
const cwds = new Set([cwdURL, cwd, cwdPosix, cwdLcase, cwdPosixLcase])
for (const c of [...cwds]) {
  cwds.add(esc(c))
  cwds.add(esc(esc(c)))
  cwds.add(esc(esc(esc(c))))
  cwds.add(esc(esc(esc(esc(c)))))
}

const reSpecial = /[/\-\\^$*+?.()|[\]{}]/g
const escapeRegex = (s: string) => s.replace(reSpecial, '\\$&')

export const cleanCWD = (snap: string) => {
  const tag = '{CWD}'
  for (const c of cwds) {
    const r = new RegExp(escapeRegex(c), 'gi')
    snap = snap.replace(r, tag)
  }
  return snap
}
