import { cwd } from '@tapjs/core'

// escape a string to json, then unwrap the "
// used for cwd detection
const esc = (s: string) => {
  const j = JSON.stringify(s)
  return j.substring(1, j.length - 1)
}
const cwdPosix = cwd.replace(/\\/g, '/')
const cwdLcase = cwd.toLowerCase()
const cwdPosixLcase = cwdPosix.toLowerCase()
const cwds = new Set([cwd, cwdPosix, cwdLcase, cwdPosixLcase])
for (const c of [...cwds]) {
  cwds.add(esc(c))
  cwds.add(esc(esc(c)))
  cwds.add(esc(esc(esc(c))))
  cwds.add(esc(esc(esc(esc(c)))))
}

export const cleanCWD = (snap: string) => {
  const tag = '{CWD}'
  for (const c of cwds) {
    let i = -1
    // pad it out so that the length matches through the walk
    const replace = tag + '\u0001'.repeat(c.length - tag.length)
    while (
      -1 !== (i = snap.toLowerCase().indexOf(c.toLowerCase(), i))
    ) {
      snap =
        snap.substring(0, i) +
        replace +
        snap.substring(i + replace.length)
    }
    snap = snap.split(replace).join(tag)
  }
  return snap
}
