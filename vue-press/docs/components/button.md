# Button 组件

常用的操作按钮。

## 基础用法

基础的按钮用法。

<demo-block>
::: slot source
<button-test1></button-test1>
:::

使用 type 属性来定义 Button 的样式。

::: slot highlight

```
<div>
    <sm-button>默认按钮</sm-button>
    <sm-button type="primary">主要按钮</sm-button>
    <sm-button type="success">成功按钮</sm-button>
    <sm-button type="info">信息按钮</sm-button>
    <sm-button type="warning">警告按钮</sm-button>
    <sm-button type="danger">危险按钮</sm-button>
</div>
```

:::
</demo-block>

## 优化按钮

增加特效后 sm-buttonpus 组件，使用感受优化

<demo-block>
::: slot source
<button-test2></button-test2>
:::

直接调用 sm-buttonpus 组件

::: slot highlight

```
<div>
    <sm-buttonpus>open</sm-buttonpus>
    <sm-buttonpus>create file</sm-buttonpus>
    <sm-buttonpus>download</sm-buttonpus>
</div>
```

:::
</demo-block>

## 特效按钮

将普通的按钮增加特效。

<demo-block>
::: slot source
<button-test3></button-test3>
:::

要设置为 type 属性，只要设置 type 属性为 （Winona、moema、Pipaluk、Aylen 等） 即可，更多属性值查看后面的表格。

::: slot highlight

```
<sm-buttonpuls type="Winona">create file</sm-buttonpuls>
<sm-buttonpuls type="moema">create file</sm-buttonpuls>
<sm-buttonpuls type="Pipaluk">create file</sm-buttonpuls>
<sm-buttonpuls type="Aylen">create file</sm-buttonpuls>
```

:::
</demo-block>

<demo-block>
::: slot source
<button-test4></button-test4>
:::

要设置为 type 属性，只要设置 type 属性为 （Saqui、Nina、Nanuk、Wapasha 等） 即可，更多属性值查看后面的表格。

::: slot highlight

```
<sm-buttonpuls type="Saqui">create file</sm-buttonpuls>
<sm-buttonpuls type="Nina">create file</sm-buttonpuls>
<sm-buttonpuls type="Nanuk">create file</sm-buttonpuls>
<sm-buttonpuls type="Wapasha">create file</sm-buttonpuls>
```

:::
</demo-block>

## 图标按钮

给按钮增加图标

<demo-block>
::: slot source
<button-test5></button-test5>
:::

设置 icon 属性，属性值(plus、map-marker、cart、upload) 等

::: slot highlight

```
<div>
    <sm-buttonpuls type="Itzel" icon="cart">Add to Cart</sm-buttonpuls>
    <sm-buttonpuls type="Naira" icon="envelope">Send Message</sm-buttonpuls>
    <sm-buttonpuls type="Quidel" icon="download">Download</sm-buttonpuls>
    <sm-buttonpuls type="Sacnite" icon="map-marker">Search</sm-buttonpuls>
</div>
```

:::
</demo-block>

## Attributes

### sm-button

| 参数 | 说明 | 类型   | 可选值                                      | 默认值  |
| :--- | :--- | :----- | :------------------------------------------ | :------ |
| type | 类型 | string | primary / success / warning / danger / info | default |

### sm-buttonpuls

| 参数 | 说明 | 类型   | 可选值                                                                                    | 默认值 |
| :--- | :--- | :----- | :---------------------------------------------------------------------------------------- | :----- |
| type | 类型 | string | Winona、moema、Pipaluk、Aylen、Saqui、Nina、Nanuk、Wapasha、Itzel、Naira、Quidel、Sacnite | Winona |
| icon | 类型 | string | plus、map-marker、cart、upload、cross、flag、search                                       | -      |
