// slightly more granular/precise ms
import ms_ from 'ms'
export const ms = (n: number) =>
  n < 1
    ? `${Math.round(n * 1000)}µs`
    : n < 10 && n !== Math.round(n)
    ? `${n.toFixed(3)}ms`
    : n < 1000
    ? `${Math.round(n)}ms`
    : n < 10_000
    ? `${(n / 1000).toFixed(3)}s`
    : ms_(Math.round(n))
