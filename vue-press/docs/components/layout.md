# layout 组件

常用的响应式布局。

## 基础用法

最多可分为 24 小格

<demo-block>
::: slot source
<layout-layout1></layout-layout1>
:::

使用 span 属性来定义当前盒子占 24 小格的份数。

::: slot highlight

```
<div>
    <s-row class="demoRow">
        <s-col span="8"><div class="demoCol">8</div></s-col>
        <s-col span="8"><div class="demoCol">8</div></s-col>
        <s-col span="8"><div class="demoCol">8</div></s-col>
    </s-row>
</div>
<div>
     <s-row class="demoRow">
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
    </s-row>
</div>
<div>
    <s-row class="demoRow">
        <s-col span="4"><div class="demoCol">4</div></s-col>
        <s-col span="4"><div class="demoCol">4</div></s-col>
        <s-col span="4"><div class="demoCol">4</div></s-col>
        <s-col span="4"><div class="demoCol">4</div></s-col>
        <s-col span="4"><div class="demoCol">4</div></s-col>
        <s-col span="4"><div class="demoCol">4</div></s-col>
    </s-row>
</div>
<div>
    <s-row class="demoRow">
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
    </s-row>
</div>
<div>
    <s-row class="demoRow">
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
        <s-col span="2"><div class="demoCol">2</div></s-col>
    </s-row>
</div>

```

:::
</demo-block>

## 偏移布局

将使用该属性的盒子后方偏移，留空白

<demo-block>
::: slot source
<layout-layout2></layout-layout2>
:::

使用 offset 属性来定义 后面留空的大小 的样式(1-24)。

::: slot highlight

```
<div>
   <s-row class="demoRow">
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6" offset="3"><div class="demoCol">12</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
    </s-row>
</div>
<div>
  <s-row class="demoRow">
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3" offset="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3" offset="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
        <s-col span="3"><div class="demoCol">3</div></s-col>
    </s-row>
</div>

```

:::
</demo-block>

## 整体布局分布位置

在 s-row 标签中使用属性确定盒子整体偏移。

<demo-block>
::: slot source
<layout-layout3></layout-layout3>
:::

在 s-row 标签中使用属性确定盒子整体偏移(left center right between around)。

::: slot highlight

```
<div>
    <s-row class="demoRow" align="left">
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
    </s-row>
</div>
<div>
    <s-row class="demoRow" align="center">
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
    </s-row>
</div>
<div>
    <s-row class="demoRow" align="right">
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
    </s-row>
</div>
<div>
    <s-row class="demoRow" align="between">
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
    </s-row>
</div>
<div>
    <s-row class="demoRow" align="around">
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
        <s-col span="6"><div class="demoCol">6</div></s-col>
    </s-row>
</div>

```

:::
</demo-block>

## Attributes

| 参数   | 说明     | 类型   | 可选值                                     | 默认值 |
| :----- | :------- | :----- | :----------------------------------------- | :----- |
| span   | 类型     | string | 1-24                                       | 100%   |
| offset | 类名     | string | 1-24                                       | 0      |
| align  | 布局方式 | string | "left" "center" "right" "between" "around" | "left" |
