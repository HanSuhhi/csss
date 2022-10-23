<template><div><h1 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h1>
<p>此处的标题是一个简称，他代表了<code v-pre>h1</code>，<code v-pre>h2</code>，<code v-pre>h3</code>，<code v-pre>h4</code>，<code v-pre>h5</code>，<code v-pre>h6</code>的集合。</p>
<p>必要强调的是，在一个页面当中，请尽量考虑和避免使用多个重复的<code v-pre>h1</code>标签。就像本文档一样，除了必要的效果演示，不要重复的使用它，这感觉就好比一条数据却拥有了 2 个 id 一样！</p>
<h2 id="规范问题" tabindex="-1"><a class="header-anchor" href="#规范问题" aria-hidden="true">#</a> 规范问题</h2>
<p>这里想讨论一下关于标题的规范，以及不正确的使用标题会带来的问题和不便捷。</p>
<h3 id="错误示范" tabindex="-1"><a class="header-anchor" href="#错误示范" aria-hidden="true">#</a> 错误示范</h3>
<p>我看到过不少人习惯于使用<code v-pre>div</code>或者是<code v-pre>span</code>再通过自定义样式来表示一个标题，又或者单纯的根据所需的字体大小随性的使用标题。</p>
<ul>
<li>示例 1</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 4rem</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>《哈利·波特与魔法石》<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details class="custom-container details"><summary>查看效果</summary>
<div style="font-size: 3rem">《哈利·波特与魔法石》</div>
</details>
<ul>
<li>示例 2</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>《哈利·波特与魔法石》<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>目录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>第1章 大难不死的男孩<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>查看效果</summary>
<h1>《哈利·波特与魔法石》</h1>
<h3>目录</h3>
<h6>第1章 大难不死的男孩</h6>
</details>
<h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3>
<p>从效果的角度来说，这并没有问题。但对于<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements#%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%97%AE%E9%A2%98" target="_blank" rel="noopener noreferrer">规范<ExternalLinkIcon/></a> 又或者是页面结构而言，这无异于是一个灾难。他将带来以下的问题。</p>
<ul>
<li>导航问题。对于使用标题导航的用户（智能设备，语音设备，障碍人士等）而言，在标题间来回切换是一个司空见惯的行为。如果存在标题缺失或者标题等级错乱的问题，对于使用者而言就会倍感困惑。</li>
<li>目录生成。对于一些自动生成目录的插件或者类似的需求而言，这种错误将导致开发者不得不进行手动调整，从而失去自动化的便捷。</li>
<li>某些时候，如果标题等级错乱，敏感的用户可能会怀疑缺失的标题去哪儿了。</li>
</ul>
<p>所以，为了避免这些特定场景下会出现的问题，以及更加的专业，请正确的使用标题吧！</p>
<h2 id="标题总览" tabindex="-1"><a class="header-anchor" href="#标题总览" aria-hidden="true">#</a> 标题总览</h2>
<p>因为标题的特殊性，它一共包含了 6 个标签，而其中又包含了很多的共性。所以先介绍一些标题的公共性内容。</p>
<h3 id="居中" tabindex="-1"><a class="header-anchor" href="#居中" aria-hidden="true">#</a> 居中</h3>
<p>标题居中， 应该是一个普通的不能再普通的需求了吧 😀，这仅需要一个<code v-pre>center</code>属性。</p>
<demo title="居中" desc="只要居中的文字看起来似乎就很正式。"></demo><h3 id="小写转换" tabindex="-1"><a class="header-anchor" href="#小写转换" aria-hidden="true">#</a> 小写转换</h3>
<p>所有标题组件，默认通过<code v-pre>text-transform</code>的属性设置的首字母大写（对于英语而言）。可以通过<code v-pre>lowercase</code>属性来使用小写标题。</p>
<demo title="小写转换" desc="使用js来实现首字母大小写可不容易。"></demo><h2 id="属性汇总" tabindex="-1"><a class="header-anchor" href="#属性汇总" aria-hidden="true">#</a> 属性汇总</h2>
<p>与<code v-pre>标题</code>有关的公共属性将汇总于此。组件的特有属性可在对应组件详情中查看。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>center</td>
<td>标题是否居中</td>
<td>boolean</td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>lowercase</td>
<td>首字母小写</td>
<td>boolean</td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="css-变量" tabindex="-1"><a class="header-anchor" href="#css-变量" aria-hidden="true">#</a> CSS 变量</h2>
<p>与<code v-pre>标题</code>有关的公共 CSS 变量将汇总于此。组件的特有 CSS 变量可在对应组件详情中查看。</p>
<p>由于使用到的 CSS 变量过多，整理出<code v-pre>建议修改变量</code>和<code v-pre>不建议修改变量</code>。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>非必要情况下，不建议直接操作 css。如果有未涉及到的 css 变量，欢迎 PR 👏</p>
</div>
<h3 id="建议修改变量" tabindex="-1"><a class="header-anchor" href="#建议修改变量" aria-hidden="true">#</a> 建议修改变量</h3>
<p>在大部分应用场景下，仅需在元素的作用域内修改 css 变量即可实现对样式的控制，而不需要在 css 伪类伪元素中进行修改。</p>
<table>
<thead>
<tr>
<th>变量名</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--font-size</code></td>
<td>文字大小</td>
<td><code v-pre>--font-normal</code></td>
</tr>
</tbody>
</table>
<h3 id="不建议修改变量" tabindex="-1"><a class="header-anchor" href="#不建议修改变量" aria-hidden="true">#</a> 不建议修改变量</h3>
<table>
<thead>
<tr>
<th>变量名</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--text-transform</code></td>
<td>元素文本操作</td>
<td><code v-pre>capitalize</code></td>
</tr>
</tbody>
</table>
</div></template>


