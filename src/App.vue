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
