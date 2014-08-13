var tap = require("../")
  , fs = require("fs")
  , cp = require("child_process")

function makeScript (gc) {
  var fn = gc ? "ok" : "notOk"
  return [
    "var tap = require(\"../\")",
    "tap.test(\"gc\", function (t) {",
    "  t.plan(1)",
    "  t." + fn + "(!!global.gc)",
    "})"
  ].join("\n");
}

function makeOutput (filename) {
  return [
    "ok ./" + filename + " " + Array(52 - filename.length).join(".") + " 2/2",
    "total ................................................... 2/2",
    "",
    "ok",
    ""
  ].join("\n")
}

function runTest(label, args, filename) {
  args.push(filename);
  tap.test(label, function (t) {
    t.plan(3)

    cp.execFile("../bin/tap.js", args, function (err, stdo, stde) {
      t.error(err, "No error")
      t.equal(stdo, makeOutput(filename), "Correct stardard output")
      t.equal(stde, "", "No output on stderr")
    })
  })
}

fs.writeFileSync("gc-script.js", makeScript(true), "utf8")
fs.writeFileSync("no-gc-script.js", makeScript(false), "utf8")

runTest("global.gc falsy w/o --gc or --expose-gc flag", [], "no-gc-script.js")
runTest("global.gc truthy w/ --gc flag", ["--gc"] , "gc-script.js")
runTest("global.gc truthy w/ --expose-gc flag", ["--expose-gc"], "gc-script.js")

// Cannot unlink test files until all tests are done. 
setTimeout(function(){
  fs.unlinkSync("gc-script.js");
  fs.unlinkSync("no-gc-script.js");
}, 600)
