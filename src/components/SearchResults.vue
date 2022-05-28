<script setup>
const props = defineProps({
    results: Object
})
</script>

<template>
    <div v-for="(result, index) in props.results" :key="index">
        <p>{{ result.description }}</p>
        <p>{{ result.displaySymbol }}</p>
    </div>
</template>

<style>
</style>