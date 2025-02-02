import{_ as n,o as a,c as e,e as l}from"./app-148fbfef.js";const i={};function t(p,s){return a(),e("div",null,s[0]||(s[0]=[l(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><p>seldom的安装非常简单。</p><ul><li>快速安装</li></ul><p>目前已经上传 pypi.org ,可以使用pip命令安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> seldom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>体验最新代码</li></ul><p>如果你想随时体验最新的代码，可以使用下面的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> <span class="token parameter variable">-U</span> git+https://github.com/defnngj/seldom.git@master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装依赖</li></ul><p>随着seldom 加入更多的功能，seldom不得不依赖其他的开源库。你可以在 requirements.txt 文件里面看到这些依赖。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Appium-Python-Client<span class="token operator">&gt;=</span><span class="token number">4.1</span>.0
XTestRunner<span class="token operator">&gt;=</span><span class="token number">1.7</span>.2
loguru<span class="token operator">&gt;=</span><span class="token number">0.7</span>.0
openpyxl<span class="token operator">&gt;=</span><span class="token number">3.0</span>.3
pyyaml<span class="token operator">&gt;=</span><span class="token number">6.0</span>
jsonschema<span class="token operator">&gt;=</span><span class="token number">4.10</span>.0
jmespath<span class="token operator">&gt;=</span><span class="token number">0.10</span>.0
pymysql<span class="token operator">&gt;=</span><span class="token number">1.0</span>.0
<span class="token assign-left variable">genson</span><span class="token operator">==</span><span class="token number">1.2</span>.2
click~<span class="token operator">=</span><span class="token number">8.1</span>.3
python-dateutil<span class="token operator">==</span><span class="token number">2.8</span>.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先通过 <code>pip</code> 命令安装这些依赖库，可以加快seldom的安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>检查安装</li></ul><p>最后，我们可以通过<code>pip show seldom</code>命令检查安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip show seldom

Name: seldom
Version: <span class="token number">3</span>.x.x
Summary: Seldom automation testing framework based on unittest.
Home-page: https://seldomqa.github.io
Author: bugmaster
Author-email: fnngj@126.com
License: Apache-2.0
Location: C:<span class="token punctuation">\\</span>Python311<span class="token punctuation">\\</span>Lib<span class="token punctuation">\\</span>site-packages
Requires:  Appium-Python-Client, click, genson, jmespath, jsonschema, loguru, openpyxl, pymysql, python-dateutil, pyyaml, requests, websocket-client, XTestRunner
Required-by:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const r=n(i,[["render",t],["__file","installation.html.vue"]]);export{r as default};
