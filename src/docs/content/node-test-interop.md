---
title: Interoperability with the Node.js Built-in Test Runner
eleventyNavigation:
  key: Node Test Interop
  parent: Docs
  order: 45
---

> *tl;dr* - Use the `tap` runner to run tests written with
> `node:test` or run `tap` tests with `node --test` and it Just
> Works with full interoperability. Mix and match how you see
> fit.

The best way to appreciate how these two things work together is
with an example. The [`tapjs/node-test-example`
repo](https://github.com/tapjs/node-test-example) is a module
with a shocking number of bugs for how little code it is, with a
test written using `node:test` and effectively the same test
written using `tap`.

When you run `npm test`, it'll run with both `tap` and `node
--test`.

```bash
git clone git@github.com:tapjs/node-test-example.git
cd node-test-example
npm install
npm test # run both with tap, and both with node --test
```

* `npm run test:node` Executes both test suite files with the
  `node --test` runner.
* `npm run test:tap` Execute both test suite files with the
  `tap` runner.
* `npm run test:mix` Run the node test with node, the tap test
  with tap, sharing a coverage folder.
* `npm run test:cross` Run the node test with tap, the tap test
  with node, sharing a coverage folder.

The `test:mix` and `test:cross` show using the `node --test` and
`tap` runners so that they dump coverage into the same folder.
Then you can use `tap report` to report on it.

In all cases, you can see that the results are pretty similar.

## Differences

- When running with the `tap` runner, they're almost identical.
  The main thing is that the `node:test` doesn't provide
  per-assertion reporting, so you only see a report on the test
  block, and possibly the first failure, not all the assertions
  within it.
- When running with the `node --test` runner, the `tap` test
  provides diffs and source callsite printing, while the
  `node:test` test shows a `console.log()` of the thrown Error.

Of course, the two runners produce very different output overall,
but they should both be pretty sensible.

Personally, I think the tap runner is a lot more useful, and
certainly if you write tests in TypeScript (or use tap's `import`
mocking) it's nice to not have to specify the `--loader` and
`--import` arguments explicitly.

But on the flip side, that fanciness comes with a cost. With
TypeScript disabled, `tap` runs these two tests in about 450ms on
my system (350ms or so with coverage disabled), while `node
--test` does it in around 170ms. In both cases, the
`test/tap.test.js` test takes around 150ms to run, and the
`test/node.test.js` takes under 10ms.

Real world tests doing complicated stuff would show a less
dramatic difference, so this is in no way a representative
benchmark, but as always, performance and features are
fundamentally opposed, because features require running code, and
not running code is always faster.

## You Do You

The goal of the `node:test` interoperability in node-tap is to
make it possible for you to get the best of both worlds. You
could have part of your test suite written as `node:test` tests,
if they don't need `t.mockImport` or TypeScript, and other tests
written in `tap` that are just more convenient to run with a
runner that knows which loaders to apply.

## Enough talk! Show the output!

Running with `tap`:

<pre style="color:#eeeeee;background:#222222"><span style="font-weight:bold;color:#ffffff;background:#f00"> FAIL </span> test/node.test.js <span style="color:#f00;background:#222222">2 failed</span> of <span style="font-weight:bold;color:#eeeeee;background:#222222">4</span> <span style="color:#b2b2b2;background:#222222">6.834ms</span>
 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; uhoh, this one throws
 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; failer
<span style="font-weight:bold;color:#ffffff;background:#f00"> FAIL </span> test/tap.test.js <span style="color:#f00;background:#222222">3 failed</span> of <span style="font-weight:bold;color:#eeeeee;background:#222222">18</span> <span style="color:#b2b2b2;background:#222222">340ms</span>
 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; uhoh, this one throws &gt; Invalid time value <span style="color:#b2b2b2;background:#222222">lib/index.mjs:11:43</span>
 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; failer &gt; should be equal <span style="color:#b2b2b2;background:#222222">test/tap.test.js:35:7</span>
 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; failer &gt; should be equal <span style="color:#b2b2b2;background:#222222">test/tap.test.js:37:7</span>
                                    
<span style="color:#eeeeee;background:#ffffff">                       </span>                     
<span style="font-weight:bold;color:#000;background:#ffffff">  <span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">🌈</span></span> TEST COMPLETE <span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">🌈</span></span>  </span>                                                                     
<span style="color:#eeeeee;background:#ffffff">                       </span>                                                     
                                                                             
<span style="font-weight:bold;color:#ffffff;background:#f00"> FAIL </span> test/node.test.js <span style="color:#f00;background:#222222">2 failed</span> of <span style="font-weight:bold;color:#eeeeee;background:#222222">4</span> <span style="color:#b2b2b2;background:#222222">6.834ms</span>
 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; uhoh, this one throws
    <span style="color:#b2b2b2;background:#1c1c1c">test/node.test.js                                                       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">20 </span><span style="color:#93cdff;background:#1c1c1c">})</span><span style="color:#d0d0d0;background:#1c1c1c">                                                                   </span>
    <span style="color:#8fa5d1;background:#1c1c1c">21 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                                     </span>
    <span style="color:#8fa5d1;background:#1c1c1c">22 </span><span style="color:#d0d0d0;background:#1c1c1c">test</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">'suite of tests that fail'</span><span style="color:#93cdff;background:#1c1c1c">,</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#79c0ff;background:#1c1c1c">async</span><span style="color:#d0d0d0;background:#1c1c1c"> t =&gt; </span><span style="color:#93cdff;background:#1c1c1c">{</span><span style="color:#d0d0d0;background:#1c1c1c">                        </span>
    <span style="color:#8fa5d1;background:#1c1c1c">23 </span><span style="color:#d0d0d0;background:#1c1c1c">  </span><span style="color:#79c0ff;background:#1c1c1c">await</span><span style="color:#d0d0d0;background:#1c1c1c"> t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">test</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">'uhoh, this one throws'</span><span style="color:#93cdff;background:#1c1c1c">,</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c"> =&gt; </span><span style="color:#93cdff;background:#1c1c1c">{</span><span style="color:#d0d0d0;background:#1c1c1c">                      </span>
    <span style="color:#f00;background:#1c1c1c">━━━━━━━━━━━━━</span><span style="font-weight:bold;color:#f00;background:#1c1c1c">┛</span><span style="color:#f00;background:#1c1c1c">                                                          </span>
    <span style="color:#8fa5d1;background:#1c1c1c">24 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">thrower</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">0</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'1970-01-01T00:00:00.000Z'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">             </span>
    <span style="color:#8fa5d1;background:#1c1c1c">25 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">thrower</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">1234567891011</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2009-02-13T23:31:31.011Z'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c"> </span>
    <span style="color:#8fa5d1;background:#1c1c1c">26 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">thrower</span><span style="color:#93cdff;background:#1c1c1c">({}),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'Invalid Date'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                        </span>
    <span style="color:#8fa5d1;background:#1c1c1c">27 </span><span style="color:#d0d0d0;background:#1c1c1c">  </span><span style="color:#93cdff;background:#1c1c1c">})</span><span style="color:#d0d0d0;background:#1c1c1c">                                                                 </span>
    <span style="color:#b2b2b2;background:#1c1c1c">error origin: lib/index.mjs                                  </span>
    <span style="color:#8fa5d1;background:#1c1c1c"> 8 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                          </span>
    <span style="color:#8fa5d1;background:#1c1c1c"> 9 </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// This is a function that throws, to show how both</span><span style="color:#d0d0d0;background:#1c1c1c">       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">10 </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// handle errors.</span><span style="color:#d0d0d0;background:#1c1c1c">                                         </span>
    <span style="color:#8fa5d1;background:#1c1c1c">11 </span><span style="color:#79c0ff;background:#1c1c1c">export</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#79c0ff;background:#1c1c1c">const</span><span style="color:#d0d0d0;background:#1c1c1c"> thrower = </span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c"> =&gt; </span><span style="color:#79c0ff;background:#1c1c1c">new</span><span style="color:#d0d0d0;background:#1c1c1c"> Date</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n</span><span style="color:#93cdff;background:#1c1c1c">).</span><span style="color:#d0d0d0;background:#1c1c1c">toISOString</span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c">   </span>
    <span style="color:#f00;background:#1c1c1c">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span><span style="font-weight:bold;color:#f00;background:#1c1c1c">┛</span><span style="color:#f00;background:#1c1c1c">               </span>
    <span style="color:#8fa5d1;background:#1c1c1c">12 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                          </span>
    <span style="color:#8fa5d1;background:#1c1c1c">13 </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// one that fails, to show how failures are handled</span><span style="color:#d0d0d0;background:#1c1c1c">       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">14 </span><span style="color:#79c0ff;background:#1c1c1c">export</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#79c0ff;background:#1c1c1c">const</span><span style="color:#d0d0d0;background:#1c1c1c"> failer = </span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c"> =&gt; String</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n + </span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                </span>
    <span style="color:#b2b2b2;background:#222222">error:</span> Invalid time value
    <span style="color:#b2b2b2;background:#222222">code:</span> ERR_TEST_FAILURE
    <span style="color:#b2b2b2;background:#222222">failureType: testCodeFailure</span>
    <span style="color:#b2b2b2;background:#222222">name: RangeError</span>
    <span style="color:#b2b2b2;background:#222222">Date.toISOString (&lt;anonymous&gt;)</span>
    <span style="color:#b2b2b2;background:#222222">thrower (</span><span style="color:#ff6;background:#222222">lib/index.mjs</span><span style="color:#b2b2b2;background:#222222">:11:43)</span>
    <span style="color:#b2b2b2;background:#222222">TestContext.&lt;anonymous&gt; (</span><span style="color:#ff6;background:#222222">test/node.test.js</span><span style="color:#b2b2b2;background:#222222">:26:18)</span>
    <span style="color:#b2b2b2;background:#222222">TestContext.&lt;anonymous&gt; (</span><span style="color:#ff6;background:#222222">test/node.test.js</span><span style="color:#b2b2b2;background:#222222">:23:11)</span>

 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; failer
    <span style="color:#b2b2b2;background:#1c1c1c">test/node.test.js                                                       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">26 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">thrower</span><span style="color:#93cdff;background:#1c1c1c">({}),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'Invalid Date'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                        </span>
    <span style="color:#8fa5d1;background:#1c1c1c">27 </span><span style="color:#d0d0d0;background:#1c1c1c">  </span><span style="color:#93cdff;background:#1c1c1c">})</span><span style="color:#d0d0d0;background:#1c1c1c">                                                                 </span>
    <span style="color:#8fa5d1;background:#1c1c1c">28 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                                     </span>
    <span style="color:#8fa5d1;background:#1c1c1c">29 </span><span style="color:#d0d0d0;background:#1c1c1c">  </span><span style="color:#79c0ff;background:#1c1c1c">await</span><span style="color:#d0d0d0;background:#1c1c1c"> t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">test</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">'failer'</span><span style="color:#93cdff;background:#1c1c1c">,</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c"> =&gt; </span><span style="color:#93cdff;background:#1c1c1c">{</span><span style="color:#d0d0d0;background:#1c1c1c">                                     </span>
    <span style="color:#f00;background:#1c1c1c">━━━━━━━━━━━━━</span><span style="font-weight:bold;color:#f00;background:#1c1c1c">┛</span><span style="color:#f00;background:#1c1c1c">                                                          </span>
    <span style="color:#8fa5d1;background:#1c1c1c">30 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                     </span>
    <span style="color:#8fa5d1;background:#1c1c1c">31 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">-</span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'0'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                    </span>
    <span style="color:#8fa5d1;background:#1c1c1c">32 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert string numbers to Number, but doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">33 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                   </span>
    <span style="color:#b2b2b2;background:#1c1c1c">error origin: test/node.test.js                                         </span>
    <span style="color:#8fa5d1;background:#1c1c1c">30 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                     </span>
    <span style="color:#8fa5d1;background:#1c1c1c">31 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">-</span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'0'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                    </span>
    <span style="color:#8fa5d1;background:#1c1c1c">32 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert string numbers to Number, but doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">33 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                   </span>
    <span style="color:#f00;background:#1c1c1c">━━━━━━━━━━━━━━</span><span style="font-weight:bold;color:#f00;background:#1c1c1c">┛</span><span style="color:#f00;background:#1c1c1c">                                                         </span>
    <span style="color:#8fa5d1;background:#1c1c1c">34 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert non-numerics to 0, but it doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">           </span>
    <span style="color:#8fa5d1;background:#1c1c1c">35 </span><span style="color:#d0d0d0;background:#1c1c1c">    assert</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">({}),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                    </span>
    <span style="color:#8fa5d1;background:#1c1c1c">36 </span><span style="color:#d0d0d0;background:#1c1c1c">  </span><span style="color:#93cdff;background:#1c1c1c">})</span><span style="color:#d0d0d0;background:#1c1c1c">                                                                 </span>
    <span style="color:#8fa5d1;background:#1c1c1c">37 </span><span style="color:#93cdff;background:#1c1c1c">})</span><span style="color:#d0d0d0;background:#1c1c1c">                                                                   </span>
    <span style="color:#ffe5f1;background:#ac3ea3">--- expected   </span>
    <span style="color:#f2ffe5;background:#3a7500">+++ actual     </span>
    <span style="font-weight:bold;color:#759eef;background:#222222">@@ -1,1 +1,1 @@</span>
    <span style="color:#ffe5f1;background:#ac3ea3">-&quot;2&quot;           </span>
    <span style="color:#f2ffe5;background:#3a7500">+&quot;11&quot;          </span>
    <span style="color:#b2b2b2;background:#222222">error:</span> &quot;'11' == '2'&quot;
    <span style="color:#b2b2b2;background:#222222">code:</span> ERR_ASSERTION
    <span style="color:#b2b2b2;background:#222222">failureType: testCodeFailure</span>
    <span style="color:#b2b2b2;background:#222222">name: AssertionError</span>
    <span style="color:#b2b2b2;background:#222222">operator: ==</span>
    <span style="color:#b2b2b2;background:#222222">TestContext.&lt;anonymous&gt; (</span><span style="color:#ff6;background:#222222">test/node.test.js</span><span style="color:#b2b2b2;background:#222222">:33:12)</span>
    <span style="color:#b2b2b2;background:#222222">TestContext.&lt;anonymous&gt; (</span><span style="color:#ff6;background:#222222">test/node.test.js</span><span style="color:#b2b2b2;background:#222222">:29:11)</span>

<span style="font-weight:bold;color:#ffffff;background:#f00"> FAIL </span> test/tap.test.js <span style="color:#f00;background:#222222">3 failed</span> of <span style="font-weight:bold;color:#eeeeee;background:#222222">18</span> <span style="color:#b2b2b2;background:#222222">340ms</span>
 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; uhoh, this one throws &gt; Invalid time value
    <span style="color:#b2b2b2;background:#1c1c1c">lib/index.mjs                                                </span>
    <span style="color:#8fa5d1;background:#1c1c1c"> 8 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                          </span>
    <span style="color:#8fa5d1;background:#1c1c1c"> 9 </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// This is a function that throws, to show how both</span><span style="color:#d0d0d0;background:#1c1c1c">       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">10 </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// handle errors.</span><span style="color:#d0d0d0;background:#1c1c1c">                                         </span>
    <span style="color:#8fa5d1;background:#1c1c1c">11 </span><span style="color:#79c0ff;background:#1c1c1c">export</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#79c0ff;background:#1c1c1c">const</span><span style="color:#d0d0d0;background:#1c1c1c"> thrower = </span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c"> =&gt; </span><span style="color:#79c0ff;background:#1c1c1c">new</span><span style="color:#d0d0d0;background:#1c1c1c"> Date</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n</span><span style="color:#93cdff;background:#1c1c1c">).</span><span style="color:#d0d0d0;background:#1c1c1c">toISOString</span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c">   </span>
    <span style="color:#f00;background:#1c1c1c">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span><span style="font-weight:bold;color:#f00;background:#1c1c1c">┛</span><span style="color:#f00;background:#1c1c1c">               </span>
    <span style="color:#8fa5d1;background:#1c1c1c">12 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                          </span>
    <span style="color:#8fa5d1;background:#1c1c1c">13 </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// one that fails, to show how failures are handled</span><span style="color:#d0d0d0;background:#1c1c1c">       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">14 </span><span style="color:#79c0ff;background:#1c1c1c">export</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#79c0ff;background:#1c1c1c">const</span><span style="color:#d0d0d0;background:#1c1c1c"> failer = </span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c"> =&gt; String</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n + </span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                </span>
    <span style="color:#b2b2b2;background:#222222">type: RangeError</span>
    <span style="color:#b2b2b2;background:#222222">tapCaught: testFunctionThrow</span>
    <span style="color:#b2b2b2;background:#222222">Date.toISOString (&lt;anonymous&gt;)</span>
    <span style="color:#b2b2b2;background:#222222">thrower (</span><span style="color:#ff6;background:#222222">lib/index.mjs</span><span style="color:#b2b2b2;background:#222222">:11:43)</span>
    <span style="color:#b2b2b2;background:#222222">Test.&lt;anonymous&gt; (</span><span style="color:#ff6;background:#222222">test/tap.test.js</span><span style="color:#b2b2b2;background:#222222">:27:13)</span>

 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; failer &gt; should be equal
    <span style="color:#b2b2b2;background:#1c1c1c">test/tap.test.js                                                        </span>
    <span style="color:#8fa5d1;background:#1c1c1c">32 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                          </span>
    <span style="color:#8fa5d1;background:#1c1c1c">33 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">-</span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'0'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                         </span>
    <span style="color:#8fa5d1;background:#1c1c1c">34 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert string numbers to Number, but doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">35 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                        </span>
    <span style="color:#f00;background:#1c1c1c">━━━━━━━━━</span><span style="font-weight:bold;color:#f00;background:#1c1c1c">┛</span><span style="color:#f00;background:#1c1c1c">                                                              </span>
    <span style="color:#8fa5d1;background:#1c1c1c">36 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert non-numerics to 0, but it doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">           </span>
    <span style="color:#8fa5d1;background:#1c1c1c">37 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">({}),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                         </span>
    <span style="color:#8fa5d1;background:#1c1c1c">38 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">end</span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c">                                                          </span>
    <span style="color:#8fa5d1;background:#1c1c1c">39 </span><span style="color:#d0d0d0;background:#1c1c1c">  </span><span style="color:#93cdff;background:#1c1c1c">})</span><span style="color:#d0d0d0;background:#1c1c1c">                                                                 </span>
    <span style="color:#ffe5f1;background:#ac3ea3">--- expected   </span>
    <span style="color:#f2ffe5;background:#3a7500">+++ actual     </span>
    <span style="font-weight:bold;color:#759eef;background:#222222">@@ -1,1 +1,1 @@</span>
    <span style="color:#ffe5f1;background:#ac3ea3">-2             </span>
    <span style="color:#f2ffe5;background:#3a7500">+11            </span>
    <span style="color:#b2b2b2;background:#222222">compare: ===</span>
    <span style="color:#b2b2b2;background:#222222">Test.&lt;anonymous&gt; (</span><span style="color:#ff6;background:#222222">test/tap.test.js</span><span style="color:#b2b2b2;background:#222222">:35:7)</span>
    <span style="color:#b2b2b2;background:#222222">Test.&lt;anonymous&gt; (</span><span style="color:#ff6;background:#222222">test/tap.test.js</span><span style="color:#b2b2b2;background:#222222">:31:5)</span>
    <span style="color:#ff6;background:#222222">test/tap.test.js</span><span style="color:#b2b2b2;background:#222222">:23:3</span>

 <span style="font-weight:bold;color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span> suite of tests that fail &gt; failer &gt; should be equal
    <span style="color:#b2b2b2;background:#1c1c1c">test/tap.test.js                                                        </span>
    <span style="color:#8fa5d1;background:#1c1c1c">34 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert string numbers to Number, but doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">       </span>
    <span style="color:#8fa5d1;background:#1c1c1c">35 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                        </span>
    <span style="color:#8fa5d1;background:#1c1c1c">36 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert non-numerics to 0, but it doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">           </span>
    <span style="color:#8fa5d1;background:#1c1c1c">37 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">({}),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                         </span>
    <span style="color:#f00;background:#1c1c1c">━━━━━━━━━</span><span style="font-weight:bold;color:#f00;background:#1c1c1c">┛</span><span style="color:#f00;background:#1c1c1c">                                                              </span>
    <span style="color:#8fa5d1;background:#1c1c1c">38 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">end</span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c">                                                          </span>
    <span style="color:#8fa5d1;background:#1c1c1c">39 </span><span style="color:#d0d0d0;background:#1c1c1c">  </span><span style="color:#93cdff;background:#1c1c1c">})</span><span style="color:#d0d0d0;background:#1c1c1c">                                                                 </span>
    <span style="color:#8fa5d1;background:#1c1c1c">40 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                                     </span>
    <span style="color:#8fa5d1;background:#1c1c1c">41 </span><span style="color:#d0d0d0;background:#1c1c1c">  t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">end</span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c">                                                            </span>
    <span style="color:#ffe5f1;background:#ac3ea3">--- expected     </span>
    <span style="color:#f2ffe5;background:#3a7500">+++ actual       </span>
    <span style="font-weight:bold;color:#759eef;background:#222222">@@ -1,1 +1,1 @@</span><span style="font-weight:bold;color:#e599ff;background:#222222">  </span>
    <span style="color:#ffe5f1;background:#ac3ea3">-1               </span>
    <span style="color:#f2ffe5;background:#3a7500">+[object Object]1</span>
    <span style="color:#b2b2b2;background:#222222">compare: ===</span>
    <span style="color:#b2b2b2;background:#222222">Test.&lt;anonymous&gt; (</span><span style="color:#ff6;background:#222222">test/tap.test.js</span><span style="color:#b2b2b2;background:#222222">:37:7)</span>
    <span style="color:#b2b2b2;background:#222222">Test.&lt;anonymous&gt; (</span><span style="color:#ff6;background:#222222">test/tap.test.js</span><span style="color:#b2b2b2;background:#222222">:31:5)</span>
    <span style="color:#ff6;background:#222222">test/tap.test.js</span><span style="color:#b2b2b2;background:#222222">:23:3</span>

<span style="font-weight:bold;color:#eeeeee;background:#222222">Asserts:</span>  <span style="color:#090;background:#222222">17 pass</span>  <span style="font-weight:bold;color:#f00;background:#222222">5 fail</span>  <span style="color:#b2b2b2;background:#222222">22 of 22 complete</span>
<span style="font-weight:bold;color:#eeeeee;background:#222222">Suites:</span>    <span style="color:#090;background:#222222">0 pass</span>  <span style="font-weight:bold;color:#f00;background:#222222">2 fail</span>    <span style="color:#b2b2b2;background:#222222">2 of 2 complete</span>

<span style="color:#b2b2b2;background:#222222"># { total: 22, pass: 17, fail: 5 }</span>
<span style="color:#b2b2b2;background:#222222"># time=459.924ms</span></pre>

Running with `node --test`:

<pre style="color:#eeeeee;background:#222222"><span style="color:#090;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✔</span></span></span></span> add </span><span style="color:#666;background:#222222">(0.569917ms)</span>
<span style="color:#090;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✔</span></span></span></span> stringOrNull </span><span style="color:#666;background:#222222">(0.063833ms)</span>
<span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">▶</span></span> suite of tests that fail
  <span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span></span> uhoh, this one throws </span><span style="color:#666;background:#222222">(0.910959ms)</span>
    RangeError [Error]: Invalid time value
        at Date.toISOString (&lt;anonymous&gt;)
        at thrower <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>lib/index.mjs:11:43<span style="color:#666;background:#222222">)</span>
        at TestContext.&lt;anonymous&gt; <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>test/node.test.js:26:18<span style="color:#666;background:#222222">)</span>
    <span style="color:#666;background:#222222">    at Test.runInAsyncScope (node:async_hooks:206:9)</span>
    <span style="color:#666;background:#222222">    at Test.run (node:internal/test_runner/test:631:25)</span>
    <span style="color:#666;background:#222222">    at Test.start (node:internal/test_runner/test:542:17)</span>
    <span style="color:#666;background:#222222">    at TestContext.test (node:internal/test_runner/test:167:20)</span>
        at TestContext.&lt;anonymous&gt; <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>test/node.test.js:23:11<span style="color:#666;background:#222222">)</span>
    <span style="color:#666;background:#222222">    at Test.runInAsyncScope (node:async_hooks:206:9)</span>
    <span style="color:#666;background:#222222">    at Test.run (node:internal/test_runner/test:631:25)</span>

  <span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span></span> failer </span><span style="color:#666;background:#222222">(0.532708ms)</span>
    AssertionError [ERR_ASSERTION]: '11' == '2'
        at TestContext.&lt;anonymous&gt; <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>test/node.test.js:33:12<span style="color:#666;background:#222222">)</span>
    <span style="color:#666;background:#222222">    at Test.runInAsyncScope (node:async_hooks:206:9)</span>
    <span style="color:#666;background:#222222">    at Test.run (node:internal/test_runner/test:631:25)</span>
    <span style="color:#666;background:#222222">    at Test.start (node:internal/test_runner/test:542:17)</span>
    <span style="color:#666;background:#222222">    at TestContext.test (node:internal/test_runner/test:167:20)</span>
        at TestContext.&lt;anonymous&gt; <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>test/node.test.js:29:11<span style="color:#666;background:#222222">)</span>
    <span style="color:#666;background:#222222">    at async Test.run (node:internal/test_runner/test:632:9)</span>
    <span style="color:#666;background:#222222">    at async Test.processPendingSubtests (node:internal/test_runner/test:374:7)</span> {
      generatedMessage: <span style="color:#ff0;background:#222222">true</span>,
      code: <span style="color:#090;background:#222222">'ERR_ASSERTION'</span>,
      actual: <span style="color:#090;background:#222222">'11'</span>,
      expected: <span style="color:#090;background:#222222">'2'</span>,
      operator: <span style="color:#090;background:#222222">'=='</span>
    }

<span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">▶</span></span></span></span> </span>suite of tests that fail <span style="color:#666;background:#222222">(1.684292ms)</span>

<span style="color:#090;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✔</span></span></span></span> add </span><span style="color:#666;background:#222222">(1.774ms)</span>
<span style="color:#090;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✔</span></span></span></span> stringOrNull </span><span style="color:#666;background:#222222">(1.091ms)</span>
<span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">▶</span></span> suite of tests that fail
  <span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span></span> uhoh, this one throws </span><span style="color:#666;background:#222222">(10.016ms)</span>
    Error: Invalid time value
    | // This is a function that throws, to show how both
    | // handle errors.
    | export const thrower = (n) =&gt; new Date(n).toISOString()
    | ------------------------------------------^
    | 
    | // one that fails, to show how failures are handled
        at Date.toISOString (&lt;anonymous&gt;)
        at thrower <span style="color:#666;background:#222222">(/Users/isaacs/dev/tapjs/node-test-example/</span>lib/index.mjs:11:43<span style="color:#666;background:#222222">)</span>
        at Test.&lt;anonymous&gt; <span style="color:#666;background:#222222">(/Users/isaacs/dev/tapjs/node-test-example/</span>test/tap.test.js:27:13<span style="color:#666;background:#222222">)</span> {
      type: <span style="color:#090;background:#222222">'RangeError'</span>,
      tapCaught: <span style="color:#090;background:#222222">'testFunctionThrow'</span>
    }

  <span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span></span> failer </span><span style="color:#666;background:#222222">(3.676ms)</span>
    Error: should be equal
    <span style="color:#ffe5f1;background:#ac3ea3">--- expected                                                               </span>
    <span style="color:#f2ffe5;background:#3a7500">+++ actual                                                                 </span>
    <span style="color:#759eef;background:#222222">@@ -1,1 +1,1 @@                                                            </span>
    <span style="color:#ffe5f1;background:#ac3ea3">-2                                                                         </span>
    <span style="color:#f2ffe5;background:#3a7500">+11                                                                        </span>
    |     t.equal(failer(-1), '0')
    |     // expect to convert string numbers to Number, but doesn't
    |     t.equal(failer('1'), '2')
    | ------^
    |     // expect to convert non-numerics to 0, but it doesn't
    |     t.equal(failer({}), '1')
        at Test.&lt;anonymous&gt; <span style="color:#666;background:#222222">(/Users/isaacs/dev/tapjs/node-test-example/</span>test/tap.test.js:35:7<span style="color:#666;background:#222222">)</span>
        at Test.&lt;anonymous&gt; <span style="color:#666;background:#222222">(/Users/isaacs/dev/tapjs/node-test-example/</span>test/tap.test.js:31:5<span style="color:#666;background:#222222">)</span>
        at <span style="color:#666;background:#222222">/Users/isaacs/dev/tapjs/node-test-example/</span>test/tap.test.js:23:3 {
      compare: <span style="color:#090;background:#222222">'==='</span>
    }

<span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">▶</span></span></span></span> </span>suite of tests that fail <span style="color:#666;background:#222222">(17.681ms)</span>

<span style="color:#00f;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">ℹ</span></span></span></span> tests 9</span>
<span style="color:#00f;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">ℹ</span></span></span></span> suites 1</span>
<span style="color:#00f;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">ℹ</span></span></span></span> pass 4</span>
<span style="color:#00f;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">ℹ</span></span></span></span> fail 5</span>
<span style="color:#00f;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">ℹ</span></span></span></span> cancelled 0</span>
<span style="color:#00f;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">ℹ</span></span></span></span> skipped 0</span>
<span style="color:#00f;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">ℹ</span></span></span></span> todo 0</span>
<span style="color:#00f;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">ℹ</span></span></span></span> duration_ms 160.809375</span>

<span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span></span> failing tests:</span>

test at file:/Users/isaacs/dev/tapjs/node-test-example/test/node.test.js:23:11
<span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span></span> uhoh, this one throws </span><span style="color:#666;background:#222222">(0.910959ms)</span>
  RangeError [Error]: Invalid time value
      at Date.toISOString (&lt;anonymous&gt;)
      at thrower <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>lib/index.mjs:11:43<span style="color:#666;background:#222222">)</span>
      at TestContext.&lt;anonymous&gt; <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>test/node.test.js:26:18<span style="color:#666;background:#222222">)</span>
  <span style="color:#666;background:#222222">    at Test.runInAsyncScope (node:async_hooks:206:9)</span>
  <span style="color:#666;background:#222222">    at Test.run (node:internal/test_runner/test:631:25)</span>
  <span style="color:#666;background:#222222">    at Test.start (node:internal/test_runner/test:542:17)</span>
  <span style="color:#666;background:#222222">    at TestContext.test (node:internal/test_runner/test:167:20)</span>
      at TestContext.&lt;anonymous&gt; <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>test/node.test.js:23:11<span style="color:#666;background:#222222">)</span>
  <span style="color:#666;background:#222222">    at Test.runInAsyncScope (node:async_hooks:206:9)</span>
  <span style="color:#666;background:#222222">    at Test.run (node:internal/test_runner/test:631:25)</span>

test at file:/Users/isaacs/dev/tapjs/node-test-example/test/node.test.js:29:11
<span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span></span> failer </span><span style="color:#666;background:#222222">(0.532708ms)</span>
  AssertionError [ERR_ASSERTION]: '11' == '2'
      at TestContext.&lt;anonymous&gt; <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>test/node.test.js:33:12<span style="color:#666;background:#222222">)</span>
  <span style="color:#666;background:#222222">    at Test.runInAsyncScope (node:async_hooks:206:9)</span>
  <span style="color:#666;background:#222222">    at Test.run (node:internal/test_runner/test:631:25)</span>
  <span style="color:#666;background:#222222">    at Test.start (node:internal/test_runner/test:542:17)</span>
  <span style="color:#666;background:#222222">    at TestContext.test (node:internal/test_runner/test:167:20)</span>
      at TestContext.&lt;anonymous&gt; <span style="color:#666;background:#222222">(file:///Users/isaacs/dev/tapjs/node-test-example/</span>test/node.test.js:29:11<span style="color:#666;background:#222222">)</span>
  <span style="color:#666;background:#222222">    at async Test.run (node:internal/test_runner/test:632:9)</span>
  <span style="color:#666;background:#222222">    at async Test.processPendingSubtests (node:internal/test_runner/test:374:7)</span> {
    generatedMessage: <span style="color:#ff0;background:#222222">true</span>,
    code: <span style="color:#090;background:#222222">'ERR_ASSERTION'</span>,
    actual: <span style="color:#090;background:#222222">'11'</span>,
    expected: <span style="color:#090;background:#222222">'2'</span>,
    operator: <span style="color:#090;background:#222222">'=='</span>
  }

test at test/tap.test.js:24:5
<span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span></span> uhoh, this one throws </span><span style="color:#666;background:#222222">(10.016ms)</span>
  Error: Invalid time value
  | // This is a function that throws, to show how both
  | // handle errors.
  | export const thrower = (n) =&gt; new Date(n).toISOString()
  | ------------------------------------------^
  | 
  | // one that fails, to show how failures are handled
      at Date.toISOString (&lt;anonymous&gt;)
      at thrower <span style="color:#666;background:#222222">(/Users/isaacs/dev/tapjs/node-test-example/</span>lib/index.mjs:11:43<span style="color:#666;background:#222222">)</span>
      at Test.&lt;anonymous&gt; <span style="color:#666;background:#222222">(/Users/isaacs/dev/tapjs/node-test-example/</span>test/tap.test.js:27:13<span style="color:#666;background:#222222">)</span> {
    type: <span style="color:#090;background:#222222">'RangeError'</span>,
    tapCaught: <span style="color:#090;background:#222222">'testFunctionThrow'</span>
  }

test at test/tap.test.js:31:5
<span style="color:#f00;background:#222222"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;"><span style="position:relaive;padding:0 2.25ex 0 0"><span style="position:absolute;height:2.25ex;width:2.25ex;overflow:hidden;">✖</span></span></span></span> failer </span><span style="color:#666;background:#222222">(3.676ms)</span>
  Error: should be equal
  <span style="color:#ffe5f1;background:#ac3ea3">--- expected                                                               </span>
  <span style="color:#f2ffe5;background:#3a7500">+++ actual                                                                 </span>
  <span style="color:#759eef;background:#222222">@@ -1,1 +1,1 @@                                                            </span>
  <span style="color:#ffe5f1;background:#ac3ea3">-2                                                                         </span>
  <span style="color:#f2ffe5;background:#3a7500">+11                                                                        </span>
  |     t.equal(failer(-1), '0')
  |     // expect to convert string numbers to Number, but doesn't
  |     t.equal(failer('1'), '2')
  | ------^
  |     // expect to convert non-numerics to 0, but it doesn't
  |     t.equal(failer({}), '1')
      at Test.&lt;anonymous&gt; <span style="color:#666;background:#222222">(/Users/isaacs/dev/tapjs/node-test-example/</span>test/tap.test.js:35:7<span style="color:#666;background:#222222">)</span>
      at Test.&lt;anonymous&gt; <span style="color:#666;background:#222222">(/Users/isaacs/dev/tapjs/node-test-example/</span>test/tap.test.js:31:5<span style="color:#666;background:#222222">)</span>
      at <span style="color:#666;background:#222222">/Users/isaacs/dev/tapjs/node-test-example/</span>test/tap.test.js:23:3 {
    compare: <span style="color:#090;background:#222222">'==='</span>
  }
</pre>
