---
title: tap Reporting Results
eleventyNavigation:
  key: Reporting Results
  parent: Docs
  order: 40
---

While [TAP](./tap-format.md) is intended to be both machine
parseable and human intelligible, and the raw TAP content is
often a good way to see exactly what is happening with a test, it
tends to be quite a bit too noisy for regular ergonomic human
consumption.

For this reason, tap comes with an
[ink](https://github.com/vadimdemedes/ink)-based reporter system,
and additional reporters can be added as well.

You can specify the reporter to use with the `--reporter` config
option. Custom reporters can be an Ink-based React component, a
Stream class, or a CLI program.

## Included Reporters

The `base` reporter is the one that tap uses by default. It
shows information about tests as they are running in parallel,
and aims to be verbose enough to show you what's going on,
without showing more information that is useful.

If the `base` reporter is too noisy for your liking, you can use
the `terse` reporter, which is similar, but prints much less
information, or `min` or `dot` which are even terser, or `silent`
which is as terse as it gets.

If the base report is not noisy _enough_, try running with
`--passes` to show all passing assertions, or `-R tap` to print
out the raw [TAP data](./tap-format.md). If that's still not
enough, you can run with `--debug` to see all the inner workings
of tap's machinery. (This is really only good for debugging tap
itself.)

All the reporters are designed to be as accessible as possible,
featuring diff and syntax highlighting color choices that are
amenable to any level of color sensitivity.

<pre style="color:#eeeeee;background:#222222;position:relative"><span style="font-weight:bold;color:#000000;background:#00aa00"> PASS </span> docs/foo.test.js <span style="font-weight:bold">2</span> <span style="color:#00a000">OK</span> <span style="font-weight:100;color:#b2b2b2">392ms

</span><span style="background:#ffffff">                       
</span><span style="font-weight:bold;color:#000000;background:#ffffff">  <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>   TEST COMPLETE <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>    
</span><span style="background:#ffffff">                       

</span><span style="font-weight:bold">Asserts:</span>  <span style="color:#00a000">2 pass</span>  <span style="font-weight:100;color:#bf0000">0 fail</span>  <span style="font-weight:100;color:#b2b2b2">2 of 2 complete
</span><span style="font-weight:bold">Suites:</span>   <span style="color:#00a000">1 pass</span>  <span style="font-weight:100;color:#bf0000">0 fail</span>  <span style="font-weight:100;color:#b2b2b2">1 of 1 complete

# { total: 2, pass: 2 }
# time=426.889ms</span></pre>

An example with a bit more going on:

<pre style="color:#eeeeee;background:#222222;position:relative"><span style="font-weight:bold;color:#ffffff;background:#ff0000"> FAIL </span> test/tap.test.js <span style="color:#ff0000">3 failed</span> <span style="color:#e000e0">6 todo</span> <span style="color:#00b0b0">6 skip</span> of <span style="font-weight:bold">30</span> <span style="font-weight:100;color:#b2b2b2">325ms
</span> <span style="font-weight:bold;color:#00b0b0">~</span> a test that is entirely skipped
 <span style="font-weight:bold;color:#00b0b0">~</span> skipped with a message
 <span style="font-weight:bold;color:#00b0b0">~</span> stringOrNull &gt; a failure skipped
 <span style="font-weight:bold;color:#00b0b0">~</span> stringOrNull &gt; a pass skipped
 <span style="font-weight:bold;color:#00b0b0">~</span> stringOrNull &gt; a failure skipped with message <span style="color:#00b0b0">message
</span> <span style="font-weight:bold;color:#00b0b0">~</span> stringOrNull &gt; a pass skipped with message <span style="color:#00b0b0">message
</span> <span style="font-weight:bold;color:#e000e0">☐</span> a test marked todo
 <span style="font-weight:bold;color:#e000e0">☐</span> todo with a message
 <span style="font-weight:bold;color:#e000e0">☐</span> stringOrNull &gt; a failure marked todo
 <span style="font-weight:bold;color:#e000e0">☐</span> stringOrNull &gt; a pass marked todo
 <span style="font-weight:bold;color:#e000e0">☐</span> stringOrNull &gt; todo failure with message <span style="color:#e000e0">message
</span> <span style="font-weight:bold;color:#e000e0">☐</span> stringOrNull &gt; todo pass with message <span style="color:#e000e0">message
</span> <span style="font-weight:bold;color:#ff0000"><span style="position:absolute;line-height:1;margin-top:0.3ex">✖</span>  </span> suite of tests that fail &gt; uhoh, this one throws &gt; Invalid time value <span style="font-weight:100;color:#b2b2b2">lib/index.mjs:11:43
</span> <span style="font-weight:bold;color:#ff0000"><span style="position:absolute;line-height:1;margin-top:0.3ex">✖</span>  </span> suite of tests that fail &gt; failer &gt; should be equal <span style="font-weight:100;color:#b2b2b2">test/tap.test.js:51:7
</span> <span style="font-weight:bold;color:#ff0000"><span style="position:absolute;line-height:1;margin-top:0.3ex">✖</span>  </span> suite of tests that fail &gt; failer &gt; should be equal <span style="font-weight:100;color:#b2b2b2">test/tap.test.js:53:7

</span>-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
<span style="font-weight:bold;color:#00a000">All files </span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#00a000">  89.47</span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#00a000">     100</span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#00a000">     80</span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#00a000">  89.47</span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#ff0000">                 
</span><span style="font-weight:bold;color:#00a000"> index.mjs</span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#00a000">  89.47</span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#00a000">     100</span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#00a000">     80</span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#00a000">  89.47</span><span style="font-weight:bold"> | </span><span style="font-weight:bold;color:#ff0000">18-19            
</span><span style="font-weight:bold">-----------|---------|----------|---------|---------|-------------------

</span><span style="background:#ffffff">                       
</span><span style="font-weight:bold;color:#000000;background:#ffffff">  <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>   TEST COMPLETE <span style="position:absolute;line-height:1;margin-top:0.3ex">🌈</span>    
</span><span style="background:#ffffff">                       

</span><span style="font-weight:bold;color:#ffffff;background:#ff0000"> FAIL </span> test/tap.test.js <span style="color:#ff0000">3 failed</span> <span style="color:#e000e0">6 todo</span> <span style="color:#00b0b0">6 skip</span> of <span style="font-weight:bold">30</span> <span style="font-weight:100;color:#b2b2b2">325ms
</span> <span style="font-weight:bold;color:#00b0b0">~</span> a test that is entirely skipped
 <span style="font-weight:bold;color:#00b0b0">~</span> skipped with a message
 <span style="font-weight:bold;color:#00b0b0">~</span> stringOrNull &gt; a failure skipped
 <span style="font-weight:bold;color:#00b0b0">~</span> stringOrNull &gt; a pass skipped
 <span style="font-weight:bold;color:#00b0b0">~</span> stringOrNull &gt; a failure skipped with message <span style="color:#00b0b0">message
</span> <span style="font-weight:bold;color:#00b0b0">~</span> stringOrNull &gt; a pass skipped with message <span style="color:#00b0b0">message
</span> <span style="font-weight:bold;color:#e000e0">☐</span> a test marked todo
 <span style="font-weight:bold;color:#e000e0">☐</span> todo with a message
 <span style="font-weight:bold;color:#e000e0">☐</span> stringOrNull &gt; a failure marked todo
 <span style="font-weight:bold;color:#e000e0">☐</span> stringOrNull &gt; a pass marked todo
 <span style="font-weight:bold;color:#e000e0">☐</span> stringOrNull &gt; todo failure with message <span style="color:#e000e0">message
</span> <span style="font-weight:bold;color:#e000e0">☐</span> stringOrNull &gt; todo pass with message <span style="color:#e000e0">message

</span> <span style="font-weight:bold;color:#ff0000"><span style="position:absolute;line-height:1;margin-top:0.3ex">✖</span>  </span> suite of tests that fail &gt; uhoh, this one throws &gt; Invalid time value
    <span style="font-weight:100;color:#b2b2b2;background:#1c1c1c">lib/index.mjs                                                
</span>    <span style="color:#8fa5d1;background:#1c1c1c"> 8 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                          
</span>    <span style="color:#8fa5d1;background:#1c1c1c"> 9 </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// This is a function that throws, to show how both</span><span style="color:#d0d0d0;background:#1c1c1c">       
</span>    <span style="color:#8fa5d1;background:#1c1c1c">10 </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// handle errors.</span><span style="color:#d0d0d0;background:#1c1c1c">                                         
</span>    <span style="color:#8fa5d1;background:#1c1c1c">11 </span><span style="color:#79c0ff;background:#1c1c1c">export</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#79c0ff;background:#1c1c1c">const</span><span style="color:#d0d0d0;background:#1c1c1c"> thrower = </span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c"> =&gt; </span><span style="color:#79c0ff;background:#1c1c1c">new</span><span style="color:#d0d0d0;background:#1c1c1c"> Date</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n</span><span style="color:#93cdff;background:#1c1c1c">).</span><span style="color:#d0d0d0;background:#1c1c1c">toISOString</span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c">   
</span>    <span style="color:#ff0000;background:#1c1c1c">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span><span style="font-weight:bold;color:#ff0000;background:#1c1c1c">┛</span><span style="color:#ff0000;background:#1c1c1c">               
</span>    <span style="color:#8fa5d1;background:#1c1c1c">12 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                          
</span>    <span style="color:#8fa5d1;background:#1c1c1c">13 </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// one that fails, to show how failures are handled</span><span style="color:#d0d0d0;background:#1c1c1c">       
</span>    <span style="color:#8fa5d1;background:#1c1c1c">14 </span><span style="color:#79c0ff;background:#1c1c1c">export</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#79c0ff;background:#1c1c1c">const</span><span style="color:#d0d0d0;background:#1c1c1c"> failer = </span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c"> =&gt; String</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">n + </span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                
</span>    <span style="color:#8fa5d1;background:#1c1c1c">15 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                          
</span>    <span style="font-weight:100;color:#b2b2b2">type: RangeError
</span>    <span style="font-weight:100;color:#b2b2b2">tapCaught: testFunctionThrow
</span>    <span style="font-weight:100;color:#b2b2b2">Date.toISOString (&lt;anonymous&gt;)
</span>    <span style="font-weight:100;color:#b2b2b2">thrower (</span><span style="color:#ffff00">lib/index.mjs</span><span style="font-weight:100;color:#b2b2b2">:11:43)
</span>    <span style="font-weight:100;color:#b2b2b2">Test.&lt;anonymous&gt; (</span><span style="color:#ffff00">test/tap.test.js</span><span style="font-weight:100;color:#b2b2b2">:43:13)

</span> <span style="font-weight:bold;color:#ff0000"><span style="position:absolute;line-height:1;margin-top:0.3ex">✖</span>  </span> suite of tests that fail &gt; failer &gt; should be equal
    <span style="font-weight:100;color:#b2b2b2;background:#1c1c1c">test/tap.test.js                                                        
</span>    <span style="color:#8fa5d1;background:#1c1c1c">48 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                          
</span>    <span style="color:#8fa5d1;background:#1c1c1c">49 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">-</span><span style="color:#87d75f;background:#1c1c1c">1</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'0'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                         
</span>    <span style="color:#8fa5d1;background:#1c1c1c">50 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert string numbers to Number, but doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">       
</span>    <span style="color:#8fa5d1;background:#1c1c1c">51 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                        
</span>    <span style="color:#ff0000;background:#1c1c1c">━━━━━━━━━</span><span style="font-weight:bold;color:#ff0000;background:#1c1c1c">┛</span><span style="color:#ff0000;background:#1c1c1c">                                                              
</span>    <span style="color:#8fa5d1;background:#1c1c1c">52 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert non-numerics to 0, but it doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">           
</span>    <span style="color:#8fa5d1;background:#1c1c1c">53 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">({}),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                         
</span>    <span style="color:#8fa5d1;background:#1c1c1c">54 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">end</span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c">                                                          
</span>    <span style="color:#8fa5d1;background:#1c1c1c">55 </span><span style="color:#d0d0d0;background:#1c1c1c">  </span><span style="color:#93cdff;background:#1c1c1c">})</span><span style="color:#d0d0d0;background:#1c1c1c">                                                                 
</span>    <span style="color:#ffe5f1;background:#ac3ea3">--- expected   
</span>    <span style="color:#f2ffe5;background:#3a7500">+++ actual     
</span>    <span style="font-weight:bold;color:#759eef;background:#222222">@@ -1,1 +1,1 @@
</span>    <span style="color:#ffe5f1;background:#ac3ea3">-2             
</span>    <span style="color:#f2ffe5;background:#3a7500">+11            
</span>    <span style="font-weight:100;color:#b2b2b2">compare: ===
</span>    <span style="font-weight:100;color:#b2b2b2">Test.&lt;anonymous&gt; (</span><span style="color:#ffff00">test/tap.test.js</span><span style="font-weight:100;color:#b2b2b2">:51:7)
</span>    <span style="font-weight:100;color:#b2b2b2">Test.&lt;anonymous&gt; (</span><span style="color:#ffff00">test/tap.test.js</span><span style="font-weight:100;color:#b2b2b2">:47:5)
</span>    <span style="color:#ffff00">test/tap.test.js</span><span style="font-weight:100;color:#b2b2b2">:39:3

</span> <span style="font-weight:bold;color:#ff0000"><span style="position:absolute;line-height:1;margin-top:0.3ex">✖</span>  </span> suite of tests that fail &gt; failer &gt; should be equal
    <span style="font-weight:100;color:#b2b2b2;background:#1c1c1c">test/tap.test.js                                                        
</span>    <span style="color:#8fa5d1;background:#1c1c1c">50 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert string numbers to Number, but doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">       
</span>    <span style="color:#8fa5d1;background:#1c1c1c">51 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'2'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                        
</span>    <span style="color:#8fa5d1;background:#1c1c1c">52 </span><span style="color:#d0d0d0;background:#1c1c1c">    </span><span style="font-style:italic;color:#d75fff;background:#1c1c1c">// expect to convert non-numerics to 0, but it doesn't</span><span style="color:#d0d0d0;background:#1c1c1c">           
</span>    <span style="color:#8fa5d1;background:#1c1c1c">53 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">equal</span><span style="color:#93cdff;background:#1c1c1c">(</span><span style="color:#d0d0d0;background:#1c1c1c">failer</span><span style="color:#93cdff;background:#1c1c1c">({}),</span><span style="color:#d0d0d0;background:#1c1c1c"> </span><span style="color:#87d75f;background:#1c1c1c">'1'</span><span style="color:#93cdff;background:#1c1c1c">)</span><span style="color:#d0d0d0;background:#1c1c1c">                                         
</span>    <span style="color:#ff0000;background:#1c1c1c">━━━━━━━━━</span><span style="font-weight:bold;color:#ff0000;background:#1c1c1c">┛</span><span style="color:#ff0000;background:#1c1c1c">                                                              
</span>    <span style="color:#8fa5d1;background:#1c1c1c">54 </span><span style="color:#d0d0d0;background:#1c1c1c">    t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">end</span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c">                                                          
</span>    <span style="color:#8fa5d1;background:#1c1c1c">55 </span><span style="color:#d0d0d0;background:#1c1c1c">  </span><span style="color:#93cdff;background:#1c1c1c">})</span><span style="color:#d0d0d0;background:#1c1c1c">                                                                 
</span>    <span style="color:#8fa5d1;background:#1c1c1c">56 </span><span style="color:#d0d0d0;background:#1c1c1c">                                                                     
</span>    <span style="color:#8fa5d1;background:#1c1c1c">57 </span><span style="color:#d0d0d0;background:#1c1c1c">  t</span><span style="color:#93cdff;background:#1c1c1c">.</span><span style="color:#d0d0d0;background:#1c1c1c">end</span><span style="color:#93cdff;background:#1c1c1c">()</span><span style="color:#d0d0d0;background:#1c1c1c">                                                            
</span>    <span style="color:#ffe5f1;background:#ac3ea3">--- expected     
</span>    <span style="color:#f2ffe5;background:#3a7500">+++ actual       
</span>    <span style="font-weight:bold;color:#759eef;background:#222222">@@ -1,1 +1,1 @@</span><span style="font-weight:bold;color:#e599ff;background:#222222">  
</span>    <span style="color:#ffe5f1;background:#ac3ea3">-1               
</span>    <span style="color:#f2ffe5;background:#3a7500">+[object Object]1
</span>    <span style="font-weight:100;color:#b2b2b2">compare: ===
</span>    <span style="font-weight:100;color:#b2b2b2">Test.&lt;anonymous&gt; (</span><span style="color:#ffff00">test/tap.test.js</span><span style="font-weight:100;color:#b2b2b2">:53:7)
</span>    <span style="font-weight:100;color:#b2b2b2">Test.&lt;anonymous&gt; (</span><span style="color:#ffff00">test/tap.test.js</span><span style="font-weight:100;color:#b2b2b2">:47:5)
</span>    <span style="color:#ffff00">test/tap.test.js</span><span style="font-weight:100;color:#b2b2b2">:39:3

</span><span style="font-weight:bold">Asserts:</span>  <span style="color:#00a000">15 pass</span>  <span style="font-weight:bold;color:#ff0000">3 fail</span>  <span style="color:#00b0b0">6 skip</span>  <span style="color:#e000e0">6 todo</span>  <span style="font-weight:100;color:#b2b2b2">18 of 30 complete
</span><span style="font-weight:bold">Suites:</span>    <span style="color:#00a000">0 pass</span>  <span style="font-weight:bold;color:#ff0000">1 fail</span>  <span style="color:#00b0b0">0 skip</span>            <span style="font-weight:100;color:#b2b2b2">1 of 1 complete

# { total: 30, pass: 15, fail: 3, todo: 6, skip: 6 }
# time=437.285ms</span></pre>


The included reporters are:

- `base` - Shown above. A moderate level of reporting, clear
  indicators of where the test summary is starting, and live
  updates as tests are run and completed.
- `terse` - Much less extraneous decorative output. It shows the
  `Asserts` and `Suites` summary, but no live-updating indicators
  of which tests are running and how long they take.
- `min` - Even more terse than terse. Nothing at all is printed
  unless a failure occurs.
- `silent` - Literally as terse as it is possible to be, no
  output at all.
- `dot` - Similar to `min`, but prints a dot for each assertion,
  colored appropriately for its pass/fail/skip/todo status.
  (Or, if colors are disabled, just a regular dot.)
- `junit` - JUnit style XML results.
- `json` - Output the results of the test run as a single JSON
  object.
- `jsonstream` - Line-delmited JSON, printing an array message
  for each suite and assertion.
- `markdown` - Similar to `jsonstream`, but markdown instead of
  JSON.
- `tap` - Just the raw TAP stream.

Those are just the built-in reports. You can [write your own
using the `@tapjs/reporter` library](./writing-custom-reporters.md).

## Reporting to a File

Particularly for the JSON, XML, or Markdown reporters, it can be
useful to pipe to a file.

To do this, you can set the `--reporter-file` option (shorthand:
`-f`) to a path on disk.  For example:

```bash
$ # write the xml to rspec.xml
$ tap -R junit --reporter-file rspec.xml
```

You can also use the `replay` command in this case to output a
human-friendly report only on test failure:

```bash
$ # will create xml file, only print verbose report on failure
$ tap -R junit --reporter-file rspec.xml || tap replay
```

## Ink-Based Reporters

To use a custom reporter written in Ink, set the `--reporter`
config option to the module which default-exports a React tag
taking a [`TAP`](./api.md#class-tap) object as the `tap`
attribute, and a
[`LoadedConfig`](https://tapjs.github.io/tapjs/interfaces/_tapjs_config.index.LoadedConfig.html)
object as the `config` attribute.

## Stream-Based Reporters

Alternatively, you can set `--reporter` to a module that
default-exports a Writable Stream class. (That is, a class
with `write` and `end` methods on its prototype.)

In this case, the class will be instantiated with no arguments,
and the root `TAP` test will be piped into it.

## CLI-Based Reporters

Lastly, you can provide a name of an executable program, which
will receive the TAP content on its standard input.

In this case, the `--reporter-arg` config options may be used to
set the arguments to the reporter program.

For example,

<pre style="color:#eeeeee;background:#222222;position:relative">$ npm install --save-dev tap-mocha-reporter
$ tap --color -R tap-mocha-reporter -r nyan
 <span style="color:#00a000">871</span> <span style="color:#5f5fff">_</span><span style="color:#0087ff">-_</span><span style="color:#00afff">-_</span><span style="color:#00d7ff">-</span><span style="color:#00d7d7">_-</span><span style="color:#00ffaf">_-</span><span style="color:#00ff87">_</span><span style="color:#5fff87">-</span><span style="color:#5fff5f">_</span><span style="color:#87ff5f">-</span><span style="color:#87ff00">_</span><span style="color:#afff00">-_</span><span style="color:#d7ff00">-</span><span style="color:#d7d700">_</span><span style="color:#afff00">-_-</span><span style="color:#d7d700">_-</span><span style="color:#ffaf00">_-</span><span style="color:#ff8700">_-</span><span style="color:#ff5f00">_</span><span style="color:#ff5f5f">-_</span><span style="color:#ff0087">-_</span><span style="color:#ff00af">-</span><span style="color:#d700af">_</span><span style="color:#d700d7">-</span><span style="color:#af00d7">_-</span><span style="color:#8700ff">_-</span><span style="color:#5f00ff">_</span><span style="color:#5f5fff">-_</span><span style="color:#0087ff">-_</span><span style="color:#00afff">-_</span><span style="color:#00d7ff">-</span><span style="color:#00d7d7">_-</span><span style="color:#00ffaf">_</span>_,------,
 <span style="color:#ff0000">0</span>   <span style="color:#5f5fff">_</span><span style="color:#0087ff">-_</span><span style="color:#00afff">-_</span><span style="color:#00d7ff">-</span><span style="color:#00d7d7">_-</span><span style="color:#00ffaf">_-</span><span style="color:#00ff87">_</span><span style="color:#5fff87">-</span><span style="color:#5fff5f">_</span><span style="color:#87ff5f">-</span><span style="color:#87ff00">_</span><span style="color:#afff00">-_</span><span style="color:#d7ff00">-</span><span style="color:#d7d700">_</span><span style="color:#afff00">-_-</span><span style="color:#d7d700">_-</span><span style="color:#ffaf00">_-</span><span style="color:#ff8700">_-</span><span style="color:#ff5f00">_</span><span style="color:#ff5f5f">-_</span><span style="color:#ff0087">-_</span><span style="color:#ff00af">-</span><span style="color:#d700af">_</span><span style="color:#d700d7">-</span><span style="color:#af00d7">_-</span><span style="color:#8700ff">_-</span><span style="color:#5f00ff">_</span><span style="color:#5f5fff">-_</span><span style="color:#0087ff">-_</span><span style="color:#00afff">-_</span><span style="color:#00d7ff">-</span><span style="color:#00d7d7">_-</span><span style="color:#00ffaf">_</span>_|  /\_/\  
 <span style="color:#e000e0">0</span>   <span style="color:#5f5fff">_</span><span style="color:#0087ff">-_</span><span style="color:#00afff">-_</span><span style="color:#00d7ff">-</span><span style="color:#00d7d7">_-</span><span style="color:#00ffaf">_-</span><span style="color:#00ff87">_</span><span style="color:#5fff87">-</span><span style="color:#5fff5f">_</span><span style="color:#87ff5f">-</span><span style="color:#87ff00">_</span><span style="color:#afff00">-_</span><span style="color:#d7ff00">-</span><span style="color:#d7d700">_</span><span style="color:#afff00">-_-</span><span style="color:#d7d700">_-</span><span style="color:#ffaf00">_-</span><span style="color:#ff8700">_-</span><span style="color:#ff5f00">_</span><span style="color:#ff5f5f">-_</span><span style="color:#ff0087">-_</span><span style="color:#ff00af">-</span><span style="color:#d700af">_</span><span style="color:#d700d7">-</span><span style="color:#af00d7">_-</span><span style="color:#8700ff">_-</span><span style="color:#5f00ff">_</span><span style="color:#5f5fff">-_</span><span style="color:#0087ff">-_</span><span style="color:#00afff">-_</span><span style="color:#00d7ff">-</span><span style="color:#00d7d7">_-</span><span style="color:#00ffaf">_</span>~|_( ^ .^)  
     <span style="color:#5f5fff">_</span><span style="color:#0087ff">-_</span><span style="color:#00afff">-_</span><span style="color:#00d7ff">-</span><span style="color:#00d7d7">_-</span><span style="color:#00ffaf">_-</span><span style="color:#00ff87">_</span><span style="color:#5fff87">-</span><span style="color:#5fff5f">_</span><span style="color:#87ff5f">-</span><span style="color:#87ff00">_</span><span style="color:#afff00">-_</span><span style="color:#d7ff00">-</span><span style="color:#d7d700">_</span><span style="color:#afff00">-_-</span><span style="color:#d7d700">_-</span><span style="color:#ffaf00">_-</span><span style="color:#ff8700">_-</span><span style="color:#ff5f00">_</span><span style="color:#ff5f5f">-_</span><span style="color:#ff0087">-_</span><span style="color:#ff00af">-</span><span style="color:#d700af">_</span><span style="color:#d700d7">-</span><span style="color:#af00d7">_-</span><span style="color:#8700ff">_-</span><span style="color:#5f00ff">_</span><span style="color:#5f5fff">-_</span><span style="color:#0087ff">-_</span><span style="color:#00afff">-_</span><span style="color:#00d7ff">-</span><span style="color:#00d7d7">_-</span><span style="color:#00ffaf">_</span> &quot;&quot;  &quot;&quot;  

<span style="color:#00ff00"> </span><span style="color:#00a000"> 871 passing</span><span style="color:#404040"> (2s)</span></pre>
