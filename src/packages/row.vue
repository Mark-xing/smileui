<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "s-row",
    props: {
        gap: {
            type: [Number, String],
        },
        align: {
            type: String,
            validator: function(value) {
                return ["left", "right", "center"].indexOf(value) !== -1;
            },
        },
    },
    mounted() {
        console.log(this.$children);
        this.$children.forEach(vm => {
            vm.gap = this.gap;
        });
    },
    computed: {
        rowStyle() {
            let { gap } = this;
            return {
                marginLeft: -gap / 2 + "px",
                marginRight: -gap / 2 + "px",
            };
        },
        rowClass() {
            let { align } = this;
            return align && "row-" + align;
        },
    },
};
</script>

<style scoped lang="scss">
.row {
    display: flex;
    flex-wrap: wrap;

    &-left {
        justify-content: flex-start;
    }
    &-center {
        justify-content: center;
    }
    &-right {
        justify-content: flex-end;
    }
    &-between {
        justify-content: space-between;
    }
    &-around {
        justify-content: space-around;
    }
}
</style>
