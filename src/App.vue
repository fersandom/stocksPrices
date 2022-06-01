<script setup>
import ApiStore from './store/ApiStore';
import SearchForm from './components/SearchForm.vue';
import SearchResults from "./components/SearchResults.vue"
import StockPriceChart from './components/StockPriceChart.vue';
import { inject } from 'vue';
import UIStore from './store/UIStore';
inject[ApiStore, UIStore];
console.log(typeof(ApiStore.state.validResults))
</script>

<template>
  <!-- <StockPriceChart /> -->
  <SearchForm />
  <div v-if="UIStore.state.showSearchResults === true">
    <SearchResults :results="ApiStore.state.validResults" />
  </div>

  <div v-if="UIStore.state.showChart === true">
  <StockPriceChart class="stock-chart" />
  </div>
</template>

<style>
* {
  font-family: 'Karla', sans-serif;
}
.stock-chart{
  width: 400px;
  margin: auto;
  
}
</style>
