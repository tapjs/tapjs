var WritableStream = require('readable-stream').Writable

process.stdout = new WritableStream({
  write: function(chunks, encoding, cb){
    var output = chunks.toString ? chunks.toString("utf-8") : chunks;
    console.log(output);
    process.nextTick(cb);
  }
});

process.stderr = new WritableStream({
  write: function(chunks, encoding, cb){
    var output = chunks.toString ? chunks.toString("utf-8") : chunks;
    console.error(output);
    process.nextTick(cb);
  }
});

Error.captureStackTrace = require("capture-stack-trace");
