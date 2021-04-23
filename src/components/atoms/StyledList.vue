<template>
    <div>
        <p v-if="getShippingData.length === 0">Nothing to see here</p>
        <ul
            v-for="(item, index) in getShippingData"
            :key="index"
            class="list-group list-group-horizontal"
        >
            <li class="list-group-item">{{ item.name }}</li>
            <li class="list-group-item">{{ item.zipCode }}</li>
            <li class="list-group-item">
                <styled-button
                    :btnSize="['38px', '38px']"
                    :btnIcon="'bi bi-trash-fill'"
                    :btnBgColor="'#003B4D'"
                    :btnFontColor="'#FFFFFF'"
                />
                <styled-button
                    :btnSize="['38px', '38px']"
                    :btnIcon="'bi bi-pencil-fill'"
                    :btnBgColor="'#003B4D'"
                    :btnFontColor="'#FFFFFF'"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import StyledButton from "@/components/atoms/StyledButton";
export default {
    name: "styled-list",
    components: {
        "styled-button": StyledButton,
    },
    computed: mapGetters(["getShippingData"]),
};
</script>

<style lang="scss" scoped>
$radius: 0px;
$bgcolor1: #004459;
$bgcolor2: #1f5566;
$txtcolor: #ffffff;
$opacity: 1;

ul {
    margin: 0 auto;
    width: 100%;
    z-index: -9;
    border-radius: $radius;
    &:nth-child(even) {
        border-radius: $radius;

        li {
            width: 100%;
            border: none;
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
            border: none;
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
</style>
