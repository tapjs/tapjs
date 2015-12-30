if (process.platform === 'win32') {
  // On windows, there is no good way to check that a file is executable
  module.exports = function isExe () {
    return true
  }
} else {
  module.exports = function isExe (stat) {
    var mod = stat.mode
    var uid = stat.uid
    var gid = stat.gid
    var u = parseInt('100', 8)
    var g = parseInt('010', 8)
    var o = parseInt('001', 8)
    var ug = u | g

    var ret = (mod & o) ||
      (mod & g) && process.getgid && gid === process.getgid() ||
      (mod & u) && process.getuid && uid === process.getuid() ||
      (mod & ug) && process.getuid && process.getuid() === 0

    return ret
  }
}
