<template>
    <div :class="getShippingData.length === 0 ? '' : 'list'" class="view">
        <p class="ph-txt" v-if="getShippingData.length === 0">
            Digite seu nome e o CEP que deseja calcular o frete.
        </p>
        <ul
            v-for="(item, index) in getShippingData"
            :key="index"
            class="list-group list-group-horizontal"
        >
            <li class="list-group-item">
                <styled-input
                    v-if="activeEdit == item"
                    :iptSize="['465px', '38px']"
                    :iptPlaceHolder="item.name"
                    :iptName="'name'"
                    ref="nameInput"
                    v-model:inputedValue.trim="item.name"
                />
                <span v-else>{{ item.name }}</span>
            </li>
            <li class="list-group-item">
                <styled-input
                    v-if="activeEdit == item"
                    :iptSize="['310px', '38px']"
                    :iptName="'zipcode'"
                    :iptPlaceHolder="item.zipCode"
                    v-mask="'#####-###'"
                    ref="zipcodeInput"
                    v-model:inputedValue.trim="item.zipCode"
                />
                <span v-else>{{ item.zipCode }}</span>
            </li>
            <li class="list-group-item toggle-card" v-if="windowSize <= 480">
                <styled-button
                    class="save-edit"
                    v-if="activeEdit == item"
                    :btnSize="['38px', '38px']"
                    :btnIcon="'bi bi-check-circle-fill'"
                    :btnBgColor="'#4caf50'"
                    :btnFontColor="'#FFFFFF'"
                    @click="hasEdited(item, index)"
                />
                <span
                    v-else
                    class="testButton"
                    @click="dropdown(index)"
                    @focusout="toggle === true"
                ></span>

                <div
                    :class="`drop-card ${index}`"
                    aria-labelledby="dropdownMenuButton"
                >
                    <span class="dropdown-item" @click="remove(index)"
                        >Excluir</span
                    >
                    <span class="dropdown-item" @click="edit(item, index)"
                        >Editar</span
                    >
                </div>
            </li>
            <li class="list-group-item" v-else>
                <styled-button
                    :btnSize="['38px', '38px']"
                    :btnIcon="'bi bi-trash-fill'"
                    :btnBgColor="'#e60a0a'"
                    :btnFontColor="'#FFFFFF'"
                    @click="remove(index)"
                />
                <styled-button
                    v-if="activeEdit == item"
                    :btnSize="['38px', '38px']"
                    :btnIcon="'bi bi-check-circle-fill'"
                    :btnBgColor="'#4caf50'"
                    :btnFontColor="'#FFFFFF'"
                    @click="hasEdited(item, index)"
                />
                <styled-button
                    v-else
                    :btnSize="['38px', '38px']"
                    :btnIcon="'bi bi-pencil-fill'"
                    :btnBgColor="'#03a9f4'"
                    :btnFontColor="'#FFFFFF'"
                    @click="edit(item, index)"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import StyledButton from "@/components/atoms/StyledButton";
import StyledInput from "@/components/atoms/StyledInput.vue";
import { useToast } from "vue-toastification";
export default {
    name: "styled-list",
    components: {
        "styled-button": StyledButton,
        "styled-input": StyledInput,
    },
    data() {
        return {
            activeEdit: "",
            windowSize: Number,
            toggle: false,
        };
    },
    setup() {
        const toast = useToast();
        return { toast };
    },
    computed: mapGetters(["getShippingData"]),
    mounted() {
        this.windowSize = parseInt(window.screen.width);
    },
    methods: {
        dropdown(i) {
            this.toggle = !this.toggle;
            let card = document.getElementsByClassName("drop-card " + i);

            if (this.toggle === false) {
                card[0].style.display = "block";
            } else {
                card[0].style.display = "none";
            }
        },
        remove(i) {
            if (this.windowSize <= 768) {
                let card = document.getElementsByClassName("drop-card " + i);

                if (this.toggle === true) {
                    card[0].style.display = "block";
                } else {
                    card[0].style.display = "none";
                }
            }
            this.getShippingData.splice(i, 1);
        },
        edit(item, i) {
            if (this.windowSize <= 768) {
                let card = document.getElementsByClassName("drop-card " + i);

                if (this.toggle === true) {
                    card[0].style.display = "block";
                    this.toggle = !this.toggle;
                } else {
                    card[0].style.display = "none";
                }
            }
            this.activeEdit = item;
        },
        hasEdited(item, i) {
            if (this.windowSize <= 768) {
                let card = document.getElementsByClassName("drop-card " + i);

                if (this.toggle === true) {
                    card[0].style.display = "block";
                } else {
                    card[0].style.display = "none";
                }
            }
            let regexp = /[0-9]{5}-[\d]{3}/g;
            if (regexp.test(item.zipCode)) {
                this.activeEdit = "";
            } else {
                this.toast.error("Preencha o CEP no formato correto!", {
                    position: "bottom-left",
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
$radius: 0px;
$bgcolor1: #f9fafc;
$bgcolor2: #ffffff;
$txtcolor: #000;
$opacity: 1;

$mobile: 360px;
$max-mobile: 768px;
$desktop: 960px;

.ph-txt {
    padding: 45px 0;
}

.list {
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-bottom: none;
    ul {
        margin: 0 auto;
        width: 100%;
        z-index: -9;
        border-radius: $radius;
        &:nth-child(even) {
            border-radius: $radius;

            li {
                width: 100%;
                border-bottom: 1px solid rgba(0, 0, 0, 0.125);
                color: $txtcolor;
                background-color: $bgcolor1;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 5px 10px 5px 20px;
                &:last-child {
                    width: 20%;
                }
            }
        }
        &:nth-child(odd) {
            border-radius: $radius;
            li {
                width: 100%;
                border-bottom: 1px solid rgba(0, 0, 0, 0.125);
                color: $txtcolor;
                background-color: $bgcolor2;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 5px 10px 5px 20px;
                &:last-child {
                    width: 20%;
                }
            }
        }
    }
}

.list-group-horizontal {
    & > .list-group-item:last-child {
        border-radius: $radius;
    }
}

.list-group-horizontal {
    & > .list-group-item:first-child {
        border-radius: $radius;
    }
}

.list-group-item {
    border: none;
}

@media (min-width: $mobile) and (max-width: $max-mobile) {
    .view {
        margin: 30px 0px 30px 0px;
    }
    .testButton:after {
        content: "\2807";
        font-size: 1.5em;
        color: #2e2e2e;
    }
    .toggle-card {
        position: relative;
        .save-edit {
            margin: 3px 0px 0 0;
        }
        .drop-card {
            z-index: 999;
            border: 1px solid #ddd;
            background: #fff;
            position: absolute;
            display: none;
            left: -54px;
            top: 50px;
        }
    }
}
</style>
