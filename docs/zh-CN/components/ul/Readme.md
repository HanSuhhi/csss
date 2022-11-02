---
title: <ul> 无序列表
lang: zh-CN
lastUpdated: true
prev: ../color.md
next: ../button
---

# ul

无序列表

TODO

## 属性汇总

与`<ul>`有关的所有属性将汇总于此。

| 属性 | 说明 | 可选值 | 默认值 |
| ---- | ---- | ------ | ------ |

## CSS 变量

与`<ul>`有关的所有 CSS 变量将汇总于此。

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
