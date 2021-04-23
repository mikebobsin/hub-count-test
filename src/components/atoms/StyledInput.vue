<template>
    <div class="form-group">
        <label for="styledInput">{{ iptLabel }}</label>
        <input
            v-model.trim="inputedValue"
            type="text"
            :placeholder="iptPlaceHolder"
            class="form-control"
            id="styledInput"
            :aria-describedby="`${iptLabel}`"
            :style="`width:${iptSize[0]}; heigth:${iptSize[1]};`"
        />
    </div>
</template>
<script>
export default {
    name: "styled-input",
    data() {
        return {
            inputedValue: "",
        };
    },
    props: {
        iptPlaceHolder: String,
        iptSize: Array,
        iptLabel: String,
    },
};
</script>
<style lang="scss" scoped>
.form-group {
    width: fit-content;
    label {
        width: 100%;
        text-align: left;
    }
}
</style>
