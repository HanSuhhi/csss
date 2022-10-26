<template><div><h1 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> Title</h1>
<p>Title here is an abbreviation.It is a set of <code v-pre>&lt;h1&gt;</code>, <code v-pre>&lt;h2&gt;</code>, <code v-pre>&lt;h3&gt;</code>, <code v-pre>&lt;h4&gt;</code>, <code v-pre>&lt;h5&gt;</code>, <code v-pre>&lt;h6&gt;</code>.</p>
<p>It's important to not use more than one <code v-pre>&lt;h1&gt;</code> in a page.Otherwise, it will feel verr strange, like a piece of data have 2 ids.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Because of the pafticularity of the <code v-pre>title</code> (includes 6 elements), here are some public content of title.</p>
</div>
<h2 id="standard" tabindex="-1"><a class="header-anchor" href="#standard" aria-hidden="true">#</a> Standard</h2>
<p>I would like to discuss the specification of titles, and the problems caused by incorrect use of titles.</p>
<h3 id="wrong-examples" tabindex="-1"><a class="header-anchor" href="#wrong-examples" aria-hidden="true">#</a> wrong examples</h3>
<p>I used to like using <code v-pre>&lt;div&gt;</code> or <code v-pre>&lt;span&gt;</code> to render a title througn a custom style.Also, I still like using titles casually.</p>
<ul>
<li>wrong example 1</li>
</ul>
<demo title="This is a wrong example." highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Efont-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%204rem%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8A%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E4%B8%8E%E9%AD%94%E6%B3%95%E7%9F%B3%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0A%20%20%3Ch1%20style%3D%22font-size%3A%204rem%22%3E%E3%80%8A%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E4%B8%8E%E9%AD%94%E6%B3%95%E7%9F%B3%E3%80%8B%3C%2Fh1%3E%0A%3C%2Ftemplate%3E" id="components-..-press/components/title/TitleError1.vue"><codeBlockDemo1></codeBlockDemo1></demo><ul>
<li>error example 2</li>
</ul>
<demo title="This is the second wrong example." highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8A%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E4%B8%8E%E9%AD%94%E6%B3%95%E7%9F%B3%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh4%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%9B%AE%E5%BD%95%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh4%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh6%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%AC%AC1%E7%AB%A0%20%E5%A4%A7%E9%9A%BE%E4%B8%8D%E6%AD%BB%E7%9A%84%E7%94%B7%E5%AD%A9%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh6%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0A%20%20%3Ch2%3E%E3%80%8A%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E4%B8%8E%E9%AD%94%E6%B3%95%E7%9F%B3%E3%80%8B%3C%2Fh2%3E%0A%20%20%3Ch4%3E%E7%9B%AE%E5%BD%95%3C%2Fh4%3E%0A%20%20%3Ch6%3E%E7%AC%AC1%E7%AB%A0%20%E5%A4%A7%E9%9A%BE%E4%B8%8D%E6%AD%BB%E7%9A%84%E7%94%B7%E5%AD%A9%3C%2Fh6%3E%0A%3C%2Ftemplate%3E" id="components-..-press/components/title/TitleError2.vue"><codeBlockDemo2></codeBlockDemo2></demo><h3 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h3>
<p>From the results, wrong examples look ok.However, for <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements#%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%97%AE%E9%A2%98" target="_blank" rel="noopener noreferrer">specification<ExternalLinkIcon/></a> or page structure, this is nothing short of a disaster.It will bring these questions:</p>
<ul>
<li>
<p>Route.</p>
</li>
<li>
<p>导航问题。对于使用标题导航的用户（智能设备，语音设备，障碍人士等）而言，在标题间来回切换是一个司空见惯的行为。如果存在标题缺失或者标题等级错乱的问题，对于使用者而言就会倍感困惑。</p>
</li>
<li>
<p>目录生成。对于一些自动生成目录的插件或者类似的需求而言，这种错误将导致开发者不得不进行手动调整，从而失去自动化的便捷。</p>
</li>
<li>
<p>某些时候，如果标题等级错乱，敏感的用户可能会怀疑缺失的标题去哪儿了。</p>
</li>
</ul>
<p>所以，为了避免这些特定场景下会出现的问题，以及更加的专业，请正确的使用标题吧！</p>
<h2 id="居中" tabindex="-1"><a class="header-anchor" href="#居中" aria-hidden="true">#</a> 居中</h2>
<p>标题居中， 应该是一个普通的不能再普通的需求了吧，这仅需要一个<code v-pre>center</code>属性 😀</p>
<demo title="只要居中的文字看起来似乎就很正式。" highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ecenter%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etitle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8ALe%20Rouge%20et%20le%20Noir%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.title%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3E--font-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Evar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E--font-large%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0A%20%20%3Ch1%20center%20class%3D%22title%22%3E%E3%80%8ALe%20Rouge%20et%20le%20Noir%E3%80%8B%3C%2Fh1%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%3E%0A.title%20%7B%0A%20%20--font-size%3A%20var(--font-large)%0A%7D%0A%3C%2Fstyle%3E" id="components-..-press/components/title/H1Center.vue"><codeBlockDemo3></codeBlockDemo3></demo><h2 id="小写转换" tabindex="-1"><a class="header-anchor" href="#小写转换" aria-hidden="true">#</a> 小写转换</h2>
<p>所有标题组件，默认通过<code v-pre>text-transform</code>的属性设置的首字母大写（对于英语而言）。可以通过<code v-pre>lowercase</code>属性来使用小写标题。</p>
<demo title="使用 js 来实现对字符的控制确实繁琐。" highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elowercase%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etitle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8AHarry%20Potter%20and%20the%20Philosopher's%20Stone%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.title%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3E--font-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Evar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E--font-large%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0A%20%20%3Ch1%20lowercase%20class%3D%22title%22%3E%E3%80%8AHarry%20Potter%20and%20the%20Philosopher's%20Stone%E3%80%8B%3C%2Fh1%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%3E%0A.title%20%7B%0A%20%20--font-size%3A%20var(--font-large)%0A%7D%0A%3C%2Fstyle%3E" id="components-..-press/components/title/H1Lowercase.vue"><codeBlockDemo4></codeBlockDemo4></demo><h2 id="属性汇总" tabindex="-1"><a class="header-anchor" href="#属性汇总" aria-hidden="true">#</a> 属性汇总</h2>
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
<p>这里存在的变量不建议修改。</p>
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


<script setup>
import codeBlockDemo1 from "@YANYU_FE_CODE_BLOCK/.vuepress/components/title/TitleError1.vue";
import codeBlockDemo2 from "@YANYU_FE_CODE_BLOCK/.vuepress/components/title/TitleError2.vue";
import codeBlockDemo3 from "@YANYU_FE_CODE_BLOCK/.vuepress/components/title/H1Center.vue";
import codeBlockDemo4 from "@YANYU_FE_CODE_BLOCK/.vuepress/components/title/H1Lowercase.vue";
</script>