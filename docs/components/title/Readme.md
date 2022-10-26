---
title: title
lang: en-US
lastUpdated: true
next: ./h1.md
prev: ../button/Readme.md
---

# Title

Title here is an abbreviation.It is a set of `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`.

It's important to not use more than one `<h1>` in a page.Otherwise, it will feel verr strange, like a piece of data have 2 ids.

::: tip
Because of the pafticularity of the `title` (includes 6 elements), here are some public content of title.
:::

## Standard

I would like to discuss the specification of titles, and the problems caused by incorrect use of titles.

### wrong examples

I used to like using `<div>` or `<span>` to render a title througn a custom style.Also, I still like using titles casually.

- wrong example 1

<demo src="../../.vuepress/components/title/TitleError1.vue" title="This is a wrong example." />

- error example 2

<demo src="../../.vuepress/components/title/TitleError2.vue" title="This is the second wrong example." />

### Question

From the results, wrong examples look ok.However, for [specification](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements#%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%97%AE%E9%A2%98) or page structure, this is nothing short of a disaster.It will bring these questions:

- Route.

- 导航问题。对于使用标题导航的用户（智能设备，语音设备，障碍人士等）而言，在标题间来回切换是一个司空见惯的行为。如果存在标题缺失或者标题等级错乱的问题，对于使用者而言就会倍感困惑。
- 目录生成。对于一些自动生成目录的插件或者类似的需求而言，这种错误将导致开发者不得不进行手动调整，从而失去自动化的便捷。
- 某些时候，如果标题等级错乱，敏感的用户可能会怀疑缺失的标题去哪儿了。

所以，为了避免这些特定场景下会出现的问题，以及更加的专业，请正确的使用标题吧！

## 居中

标题居中， 应该是一个普通的不能再普通的需求了吧，这仅需要一个`center`属性 😀

<demo src="../../.vuepress/components/title/H1Center.vue" title="只要居中的文字看起来似乎就很正式。" />

## 小写转换

所有标题组件，默认通过`text-transform`的属性设置的首字母大写（对于英语而言）。可以通过`lowercase`属性来使用小写标题。

<demo src="../../.vuepress/components/title/H1Lowercase.vue" title="使用 js 来实现对字符的控制确实繁琐。" />

## 属性汇总

与`标题`有关的公共属性将汇总于此。组件的特有属性可在对应组件详情中查看。

| 属性      | 说明         | 可选值  | 默认值  |
| --------- | ------------ | ------- | ------- |
| center    | 标题是否居中 | boolean | `false` |
| lowercase | 首字母小写   | boolean | `false` |

## CSS 变量

与`标题`有关的公共 CSS 变量将汇总于此。组件的特有 CSS 变量可在对应组件详情中查看。

由于使用到的 CSS 变量过多，整理出`建议修改变量`和`不建议修改变量`。

:::tip
非必要情况下，不建议直接操作 css。如果有未涉及到的 css 变量，欢迎 PR 👏
:::

### 建议修改变量

在大部分应用场景下，仅需在元素的作用域内修改 css 变量即可实现对样式的控制，而不需要在 css 伪类伪元素中进行修改。

| 变量名        | 说明     | 默认值          |
| ------------- | -------- | --------------- |
| `--font-size` | 文字大小 | `--font-normal` |

### 不建议修改变量

这里存在的变量不建议修改。

| 变量名             | 说明         | 默认值       |
| ------------------ | ------------ | ------------ |
| `--text-transform` | 元素文本操作 | `capitalize` |
