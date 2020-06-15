import Vue from "vue";
import Element from "element-ui"; // 引入elementUi
import "element-ui/lib/theme-chalk/index.css";

import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css"; //样式文件

import Button from "../../../src/packages/Button";
import row from "../../../src/packages/row";
import col from "../../../src/packages/col";
import Buttonpus from "../../../src/packages/Buttonpus";
import Buttonpus1 from "../../../src/packages/Buttonpus1";

// import Icon from "../../../src/packages/Icon";
Vue.component(Button.name, Button);
Vue.component(row.name, row);
Vue.component(col.name, col);
Vue.component(Buttonpus.name, Buttonpus);
Vue.component(Buttonpus1.name, Buttonpus1);

// Vue.component(Icon.name, Icon);
Vue.directive("highlight", function(el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach(block => {
        hljs.highlightBlock(block);
    });
});
export default ({ Vue }) => {
    Vue.use(Element);
};
