<template><div><h1 id="起源" tabindex="-1"><a class="header-anchor" href="#起源" aria-hidden="true">#</a> 起源</h1>
<p>一切的开始，起源于我想要做一个自己的组件库。</p>
<p>身为一个前端，在项目中不可能避免和各种组件库打交道，比如说<a href="https://element-plus.org/zh-CN/" target="_blank" rel="noopener noreferrer"><code v-pre>Element Plus</code><ExternalLinkIcon/></a>、<a href="https://www.naiveui.com/zh-CN/os-theme" target="_blank" rel="noopener noreferrer"><code v-pre>Naive UI</code><ExternalLinkIcon/></a>等。他们提供了非常强大的能力帮助我完成前端应用的开发。他们很酷。我也想要拥有一个。</p>
<h2 id="组件库和元素库" tabindex="-1"><a class="header-anchor" href="#组件库和元素库" aria-hidden="true">#</a> 组件库和元素库</h2>
<p>但在<strong>组件库</strong>（component library）之前，我选择先创建一个<strong>元素库</strong>（element library）。这两者的在我看来有以下的简单区别：</p>
<ul>
<li>
<p><strong>元素库</strong></p>
<ol>
<li>单纯通过 css 覆盖原生的 HTML 元素样式，结构单一。</li>
<li>使用体验与原生无异，无复杂逻辑，无上手难度。</li>
<li>框架无关。</li>
</ol>
</li>
<li>
<p><strong>组件库</strong></p>
<ol>
<li>多数组件由多个元素嵌套组成。元素复杂程度与组件复杂度正相关。</li>
<li>组件通过 js 处理复杂逻辑。</li>
<li>组件库往往是<code v-pre>框架</code>相关的。如果要实现跨框架的组件库可能会需要依赖 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components<ExternalLinkIcon/></a>。</li>
</ol>
</li>
</ul>
<h2 id="元素库" tabindex="-1"><a class="header-anchor" href="#元素库" aria-hidden="true">#</a> 元素库</h2>
<p>对于我而言，在我的很多小项目中（真的是非常非常小的项目），往往存在一个三重矛盾：</p>
<ol>
<li>实在没有必要引入一整个庞大的组件库（或者更为复杂的配置按需引入）。</li>
<li>原生元素样式不好看。</li>
<li>自己重新设计一个按钮组件又<s>太懒</s>能力不足。</li>
</ol>
<p>打个比方，在一个演示的页面中，我可能仅仅只需要一个简简单单的按钮，它并没有什么联动关系，没有什么权限配置，它的作用仅仅告诉用户这里有一个可供交互的按钮。</p>
<div class="custom-container tip"><p class="custom-container-title">示例</p>
<p>这就是我所希望的内容，这很简单！</p>
<demo highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Eclick%20me!%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0D%0A%20%20%3Cbutton%3Eclick%20me!%3C%2Fbutton%3E%0D%0A%3C%2Ftemplate%3E" id="components-demo">
<codeBlockDemo1></codeBlockDemo1></demo></div>
<p>综上而言，我想要设计的，就是一套基于原生的，不难看的，最简单的元素库。</p>
<h2 id="一些偏好" tabindex="-1"><a class="header-anchor" href="#一些偏好" aria-hidden="true">#</a> 一些偏好</h2>
<p>我非常喜欢使用 css 变量。在很多项目中，我对 css 变量的依赖甚至超过了对 sass，less，postcss 这些库的依赖。</p>
<p>如果我能搭建一套成熟的 css 变量，那我可以在很多库中使用它，这感觉就很酷 😀。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Sass, Less 以及 Postcss 也提供了 css 变量的解决方案。这些都是为了写好代码的一种方式，并不存在<strong>最好的</strong>这一说法</p>
</div>
</div></template>


<script setup>
import codeBlockDemo1 from "@YANYU_FE_CODE_BLOCK/zh-CN/guide/demo.vue";
</script>