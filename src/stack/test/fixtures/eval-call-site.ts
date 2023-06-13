const code = `
const stack = (cs) => {
  const { prepareStackTrace } = Error
  if (cs) Error.prepareStackTrace = (e, c) => c
  const { stack } = new Error('trace')
  Error.prepareStackTrace = prepareStackTrace
  return stack
}
stack
`
const getStackSymbol = Symbol('get (stack) <symbol> lol')
class Foo {
  get callSiteStack() {
    return this.#privateGetStack(true)
  }
  get stringStack() {
    return this.#privateGetStack(false)
  }
  #privateGetStack(cs: boolean) {
    return this[getStackSymbol](cs)
  }
  [getStackSymbol](cs: boolean) {
    return eval(code)(cs)
  }
}

export const stringStack = () => new Foo().stringStack
export const callSiteStack = () => new Foo().callSiteStack
