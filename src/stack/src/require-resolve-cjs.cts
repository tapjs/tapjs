// commonjs style, just pull the resolve function from our require
const { resolve } = require
export const requireResolve = (s: string) => {
  try {
    return resolve(s)
  } catch {
    return null
  }
}
