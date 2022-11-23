import { Format } from './format.js'
import { Same } from './same.js'
export class Has extends Same {
  // don't care about object shape, only that it has
  // matching fields of the same type.
  simpleMatch() {
    this.simple = this.test()
    if (!this.simple) {
      this.unmatch()
    }
  }

  isArray() {
    return (
      super.isArray() && new Format(this.expect).isArray()
    )
  }

  // just return the entries that exist in the expect object
  getPojoEntries(obj: any) {
    if (obj !== this.object) {
      return super.getPojoEntries(obj)
    }
    const expKeys = this.getPojoKeys(this.expect)
    const expSet = new Set(expKeys)
    const objKeys = this.getPojoKeys(obj)
    const objSet = new Set(objKeys)
    for (const k of expKeys) {
      if (!objSet.has(k) && this.expect[k] == undefined) {
        objKeys.push(k)
      }
    }
    const ent: [string, any][] = objKeys
      .filter(k => expSet.has(k))
      .map(k => [k, obj[k]])

    return this.sort
      ? ent.sort((a, b) => a[0].localeCompare(b[0], 'en'))
      : ent
  }

  printMapEntryUnexpected(_key: any, _val: any) {
    // nothing to do, this is fine
  }

  // only test expected array entries within the expect array length
  get objectAsArray() {
    const arr = super.objectAsArray
    if (arr) {
      const exp = super.expectAsArray
      if (exp && exp.length < arr.length) {
        const value = arr.slice(0, exp.length)
        Object.defineProperty(this, 'objectAsArray', {
          value,
          configurable: true,
        })
        return value
      }
    }
    const value = arr
    Object.defineProperty(this, 'objectAsArray', {
      value,
      configurable: true,
    })
    return value
  }

  // always include message/name, so you can do t.has(er, { message }) etc.
  printErrorBody() {
    super.printErrorBody()
    const expKeys = new Set(this.getPojoKeys(this.expect))
    if (expKeys.has('name') && this.expect.name) {
      this.printPojoEntry('name', this.object.name)
    }
    if (expKeys.has('message') && this.expect.message) {
      this.printPojoEntry('message', this.object.message)
    }
  }

  // this one is a little tricky, because we need to only walk the ones that
  // actually exist in the expect set.
  printSetBody() {
    // if there are MORE items in the expectation, that's always a fail.
    if (this.expect.size > this.object.size) {
      this.unmatch()
      this.memo += this.simplePrint(this.object)
      this.memoExpect += this.simplePrint(this.expect)
      return
    }
    const seen = new Set()
    // skip all identity matches
    for (const val of this.expect) {
      if (this.object.has(val)) {
        seen.add(val)
        continue
      }
    }
    for (const exp of this.expect) {
      if (seen.has(exp)) {
        continue
      }
      let sawMatch = false
      for (const val of this.object) {
        if (seen.has(val)) {
          continue
        }
        const s = this.child(val, {
          expect: exp,
          provisional: true,
        })
        s.print()
        if (s.match) {
          sawMatch = true
          seen.add(val)
          break
        }
      }
      if (!sawMatch) {
        this.unmatch()
        this.memo += this.simplePrint(this.object)
        this.memoExpect += this.simplePrint(this.expect)
        return
      }
    }
  }
}
