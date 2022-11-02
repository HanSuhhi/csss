<template><div><h1 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> Title</h1>
<p>Title here is an abbreviation.It is a set of <code v-pre>&lt;h1&gt;</code>, <code v-pre>&lt;h2&gt;</code>, <code v-pre>&lt;h3&gt;</code>, <code v-pre>&lt;h4&gt;</code>, <code v-pre>&lt;h5&gt;</code>, <code v-pre>&lt;h6&gt;</code>.</p>
<p>It's important to not use more than one <code v-pre>&lt;h1&gt;</code> in a page.Otherwise, it will feel very strange, like a piece of data have 2 ids.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Because of the particularity of the <code v-pre>title</code> (includes 6 elements), here are some public content of title.</p>
</div>
<h2 id="standard" tabindex="-1"><a class="header-anchor" href="#standard" aria-hidden="true">#</a> Standard</h2>
<p>I would like to discuss the specification of titles, and the problems caused by incorrect use of titles.</p>
<h3 id="wrong-examples" tabindex="-1"><a class="header-anchor" href="#wrong-examples" aria-hidden="true">#</a> wrong examples</h3>
<p>I used to like using <code v-pre>&lt;div&gt;</code> or <code v-pre>&lt;span&gt;</code> to render a title through a custom style.Also, I still like using titles casually.</p>
<ul>
<li>wrong example 1</li>
</ul>
<demo title="This is a wrong example." highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Efont-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%204rem%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8A%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E4%B8%8E%E9%AD%94%E6%B3%95%E7%9F%B3%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0D%0A%20%20%3Ch1%20style%3D%22font-size%3A%204rem%22%3E%E3%80%8A%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E4%B8%8E%E9%AD%94%E6%B3%95%E7%9F%B3%E3%80%8B%3C%2Fh1%3E%0D%0A%3C%2Ftemplate%3E" id="components-..-press/components/title/TitleError1.vue"><codeBlockDemo1></codeBlockDemo1></demo><ul>
<li>error example 2</li>
</ul>
<demo title="This is the second wrong example." highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8A%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E4%B8%8E%E9%AD%94%E6%B3%95%E7%9F%B3%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh4%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%9B%AE%E5%BD%95%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh4%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh6%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%AC%AC%201%20%E7%AB%A0%20%E5%A4%A7%E9%9A%BE%E4%B8%8D%E6%AD%BB%E7%9A%84%E7%94%B7%E5%AD%A9%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh6%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0D%0A%20%20%3Ch2%3E%E3%80%8A%E5%93%88%E5%88%A9%C2%B7%E6%B3%A2%E7%89%B9%E4%B8%8E%E9%AD%94%E6%B3%95%E7%9F%B3%E3%80%8B%3C%2Fh2%3E%0D%0A%20%20%3Ch4%3E%E7%9B%AE%E5%BD%95%3C%2Fh4%3E%0D%0A%20%20%3Ch6%3E%E7%AC%AC%201%20%E7%AB%A0%20%E5%A4%A7%E9%9A%BE%E4%B8%8D%E6%AD%BB%E7%9A%84%E7%94%B7%E5%AD%A9%3C%2Fh6%3E%0D%0A%3C%2Ftemplate%3E" id="components-..-press/components/title/TitleError2.vue"><codeBlockDemo2></codeBlockDemo2></demo><h3 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h3>
<p>From the results, wrong examples look ok.However, for <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements#%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%97%AE%E9%A2%98" target="_blank" rel="noopener noreferrer">specification<ExternalLinkIcon/></a> or page structure, this is nothing short of a disaster.It will bring these questions:</p>
<ul>
<li>Route. For some users(smart devices, special population...), switching between different titles is a normal behavior. If the title is missing or the title level is disordered, it will be very confusing for these users.</li>
<li>Directory. Sometimes we need to generate a directory automatically. If you make this mistake, you lose the convenience of automation.</li>
<li>Also, if your title levels are confusing, some sensitive users may wonder where the missing title went.</li>
</ul>
<p>To avoid these problems, please use titles professionally.</p>
<h2 id="center" tabindex="-1"><a class="header-anchor" href="#center" aria-hidden="true">#</a> Center</h2>
<p>Centering a title should be an ordinary requirement, and only one <code v-pre>data-center</code> attribute is needed to solve this.</p>
<demo title="Centered text looks formal." highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Edata-center%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etitle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8ALe%20Rouge%20et%20le%20Noir%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0D%0A%3Cspan%20class%3D%22token%20selector%22%3E.title%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20property%22%3E--font-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Evar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E--font-large%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0D%0A%20%20%3Ch1%20data-center%20class%3D%22title%22%3E%E3%80%8ALe%20Rouge%20et%20le%20Noir%E3%80%8B%3C%2Fh1%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cstyle%3E%0D%0A.title%20%7B%0D%0A%20%20--font-size%3A%20var(--font-large)%0D%0A%7D%0D%0A%3C%2Fstyle%3E" id="components-..-press/components/title/H1Center.vue-28"><codeBlockDemo3></codeBlockDemo3></demo><h2 id="lowercase-conversion" tabindex="-1"><a class="header-anchor" href="#lowercase-conversion" aria-hidden="true">#</a> Lowercase Conversion</h2>
<p>All title elements can use <code v-pre>data-lowercase</code> attribute to use lowercase titles.</p>
<demo title="It's tedious to use js to control string." highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Edata-lowercase%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etitle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8AHarry%20Potter%20and%20the%20Philosopher's%20Stone%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0D%0A%3Cspan%20class%3D%22token%20selector%22%3E.title%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20property%22%3E--font-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Evar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E--font-large%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0D%0A%20%20%3Ch1%20data-lowercase%20class%3D%22title%22%3E%E3%80%8AHarry%20Potter%20and%20the%20Philosopher's%20Stone%E3%80%8B%3C%2Fh1%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cstyle%3E%0D%0A.title%20%7B%0D%0A%20%20--font-size%3A%20var(--font-large)%0D%0A%7D%0D%0A%3C%2Fstyle%3E" id="components-..-press/components/title/H1Lowercase.vue-29"><codeBlockDemo4></codeBlockDemo4></demo><h2 id="attribute-summary" tabindex="-1"><a class="header-anchor" href="#attribute-summary" aria-hidden="true">#</a> Attribute Summary</h2>
<p>All attributes about <code v-pre>title</code> over here.</p>
<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>data-center</td>
<td>center title</td>
<td>boolean</td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>data-lowercase</td>
<td>initial lowercase</td>
<td>boolean</td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="css-custom-properties" tabindex="-1"><a class="header-anchor" href="#css-custom-properties" aria-hidden="true">#</a> CSS Custom Properties</h2>
<p>All css custom properties about <code v-pre>title</code> are displayed here.</p>
<p>Because of too many properties, <code v-pre>modifiable properties</code> and <code v-pre>unmodifiable properties</code> are sorted out.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Modifying css custom properties does not seem like a good idea.If there are any properties that you need but don't provide, issues and PR are welcome 👏</p>
</div>
<h3 id="modifiable-properties" tabindex="-1"><a class="header-anchor" href="#modifiable-properties" aria-hidden="true">#</a> Modifiable Properties</h3>
<p>In most scenes,you only need to modify the css custom properties within the scope of the element instead of in the pseudo-class or pseudo-element.</p>
<table>
<thead>
<tr>
<th>properties</th>
<th>description</th>
<th>default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--font-size</code></td>
<td>font size</td>
<td><code v-pre>--font-normal</code></td>
</tr>
</tbody>
</table>
<h3 id="unmodifiable-properties" tabindex="-1"><a class="header-anchor" href="#unmodifiable-properties" aria-hidden="true">#</a> Unmodifiable Properties</h3>
<p>modification is not recommended</p>
<table>
<thead>
<tr>
<th>properties</th>
<th>description</th>
<th>default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--text-transform</code></td>
<td>element text transform</td>
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