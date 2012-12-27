var split = require('split');
var through = require('through');
var duplexer = require('duplexer');

module.exports = function () {
    var splitter = split();
    var tr = through(write, end);
    splitter.pipe(tr);
    
    return duplexer(splitter, tr);
    
    function write (line) {
        this.emit('data', {});
    }
    
    function end () {
    }
};
