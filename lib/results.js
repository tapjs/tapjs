// A class for counting up results in a test harness.

module.exports = Results

function Results (r) {
  if (r) this.addSet(r)
}

Results.prototype.addSet = function (r) {
  r = r || {ok: true}
  ; [ "todo"
    , "todoPass"
    , "todoFail"
    , "skip"
    , "skipPass"
    , "skipFail"
    , "pass"
    , "passTotal"
    , "fail"
    , "failTotal"
    , "tests"
    , "testsTotal" ].forEach(function (k) {
      this[k] = (this[k] || 0) + (r[k] || 0)
    })

  this.ok = this.ok && r.ok && true
  this.bailedOut = this.bailedOut || r.bailedOut || false
  this.list = (this.list || []).concat(r.list || [])
}

Results.prototype.add = function (r) {
  var pf = r.ok ? "pass" : "fail"
    , PF = r.ok ? "Pass" : "Fail"

  this.testsTotal ++
  this[pf + "Total"] ++

  if (r.skip) {
    this["skip" + PF] ++
    this.skip ++
  } else if (r.todo) {
    this["todo" + PF] ++
    this.todo ++
  } else {
    this.tests ++
    this[pf] ++
  }

  if (r.bailout || typeof r.bailout === "string") this.bailedOut = true
  this.ok = !!(this.ok && r.ok)

  this.list.push(r)
}
