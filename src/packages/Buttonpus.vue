<template>
    <!--start button, nothing above this is necessary -->
    <div class="svg-wrapper">
        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="150" />
        </svg>
        <div id="text">
            <a href="">
                <span class="spot"></span>
                <slot></slot>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "sm-buttonpus",
};
</script>
<style>
@import "../styles/button.min.css";
</style>
