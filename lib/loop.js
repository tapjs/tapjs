module.exports = loop

// this weird little engine is to loop if the cb's keep getting
// called synchronously, since that's faster and makes shallower
// stack traces, but recurse if any of them don't fire this tick

function loop (self, arr, cb, onerr, i) {
  if (!i)
    i = 0

  var running = false
  while (i < arr.length && !running) {
    running = true
    var sync = true
    var ret = arr[i].call(self, next)
    if (ret && typeof ret.then === 'function')
      ret.then(next, onerr)
    sync = false
    i++
  }

  function next (er) {
    if (er)
      return onerr(er)
    else if (!sync)
      return loop(self, arr, cb, onerr, i + 1)
    running = false
  }

  if (i >= arr.length && !running)
    return cb()
}
