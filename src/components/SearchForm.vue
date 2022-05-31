<script setup>
import { inject } from 'vue';
import ApiStore from '../store/ApiStore';
inject[ApiStore]
let searchQuery = "";
</script>

<template>
<form @submit.prevent="ApiStore.methods.searchSymbol(searchQuery)">
    <label for="stock-search">Search stock</label>
    <input v-model="searchQuery" id="stock-search" type="text">
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