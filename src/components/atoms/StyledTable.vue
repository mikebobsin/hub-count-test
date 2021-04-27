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
                    <td>{{ price[index] }}</td>
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
        return {
            data: [],
            price: [],
            region: [
                {
                    name: "south",
                    uf: ["RS", "PR", "SC"],
                    capital: ["Porto Alegre", "Curitiba", "Florianópolis"],
                    specialShipping: "R$ 70,00",
                    normalShipping: "R$ 100,00",
                    freeShipping: null,
                },
                {
                    name: "southeast",
                    uf: ["ES", "MG", "RJ", "SP"],
                    capital: [
                        "Vitória",
                        "Belo Horizonte",
                        "Rio de Janeiro",
                        "São Paulo",
                    ],
                    specialShipping: "R$ 50,00",
                    normalShipping: "R$ 80,00",
                    freeShipping: "São Paulo",
                },
                {
                    name: "north",
                    uf: [
                        "AC",
                        "AL",
                        "BH",
                        "CE",
                        "MA",
                        "PB",
                        "PE",
                        "PI",
                        "RN",
                        "SE",
                    ],
                    capital: [
                        "Rio Branco",
                        "Maceió",
                        "Salvador",
                        "Fortaleza",
                        "São Luís do Maranhão",
                        "João Pessoa",
                        "Recife",
                        "Teresina",
                        "Natal",
                        "Aracaju",
                    ],
                    specialShipping: "R$ 100,00",
                    normalShipping: "R$ 150,00",
                    freeShipping: null,
                },
                {
                    name: "northeast",
                    uf: ["AP", "AM", "PA", "RO", "RR", "TO"],
                    capital: [
                        "Macapá",
                        "Manaus",
                        "Belém",
                        "Porto Velho",
                        "Boa Vista",
                        "Palmas",
                    ],
                    specialShipping: "R$ 70,00",
                    normalShipping: "R$ 100,00",
                    freeShipping: null,
                },
                {
                    name: "midwest",
                    uf: ["DF", "GO", "MT", "MS"],
                    capital: ["Brasília", "Goiânia", "Cuiabá", "Campo Grande"],
                    specialShipping: "R$ 100,00",
                    normalShipping: "R$ 150,00",
                    freeShipping: null,
                },
            ],
        };
    },
    computed: mapGetters(["getShippingData"]),
    created() {
        this.getZipCode();
    },
    methods: {
        getZipCode() {
            this.getShippingData.map((z) => {
                axios
                    .get(
                        `http://viacep.com.br/ws/${z.zipCode.replace(
                            "-",
                            ""
                        )}/json/`
                    )
                    .then((response) => {
                        this.data.push(response.data);
                        this.region.map((r) => {
                            let indexUf = r.uf.indexOf(response.data.uf);
                            if (indexUf != -1) {
                                if (r.freeShipping != null) {
                                    return this.price.push("Grátis");
                                }
                                let indexCapital = r.capital.indexOf(
                                    response.data.localidade
                                );

                                if (indexCapital != -1) {
                                    return this.price.push(r.specialShipping);
                                }
                                return this.price.push(r.normalShipping);
                            }
                        });
                    });
            });
        },
    },
};
</script>
