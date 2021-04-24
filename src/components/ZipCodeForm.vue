<template>
    <div class="container">
        <div class="c-row row">
            <div class="ipt-col col">
                <styled-input
                    :iptPlaceHolder="'João da Silva'"
                    :iptSize="['498px', '38px']"
                    :iptLabel="'Digite seu nome completo'"
                    :iptName="'name'"
                    ref="nameInput"
                    v-model:inputedValue.trim="name"
                />
            </div>
            <div class="ipt-col col">
                <styled-input
                    :iptPlaceHolder="'93228-300'"
                    :iptSize="['310px', '38px']"
                    :iptLabel="'Digite seu CEP'"
                    :iptName="'zipcode'"
                    ref="zipcodeInput"
                    v-model:inputedValue.trim="zipCode"
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
        <div v-if="allowShipping" class="btn-row row">
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
import { useToast } from "vue-toastification";

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
            allowShipping: false,
        };
    },
    setup() {
        const toast = useToast();
        return { toast };
    },
    methods: {
        sendClick(e) {
            if (this.name !== "" && this.zipCode !== "") {
                this.$store.dispatch("postShipping", {
                    name: this.name,
                    zipCode: this.zipCode,
                });
                this.allowShipping = true;
            }
            if (this.name === "") {
                this.toast.warning("Preencha seu nome completo!", {
                    position: "bottom-left",
                });
            }
            if (this.zipCode === "") {
                this.toast.warning("Preencha o CEP!", {
                    position: "bottom-left",
                });
            }

            this.$refs.nameInput.inputedValue = "";
            this.name = "";
            this.$refs.zipcodeInput.inputedValue = "";
            this.zipCode = "";

            e.preventDefault();
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
