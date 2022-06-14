<script setup>
import ApiStore from './store/ApiStore';
import SearchForm from './components/SearchForm.vue';
import SearchResults from "./components/SearchResults.vue"
import { inject } from 'vue';
import UIStore from './store/UIStore';
import TradingDasboard from './components/TradingDasboard.vue';
import OperationsPanel from './components/OperationsPanel.vue';
import TradingStore from './store/TradingStore';
inject[ApiStore, UIStore, TradingStore];
if (localStorage.trades) {
  TradingStore.methods.loadTrades();
}
if (localStorage.closedTrades) {
  TradingStore.methods.loadClosedTrades();
}

TradingStore.methods.getTradesCurrentPrice()


</script>

<template>
  <SearchForm />
  <div v-if="UIStore.state.showSearchResults === true">
    <SearchResults :results="ApiStore.state.validResults" />
  </div>

  <div v-if="UIStore.state.showChart === true">
    <TradingDasboard />
  </div>

  <OperationsPanel />
</template>

<style>
* {
  font-family: 'Karla', sans-serif;
}
</style>
