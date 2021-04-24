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
                <tr v-for="(item, index) in 10" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>teste1</td>
                    <td>teste2</td>
                    <td>teste3</td>
                    <td>teste4</td>
                    <td>teste5</td>
                    <td>teste6</td>
                    <td>teste7</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
