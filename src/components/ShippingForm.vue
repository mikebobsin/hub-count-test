<template>
    <div class="container">
        <styled-table />
        <div class="c-row row">
            <router-link to="/">
                <styled-button
                    :btnText="'Voltar'"
                    :btnSize="['450px', '38px']"
                    :btnBgColor="'#1aae9f'"
                    :btnFontColor="'#FFFFFF'"
                    @click="$store.state.shippingData = []"
                />
            </router-link>

            <styled-button
                :btnText="'Imprimir Orçamento'"
                :btnSize="['450px', '38px']"
                :btnBgColor="'#6558f5'"
                :btnFontColor="'#FFFFFF'"
                @click="print()"
            />
        </div>
    </div>
</template>
<script>
import StyledButton from "@/components/atoms/StyledButton";
import StyledTable from "@/components/atoms/StyledTable";
export default {
    components: {
        "styled-button": StyledButton,
        "styled-table": StyledTable,
    },
    methods: {
        print() {
            return window.print();
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
        padding: 30px;
        justify-content: center;
        a {
            padding: 0 5px;
            button {
                width: 100%;
            }
        }
        button {
            width: 100%;
        }
    }
}
@media (min-width: $mobile) and (max-width: $max-mobile) {
    .c-row {
        margin: 25px 0 0 0;
        a {
            padding: 0 5px 0 0;
            width: 100%;
            button {
                width: 100% !important;
            }
        }
    }
}
</style>
