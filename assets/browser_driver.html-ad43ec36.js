import{_ as e,r as o,o as t,c as p,a as n,b as s,d as i,e as l}from"./app-e3fbc58a.js";const c={},r=n("h1",{id:"浏览器与驱动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#浏览器与驱动","aria-hidden":"true"},"#"),s(" 浏览器与驱动")],-1),u=n("h3",{id:"下载浏览器驱动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载浏览器驱动","aria-hidden":"true"},"#"),s(" 下载浏览器驱动")],-1),d=n("blockquote",null,[n("p",null,"seldom 2.3.0 版本集成webdriver_manager管理浏览器驱动。")],-1),m=n("p",null,"和Selenium一样，在使用seldom运行自动化测试之前，需要先配置浏览器驱动，这一步非常重要。",-1),k={href:"https://github.com/SergeyPirogov/webdriver_manager",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"chrome/firefox/ie/edge/opera",-1),b=l(`<p><strong>自动下载</strong></p><p>如果你不配置浏览器驱动也没关系，seldom会根据你使用的浏览器版本，自动化下载对应的驱动文件。</p><ul><li>编写简单的用例</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">BingTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_bing_search</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;selenium api&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.bing.com&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;sb_form_q&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">,</span> enter<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertTitle<span class="token punctuation">(</span><span class="token string">&quot;seldom - 搜索&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;gc&quot;</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token operator">&gt;</span> python selenium_sample.py

              __    __
   ________  / /___/ /___  ____ ____
  / ___/ _ <span class="token punctuation">\\</span>/ / __  / __ <span class="token punctuation">\\</span>/ __ \` ___/
 <span class="token punctuation">(</span>__  <span class="token punctuation">)</span>  __/ / /_/ / /_/ / / / / / /
/____/<span class="token punctuation">\\</span>___/_/<span class="token punctuation">\\</span>__,_/<span class="token punctuation">\\</span>____/_/ /_/ /_/  v3.x.x
-----------------------------------------
                             @itest.info


<span class="token punctuation">[</span>WDM<span class="token punctuation">]</span> - <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> WebDriver manager <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
<span class="token punctuation">[</span>WDM<span class="token punctuation">]</span> - Current google-chrome version is <span class="token number">103.0</span>.5060
<span class="token punctuation">[</span>WDM<span class="token punctuation">]</span> - Get LATEST chromedriver version <span class="token keyword">for</span> <span class="token number">103.0</span>.5060 google-chrome
<span class="token punctuation">[</span>WDM<span class="token punctuation">]</span> - About to download new driver from https://registry.npmmirror.com/-/binary/chromedriver/103.0.5060.53/chromedriver_win32.zip
<span class="token punctuation">[</span>WDM<span class="token punctuation">]</span> - Driver has been saved <span class="token keyword">in</span> cache <span class="token punctuation">[</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>fnngj<span class="token punctuation">\\</span>.wdm<span class="token punctuation">\\</span>drivers<span class="token punctuation">\\</span>chromedriver<span class="token punctuation">\\</span>win32<span class="token punctuation">\\</span><span class="token number">103.0</span>.5060.53<span class="token punctuation">]</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>seldom 检测到的<code>Chrome</code>浏览器后，自动化下载对应版本的驱动，并保存到本地，以便于下次执行的时候就不需要下载了。</p><p>并且，非常贴心的将<code>chromedriver</code>的下载地址从 google 切换成了 taobao 的镜像地址。</p><p><strong>手动下载</strong></p><p>通过<code>seldom</code>命令下载浏览器驱动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> seldom <span class="token parameter variable">-install</span> chrome
<span class="token operator">&gt;</span> seldom <span class="token parameter variable">-install</span> firefox
<span class="token operator">&gt;</span> seldom <span class="token parameter variable">-install</span> ie
<span class="token operator">&gt;</span> seldom <span class="token parameter variable">-install</span> edge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>默认下载到当前的<code>C:\\Users\\username\\.wdm\\drivers\\</code> 目录下面。</li><li>Chrome: <code>chromedriver</code> 驱动，众所周知的原因，使用的taobao的镜像。</li><li>Safari: <code>safaridriver</code> （macOS系统自带，默认路径:<code>/usr/bin/safaridriver</code>）</li></ol><p>指定浏览器驱动</p><blockquote><p>seldom 3.2.0版本通过新的方式指定浏览器驱动。</p></blockquote><ul><li>chrome</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token comment"># ...</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    browser <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;browser&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;executable_path&quot;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;D:\\webdriver\\chromedriver.exe&quot;</span></span>
    <span class="token punctuation">}</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span>browser<span class="token punctuation">,</span> tester<span class="token operator">=</span><span class="token string">&quot;虫师&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>firefox</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token comment"># ...</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    browser <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;browser&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;firefox&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;executable_path&quot;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;D:\\webdriver\\geckodriver.exe&quot;</span></span>
    <span class="token punctuation">}</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span>browser<span class="token punctuation">,</span> tester<span class="token operator">=</span><span class="token string">&quot;虫师&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他浏览器&amp;驱动配置方式相同，指定 <code>browser</code> 名称 和 <code>executable_path</code> 驱动路径。</p><h3 id="指定不同的浏览器" tabindex="-1"><a class="header-anchor" href="#指定不同的浏览器" aria-hidden="true">#</a> 指定不同的浏览器</h3><p>我们运行的自动化测试不可能只在一个浏览器下运行，我们分别需要在chrome、firefox浏览器下运行。在seldom中需要只需要修改一个配置即可。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token comment"># ……</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">)</span> <span class="token comment"># chrome浏览器,默认值</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;gc&quot;</span><span class="token punctuation">)</span>     <span class="token comment"># google chrome简写</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;firefox&quot;</span><span class="token punctuation">)</span> <span class="token comment"># firefox浏览器</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;ff&quot;</span><span class="token punctuation">)</span>      <span class="token comment"># firefox简写</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;edge&quot;</span><span class="token punctuation">)</span>    <span class="token comment"># edge浏览器</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;safari&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># safari浏览器</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;ie&quot;</span><span class="token punctuation">)</span>      <span class="token comment"># internet explore浏览器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>main()</code>方法中通过<code>browser</code>参数设置不同的浏览器，默认为<code>Chrome</code>浏览器。</p>`,23);function _(g,h){const a=o("ExternalLinkIcon");return t(),p("div",null,[r,u,d,m,n("p",null,[s("seldom 集成 "),n("a",k,[s("webdriver_manager"),i(a)]),s(" ，提供了"),v,s("浏览器驱动的自动下载。")]),b])}const f=e(c,[["render",_],["__file","browser_driver.html.vue"]]);export{f as default};
