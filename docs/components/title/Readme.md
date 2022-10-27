---
title: title
lang: en-US
lastUpdated: true
next: ./h1.md
prev: ../button/Readme.md
---

# Title

Title here is an abbreviation.It is a set of `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`.

It's important to not use more than one `<h1>` in a page.Otherwise, it will feel very strange, like a piece of data have 2 ids.

::: tip
Because of the particularity of the `title` (includes 6 elements), here are some public content of title.
:::

## Standard

I would like to discuss the specification of titles, and the problems caused by incorrect use of titles.

### wrong examples

I used to like using `<div>` or `<span>` to render a title through a custom style.Also, I still like using titles casually.

- wrong example 1

<demo src="../../.vuepress/components/title/TitleError1.vue" title="This is a wrong example." />

- error example 2

<demo src="../../.vuepress/components/title/TitleError2.vue" title="This is the second wrong example." />

### Question

From the results, wrong examples look ok.However, for [specification](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements#%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%97%AE%E9%A2%98) or page structure, this is nothing short of a disaster.It will bring these questions:

- Route. For some users(smart devices, special population...), switching between different titles is a normal behavior. If the title is missing or the title level is disordered, it will be very confusing for these users.
- Directory. Sometimes we need to generate a directory automatically. If you make this mistake, you lose the convenience of automation.
- Also, if your title levels are confusing, some sensitive users may wonder where the missing title went.

To avoid these problems, please use titles professionally.

## Center

Centering a title should be an ordinary requirement, and only one `center` attribute is needed to solve this.

<demo src="../../.vuepress/components/title/H1Center.vue" title="Centered text looks formal." />

## Lowercase Conversion

All title elements can use `lowercase` attribute to use lowercase titles.

<demo src="../../.vuepress/components/title/H1Lowercase.vue" title="It's tedious to use js to control string." />

## Attribute Summary

All attributes about `title` over here.

| Attributes | Description       | Accepted Values | Default |
| ---------- | ----------------- | --------------- | ------- |
| center     | center title      | boolean         | `false` |
| lowercase  | initial lowercase | boolean         | `false` |

## CSS Custom Properties

All css custom properties about `title` are displayed here.

Because of too many properties, `modifiable properties` and `unmodifiable properties` are sorted out.

:::tip
Modifying css custom properties does not seem like a good idea.If there are any properties that you need but don't provide, issues and PR are welcome 👏
:::

### Modifiable Properties

In most scenes,you only need to modify the css custom properties within the scope of the element instead of in the pseudo-class or pseudo-element.

| properties    | description | default         |
| ------------- | ----------- | --------------- |
| `--font-size` | font size   | `--font-normal` |

### Unmodifiable Properties

modification is not recommended

| properties         | description            | default      |
| ------------------ | ---------------------- | ------------ |
| `--text-transform` | element text transform | `capitalize` |
