/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/source.tsx > TAP > do not show caret if lineNumber invalid > must match snapshot 1`] = `
[48;5;234m[2mtest/source.tsx                                                      [22m[49m
 [48;5;234m[37m27 [97m})[38;5;252m                                                                [39m[49m
 [48;5;234m[37m28 [38;5;252m                                                                  [39m[49m
 [48;5;234m[37m29 [38;5;252mt[97m.[38;5;252mtest[97m([38;5;113m'do not show caret if lineNumber invalid'[97m,[38;5;252m t => [97m{[38;5;252m          [39m[49m
[1m[31m▶[22m[48;5;234m[37m30 [38;5;252m  [96mconst[38;5;252m cs = at[97m()[38;5;252m                                                 [39m[49m
 [48;5;234m[37m31 [38;5;252m  [96mif[38;5;252m [97m([38;5;252m!cs[97m)[38;5;252m [96mthrow[38;5;252m [96mnew[38;5;252m Error[97m([38;5;113m'y u no callsite??'[97m)[38;5;252m                   [39m[49m
 [48;5;234m[37m32 [38;5;252m  cs[97m.[38;5;252mcolumnNumber = -[38;5;113m1[38;5;252m                                            [39m[49m
 [48;5;234m[37m33 [38;5;252m  [96mconst[38;5;252m app = render[97m(<[38;5;252mSource [38;5;113mat[38;5;252m=[97m{[38;5;252mcs[97m}[38;5;252m [97m/>)[38;5;252m                          [39m[49m
 [48;5;234m[37m34 [38;5;252m  t[97m.[38;5;252mmatchSnapshot[97m([38;5;252mapp[97m.[38;5;252mlastFrame[97m())[38;5;252m                                [39m[49m
`

exports[`test/source.tsx > TAP > file not readable, fall back to source > must match snapshot 1`] = `
diag source
`

exports[`test/source.tsx > TAP > show diag source if provided and callsite invalid > must match snapshot 1`] = `
diag source
`

exports[`test/source.tsx > TAP > show source if valid callsite > must match snapshot 1`] = `
[48;5;234m[2mtest/source.tsx                                                      [22m[49m
[48;5;234m[37m15 [97m})[38;5;252m                                                                [39m[49m
[48;5;234m[37m16 [38;5;252m                                                                  [39m[49m
[48;5;234m[37m17 [38;5;252mt[97m.[38;5;252mtest[97m([38;5;113m'show source if valid callsite'[97m,[38;5;252m t => [97m{[38;5;252m                    [39m[49m
[48;5;234m[37m18 [38;5;252m  [96mconst[38;5;252m app = render[97m(<[38;5;252mSource [38;5;113mat[38;5;252m=[97m{[38;5;252mat[97m()}[38;5;252m [97m/>)[38;5;252m                        [39m[49m
[48;5;234m[31m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[1m┛[22m                                 [39m[49m
[48;5;234m[37m19 [38;5;252m  t[97m.[38;5;252mmatchSnapshot[97m([38;5;252mapp[97m.[38;5;252mlastFrame[97m())[38;5;252m                                [39m[49m
[48;5;234m[37m20 [38;5;252m  t[97m.[38;5;252mend[97m()[38;5;252m                                                         [39m[49m
[48;5;234m[37m21 [97m})[38;5;252m                                                                [39m[49m
[48;5;234m[37m22 [38;5;252m                                                                  [39m[49m
`

exports[`test/source.tsx > TAP > show source with callsite > must match snapshot 1`] = `
[48;5;234m[2mtest/source.tsx                                                      [22m[49m
[48;5;234m[37m 9 [96mimport[38;5;252m [97m{[38;5;252m Source [97m}[38;5;252m [96mfrom[38;5;252m [38;5;113m'../dist/source.js'[38;5;252m                        [39m[49m
[48;5;234m[37m10 [38;5;252m                                                                  [39m[49m
[48;5;234m[37m11 [38;5;252mt[97m.[38;5;252mtest[97m([38;5;113m'show source with callsite'[97m,[38;5;252m t => [97m{[38;5;252m                        [39m[49m
[48;5;234m[37m12 [38;5;252m  [96mconst[38;5;252m app = render[97m(<[38;5;252mSource [38;5;113mat[38;5;252m=[97m{[38;5;252mat[97m()}[38;5;252m [38;5;113msource[38;5;252m=[97m{[38;5;113m'diag source'[97m}[38;5;252m [97m/>)[38;5;252m [39m[49m
[48;5;234m[31m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[1m┛[22m                                 [39m[49m
[48;5;234m[37m13 [38;5;252m  t[97m.[38;5;252mmatchSnapshot[97m([38;5;252mapp[97m.[38;5;252mlastFrame[97m())[38;5;252m                                [39m[49m
[48;5;234m[37m14 [38;5;252m  t[97m.[38;5;252mend[97m()[38;5;252m                                                         [39m[49m
[48;5;234m[37m15 [97m})[38;5;252m                                                                [39m[49m
[48;5;234m[37m16 [38;5;252m                                                                  [39m[49m
`
