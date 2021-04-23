<template>
    <div class="home">
        <zipcode-form />
    </div>
</template>

<script>
import ZipCodeForm from "@/components/ZipCodeForm.vue";

export default {
    name: "Home",
    components: {
        "zipcode-form": ZipCodeForm,
    },
};
</script>
