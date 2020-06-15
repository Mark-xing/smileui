(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{692:function(s,l,o){"use strict";o.r(l);var t=o(8),a=Object(t.a)({},(function(){var s=this,l=s.$createElement,o=s._self._c||l;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("h1",{attrs:{id:"layout-组件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#layout-组件"}},[s._v("#")]),s._v(" layout 组件")]),s._v(" "),o("p",[s._v("常用的响应式布局。")]),s._v(" "),o("h2",{attrs:{id:"基础用法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[s._v("#")]),s._v(" 基础用法")]),s._v(" "),o("p",[s._v("最多可分为 24 小格")]),s._v(" "),o("demo-block",{scopedSlots:s._u([{key:"source",fn:function(){return[o("layout-layout1")]},proxy:!0},{key:"highlight",fn:function(){return[o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v('<div>\n    <s-row class="demoRow">\n        <s-col span="8"><div class="demoCol">8</div></s-col>\n        <s-col span="8"><div class="demoCol">8</div></s-col>\n        <s-col span="8"><div class="demoCol">8</div></s-col>\n    </s-row>\n</div>\n<div>\n     <s-row class="demoRow">\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n    </s-row>\n</div>\n<div>\n    <s-row class="demoRow">\n        <s-col span="4"><div class="demoCol">4</div></s-col>\n        <s-col span="4"><div class="demoCol">4</div></s-col>\n        <s-col span="4"><div class="demoCol">4</div></s-col>\n        <s-col span="4"><div class="demoCol">4</div></s-col>\n        <s-col span="4"><div class="demoCol">4</div></s-col>\n        <s-col span="4"><div class="demoCol">4</div></s-col>\n    </s-row>\n</div>\n<div>\n    <s-row class="demoRow">\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n    </s-row>\n</div>\n<div>\n    <s-row class="demoRow">\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n        <s-col span="2"><div class="demoCol">2</div></s-col>\n    </s-row>\n</div>\n\n')])])])]},proxy:!0}])},[o("p",[s._v("使用 span 属性来定义当前盒子占 24 小格的份数。")])]),s._v(" "),o("h2",{attrs:{id:"偏移布局"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#偏移布局"}},[s._v("#")]),s._v(" 偏移布局")]),s._v(" "),o("p",[s._v("将使用该属性的盒子后方偏移，留空白")]),s._v(" "),o("demo-block",{scopedSlots:s._u([{key:"source",fn:function(){return[o("layout-layout2")]},proxy:!0},{key:"highlight",fn:function(){return[o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v('<div>\n   <s-row class="demoRow">\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6" offset="3"><div class="demoCol">12</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n    </s-row>\n</div>\n<div>\n  <s-row class="demoRow">\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3" offset="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3" offset="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n        <s-col span="3"><div class="demoCol">3</div></s-col>\n    </s-row>\n</div>\n\n')])])])]},proxy:!0}])},[o("p",[s._v("使用 offset 属性来定义 后面留空的大小 的样式(1-24)。")])]),s._v(" "),o("h2",{attrs:{id:"整体布局分布位置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#整体布局分布位置"}},[s._v("#")]),s._v(" 整体布局分布位置")]),s._v(" "),o("p",[s._v("在 s-row 标签中使用属性确定盒子整体偏移。")]),s._v(" "),o("demo-block",{scopedSlots:s._u([{key:"source",fn:function(){return[o("layout-layout3")]},proxy:!0},{key:"highlight",fn:function(){return[o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v('<div>\n    <s-row class="demoRow" align="left">\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n    </s-row>\n</div>\n<div>\n    <s-row class="demoRow" align="center">\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n    </s-row>\n</div>\n<div>\n    <s-row class="demoRow" align="right">\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n    </s-row>\n</div>\n<div>\n    <s-row class="demoRow" align="between">\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n    </s-row>\n</div>\n<div>\n    <s-row class="demoRow" align="around">\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n        <s-col span="6"><div class="demoCol">6</div></s-col>\n    </s-row>\n</div>\n\n')])])])]},proxy:!0}])},[o("p",[s._v("在 s-row 标签中使用属性确定盒子整体偏移(left center right between around)。")])]),s._v(" "),o("h2",{attrs:{id:"attributes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[s._v("#")]),s._v(" Attributes")]),s._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[s._v("参数")]),s._v(" "),o("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),o("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),o("th",{staticStyle:{"text-align":"left"}},[s._v("可选值")]),s._v(" "),o("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")])])]),s._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[s._v("span")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("1-24")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("100%")])]),s._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[s._v("offset")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("类名")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("1-24")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("0")])]),s._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[s._v("align")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("布局方式")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v('"left" "center" "right" "between" "around"')]),s._v(" "),o("td",{staticStyle:{"text-align":"left"}},[s._v('"left"')])])])])],1)}),[],!1,null,null,null);l.default=a.exports}}]);