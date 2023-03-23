class Foo {
  f = 1
  #priv = 'foo priv value'
  get fooPriv () {
    console.log('foo priv getter')
    return this.#priv
  }
  fooMethod () {
    console.log('foo method')
    return 'called method'
  }
  constructor() {
    this.foo = true
    console.log('foo ctor', this)
    let p = this
    let i = '>'
    while (p = Object.getPrototypeOf(p)) {
      console.log(i, p)
      i += ' >'
    }
    console.log('this.f', this.f)
    console.log('this.#priv', this.#priv)
  }
}

class Bar {
  b = 1
  #priv = 'bar priv value'
  get barPriv () {
    console.log('bar priv getter')
    return this.#priv
  }
  barMethod () {
    console.log('bar method')
    return 'called method'
  }
  constructor() {
    this.bar = true
    console.log('bar ctor', this)
    let p = this
    let i = '>'
    while (p = Object.getPrototypeOf(p)) {
      console.log(i, p)
      i += ' >'
    }
    console.log('this.b', this.b)
    console.log('this.#priv', this.#priv)
  }
}

Object.setPrototypeOf(Bar.prototype, Foo.prototype)

const FooFac = new Proxy(Foo, {
  apply(target, thisArg, args) {
    function C () {}
    C.prototype = thisArg
    console.log('foo factory')
    return Reflect.construct(target, args, C)
  }
})

const BarFac = new Proxy(Bar, {
  apply(target, thisArg, args) {
    function C () {}
    C.prototype = thisArg
    console.log('bar factory')
    return Reflect.construct(target, args, C)
  }
})

const method1 = () => {
  const f = { g: 1 }
  Object.setPrototypeOf(f, Bar.prototype)
  const foo = new Foo() // FooFac.call(f)
  const bar = new Bar() // BarFac.call(f)
  const h = new Proxy(Object.create(f), {
    get: (target, p) => {
      if (Object.hasOwnProperty.call(target, p)) {
        return p[target]
      }
      if (p in bar && !(p in foo)) {
        return Reflect.get(bar, p, bar)
      }
      return Reflect.get(foo, p, foo)
    }
  })
  return h
}

const method2 = () => {
  const f = { g: 1 }
  Object.setPrototypeOf(f, Bar.prototype)
  const g = FooFac.call(f)
  const h = BarFac.call(g)
  return h
}

const method3 = () => {
  const f = { g: 1 }
  Object.setPrototypeOf(f, Bar.prototype)
  const g = FooFac.call(f)
  const h = BarFac.call(g)
  return new Proxy(h, {
    get(_, p, __) {
      if (Object.hasOwnProperty.call(h, p)) {
        return h[p]
      } else if (p in h && !(p in g)) {
        return Reflect.get(h, p, h)
      } else if (p in g) {
        return Reflect.get(g, p, g)
      }
    }
  })
}

const h = method1()
console.log('h, h.g', h, h.g)
console.log('h.f', h.f)
console.log('h.b', h.b)
console.log('h.foo', h.foo)
console.log('h.bar', h.bar)
console.log('h.fooPriv', h.fooPriv)
console.log('h.barPriv', h.barPriv)
console.log('h.fooMethod()', h.fooMethod && h.fooMethod())
console.log('h.barMethod()', h.barMethod && h.barMethod())
