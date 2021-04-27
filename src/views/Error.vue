<template>
    <div class="page-wrap d-flex flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <span class="display-1 d-block">404</span>
                    <div class="mb-4 lead">
                        Algum Cep digitado não pode ser localizado, por
                        gentileza, tente novamente.
                    </div>
                    <router-link to="/">
                        <a
                            class="btn btn-link"
                            @click="$store.state.shippingData = []"
                            >Voltar para a página inicial</a
                        >
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "error-404",
};
</script>
