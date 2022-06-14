<script setup>
import ApiStore from './store/ApiStore';
import SearchForm from './components/SearchForm.vue';
import SearchResults from "./components/SearchResults.vue"
import StockPriceChart from './components/StockPriceChart.vue';
import { inject } from 'vue';
import UIStore from './store/UIStore';
import TradingDasboard from './components/TradingDasboard.vue';
inject[ApiStore, UIStore];
</script>

<template>
  <SearchForm />
  <div v-if="UIStore.state.showSearchResults === true">
    <SearchResults :results="ApiStore.state.validResults" />
  </div>

  <div v-if="UIStore.state.showChart === true">
  <TradingDasboard />
  </div>
</template>

<style>
* {
  font-family: 'Karla', sans-serif;
}

</style>
