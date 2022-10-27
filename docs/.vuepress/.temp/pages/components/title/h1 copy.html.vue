<template>
  <div>
    <h1 id="一级标题" tabindex="-1"><a class="header-anchor" href="#一级标题" aria-hidden="true">#</a> 一级标题</h1>
    <p>一级标题是等级最高的标题。再次重申的是，一个页面中尽量最多仅拥有一个 <code v-pre>&lt;h1&gt;</code> 标签.</p>
    <h2 id="居中" tabindex="-1"><a class="header-anchor" href="#居中" aria-hidden="true">#</a> 居中</h2>
    <p>标题居中， 应该是一个普通的不能再普通的需求了吧 😀，这仅需要一个<code v-pre>center</code>属性。</p>
    <demo title="一个居中的标题"></demo>
    <h2 id="小写转换" tabindex="-1"><a class="header-anchor" href="#小写转换" aria-hidden="true">#</a> 小写转换</h2>
    <p>所有标题元素，可以通过<code v-pre>lowercase</code>属性来使用小写标题。</p>
    <demo title="使用 js 来实现对字符的控制确实繁琐。"></demo>
    <h2 id="块" tabindex="-1"><a class="header-anchor" href="#块" aria-hidden="true">#</a> 块</h2>
    <p><code v-pre>&lt;h1&gt;</code> 标签拥有一个阴影块，基于此产生了一些特效。在上面的示例中，相信你早已注意到了它的存在。</p>
    <h3 id="是否需要" tabindex="-1"><a class="header-anchor" href="#是否需要" aria-hidden="true">#</a> 是否需要</h3>
    <p>如果并不需要这个块，可以通过<code v-pre>no-block</code>属性取消之。</p>
    <demo title="这样看起来正式多了。"></demo>
    <h3 id="块类型颜色" tabindex="-1"><a class="header-anchor" href="#块类型颜色" aria-hidden="true">#</a> 块类型颜色</h3>
    <p>块可以根据业务类型拥有所对应的颜色。颜色通过<code v-pre>block</code>属性来控制，可选值分别为<code v-pre>error</code>，<code
        v-pre>warning</code>，<code v-pre>info</code>，<code v-pre>success</code>。</p>
    <demo></demo>
    <h2 id="属性汇总" tabindex="-1"><a class="header-anchor" href="#属性汇总" aria-hidden="true">#</a> 属性汇总</h2>
    <p>与<code v-pre>&lt;h1&gt;</code>有关的公共属性将汇总于此。元素的特有属性可在对应元素详情中查看。</p>
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
        <tr>
          <td>no-block</td>
          <td>是否需要块</td>
          <td>boolean</td>
          <td><code v-pre>false</code></td>
        </tr>
        <tr>
          <td>block</td>
          <td>块类型</td>
          <td><code v-pre>error</code>,<code v-pre>warning</code>,<code v-pre>info</code>,<code v-pre>success</code>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2 id="css-变量" tabindex="-1"><a class="header-anchor" href="#css-变量" aria-hidden="true">#</a> CSS 变量</h2>
    <p>与<code v-pre>&lt;h1&gt;</code>有关的公共 CSS 变量将汇总于此。元素的特有 CSS 变量可在对应元素详情中查看。</p>
    <p>由于使用到的 CSS 变量过多，整理出<code v-pre>建议修改变量</code>和<code v-pre>不建议修改变量</code>。</p>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
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
        <tr>
          <td><code v-pre>--block-height</code></td>
          <td><code v-pre>calc(var(--font-size) * 0.13);</code></td>
          <td></td>
        </tr>
        <tr>
          <td><code v-pre>--block-width</code></td>
          <td>块宽度</td>
          <td>70%</td>
        </tr>
        <tr>
          <td><code v-pre>--block-radius</code></td>
          <td>块圆角</td>
          <td><code v-pre>--mini</code></td>
        </tr>
        <tr>
          <td><code v-pre>--block-bg-color</code></td>
          <td>块背景颜色</td>
          <td><code v-pre>--main-color</code></td>
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
  </div>
</template>


