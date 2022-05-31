<script setup>
import ApiStore from './store/ApiStore';
import SearchForm from './components/SearchForm.vue';
import SearchResults from "./components/SearchResults.vue"
import StockPriceChart from './components/StockPriceChart.vue';
import { inject } from 'vue';
inject[ApiStore];
</script>

<template>
  <!-- <StockPriceChart /> -->
  <SearchForm />
  <div v-if="ApiStore.state.showSearchResults === true">
    <SearchResults :results="ApiStore.state.searchResults.result" />
  </div>

  <div v-if="ApiStore.state.showChart === true">
  <StockPriceChart class="stock-chart" />
  </div>
</template>

<style>
* {
  font-family: 'Karla', sans-serif;
}
.stock-chart{
  width: 700px;
  margin: auto;
  
}
</style>
