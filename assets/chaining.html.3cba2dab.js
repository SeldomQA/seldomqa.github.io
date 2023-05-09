import{_ as n,e as s}from"./app.28d46d7d.js";const a={},p=s(`<h1 id="\u94FE\u5F0F\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u94FE\u5F0F\u8C03\u7528" aria-hidden="true">#</a> \u94FE\u5F0F\u8C03\u7528</h1><p>\u65B9\u6CD5\u94FE\u63A5\u662F\u4E00\u79CD\u6280\u672F\uFF0C\u7528\u4E8E\u5BF9\u540C\u4E00\u4E2A\u5BF9\u8C61\u8FDB\u884C\u591A\u4E2A\u65B9\u6CD5\u8C03\u7528\uFF0C\u53EA\u4F7F\u7528\u4E00\u6B21\u5BF9\u8C61\u5F15\u7528\u3002</p><h3 id="\u57FA\u672C\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F8B\u5B50" aria-hidden="true">#</a> \u57FA\u672C\u4F8B\u5B50</h3><p>\u5148\u6765\u770B\u4E00\u4E0B\u5982\u4F55\u901A\u8FC7seldom\u4F7F\u7528\u94FE\u5F0F\u8C03\u7528\u7F16\u5199Web\u6D4B\u8BD5\u7528\u4F8B\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> Steps


<span class="token keyword">class</span> <span class="token class-name">BaiduTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_search_one</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        \u767E\u5EA6\u641C\u7D22
        &quot;&quot;&quot;</span>
        Steps<span class="token punctuation">(</span>desc<span class="token operator">=</span><span class="token string">&quot;\u767E\u5EA6\u641C\u7D22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;#su&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertInTitle<span class="token punctuation">(</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_search_two</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        \u767E\u5EA6\u641C\u7D22
        &quot;&quot;&quot;</span>
        s <span class="token operator">=</span> Steps<span class="token punctuation">(</span>desc<span class="token operator">=</span><span class="token string">&quot;\u767E\u5EA6\u641C\u7D22&quot;</span><span class="token punctuation">)</span>
        s<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        s<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enter<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertInTitle<span class="token punctuation">(</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;gc&quot;</span><span class="token punctuation">,</span> tester<span class="token operator">=</span><span class="token string">&quot;\u866B\u5E08&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u7528\u4F8B\u50CF\u94FE\u6761\u4E00\u6837\u5C06\u6574\u4E2A\u6D4B\u8BD5\u8FC7\u7A0B\u4E32\u8054\u8D77\u6765\uFF0C\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u8BA8\u538C\u6362\u884C\u7B26<code>\\</code>\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u7528\u4F8B\u5206\u6210\u591A\u6B21\u8C03\u7528\uFF0C\u603B\u4E4B\uFF0C\u53EA\u8981\u4F60\u613F\u610F\uFF0C\u53EF\u4EE5\u5C06\u6240\u6709\u6B65\u9AA4\u90FD\u4E32\u8054\u8D77\u6765\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> Steps


<span class="token keyword">class</span> <span class="token class-name">BaiduTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_search_setting</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;\u767E\u5EA6\u641C\u7D22\u8BBE\u7F6E&quot;&quot;&quot;</span>
        Steps<span class="token punctuation">(</span>url<span class="token operator">=</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">,</span> desc<span class="token operator">=</span><span class="token string">&quot;\u767E\u5EA6\u641C\u7D22\u8BBE\u7F6E&quot;</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;#s-usersetting-top&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;#s-user-setting-menu &gt; div &gt; a.setpref&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;[data-tabid=&quot;advanced&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;#q5_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;[data-tabid=&quot;general&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find_text<span class="token punctuation">(</span><span class="token string">&quot;\u4FDD\u5B58\u8BBE\u7F6E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>alert<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;gc&quot;</span><span class="token punctuation">,</span> tester<span class="token operator">=</span><span class="token string">&quot;\u866B\u5E08&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="steps-\u7C7B" tabindex="-1"><a class="header-anchor" href="#steps-\u7C7B" aria-hidden="true">#</a> Steps \u7C7B</h3><p><code>Steps</code> \u7C7B\u6240\u63D0\u4F9B\u7684API \u5927\u90E8\u5206\u548C<code>Webidrver</code> \u7C7B\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u8003\u8651\u6389\u5230\u94FE\u5F0F\u7684\u7279\u70B9\uFF0C\u547D\u540D\u4E0A\u66F4\u4F53\u73B0<code>\u52A8\u4F5C</code>\u3002</p><p><strong>\u67E5\u627E\u5143\u7D20</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> seldom <span class="token keyword">import</span> Steps

c <span class="token operator">=</span> Steps<span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;#id&quot;</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;.class&quot;</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;[name=password]&quot;</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;div &gt; tr &gt; td&quot;</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;text=hao123&quot;</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;text*=hao1&quot;</span><span class="token punctuation">)</span>

c<span class="token punctuation">.</span>find_text<span class="token punctuation">(</span><span class="token string">&quot;\u65B0\u95FB&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li><p>find(): \u53EA\u652F\u6301CSS\u5B9A\u4F4D\uFF0C\u8FD9\u51E0\u4E4E\u662F\u6700\u5F3A\u5927\u7684\u5B9A\u4F4D\u65B9\u6CD5\u4E86\u3002 \u65B0\u7684\u6D4B\u8BD5\u5E93<code>cypress</code>\u3001<code>playwright</code> \u9ED8\u8BA4\u4E5F\u90FD\u662FCSS\u5B9A\u4F4D\u3002</p><ul><li><code>text=</code> \u7528\u6765\u5B9A\u4F4D\u6587\u672C\uFF0C\u76F8\u5F53\u4E8E<code>find_text()</code>\u3002</li><li><code>test*=</code> \u7528\u4F8B\u6A21\u7CCA\u5B9A\u4F4D\u6587\u672C\u3002</li></ul></li><li><p>find_text(): \u7528\u4E8E\u5B9A\u4F4D\u6587\u672C\u3002</p></li></ul><p><strong>\u64CD\u4F5C\u65B9\u6CD5</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> Steps

<span class="token keyword">class</span> <span class="token class-name">TestCase</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_chaining_api</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Steps<span class="token punctuation">(</span>desc<span class="token operator">=</span><span class="token string">&quot;chaining api&quot;</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>max_window<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>set_window<span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enter<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>submit<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>double_click<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>move_to_click<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click_and_hold<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>switch_to_frame<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>select<span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>select<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;\u6BCF\u9875\u663E\u793A20\u6761&quot;</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>select<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>switch_to_frame_out<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>switch_to_window<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>refresh<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>alert<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>alert<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dismiss<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>screenshots<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>element_screenshot<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>\\
            <span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ol><li><p>\u57FA\u4E8E\u5143\u7D20\u5B9A\u4F4D\u7684\u64CD\u4F5C\u5148\u8C03\u7528<code>find()/find_text()</code>, \u4F8B\u5982<code>type()</code>, <code>click()</code> \u7B49\u3002</p></li><li><p><code>accept()/dismiss()</code> \u662F\u57FA\u4E8Ealert\u7684\u64CD\u4F5C\u3002</p></li></ol>`,15);function t(o,c){return p}var u=n(a,[["render",t],["__file","chaining.html.vue"]]);export{u as default};
