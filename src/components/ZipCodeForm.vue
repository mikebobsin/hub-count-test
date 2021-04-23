<template>
    <div class="container">
        <div class="c-row row">
            <div class="ipt-col col">
                <styled-input
                    :iptPlaceHolder="'João da Silva'"
                    :iptSize="['510px', '38px']"
                    :iptLabel="'Digite seu nome'"
                    :iptName="'name'"
                    v-model:inputedValue="name"
                />
            </div>
            <div class="ipt-col col">
                <styled-input
                    :iptPlaceHolder="'93228-300'"
                    :iptSize="['300px', '38px']"
                    :iptLabel="'Digite seu CEP'"
                    :iptName="'zipcode'"
                    v-model:inputedValue="zipCode"
                />
            </div>
            <div class="btn-col col">
                <styled-button
                    :btnText="'Adicionar'"
                    :btnSize="['158px', '38px']"
                    :btnBgColor="'#003B4D'"
                    :btnFontColor="'#FFFFFF'"
                    @click="sendClick($event)"
                />
            </div>
        </div>
        <div>
            <styled-list />
        </div>
        <div class="btn-row row">
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
    data() {
        return {
            name: "",
            zipCode: "",
        };
    },
    methods: {
        sendClick() {
            if (this.name === "" || this.zipCode === "") {
                alert("Please fill the empty input");
            } else {
                this.$store.dispatch("postShipping", {
                    name: this.name,
                    zipCode: this.zipCode,
                });
            }
        },
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
.btn-col {
    padding: 15px 0 0 105px;
}
.btn-row {
    justify-content: flex-end;
    padding: 30px 0px;
    width: 100%;
    margin: 0 auto;
}
</style>
