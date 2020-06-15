<template>
    <div id="app">
        <sm-button>默认按钮</sm-button>
        <sm-button type="primary">默认按钮</sm-button>
        <sm-button type="info">默认按钮</sm-button>
        <sm-button type="success">默认按钮</sm-button>
        <sm-button type="warning">默认按钮</sm-button>
        <sm-button type="danger">默认按钮</sm-button>
        <sm-icon icon="edit"></sm-icon>
        <sm-icon icon="sousuo"></sm-icon>
        <sm-button type="success" icon="sousuo" icon-position="left"
            >搜索</sm-button
        >
        <sm-button type="success" icon="sousuo" icon-position="right"
            >搜索</sm-button
        >
        <sm-button type="success" loading>加载中</sm-button>
        <sm-button type="success" @click="fn">触发事件</sm-button>
        <s-row class="demoRow">
            <s-col><div class="demoCol">8</div></s-col>
            <s-col><div class="demoCol">8</div></s-col>
            <s-col><div class="demoCol">8</div></s-col>
        </s-row>
        <s-row class="demoRow">
            <s-col span="6"><div class="demoCol">6</div></s-col>
            <s-col span="6" offset="3"><div class="demoCol">12</div></s-col>
            <s-col span="6"><div class="demoCol">6</div></s-col>
            <s-col span="6"><div class="demoCol">6</div></s-col>
        </s-row>
        <s-row class="demoRow" align="around">
            <s-col span="6"><div class="demoCol">6</div></s-col>
            <s-col span="6"><div class="demoCol">6</div></s-col>
            <s-col span="6"><div class="demoCol">6</div></s-col>
        </s-row>
        <sm-buttonpus>open</sm-buttonpus>
        <sm-buttonpuls type="Winona">create file</sm-buttonpuls>
        <sm-buttonpuls type="moema">create file</sm-buttonpuls>
        <sm-buttonpuls type="Pipaluk">create file</sm-buttonpuls>
        <sm-buttonpuls type="Aylen">create file</sm-buttonpuls>
        <sm-buttonpuls type="Saqui">create file</sm-buttonpuls>
        <sm-buttonpuls type="Nina">create file</sm-buttonpuls>
        <sm-buttonpuls type="Nanuk">create file</sm-buttonpuls>
        <sm-buttonpuls type="Wapasha">create file</sm-buttonpuls>
        <sm-buttonpuls type="Itzel" icon="cart">create file</sm-buttonpuls>
        <sm-buttonpuls type="Naira" icon="cart">create file</sm-buttonpuls>
        <sm-buttonpuls type="Quidel" icon="cart">create file</sm-buttonpuls>
        <sm-buttonpuls type="Sacnite" icon="cart">create file</sm-buttonpuls>
        <sm-buttonpuls type="Shikoba" icon="cart">create file</sm-buttonpuls>
    </div>
</template>

<script>
export default {
    name: "App",
    methods: {
        fn(e) {
            console.log(e);
        },
    },
};
</script>
