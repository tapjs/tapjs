import EventEmitter from 'node:events'
export const listenCleanup = (
  e: EventEmitter | null | undefined,
  ev: string,
  fn: (...a: any[]) => any
) => {
  if (!e) return () => {}
  e.on(ev, fn)
  return () => {
    e.removeListener(ev, fn)
  }
}
