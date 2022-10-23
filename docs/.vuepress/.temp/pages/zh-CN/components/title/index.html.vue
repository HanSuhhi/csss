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
<h3 id="小写转换" tabindex="-1"><a class="header-anchor" href="#小写转换" aria-hidden="true">#</a> 小写转换</h3>
<p>所有标题组件，默认通过<code v-pre>text-transform</code>的属性设置的首字母大写（对于英语而言）。可以通过<code v-pre>lowercase</code>属性来使用小写标题。</p>
<demo title="小写转换" desc="%3Cp%3E%E4%BD%BF%E7%94%A8js%E6%9D%A5%E5%AE%9E%E7%8E%B0%E9%A6%96%E5%AD%97%E6%AF%8D%E5%A4%A7%E5%B0%8F%E5%86%99%E5%8F%AF%E4%B8%8D%E5%AE%B9%E6%98%93%E3%80%82%3C%2Fp%3E%0A" highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Eharry%20potter%20and%20the%20chamber%20of%20secrets%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh3%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elowercase%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Eharry%20potter%20and%20the%20chamber%20of%20secrets%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0A%20%20%3Ch3%3Eharry%20potter%20and%20the%20chamber%20of%20secrets%3C%2Fh3%3E%0A%20%20%3Ch3%20lowercase%3Eharry%20potter%20and%20the%20chamber%20of%20secrets%3C%2Fh3%3E%0A%3C%2Ftemplate%3E%0A" id="components-TitleLowercase"><codeBlockDemo1></codeBlockDemo1></demo></div></template>


<script setup>
import codeBlockDemo1 from "@YANYU_FE_CODE_BLOCK/zh-CN/components/title/TitleLowercase.vue";
</script>