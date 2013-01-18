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
        pass: [],
        fail: [],
        errors: []
    };
    
    stream.on('assert', function (res) {
        results.asserts.push(res);
        if (!res.ok) results.ok = false;
        (res.ok ? results.pass : results.fail).push(res);
        
        var prev = results.asserts[results.asserts.length - 2];
        if (prev && prev.number + 1 !== res.number) {
            stream.emit('parseError', {
                message: 'assert out of order'
            });
        }
    });
    
    stream.on('plan', function (plan) {
        if (results.plan !== undefined) {
            stream.emit('parseError', {
                message: 'unexpected additional plan',
            });
            return;
        }
        results.plan = plan;
        checkAssertionStart();
    });
    
    var planMismatch = false;
    function checkAssertionStart () {
        if (planMismatch) return;
        if (!results.asserts[0]) return;
        if (!results.plan) return;
        if (results.asserts[0].number === results.plan.start) return;
        
        planMismatch = true;
        stream.emit('parseError', {
            message: 'plan range mismatch'
        });
    }
    
    stream.on('parseError', function (err) {
        results.ok = false;
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
        
        if (results.asserts.length === 0) {
            stream.emit('parseError', {
                message: 'no assertions found'
            });
        }
        
        if (results.plan === undefined) {
            stream.emit('parseError', {
                message: 'no plan found'
            });
        }
        if (results.ok === undefined) results.ok = true;
        
        var last = results.asserts.length
            && results.asserts[results.asserts.length - 1].number
        ;
        if (results.ok && last < results.plan.end) {
            stream.emit('parseError', {
                message: 'not enough asserts'
            });
        }
        else if (results.ok && last > results.plan.end) {
            stream.emit('parseError', {
                message: 'too many asserts'
            });
        }
        
        stream.emit('results', results);
    }
    
    function ondata (line) {
        var m;
        lineNum ++;
        
        if (m = re.version.exec(line)) {
            var ver = /^\d+(\.\d*)?$/.test(m[1]) ? Number(m[1]) : m[1];
            stream.emit('version', ver);
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
