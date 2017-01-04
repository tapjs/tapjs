var P = require('../')

var t = require('tap')

var bails = [ 'burn', '' ]

bails.forEach(function (bail) {
  t.test('bail=' + JSON.stringify(bail), runTest(bail))
})

function runTest (bail) { return function (t) {
  var bailName = bail ? '# ' + bail : ''
  var resName = bail ? ' - ' + bail : ''

  var p = new P({
    bail: true
  }, function (results) {
    t.match(results, {
      ok: false,
      count: 1,
      pass: 0,
      fail: 1,
      bailout: bailName || true,
      todo: 0,
      skip: 0,
      plan: {
        start: null,
        end: null,
        skipAll: false,
        skipReason: '',
        comment: ''
      },
      failures: [
        { ok: false, id: 1, name: 'parent {' }
      ]
    }, 'should get expected results')
  })

  var tapContent = function () {/*
TAP version 13
not ok 1 - parent {
    TAP version 13
    not ok 1 - child {
        not ok 1 - grandchild {
            ok 1 - this is fine
            not ok 2@@RESNAME@@
              ---
              some: yaml
              ...
            ok 3 - i am ok with events currently proceeding
            1..3
        }
        ok 2 - this is fine
        1..2
    }
    ok 2 - this is fine
    1..2
}
ok 2 - this is fine
1..2

*/}.toString().split('\n').slice(1, -1).join('\n')

  tapContent = tapContent.split('@@RESNAME@@').join(resName)

  var lines = []
  p.on('line', lines.push.bind(lines))
  p.end(tapContent)
  t.same(lines, [
    'TAP version 13\n',
    'not ok 1 - parent {\n',
    '    not ok 1 - child {\n',
    '        not ok 1 - grandchild {\n',
    '            ok 1 - this is fine\n',
    '            not ok 2' + resName + '\n',
    '              ---\n',
    '              some: yaml\n',
    '              ...\n',
    '            Bail out!' + (bail ? ' ' + bailName : '') + '\n',
    '        }\n',
    '    }\n',
    '}\n',
    'Bail out!' + (bail ? ' ' + bailName : '') + '\n',
  ], 'lines should be expected output')

  t.end()
}}
