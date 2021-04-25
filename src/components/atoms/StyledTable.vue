<template>
    <div class="table-responsive">
        <table class="table table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">CEP</th>
                    <th scope="col">UF</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Logradouro</th>
                    <th scope="col">Bairro</th>
                    <th scope="col">Frete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ getShippingData[index].name }}</td>
                    <td>{{ item.cep }}</td>
                    <td>{{ item.uf }}</td>
                    <td>{{ item.localidade }}</td>
                    <td>{{ item.logradouro }}</td>
                    <td>{{ item.bairro }}</td>
                    <td>teste7</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
    name: "styled-table",
    data() {
        return { data: [] };
    },
    computed: mapGetters(["getShippingData"]),
    created() {
        this.getZipCode();
    },
    methods: {
        getZipCode() {
            // console.log(this.getShippingData);
            this.getShippingData.map((z) => {
                axios
                    .get(`http://viacep.com.br/ws/${z.zipCode}/json/`)
                    .then((response) => {
                        this.data.push(response.data);
                    });
            });
        },
    },
};
</script>
