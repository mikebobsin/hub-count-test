<template>
    <div class="container">
        <div class="c-row row">
            <div class="ipt-col col">
                <styled-input
                    :iptPlaceHolder="'João da Silva'"
                    :iptSize="['510px', '38px']"
                    :iptLabel="'Digite seu nome'"
                />
            </div>
            <div class="ipt-col col">
                <styled-input
                    :iptPlaceHolder="'93228-300'"
                    :iptSize="['300px', '38px']"
                    :iptLabel="'Digite seu CEP'"
                />
            </div>
            <div class="ipt-button col">
                <styled-button
                    :btnText="'Adicionar'"
                    :btnSize="['158px', '38px']"
                    :btnBgColor="'#003B4D'"
                    :btnFontColor="'#FFFFFF'"
                />
            </div>
        </div>
        <div>
            <styled-list />
        </div>
        <div class="last-row row">
            <styled-button
                :btnText="'Calcular fretes'"
                :btnSize="['158px', '38px']"
                :btnBgColor="'#003B4D'"
                :btnFontColor="'#FFFFFF'"
            />
        </div>
    </div>
</template>

<script>
import StyledButton from "@/components/atoms/StyledButton.vue";
import StyledInput from "@/components/atoms/StyledInput.vue";
import StyledList from "@/components/atoms/StyledList.vue";

export default {
    name: "zipcode-form",
    components: {
        "styled-button": StyledButton,
        "styled-input": StyledInput,
        "styled-list": StyledList,
    },
};
</script>
<style lang="scss" scoped>
.c-row {
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
}
.ipt-col {
    padding-left: 0px;
}
.ipt-button {
    padding: 15px 0 0 100px;
}
.last-row {
    justify-content: flex-end;
    padding: 30px 0px;
    width: 100%;
    margin: 0 auto;
}
</style>
