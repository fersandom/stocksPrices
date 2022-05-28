<script setup>
import ApiStore from '../store/ApiStore';
</script>

<template>
<form @submit.prevent="ApiStore.methods.searchSymbol">
    <label for="stock-search">Search stock</label>
    <input v-model="ApiStore.state.searchQuery" id="stock-search" type="text">
    <button type="submit">Search</button>
  </form>
</template>

<style>
form{
    display: flex;
    gap: 15px;
    align-items: center;
}
</style>