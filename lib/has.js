const Same = require('./same.js')
class Has extends Same {
  arrayBody () {
    if (this.object.length === this.expect.length)
      return super.arrayBody()

    const obj = Array.isArray(this.object)
      ? this.object : Array.from(this.object)

    const exp = Array.isArray(this.expect)
      ? this.expect : Array.from(this.expect)

    // only need to handle missing values, not extra ones
    let out = ''
    let key = 0
    for (; key < obj.length && key < exp.length; key++) {
      out += this.arrayEntry(key, obj[key])
    }
    for (; key < exp.length; key++) {
      this.unmatch()
      out += this.prefix(this.simplePrint(exp[key], {
        level: this.level + 1,
        parent: this,
      }), '-')
    }
    return out
  }

  mapIsEmpty () {
    return this.expect.size === 0
  }
  setIsEmpty () {
    return this.expect.size === 0
  }
  pojoIsEmpty () {
    return Object.keys(this.expect).length === 0
  }
  arrayIsEmpty () {
    return this.expect.length === 0
  }

  setBody () {
    if (this.object.size === this.expect.size)
      return super.setBody()

    let out = ''
    const seen = new Set()
    for (const exp of this.expect) {
      if (this.object.has(exp)) {
        seen.add(exp)
        out += this.setEntry(exp)
        continue
      }

      let sawMatch = false
      for (const val of this.object) {
        if (seen.has(val))
          continue

        const s = this.child(val, {
          expect: exp,
          provisional: true
        })
        const sp = s.print()
        if (s.match) {
          sawMatch = true
          seen.add(val)
          out += sp
          break
        }
      }

      if (!sawMatch) {
        this.unmatch()
        out += this.prefix(this.simplePrint(exp, {
          level: this.level + 1,
          parent: this,
        }), '-')
      }
    }

    return out
  }

  mapBody () {
    if (this.object.size === this.expect.size)
      return super.mapBody()

    const expEnt = this.expect.entries()
    let out = ''
    const seen = new Set()
    for (const [key, val] of expEnt) {
      if (this.object.has(key)) {
        out += this.mapEntry(key, this.object.get(key), key)
        seen.add(key)
        continue
      }
      // try to find a matching key
      let sawMatch = false
      for (const [objkey, objval] of this.object.entries()) {
        if (seen.has(objkey)) {
          continue
        }

        const s = this.child(objkey, {
          expect: key,
          provisional: true,
        })
        const sp = s.print()
        if (s.match) {
          sawMatch = true
          seen.add(objkey)
          out += this.mapEntry(objkey, this.object.get(objkey), key)
          break
        }
      }

      if (!sawMatch) {
        this.unmatch()
        out += this.prefix(this.simplePrint(val, {
          key,
          level: this.level + 1,
          parent: this,
        }), '-')
      }
    }
    return out
  }

  pojoBody () {
    const objEnt = Object.entries(this.object)
    const expEnt = Object.entries(this.expect)
    if (objEnt.length === expEnt.length)
      return super.pojoBody()

    let out = ''
    for (const [key, val] of expEnt) {
      if ((key in this.object) || val === undefined)
        out += this.pojoEntry(key, this.object[key])
      else {
        this.unmatch()
        out += this.prefix(this.simplePrint(val, {
          level: this.level + 1,
          parent: this,
          key,
        }), '-')
      }
    }
    return out
  }
}

module.exports = Has
