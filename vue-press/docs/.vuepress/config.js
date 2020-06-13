module.exports = {
    title: "smileUI", // 设置网站标题
    description: "自建ui组件库", //描述
    dest: "./build", // 设置输出目录
    port: 80, //端口
    themeConfig: {
        //主题配置
        nav: [
            { text: "主页", link: "/" },
            {
                text: "欢迎 Star",
                link: "https://github.com/Adashuai5/wheels-ada/",
            },
            { text: "Github", link: "https://github.com/Adashuai5/" },
        ],
        // 为以下路由添加侧边栏
        sidebar: [
            {
                title: "介绍",
                collapsable: false,
                children: ["/introduce/"],
            },
            {
                title: "入门",
                collapsable: false,
                children: ["/install/", "/get-started/"],
            },
            {
                title: "组件",
                collapsable: false,
                children: ["/components/button"],
            },
        ],
    },
};
