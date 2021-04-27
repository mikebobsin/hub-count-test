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
                    v-mask="'#####-###'"
                    ref="zipcodeInput"
                    v-model:inputedValue.trim="zipCode"
                />
            </div>
            <div class="btn-col col">
                <styled-button
                    :btnText="'Adicionar'"
                    :btnSize="['158px', '38px']"
                    :btnBgColor="'#1aae9f'"
                    :btnFontColor="'#FFFFFF'"
                    @click="sendClick($event)"
                />
            </div>
        </div>
        <div>
            <styled-list />
        </div>
        <div v-if="allowShipping" class="btn-row row">
            <router-link
                @click="
                    getShippingData.length === 0 ? $router.push('/404') : ''
                "
                to="/shipping"
            >
                <styled-button
                    :btnText="'Calcular fretes'"
                    :btnSize="['158px', '38px']"
                    :btnBgColor="'#1aae9f'"
                    :btnFontColor="'#FFFFFF'"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    computed: mapGetters(["getShippingData"]),
    methods: {
        sendClick(e) {
            if (this.name !== "" && this.zipCode !== "") {
                let regexp = /[0-9]{5}-[\d]{3}/g;
                if (regexp.test(this.zipCode)) {
                    this.$store.dispatch("postShipping", {
                        name: this.name,
                        zipCode: this.zipCode,
                    });
                    this.allowShipping = true;
                } else {
                    this.toast.error("Preencha o CEP no formato correto!", {
                        position: "bottom-left",
                    });
                }
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
$mobile: 360px;
$max-mobile: 768px;
$desktop: 960px;

@media (min-width: $desktop) {
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
}

@media (min-width: $mobile) and (max-width: $max-mobile) {
    .col {
        flex-basis: auto;
    }
    .btn-row {
        display: block;
    }
}
</style>
