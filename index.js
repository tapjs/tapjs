var Writable = require('readable-stream').Writable;
var inherits = require('inherits');

var re = {
    ok: new RegExp([
        '^(not )?ok\\b(?:',
        '(?:\\s+(\\d+))?(?:\\s+(?:(?:\\s*-\\s*)?(.*)))?',
        ')?'
    ].join('')),
    plan: /^(\d+)\.\.(\d+)\b(?:\s+#\s+SKIP\s+(.*)$)?/,
    comment: /^#\s*(.+)/,
    version: /^TAP\s+version\s+(\d+)/i,
    label_todo: /^(.*?)\s*#\s*TODO\s+(.*)$/
};

module.exports = Parser;
inherits(Parser, Writable);

function Parser (cb) {
    if (!(this instanceof Parser)) return new Parser(cb);
    Writable.call(this, { encoding: 'string' });
    if (cb) this.on('results', cb);
    
    this.results = {
        ok: undefined,
        asserts: [],
        pass: [],
        fail: [],
        todo: [],
        errors: []
    };
    this._lineNum = 1;
    this._line = '';
    this._planMismatch = false;
    
    this.on('finish', function () {
        if (this._line.length) this._online(this._line);
        this._finished();
    });
    
    this.on('assert', this._onassert);
    this.on('plan', this._onplan);
    this.on('parseError', function (err) {
        this.results.ok = false;
        err.line = this._lineNum;
        this.results.errors.push(err);
    });
}

Parser.prototype._write = function (chunk, enc, next) {
    var parts = (this._line + chunk).split('\n');
    for (var i = 0; i < parts.length - 1; i++) {
        this._online(parts[i]);
        this._lineNum ++;
    }
    this._line = parts[parts.length - 1];
    next();
};

Parser.prototype._onassert = function (res) {
    var results = this.results;
    results.asserts.push(res);
    if (!res.ok && !res.todo) results.ok = false;
    var dest = (res.ok ? results.pass : results.fail);
    if (res.todo) dest = results.todo;
    dest.push(res);
    
    var prev = results.asserts[results.asserts.length - 2];

    if (!res.number) {
        if (prev) res.number = prev.number + 1;
        else res.number = 1;
    }

    if (prev && prev.number + 1 !== res.number) {
        this.emit('parseError', {
            message: 'assert out of order'
        });
    }
};

Parser.prototype._onplan = function (plan, skip_reason) {
    var results = this.results;
    
    if (results.plan !== undefined) {
        this.emit('parseError', {
            message: 'unexpected additional plan'
        });
        return;
    }
    if (plan.start === 1 && plan.end === 0) {
        plan.skip_all = true;
        plan.skip_reason = skip_reason; // could be undefined
    } else if (skip_reason) {
        this.emit('parseError', {
            message: 'plan is not empty, but has a SKIP reason',
            skip_reason: skip_reason
        });
        plan.skip_all = false;
        plan.skip_reason = skip_reason;
        // continue to use the plan
    }
    results.plan = plan;
    this._checkAssertionStart();
};
 
Parser.prototype._online = function (line) {
    var m;
    if (m = re.version.exec(line)) {
        var ver = /^\d+(\.\d*)?$/.test(m[1]) ? Number(m[1]) : m[1];
        this.emit('version', ver);
    }
    else if (m = re.comment.exec(line)) {
        this.emit('comment', m[1]);
    }
    else if (m = re.ok.exec(line)) {
        var ok = !m[1];
        var num = m[2] && Number(m[2]);
        var name = m[3];
        var asrt = {
            ok: ok,
            number: num,
            name: name
        };
        
        if (m = re.label_todo.exec(name)) {
            asrt.name = m[1];
            asrt.todo = m[2];
        }
        
        this.emit('assert', asrt);
    }
    else if (m = re.plan.exec(line)) {
        this.emit('plan', {
            start: Number(m[1]),
            end: Number(m[2])
        },
        m[3]); // reason, if SKIP
    }
    else this.emit('extra', line)
};

Parser.prototype._checkAssertionStart = function () {
    var results = this.results;
    if (this._planMismatch) return;
    if (!results.asserts[0]) return;
    if (!results.plan) return;
    if (results.asserts[0].number === results.plan.start) return;
    
    this._planMismatch = true;
    this.emit('parseError', {
        message: 'plan range mismatch'
    });
};

Parser.prototype._finished = function () {
    var results = this.results;
    if (results.plan === undefined) {
        this.emit('parseError', {
            message: 'no plan found'
        });
    }
    if (results.ok === undefined) results.ok = true;
    
    var skip_all = (results.plan && results.plan.skip_all);
    if (results.asserts.length === 0 && ! skip_all) {
        this.emit('parseError', {
            message: 'no assertions found'
        });
    } else if (skip_all && results.asserts.length !== 0) {
        this.emit('parseError', {
            message: 'assertion found after skip_all plan'
        });
    }

    var last = results.asserts.length
        && results.asserts[results.asserts.length - 1].number
    ;
    if (results.ok && last < results.plan.end) {
        this.emit('parseError', {
            message: 'not enough asserts'
        });
    }
    else if (results.ok && last > results.plan.end) {
        this.emit('parseError', {
            message: 'too many asserts'
        });
    }
    this.emit('results', results);
};
