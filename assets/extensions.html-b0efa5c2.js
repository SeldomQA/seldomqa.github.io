import{_ as s,o as a,c as p,e as t}from"./app-148fbfef.js";const e={};function o(i,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="appium-扩展" tabindex="-1"><a class="header-anchor" href="#appium-扩展" aria-hidden="true">#</a> appium 扩展</h1><p>appium支持扩展，通过扩展来增强appium定位元素的能力。</p><h2 id="appium-images-plugin" tabindex="-1"><a class="header-anchor" href="#appium-images-plugin" aria-hidden="true">#</a> appium images-plugin</h2><p>使用此插件支持的<code>-image</code>定位器策略，可以通过Appium指定想要定位的元素的图片文件。</p><ul><li>安装Appium images-plugin插件。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> appium plugin <span class="token function">install</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看已安装的Appium插件。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> appium plugin list <span class="token parameter variable">--installed</span>
✔ Listing installed plugins
- images@2.1.8 <span class="token punctuation">[</span>installed <span class="token punctuation">(</span>npm<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动Appium server时指定使用OCR插件。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> appium server <span class="token parameter variable">--address</span> <span class="token string">&#39;127.0.0.1&#39;</span> <span class="token parameter variable">-p</span> <span class="token number">4723</span>  --use-plugins<span class="token operator">=</span>images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>目录结构</li></ul><div class="language-tree line-numbers-mode" data-ext="tree"><pre class="language-tree"><code>├───test_appium_images.py
└───phone.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编写App自动化测试脚本</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># test_appium_images.py</span>
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>file_extend <span class="token keyword">import</span> <span class="token builtin">file</span>
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>android <span class="token keyword">import</span> UiAutomator2Options


<span class="token keyword">class</span> <span class="token class-name">TestApp</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_app_images</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        file_path <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">.</span><span class="token builtin">dir</span><span class="token punctuation">,</span> <span class="token string">&quot;phone.jpg&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>click_image<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    capabilities <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;automationName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;UiAutomator2&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;platformName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appPackage&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.flyme.flymebbs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appActivity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.myplus.ui.splash.SplashActivity&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;noReset&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    options <span class="token operator">=</span> UiAutomator2Options<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load_capabilities<span class="token punctuation">(</span>capabilities<span class="token punctuation">)</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>app_server<span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:4723&quot;</span><span class="token punctuation">,</span> app_info<span class="token operator">=</span>options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>click_image()</code> 来点击图片匹配到整个页面上的元素的坐标位。</p><h2 id="appium-ocr-plugin" tabindex="-1"><a class="header-anchor" href="#appium-ocr-plugin" aria-hidden="true">#</a> Appium OCR plugin</h2><ul><li>安装Appium OCR plugin插件。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> appium plugin <span class="token function">install</span> images--source<span class="token operator">=</span>npm appium-ocr-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看已安装的Appium插件。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> appium plugin list <span class="token parameter variable">--installed</span>
✔ Listing installed plugins
- ocr@0.2.0 <span class="token punctuation">[</span>installed <span class="token punctuation">(</span>npm<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动Appium server时指定使用OCR插件。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> appium server <span class="token parameter variable">--address</span> <span class="token string">&#39;127.0.0.1&#39;</span> <span class="token parameter variable">-p</span> <span class="token number">4723</span>  --use-plugins<span class="token operator">=</span>ocr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>编写App自动测试脚本。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># test_appium_orc.py</span>
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>switch <span class="token keyword">import</span> Switch
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>ocr_plugin <span class="token keyword">import</span> OCRCommand
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>android <span class="token keyword">import</span> UiAutomator2Options


<span class="token keyword">class</span> <span class="token class-name">TestApp</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>switch <span class="token operator">=</span> Switch<span class="token punctuation">(</span>self<span class="token punctuation">.</span>driver<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_orc_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ocr <span class="token operator">=</span> self<span class="token punctuation">.</span>driver<span class="token punctuation">.</span>ocr_command<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>ocr<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>switch<span class="token punctuation">.</span>switch_to_ocr<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>xpath<span class="token operator">=</span><span class="token string">&#39;//words/item[text() = &quot;Flyme&quot;]&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    capabilities <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;automationName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;UiAutomator2&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;platformName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appPackage&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.flyme.flymebbs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appActivity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.myplus.ui.splash.SplashActivity&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;noReset&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    options <span class="token operator">=</span> UiAutomator2Options<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load_capabilities<span class="token punctuation">(</span>capabilities<span class="token punctuation">)</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>app_server<span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:4723&quot;</span><span class="token punctuation">,</span> app_info<span class="token operator">=</span>options<span class="token punctuation">,</span> extensions<span class="token operator">=</span><span class="token punctuation">[</span>OCRCommand<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面代码示例，打印ocr变量得到一个JSON结构体。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;words&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mEngine&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;confidence&quot;</span><span class="token operator">:</span> <span class="token number">88.47775268554688</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;x0&quot;</span><span class="token operator">:</span> <span class="token number">86</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y0&quot;</span><span class="token operator">:</span> <span class="token number">509</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x1&quot;</span><span class="token operator">:</span> <span class="token number">308</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y1&quot;</span><span class="token operator">:</span> <span class="token number">560</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flyme&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;confidence&quot;</span><span class="token operator">:</span> <span class="token number">91.3454818725586</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;x0&quot;</span><span class="token operator">:</span> <span class="token number">316</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y0&quot;</span><span class="token operator">:</span> <span class="token number">1132</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x1&quot;</span><span class="token operator">:</span> <span class="token number">420</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y1&quot;</span><span class="token operator">:</span> <span class="token number">1172</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A9&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;confidence&quot;</span><span class="token operator">:</span> <span class="token number">34.86248779296875</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;x0&quot;</span><span class="token operator">:</span> <span class="token number">1017</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y0&quot;</span><span class="token operator">:</span> <span class="token number">2565</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x1&quot;</span><span class="token operator">:</span> <span class="token number">1078</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y1&quot;</span><span class="token operator">:</span> <span class="token number">2595</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lines&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mEngine BY Ni0vEh 1 Bl\\n\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;confidence&quot;</span><span class="token operator">:</span> <span class="token number">21.003677368164062</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;x0&quot;</span><span class="token operator">:</span> <span class="token number">86</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y0&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x1&quot;</span><span class="token operator">:</span> <span class="token number">674</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y1&quot;</span><span class="token operator">:</span> <span class="token number">560</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flyme\\n\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;confidence&quot;</span><span class="token operator">:</span> <span class="token number">91.3454818725586</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;x0&quot;</span><span class="token operator">:</span> <span class="token number">316</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y0&quot;</span><span class="token operator">:</span> <span class="token number">1132</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x1&quot;</span><span class="token operator">:</span> <span class="token number">420</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y1&quot;</span><span class="token operator">:</span> <span class="token number">1172</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A9\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;confidence&quot;</span><span class="token operator">:</span> <span class="token number">34.86248779296875</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;x0&quot;</span><span class="token operator">:</span> <span class="token number">1017</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y0&quot;</span><span class="token operator">:</span> <span class="token number">2565</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x1&quot;</span><span class="token operator">:</span> <span class="token number">1078</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y1&quot;</span><span class="token operator">:</span> <span class="token number">2595</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;blocks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mEngine BY Ni0vEh 1 Bl\\n\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;confidence&quot;</span><span class="token operator">:</span> <span class="token number">21.003677368164062</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;x0&quot;</span><span class="token operator">:</span> <span class="token number">86</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y0&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x1&quot;</span><span class="token operator">:</span> <span class="token number">674</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y1&quot;</span><span class="token operator">:</span> <span class="token number">560</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flyme\\n\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;confidence&quot;</span><span class="token operator">:</span> <span class="token number">91.3454818725586</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;x0&quot;</span><span class="token operator">:</span> <span class="token number">316</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y0&quot;</span><span class="token operator">:</span> <span class="token number">1132</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x1&quot;</span><span class="token operator">:</span> <span class="token number">420</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y1&quot;</span><span class="token operator">:</span> <span class="token number">1172</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A9\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;confidence&quot;</span><span class="token operator">:</span> <span class="token number">34.86248779296875</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;x0&quot;</span><span class="token operator">:</span> <span class="token number">1017</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y0&quot;</span><span class="token operator">:</span> <span class="token number">2565</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x1&quot;</span><span class="token operator">:</span> <span class="token number">1078</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y1&quot;</span><span class="token operator">:</span> <span class="token number">2595</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSON结构体说明：</p><ul><li><p>wrods - Tesseract识别的单个单词的列表。</p></li><li><p>lines - Tesseract识别的文本行的列表。</p></li><li><p>blocks - Tesseract识别连续文本块的列表。</p></li></ul><p>每项都引用一个OCR对象，它们本身包含3个数据：</p><ul><li>text：识别的文本。</li><li>confidence：Tesseract对于给定文本的OCR处理结果的置信度（范围在0到100之间）。</li><li>bbox：发现文本的边界框，<code>边界框</code>标记为x0、x1、y0和y1的值的对象。分别表文本的上下左右坐标位置，其中。这里，x0表示发现文本的左边x坐标，x1表示右边x坐标，y0表示上部y坐标，y1表示下部y坐标。</li></ul>`,30)]))}const c=s(e,[["render",o],["__file","extensions.html.vue"]]);export{c as default};
