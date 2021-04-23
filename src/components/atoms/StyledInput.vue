<template>
    <div class="form-group">
        <label for="styledInput">{{ iptLabel }}</label>
        <input
            v-model.trim="inputedValue"
            @input="$emit('update:inputedValue', $event.target.value)"
            type="text"
            :placeholder="iptPlaceHolder"
            :id="`${iptName}-input`"
            class="form-control"
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
        iptName: String,
        iptSize: Array,
        iptLabel: String,
        isClicked: String,
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
