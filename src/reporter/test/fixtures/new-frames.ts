import { sleep } from './sleep.js'

export const newFrames = async (
  app: { frames: any[] },
  maxWait: number = 256,
  step = 10
) => {
  const len = app.frames.length
  await sleep(step)
  let start = Date.now()
  while (app.frames.length === len) {
    console.error(app.frames)
    const waited = Date.now() - start
    if (waited >= maxWait) {
      throw new Error(`no frame updates after ${waited} ms`)
    }
    await sleep(step)
  }
}
