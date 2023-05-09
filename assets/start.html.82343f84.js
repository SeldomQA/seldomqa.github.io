import{_ as n,e as s}from"./app.28d46d7d.js";const a={},p=s(`<h1 id="app-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#app-\u6D4B\u8BD5" aria-hidden="true">#</a> app \u6D4B\u8BD5</h1><p><code>seldom 3.0</code> \u57FA\u4E8Eappium\u652F\u6301APP\u6D4B\u8BD5\u3002</p><p>appium \u5B98\u65B9\u7F51\u7AD9\uFF1Ahttps://appium.io/</p><h2 id="\u73AF\u5883\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u5B89\u88C5" aria-hidden="true">#</a> \u73AF\u5883\u5B89\u88C5</h2><p>app \u7684\u81EA\u52A8\u5316\u6D4B\u8BD5\u73AF\u5883\u76F8\u6BD4\u8F83 web \u8981\u590D\u6742\u4E00\u4E9B\uFF0C\u8BF7\u53C2\u8003appium\u5B98\u65B9\u3002</p><ol><li>\u5B89\u88C5node</li></ol><p>https://nodejs.org/en/</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">node</span> --version
v16.17.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u5B89\u88C5appium</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">npm</span> <span class="token function">install</span> -g appium  <span class="token comment"># get appium 1.x</span>
<span class="token operator">&gt;</span> <span class="token function">npm</span> <span class="token function">install</span> -g appium@next <span class="token comment"># get appium 2.x</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>\u542F\u52A8appium</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> appium
<span class="token punctuation">[</span>Appium<span class="token punctuation">]</span> Welcome to Appium v2.0.0-beta.43
<span class="token punctuation">[</span>Appium<span class="token punctuation">]</span> Appium REST http interface listener started on <span class="token number">0.0</span>.0.0:4723
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>\u79FB\u52A8\u8BBE\u5907</li></ol><p>\u51C6\u5907\u4E00\u53F0\u8BBE\u5907\uFF08Android/iOS\u624B\u673A\uFF09\u901A\u8FC7USB\u6570\u636E\u7EBF\u8FDE\u63A5\u7535\u8111\u3002\u901A\u8FC7\u4EE5\u4E0B\u5DE5\u5177\u786E\u8BA4\u624B\u673A\u4E0E\u7535\u8111\u662F\u5426\u8FDE\u63A5\u3002</p><ul><li>adb</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> adb devices 
List of devices attached
UMXDU000000000000       device
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>taobao-iphone-device</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> tidevice list
List of apple devices attached
00008030-00000000000000 xxx\u7684iPhoneSE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u7F16\u5199\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u6D4B\u8BD5" aria-hidden="true">#</a> \u7F16\u5199\u6D4B\u8BD5</h2><p>\u57FA\u4E8Eseldom\u7F16\u5199app\u81EA\u52A8\u5316\u6D4B\u8BD5, \u7531\u4E8Eappium \u7EE7\u627F\u81EAselenium\uFF0C\u6240\u4EE5\uFF0C\u90E8\u5206API\u5171\u7528\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">TestBBS</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_bbs_search</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/nw&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/nw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;flyme&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/o1&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        elems <span class="token operator">=</span> self<span class="token punctuation">.</span>get_elements<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/a29&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> title <span class="token keyword">in</span> elems<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>assertIn<span class="token punctuation">(</span><span class="token string">&quot;lyme&quot;</span><span class="token punctuation">,</span> title<span class="token punctuation">.</span>text<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    desired_caps <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;deviceName&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;JEF_AN20&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;automationName&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;UiAutomator2&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;platformName&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Android&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;platformVersion&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;10.0&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;appPackage&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;com.meizu.flyme.flymebbs&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;appActivity&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;.ui.LoadingActivity&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;noReset&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>app_info<span class="token operator">=</span>desired_caps<span class="token punctuation">,</span> app_server<span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:4723&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><blockquote><p>\u6CE8\uFF1A\u4E0A\u9762\u7684\u6D4B\u8BD5\u7528\u4F8B\u9690\u542B\u4E86appium\u7684\u4E00\u4E9B\u77E5\u8BC6\u70B9\uFF0C\u4F60\u9700\u8981\u5BF9appium\u6709\u8DB3\u591F\u7684\u4E86\u89E3\u3002</p></blockquote><ul><li>\u8FD0\u884C\u65E5\u5FD7</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python test_app.py

              __    __
   ________  / /___/ /___  ____ ____
  / ___/ _ <span class="token punctuation">\\</span>/ / __  / __ <span class="token punctuation">\\</span>/ __ \` ___/
 <span class="token punctuation">(</span>__  <span class="token punctuation">)</span>  __/ / /_/ / /_/ / / / / / /
/____/<span class="token punctuation">\\</span>___/_/<span class="token punctuation">\\</span>__,_/<span class="token punctuation">\\</span>____/_/ /_/ /_/  v3.0.0
-----------------------------------------
                             @itest.info


XTestRunner Running tests<span class="token punctuation">..</span>.

----------------------------------------------------------------------
<span class="token number">2022</span>-10-03 00:01:30 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> \u{1F4A4}\uFE0F sleep: 5s.
<span class="token number">2022</span>-10-03 00:01:35 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> \u2705 Find <span class="token number">1</span> element: <span class="token assign-left variable">id</span><span class="token operator">=</span>com.meizu.flyme.flymebbs:id/nw  -<span class="token operator">&gt;</span> click.
<span class="token number">2022</span>-10-03 00:01:36 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> \u2705 Find <span class="token number">1</span> element: <span class="token assign-left variable">id</span><span class="token operator">=</span>com.meizu.flyme.flymebbs:id/nw  -<span class="token operator">&gt;</span> input <span class="token string">&#39;flyme&#39;</span><span class="token builtin class-name">.</span>
<span class="token number">2022</span>-10-03 00:01:37 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> \u2705 Find <span class="token number">1</span> element: <span class="token assign-left variable">id</span><span class="token operator">=</span>com.meizu.flyme.flymebbs:id/o1  -<span class="token operator">&gt;</span> click.
<span class="token number">2022</span>-10-03 00:01:37 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> \u{1F4A4}\uFE0F sleep: 2s.
<span class="token number">2022</span>-10-03 00:01:39 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> \u2705 Find <span class="token number">5</span> element: <span class="token assign-left variable">id</span><span class="token operator">=</span>com.meizu.flyme.flymebbs:id/a29 <span class="token builtin class-name">.</span>
flyme\u7684\u5C4F\u5E55\u8272\u5F69\u663E\u793A\u5E94\u8BE5\u662F\u6BD4\u8F83\u5DEE\u7684

\u9B45\u65CF17\u7684Flyme9\u72B6\u6001\u680F\u4E0B\u62C9\u95EE\u9898\u3002

flyme9.3\u8FDE\u4E0A\u8033\u673A\u6765\u7535\u8BDD\u8FD8\u662F\u4F1A\u5916\u653E

flyme\u81EA\u5E26\u5F55\u5C4F\u529F\u80FD\u5417\uFF1F

\u5173\u4E8EFlyme <span class="token number">8.18</span>.0A\u7A33\u5B9A\u7248


Generating HTML reports<span class="token punctuation">..</span>.
.12022-10-03 00:01:40 runner.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> generated html file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>2022_10_03_00_01_23_result.html
<span class="token number">2022</span>-10-03 00:01:40 runner.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> generated log file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>seldom_log.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,24);function e(t,l){return p}var c=n(a,[["render",e],["__file","start.html.vue"]]);export{c as default};
