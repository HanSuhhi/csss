<template><div><h1 id="h5" tabindex="-1"><a class="header-anchor" href="#h5" aria-hidden="true">#</a> &lt;h5&gt;</h1>
<p>This is already a very low level title. Therefore, the provided functions are less than <code v-pre>&lt;h1&gt;</code> - <code v-pre>&lt;h4&gt;</code>.</p>
<h2 id="center" tabindex="-1"><a class="header-anchor" href="#center" aria-hidden="true">#</a> Center</h2>
<p>Centering a title should be an ordinary requirement, and only one <code v-pre>center</code> attribute is needed to solve this.</p>
<demo title="Centered text looks formal." highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh5%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ecenter%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etitle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8ALe%20Rouge%20et%20le%20Noir%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh5%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.title%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3E--font-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Evar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E--font-large%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0A%20%20%3Ch5%20center%20class%3D%22title%22%3E%E3%80%8ALe%20Rouge%20et%20le%20Noir%E3%80%8B%3C%2Fh5%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%3E%0A.title%20%7B%0A%20%20--font-size%3A%20var(--font-large)%0A%7D%0A%3C%2Fstyle%3E" id="components-..-press/components/title/H5Center.vue"><codeBlockDemo1></codeBlockDemo1></demo><h2 id="lowercase-conversion" tabindex="-1"><a class="header-anchor" href="#lowercase-conversion" aria-hidden="true">#</a> Lowercase Conversion</h2>
<p>All title elements can use <code v-pre>lowercase</code> attribute to use lowercase titles.</p>
<demo title="It's tedious to use js to control string." highlightCode="%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eh5%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elowercase%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etitle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E3%80%8AHarry%20Potter%20and%20the%20Philosopher's%20Stone%E3%80%8B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eh5%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.title%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3E--font-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Evar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E--font-large%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E" code="%3Ctemplate%3E%0A%20%20%3Ch5%20lowercase%20class%3D%22title%22%3E%E3%80%8AHarry%20Potter%20and%20the%20Philosopher's%20Stone%E3%80%8B%3C%2Fh5%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%3E%0A.title%20%7B%0A%20%20--font-size%3A%20var(--font-large)%0A%7D%0A%3C%2Fstyle%3E" id="components-..-press/components/title/H5Lowercase.vue"><codeBlockDemo2></codeBlockDemo2></demo><h2 id="attribute-summary" tabindex="-1"><a class="header-anchor" href="#attribute-summary" aria-hidden="true">#</a> Attribute Summary</h2>
<p>All attributes about <code v-pre>&lt;h5&gt;</code> over here.</p>
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
<td>center</td>
<td>Center Title</td>
<td>boolean</td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>lowercase</td>
<td>initial lowercase</td>
<td>boolean</td>
<td><code v-pre>false</code></td>
</tr>
</tbody>
</table>
<h2 id="css-custom-properties" tabindex="-1"><a class="header-anchor" href="#css-custom-properties" aria-hidden="true">#</a> CSS Custom Properties</h2>
<p>All css custom properties about <code v-pre>&lt;h5&gt;</code> are displayed here.</p>
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
import codeBlockDemo1 from "@YANYU_FE_CODE_BLOCK/.vuepress/components/title/H5Center.vue";
import codeBlockDemo2 from "@YANYU_FE_CODE_BLOCK/.vuepress/components/title/H5Lowercase.vue";
</script>