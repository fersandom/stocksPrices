<script setup>
const props = defineProps({
    price: Number
})
</script>

<template>
    <div class="container"><h3>{{props.price}}</h3></div>
</template>

<style scoped>
.container{
    border: 1px solid black;
    padding: 40px;
    font-size: 24px;
}

</style>