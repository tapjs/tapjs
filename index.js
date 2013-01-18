var Stream = require('stream');
var EventEmitter = require('events').EventEmitter;
var split = require('split');

var re = {
    ok: new RegExp([
        '^(not )?ok\\b(?:',
        '\\s+(\\d+)(?:\\s+(?:(?:\\s*-\\s*)?(.*)))?',
        ')?'
    ].join('')),
    plan: /^(\d+)\.\.(\d+)\b/,
    comment: /^#\s*(.+)/,
    version: /^TAP\s+version\s+(\d+)/i
};

function writable (s) {
    var stream = new Stream;
    stream.writable = true;
    stream.write = function (buf) { return s.write(buf) };
    stream.end = function (buf) { return s.end(buf) };
    return stream;
}

module.exports = function (cb) {
    var sp = split();
    var stream = writable(sp);
    
    var results = stream.results = {
        ok: undefined,
        asserts: [],
        errors: []
    };
    
    stream.on('assert', function (res) {
        results.asserts.push(res);
        if (!res.ok) results.ok = false;
    });
    
    stream.on('plan', function (plan) {
        if (results.plan === undefined) {
            results.plan = plan;
        }
        else {
            results.errors.push({
                message: 'unexpected additional plan',
                line: lineNumber
            });
        }
    });
    
    stream.on('parseError', function (err) {
        err.line = lineNum;
        results.errors.push(err);
    });
    
    var lineNum = 0;
    var ended = false;
    
    sp.on('data', ondata);
    sp.on('end', onend);
    sp.on('close', onend);
    
    if (cb) stream.on('results', cb);
    
    return stream;
    
    function onend () {
        if (ended) return;
        ended = true;
        
        if (results.asserts.length === 0) results.ok = false;
        results.ok = results.ok === undefined ? true : results.ok;
        
        if (results.plan === undefined) {
            results.ok = false;
            stream.emit('parseError', {
                message: 'no plan found'
            });
        }
        
        stream.emit('results', results);
    }
    
    function ondata (line) {
        var m;
        lineNum ++;
        
        if (m = re.version.exec(line)) {
            stream.emit('version', m[1]);
        }
        else if (m = re.comment.exec(line)) {
            stream.emit('comment', m[1]);
        }
        else if (m = re.ok.exec(line)) {
            var ok = !m[1];
            var num = m[2] && Number(m[2]);
            var name = m[3];
            
            if (num === undefined) {
                return stream.emit('parseError', {
                    message: 'assertion number not provided'
                });
            }
            
            stream.emit('assert', {
                ok: ok,
                number: num,
                name: name
            });
        }
        else if (m = /^(\d+)\.\.(\d+)\b/.exec(line)) {
            stream.emit('plan', {
                start: Number(m[1]),
                end: Number(m[2])
            });
        }
    }
};
