var test = require('tap').test;

test(function (t) {
    t.test(function (st) {
        st.plan(2);
        st.equal(2+2,4);
        st.same({a:1,b:2},{a:1,b:1+1});
    });
    
    t.test(function (st) {
        st.plan(2);
        st.equal(1+1,2);
        
        setTimeout(function () {
            st.ok(true);
        }, 1000);
    });
});
