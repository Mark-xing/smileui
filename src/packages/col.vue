<template>
    <!--    这种 class 的写法记下来-->
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
let validator = value => {
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
        if (!["span", "offset"].includes(key)) {
            valid = false;
        }
    });
    return valid;
};

export default {
    name: "s-col",
    props: {
        span: { type: [Number, String] },
        offset: { type: [Number, String] },
        ipad: { type: Object, validator },
        narrow: { type: Object, validator },
        pc: { type: Object, validator },
        wide: { type: Object, validator },
    },
    data() {
        return {
            gap: 0,
        };
    },
    methods: {
        createClass: function(obj, str) {
            let array = [];
            if (!obj) {
                return [];
            }
            if (obj.span) {
                array.push(`${str}span-${obj.span}`);
            }
            if (obj.offset) {
                array.push(`${str}offset-${obj.offset}`);
            }
            return array;
        },
    },
    computed: {
        // colStyle() {
        //     return {
        //         marginLeft: this.gap / 2 + "px",
        //         marginRight: this.gap / 2 + "px",
        //     };
        // },
        colClass() {
            //解构赋值，这个要好好学学
            let { span, offset, ipad, narrow, pc, wide } = this;
            return [
                span && "span" + span,
                offset && "offset" + offset,
                ...this.createClass(ipad, "ipad-"),
                ...this.createClass(narrow, "narrow-"),
                ...this.createClass(pc, "pc-"),
                ...this.createClass(wide, "wide-"),
            ];
        },
    },
};
</script>
<style scoped lang="scss">
.col {
    width: 50%;
    background: #4cd3c2;
}

@for $n from 1 through 24 {
    .span#{$n} {
        width: ($n/24) * 100%;
        background: #4cd3c2;
        border-right: 1px solid #eee;
        border-left: 1px solid #eee;
        height: 36px;
    }
    .offset#{$n} {
        margin-right: ($n/24) * 100%;
    }
}

@media (min-width: 577px) {
    @for $n from 1 through 24 {
        .ipad-span-#{$n} {
            width: ($n/24) * 100%;
            background: blue;
        }
        .ipad-offset-#{$n} {
            margin-right: ($n/24) * 100%;
        }
    }
}

@media (min-width: 769px) {
    @for $n from 1 through 24 {
        .narrow-span-#{$n} {
            width: ($n/24) * 100%;
            background: orange;
        }
        .narrow-offset-#{$n} {
            margin-right: ($n/24) * 100%;
        }
    }
}

@media (min-width: 993px) {
    @for $n from 1 through 24 {
        .pc-span-#{$n} {
            width: ($n/24) * 100%;
            background: blue;
        }
        .pc-offset-#{$n} {
            margin-right: ($n/24) * 100%;
        }
    }
}

@media (min-width: 1201px) {
    @for $n from 1 through 24 {
        .wide-span-#{$n} {
            width: ($n/24) * 100%;
            background: grey;
        }
        .wide-offset-#{$n} {
            margin-right: ($n/24) * 100%;
        }
    }
}
</style>
