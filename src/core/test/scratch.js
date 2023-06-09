"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@tapjs/core");
const t = (0, core_1.tap)();
t.test('wrong plan sync', t => {
    t.plan(1);
    t.pass('this is fine');
    t.pass('this is not');
});
console.log('scratch.ts test file running');
t.test('hello', async (t) => {
    t.pass('spanning multiple lines', {
        diagnostic: true,
    });
    t.comment('nested comment');
    t.pass('next line indented weirdly', { diagnostic: true });
    t.equal(2, 2, { todo: true });
});
t.comment('this is a comment');
t.test('test with a todo', t => {
    t.todo('do this eventually');
    t.test('nested fail', async (t) => {
        t.test('way down in there', async (t) => {
            await new Promise(r => setTimeout(r, 100));
            t.match({
                a: 1,
                b: 2,
                c: 3,
            }, {
                a: 2,
                b: 2,
                c: 2,
            }, 'nope');
        });
    });
    t.end();
});
t.test('wrong plan with timeout', t => {
    t.plan(1);
    t.pass('this is fine');
    setTimeout(() => t.pass('this is not'));
});
t.test('test after promise resolution', async (t) => {
    t.pass('this is fine');
    setTimeout(() => t.pass('this is not'));
});
//# sourceMappingURL=scratch.js.map