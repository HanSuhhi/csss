<template><div><h1 id="csss" tabindex="-1"><a class="header-anchor" href="#csss" aria-hidden="true">#</a> CSSS</h1>
<p>一切的开始，起源于我想要做一个自己的组件库。</p>
<p>身为一个前端，在项目中不可能避免和各种组件库打交道，比如说<a href="https://element-plus.org/zh-CN/" target="_blank" rel="noopener noreferrer"><code v-pre>Element Plus</code><ExternalLinkIcon/></a>、<a href="https://www.naiveui.com/zh-CN/os-theme" target="_blank" rel="noopener noreferrer"><code v-pre>Naive UI</code><ExternalLinkIcon/></a>等。他们提供了非常强大的能力帮助我完成前端应用的开发。</p>
<h2 id="组件库和元素库" tabindex="-1"><a class="header-anchor" href="#组件库和元素库" aria-hidden="true">#</a> 组件库和元素库</h2>
<p>这些组件库很酷。我也想要拥有一个。</p>
<p>但在开始创建<strong>组件库</strong>（component library）之前，我却选择先创建一个<strong>元素库</strong>（element library），也就是<strong>csss</strong>。</p>
<div class="custom-container tip"><p class="custom-container-title">组件库和元素库的区别</p>
<ul>
<li>
<p><strong>元素库</strong></p>
<ol>
<li>单纯通过 css 覆盖原生的 HTML 元素样式，结构单一。</li>
<li>原生 HTML 的元素数量，决定了元素库的数量上限。</li>
<li>使用体验与原生无异，无复杂逻辑，无上手难度。</li>
<li>框架无关。</li>
</ol>
</li>
<li>
<p><strong>组件库</strong></p>
<ol>
<li>多数组件由多个元素嵌套组成。元素复杂程度与组件复杂度正相关。</li>
<li>组件库数量根据实际需要可以随时增加减少。</li>
<li>组件通过 js 处理复杂逻辑。</li>
<li>组件库往往是<code v-pre>框架</code>相关的。如果要实现跨框架的组件库可能会需要依赖 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components<ExternalLinkIcon/></a>。</li>
</ol>
</li>
</ul>
</div>
<h2 id="为什么要做一个元素库" tabindex="-1"><a class="header-anchor" href="#为什么要做一个元素库" aria-hidden="true">#</a> 为什么要做一个元素库？</h2>
<p>首先，我认为用一套 css 给所有 html 元素做一层默认样式并非是无用的。</p>
<h3 id="小矛盾" tabindex="-1"><a class="header-anchor" href="#小矛盾" aria-hidden="true">#</a> 小矛盾</h3>
<p>对于我而言，在我的很多小项目中（真的是非常非常小的项目），往往存在一个三重矛盾：</p>
<ol>
<li>实在没有必要引入一整个庞大的组件库（或者更为复杂的配置按需引入）。</li>
<li>原生元素样式不好看。</li>
<li>自己重新设计一个按钮组件又<s>太懒</s>能力不足。</li>
</ol>
<p>打个比方，在一个演示的页面中，我可能仅仅只需要一个简简单单的按钮，它并没有什么联动关系，没有什么权限配置，它的作用仅仅告诉用户这里有一个可供交互的按钮。</p>
<div class="custom-container tip"><p class="custom-container-title">这就是我所希望的内容，这很简单！</p>
<p>
</p><demo highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Eclick%20me!%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0D%0A%20%20%3Cbutton%3Eclick%20me!%3C%2Fbutton%3E%0D%0A%3C%2Ftemplate%3E" id="components-demo-104">
<codeBlockDemo1></codeBlockDemo1></demo></div>
<h3 id="css-变量" tabindex="-1"><a class="header-anchor" href="#css-变量" aria-hidden="true">#</a> css 变量</h3>
<p>我非常喜欢使用 css 变量。在很多项目中，css 变量可以帮助我解决不少样式上的问题。</p>
<p>随着使用的增加，像颜色，尺寸等常用变量会被反复设置使用。既然如此，我希望有一个库能够帮我定义一系列常用的 css 变量，使我在项目中可以很方便的使用它。</p>
<p>同时将所有默认元素样式通过设定的 css 变量进行统一修改，既让默认元素拥有了一个还算不丑样式，可以直接使用，也让 css 变量对全局所有元素进行了控制，方便页面风格的统一和管理。</p>
<blockquote>
<p>综上而言，对于 csss，我想要设计的，就是一套基于原生的，不难看的，最简单的元素库。</p>
</blockquote>
<h2 id="元素库内容" tabindex="-1"><a class="header-anchor" href="#元素库内容" aria-hidden="true">#</a> 元素库内容</h2>
<p>HTML 元素一共拥有百余个元素，就算剔去不常用的元素，也还有几十个元素之多。一个必要的工作就是将这些元素进行分类。</p>
<p>我将所有 HTML 元素根据实际内容分为了下列四种类型：<strong><code v-pre>布局元素</code></strong>、<strong><code v-pre>组件元素</code></strong>、<strong><code v-pre>内容元素</code></strong>，<strong><code v-pre>装饰元素</code></strong>。以下会对这四类元素做一个介绍。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>因为 csss 做的工作只是对基础元素的样式修改，所以并不会涉及到<code v-pre>&lt;html&gt;</code>、<code v-pre>&lt;head&gt;</code>等标签。</p>
<p>被现行 web 标准弃用的元素也不会被支持，例如<code v-pre>&lt;font&gt;</code>、<code v-pre>&lt;plaintext&gt;</code>等。</p>
</div>
<h3 id="布局元素" tabindex="-1"><a class="header-anchor" href="#布局元素" aria-hidden="true">#</a> 布局元素</h3>
<p><strong>布局元素</strong>，是指仅包含语义化作用，用来展示其他组件元素及内容元素的一类元素，其本身不提供任何展示内容。</p>
<p>常用布局元素：<code v-pre>&lt;header&gt;</code>、<code v-pre>&lt;aside&gt;</code>、<code v-pre>&lt;footer&gt;</code>等。</p>
<h4 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h4>
<p>布局元素的内容应该是各类子元素，而非直接的内容。</p>
<p>只有当你真的发现，在某处布局时任一的布局元素的语义都不符合现状时，才考虑使用<code v-pre>&lt;div&gt;</code>元素。<code v-pre>&lt;div&gt;</code>是最宽泛的布局元素。</p>
<div class="custom-container tip"><p class="custom-container-title">正确示例</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="custom-container danger"><p class="custom-container-title">错误示例</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>我是一个标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<h4 id="列举" tabindex="-1"><a class="header-anchor" href="#列举" aria-hidden="true">#</a> 列举</h4>
<ul>
<li><code v-pre>&lt;header&gt;</code></li>
<li><code v-pre>&lt;aside&gt;</code></li>
<li>todo</li>
</ul>
<h3 id="组件元素" tabindex="-1"><a class="header-anchor" href="#组件元素" aria-hidden="true">#</a> 组件元素</h3>
<p>组件元素代表的是一个同时兼备语义及内容的元素，当然</p>
</div></template>


<script setup>
import codeBlockDemo1 from "@YANYU_FE_CODE_BLOCK/zh-CN/guide/demo.vue";
</script>