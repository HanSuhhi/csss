---
title: 按钮 button
lang: zh-CN
lastUpdated: true
next: ../title
prev: ../color.md
---

# Button

一个不可或缺的元素。

:::tip
当我看到一个按钮出现在 web 上时，心情无异于看到`hello world`打印在了命令行窗口上。
:::

## 颜色

颜色样式根据两类需求进行区分，**业务**以及**多彩**。

简单的说，如果对颜色没有很强的需求，那么先考虑**业务颜色样式**是不错的选择！

### 业务

业务颜色样式，会更注重于与其他组件之间的联动。可以通过`tobe`属性进行控制。

<demo src="../../../.vuepress/components/button/ButtonTobe.vue" title="颜色很固定，但是很好用。" />

### 多彩

多彩颜色样式，则是在单组件中提供更多的颜色选择。可以通过`color`属性进行设置。例如`color="red"`，详细内容可查看[属性汇总](./#属性汇总)

<demo src="../../../.vuepress/components/button/ButtonColor.vue" title="这个世界不是黑的，也不是白的。" />

:::warning
`color`属性生成的颜色样式会覆盖`tobe`属性生成的颜色样式，但仍保留`todo`属性。
:::

## 次级按钮

通过`secondary`属性进行控制的次级按钮。

<demo src="../../../.vuepress/components/button/ButtonSecondary.vue" title="次要按钮有时候也是必须的。" />

## 禁用

和 html 标签一致，通过`disabled`属性来禁用按钮。

<demo src="../../../.vuepress/components/button/ButtonDisabled.vue" title="该装备耐久过低，无法使用。" />

## 尺寸

目前拥有除默认之外的 2 种按钮样式，也许之后会有更多的样式。

<demo src="../../../.vuepress/components/button/ButtonSize.vue" title="一个班上总有一些大孩子和小孩子。" />

## 虚线按钮

有时候某些场景还会用到一些虚线边框的按钮。也许之后会把他改造成三级按钮。

<demo src="../../../.vuepress/components/button/ButtonDashed.vue" />

## 暗黑模式（TODO）

暗黑模式需要和其他的组件做一些联动，但其他组件还没有诞生。

:::tip
估计还需要一段时间。
:::

## 属性汇总

与`<button>`有关的所有属性将汇总于此。

| 属性      | 说明     | 可选值                                                                                   | 默认值   |
| --------- | -------- | ---------------------------------------------------------------------------------------- | -------- |
| tobe      | 类型     | `success` / `warning` / `error` / `info`                                                 |          |
| color     | 颜色     | `white` / `green`/ `red`/ `purple`/ `brown`/ `blue`/ `black`/ `gray`/ `yellow`/ `orange` |          |
| disabled  | 禁用     | boolean                                                                                  | `false`  |
| size      | 尺寸     | `small` / `normal` / `large`                                                             | `normal` |
| secondary | 次级按钮 | boolean                                                                                  | `false`  |
| dashed    | 虚线按钮 | boolean                                                                                  | `false`  |
| dark      | 暗黑模式 | todo                                                                                     |          |

## CSS 变量

与`<button>`有关的所有 CSS 变量将汇总于此。

由于使用到的 CSS 变量过多，整理出`建议修改变量`和`不建议修改变量`。

:::tip
非必要情况下，不建议直接操作 css。如果有未涉及到的 css 变量，欢迎 PR 👏
:::

### 建议修改变量

按钮变量下，建议修改变量包括有`普通样式`，`虚指时（hover）样式`,`激活时（active）样式`，`禁用时（disabled）样式`

在大部分应用场景下，仅需在元素的作用域内修改 css 变量即可实现对样式的控制，而不需要在 css 伪类伪元素中进行修改。

#### 普通样式

| 变量名              | 说明           | 默认值             |
| ------------------- | -------------- | ------------------ |
| `--bg-color`        | 按钮背景色     | `transparent`      |
| `--font-size`       | 文字大小       | `font-normal`      |
| `--border-size`     | 边框大小       | `--particle`       |
| `--border-color`    | 边框颜色       | `--black`          |
| `--border-style`    | 边框样式       | `solid`            |
| `--border-radius`   | 边框圆角       | `--mini`           |
| `--padding-y`       | 垂直方向内边距 | `--mini`           |
| `--padding-x`       | 水平方向内边距 | `--small`          |
| `--color`           | 字体颜色       | `--black-bright-2` |
| `--transition-time` | 动画时间       | `--moment`         |
| `--cursor`          | 鼠标光标样式   | pointer            |

#### 虚指（hover）样式

| 变量名             | 说明           | 默认值         |
| ------------------ | -------------- | -------------- |
| `--hover-bg-color` | 虚指时背景颜色 | `white-deep-1` |

#### 激活（active）样式

| 变量名                 | 说明                   | 默认值    |
| ---------------------- | ---------------------- | --------- |
| `--active-bg-color`    | 激活时背景颜色         | `--white` |
| `--active-transform-y` | 激活时垂直方向位移距离 | `--tiny`  |

#### 禁用时（disabled）样式

| 变量名               | 说明         | 默认值 |
| -------------------- | ------------ | ------ |
| `--disabled-opacity` | 禁用时透明度 | 0.4    |

---

### 不建议修改变量

这里存在的变量不建议修改。

| 变量名               | 说明       | 默认值                                                       |
| -------------------- | ---------- | ------------------------------------------------------------ |
| `--border`           | 边框       | `var(--border-size) var(--border-style) var(--border-color)` |
| `--padding`          | 内边距     | `var(--padding-y) var(--padding-x)`                          |
| `--active-transform` | 激活时变换 | `translateY(var(--active-transform-y))`                      |
