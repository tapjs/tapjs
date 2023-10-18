/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/diff.tsx > TAP > ansi escape codes > must match snapshot 1`] = `
[48;2;172;62;163m[38;2;255;229;241m--- expected                                                       [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+++ actual                                                         [39m[49m
[1m[48;2;34;34;34m[38;2;117;158;239m@@ -1,3 +1,3 @@[38;2;229;153;255m                                                    [39m[49m[22m
[48;2;172;62;163m[38;2;255;229;241m-Error: Oh \\x1b[1mdeary \\x1b[2mdeary \\x1b[0mdear. {                [39m[49m
[48;2;172;62;163m[38;2;255;229;241m-  "cause": "foo",                                                 [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+Error: Oh deary deary dear. {                                     [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+  "cause": "bar",                                                 [39m[49m
[48;2;51;51;51m[38;2;204;204;204m }                                                                 [39m[49m
`

exports[`test/diff.tsx > TAP > diff some stuff > must match snapshot 1`] = `
[48;2;172;62;163m[38;2;255;229;241m--- expected                                                       [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+++ actual                                                         [39m[49m
[1m[48;2;34;34;34m[38;2;117;158;239m@@ -1,14 +1,14 @@[38;2;229;153;255m                                                  [39m[49m[22m
[48;2;51;51;51m[38;2;204;204;204m {                                                                 [39m[49m
[48;2;51;51;51m[38;2;204;204;204m   "a": {                                                          [39m[49m
[48;2;51;51;51m[38;2;204;204;204m     "b": {                                                        [39m[49m
[48;2;172;62;163m[38;2;255;229;241m-      "x": {                                                      [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+      "c": {                                                      [39m[49m
[48;2;51;51;51m[38;2;204;204;204m         "d": {                                                    [39m[49m
[48;2;51;51;51m[38;2;204;204;204m           "a": 1,                                                 [39m[49m
[48;2;51;51;51m[38;2;204;204;204m           "b": 2,                                                 [39m[49m
[48;2;172;62;163m[38;2;255;229;241m-          "x": 3,                                                 [39m[49m
[48;2;172;62;163m[38;2;255;229;241m-          "d": 5,                                                 [39m[49m
[48;2;172;62;163m[38;2;255;229;241m-          "y": 5                                                  [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+          "c": 3,                                                 [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+          "d": 4,                                                 [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+          "e": 5                                                  [39m[49m
[48;2;51;51;51m[38;2;204;204;204m         }                                                         [39m[49m
[48;2;51;51;51m[38;2;204;204;204m       }                                                           [39m[49m
[48;2;51;51;51m[38;2;204;204;204m     }                                                             [39m[49m
[48;2;51;51;51m[38;2;204;204;204m   }                                                               [39m[49m
`

exports[`test/diff.tsx > TAP > long lines > must match snapshot 1`] = `
[48;2;172;62;163m[38;2;255;229;241m--- expected                                                               [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+++ actual                                                                 [39m[49m
[1m[48;2;34;34;34m[38;2;117;158;239m@@ -1,6 +1,6 @@[38;2;229;153;255m                                                            [39m[49m[22m
[48;2;51;51;51m[38;2;204;204;204m                                                                           [39m[49m
[48;2;51;51;51m[38;2;204;204;204m WHEN I WROTE the following pages, or rather the bulk of them, I lived alone,[39m[49m
[48;2;172;62;163m[38;2;255;229;241m-in the woods, a mile from any neighbor, in a house which I had built myself,[39m[49m
[48;2;58;117;0m[38;2;242;255;229m+in the woods, a mile from any neighbor, in a house which I had inherited, [39m[49m
[48;2;51;51;51m[38;2;204;204;204m on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by[39m[49m
[48;2;172;62;163m[38;2;255;229;241m-the labor of my hands only. I lived there two years and two months. At present[39m[49m
[48;2;58;117;0m[38;2;242;255;229m+handouts from my in-laws. I lived there two years and two months. At present[39m[49m
[48;2;51;51;51m[38;2;204;204;204m I am a sojourner in civilized life again.                                 [39m[49m
`

exports[`test/diff.tsx > TAP > no diff actually > must match snapshot 1`] = `

`

exports[`test/diff.tsx > TAP > weird ctx line > must match snapshot 1`] = `
[48;2;172;62;163m[38;2;255;229;241m--- expected                                                       [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+++ actual                                                         [39m[49m
[1m[48;2;34;34;34m[38;2;117;158;239m@apple is a fruit@                                                 [39m[49m[22m
[48;2;51;51;51m[38;2;204;204;204m {                                                                 [39m[49m
[48;2;51;51;51m[38;2;204;204;204m   "a": {                                                          [39m[49m
[48;2;51;51;51m[38;2;204;204;204m     "b": {                                                        [39m[49m
[48;2;172;62;163m[38;2;255;229;241m-      "x": {                                                      [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+      "c": {                                                      [39m[49m
[48;2;51;51;51m[38;2;204;204;204m         "d": {                                                    [39m[49m
[48;2;51;51;51m[38;2;204;204;204m           "a": 1,                                                 [39m[49m
[48;2;51;51;51m[38;2;204;204;204m           "b": 2,                                                 [39m[49m
[48;2;172;62;163m[38;2;255;229;241m-          "x": 3,                                                 [39m[49m
[48;2;172;62;163m[38;2;255;229;241m-          "d": 5,                                                 [39m[49m
[48;2;172;62;163m[38;2;255;229;241m-          "y": 5                                                  [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+          "c": 3,                                                 [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+          "d": 4,                                                 [39m[49m
[48;2;58;117;0m[38;2;242;255;229m+          "e": 5                                                  [39m[49m
[48;2;51;51;51m[38;2;204;204;204m         }                                                         [39m[49m
[48;2;51;51;51m[38;2;204;204;204m       }                                                           [39m[49m
[48;2;51;51;51m[38;2;204;204;204m     }                                                             [39m[49m
[48;2;51;51;51m[38;2;204;204;204m   }                                                               [39m[49m
`
