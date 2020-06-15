<template>
    <button
        class="button"
        :class="btnclass"
        :data-text="this.$slots.default[0].text"
    >
        <span v-if="flag"><slot></slot></span>
        <i class="button__icon icon" :class="iconclass" v-if="this.icon"></i>
        <span v-for="item in letterList" :key="item.key">{{ item }}</span>
    </button>
</template>
<script>
export default {
    name: "sm-buttonpuls",
    data() {
        return {
            letterList: [],
            flag: true,
        };
    },
    props: {
        type: {
            type: String,
            default: "Winona",
        },
        icon: {
            type: String,
            default: "",
        },
    },
    computed: {
        iconclass() {
            let arr1 = [];
            if (this.icon) {
                arr1.push(`icon-${this.icon}`);
            }
            return arr1;
        },
        btnclass() {
            let arr = [];
            if (this.type) {
                switch (this.type) {
                    case "Winona":
                        arr.push(
                            "button button--winona button--border-thin button--round-s"
                        );
                        break;
                    case "moema":
                        arr.push(
                            "button--moema button--text-thick button--text-upper button--size-s"
                        );
                        break;
                    case "Pipaluk":
                        arr.push(
                            "button button--pipaluk button--text-thick button--round-l"
                        );
                        break;
                    case "Aylen":
                        arr.push(
                            "button button--aylen button--round-l button--text-thick"
                        );
                        break;
                    case "Saqui":
                        arr.push(
                            "button button--saqui button--round-l button--text-thick"
                        );
                        break;
                    case "Wapasha":
                        arr.push("button button--wapasha button--round-s");
                        break;
                    case "Nina":
                        {
                            arr.push(
                                "button button--nina button--round-l button--text-thick button--inverted"
                            );
                            this.flag = false;
                            this.letterList = this.$slots.default[0].text.split(
                                ""
                            );
                        }

                        break;
                    case "Nanuk":
                        {
                            arr.push(
                                "button button--nanuk button--round-l button--text-thick button--inverted"
                            );
                            this.flag = false;
                            this.letterList = this.$slots.default[0].text.split(
                                ""
                            );
                        }
                        break;
                    case "Itzel":
                        arr.push(
                            "button button--itzel button--text-thick button--text-upper button--border-thick button--size-s"
                        );
                        break;
                    case "Naira":
                        arr.push(
                            "button button--naira button--border-medium button--round-l button--text-thick button--inverted"
                        );
                        break;
                    case "Quidel":
                        arr.push(
                            "button button--quidel button--inverted button--text-thick button--text-upper button--size-s"
                        );
                        break;
                    case "Sacnite":
                        arr.push("button button--sacnite button--round-l");
                        break;
                    case "Shikoba":
                        arr.push(
                            "button button--shikoba button--text-medium button--round-l button--inverted"
                        );
                        break;
                    default:
                        arr.push(
                            "button--winona button--border-thin button--round-"
                        );
                        break;
                }
            }
            return arr;
        },
    },
};
</script>
<style>
@import "../styles/normalize.css";
@import "../styles/vicons-font.css";
@import "../styles/base.css";
@import "../styles/buttons.css";
</style>
