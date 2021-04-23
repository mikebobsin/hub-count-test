<template>
    <button
        type="button"
        class="btn"
        :style="`background-color: ${btnBgColor}; width: ${btnSize[0]}; height: ${btnSize[1]}; color:${btnFontColor}`"
    >
        <i
            :style="btnSize[0] === '38px' ? 'margin:-2px' : ''"
            :class="btnIcon"
        ></i>
        {{ btnText }}
    </button>
</template>
<script>
export default {
    name: "styled-button",
    props: {
        btnText: String,
        btnIcon: String,
        btnSize: Array,
        btnBgColor: String,
        btnFontColor: String,
    },
};
</script>
<style scoped lang="scss">
button {
    margin: 3px;
    &:hover {
        opacity: 0.9;
    }
}
</style>
