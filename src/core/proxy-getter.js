class B {
  #b = 1
  get b() {
    return this.#b
  }
  getB() {
    return this.#b
  }
  set b(n) {
    this.#b -= n
  }
}

const o = new (class O extends B {
  #p = 1
  q = 123
  get p() {
    return this.#p
  }
  set p(n) {
    this.#p += n
  }
})()

const a = new (class A extends B {
  #a = 1
  q = 'abc'
  get a() {
    return this.#a
  }
  getA() {
    return this.#a
  }
  set a(n) {
    this.#a *= n
  }
})()

const p = new Proxy(o, {
  get: (target, p, receiver) => {
    console.error('GET', target, p, receiver)
    if (p in o) {
      const v = o[p]
      if (typeof v === 'function') {
        return (...args) => v.call(o, ...args)
      } else {
        return v
      }
    } else if (p in a) {
      const v = a[p]
      if (typeof v === 'function') {
        return (...args) => v.call(a, ...args)
      } else {
        return v
      }
    }
  },
  set: (target, p, v, receiver) => {
    console.error('SET', target, p, v, receiver)
    if (p in o) {
      return (o[p] = v)
    } else if (p in a) {
      return (a[p] = v)
    }
  },
})

console.log(o.p)
console.log(o.b)
console.log(o.getB())
console.log(a.a)
console.log(a.getA())
o.p = 10
o.b = 10
a.a = 4
console.log(o.p)
console.log(o.b)
console.log(o.getB())
console.log(a.a)
console.log(a.getA())

console.log(p.p)
console.log(p.b)
console.log(p.getB())
console.log(p.a)
console.log(p.getA())
p.p = 12
p.b = 12
p.a = 5
console.log(p.p)
console.log(p.b)
console.log(p.getB())
console.log(p.a)
console.log(p.getA())

const ok = new Proxy({x: 'y'}, {
  ownKeys(target) {
    return [...Object.keys(target), 'a', 'b', 'c']
  }
})
console.log(Object.keys(ok))
for (const k in ok) {
  console.log(k)
}
