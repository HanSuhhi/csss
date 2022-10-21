---
title: 按钮
lang: zh-CN
lastUpdated: true
next: false
prev: ../start
---

# Button

一个不可或缺的元素。

:::tip
当我看到一个按钮出现在 web 上时，心情无异于看到“hello world”打印在了命令行窗口上。
:::

## 颜色

颜色样式根据两类需求进行区分，**业务**以及**多彩**。

简单的说，如果对颜色没有很强的需求，那么先考虑**业务颜色样式**是不错的选择！

### 业务

业务颜色样式，会更注重于与其他组件之间的联动。可以通过`tobe`属性进行控制。

<demo src="./ButtonTobe.vue" title="颜色样式" desc="颜色很固定，但是很好用。" />

### 多彩

多彩颜色样式，则是在单组件中提供更多的颜色选择。可以通过`color`属性进行设置。例如`color="red"`，详细内容可查看[属性汇总](./#属性汇总)

<demo src="./ButtonColor.vue" title="颜色样式" desc="这个世界不是黑的，也不是白的。" />

:::warning
`color`属性生成的颜色样式会覆盖`tobe`属性生成的颜色样式，但仍保留`todo`属性。
:::

## 次级按钮

通过`secondary`属性进行控制的次级按钮。

<demo src="./ButtonSecondary.vue" title="次级按钮" desc="次要按钮有时候也是必须的。" />

## 禁用

和 html 标签一致，通过`disabled`属性来禁用按钮。

<demo src="./ButtonDisabled.vue" title="禁用按钮" desc="该装备耐久过低，无法使用。" />

## 尺寸

目前拥有除默认之外的 2 种按钮样式，也许之后会有更多的样式。

<demo src="./ButtonSize.vue" title="按钮尺寸" desc="一个班上总有一些大孩子和小孩子。" />

## 虚线按钮

有时候某些场景还会用到一些虚线边框的按钮。也许之后会把他改造成三级按钮。

<demo src="./ButtonDashed.vue" title="虚线按钮" />

## 暗黑模式（TODO）

暗黑模式需要和其他的组件做一些联动，但其他组件还没有诞生。

:::tip
估计还需要一段时间。
:::

## 属性汇总

与`按钮`有关的所有属性将汇总于此。

| 属性      | 说明     | 可选值                                                                                   | 默认值   |
| --------- | -------- | ---------------------------------------------------------------------------------------- | -------- |
| tobe      | 类型     | `success` / `warning` / `error` / `info`                                                 |          |
| color     | 颜色     | `white` / `green`/ `red`/ `purple`/ `brown`/ `blue`/ `black`/ `gray`/ `yellow`/ `orange` |          |
| disabled  | 禁用     | boolean                                                                                  | `false`  |
| size      | 尺寸     | `small` / `normal` / `large`                                                             | `normal` |
| secondary | 次级按钮 | boolean                                                                                  | `false`  |
| dashed    | 虚线按钮 | boolean                                                                                  | `false`  |
| dark      | 暗黑模式 | todo                                                                                     |          |
