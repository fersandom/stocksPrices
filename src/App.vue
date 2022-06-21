<script setup>
import ApiStore from './store/ApiStore';
import SearchForm from './components/SearchForm.vue';
import SearchResults from "./components/SearchResults.vue"
import { inject } from 'vue';
import UIStore from './store/UIStore';
import TradingDasboard from './components/TradingDasboard.vue';
import OperationsPanel from './components/OperationsPanel.vue';
import TradingStore from './store/TradingStore';
import Title from './components/Title.vue';
import WatchList from './components/WatchList.vue';
inject[ApiStore, UIStore, TradingStore];
if (localStorage.trades) {
  TradingStore.methods.loadTrades();
}
if (localStorage.closedTrades) {
  TradingStore.methods.loadClosedTrades();
}

TradingStore.methods.getTradesCurrentPrice()


</script>

<template class="app">
  <nav>
    <Title class="title" text="Paper trading" />
    <SearchForm class="search-form" />
  </nav>

  <section class="main-display" v-if="UIStore.state.showSearchResults === true">
    <SearchResults :results="ApiStore.state.validResults" />
  </section>

  <section class="main-display " v-if="UIStore.state.showChart === true">
    <TradingDasboard />
  </section>

  <aside class="watchlist-holder">
    <WatchList />
  </aside>

  <section class="panel-holder">
    <OperationsPanel class="operations-panel" />
  </section>


</template>

<style>
* {
  font-family: 'Karla', sans-serif;
}

.app {
  height: 100vh;
}

nav {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
}

.title {
  width: 50%;
  text-align: center;
}

.search-form {
  width: 25%;
}

.main-display {
  height: 75vh;
  overflow: auto;
}

.watchlist-holder {
  position: absolute;
  margin-top: 15px;
  right: 5px;
  top: 12vh;
  height: 65%;
  width: 10%;
  border-left: 2px solid black;
  overflow: auto;
}

.panel-holder {
  margin: auto;
  width: 95%;
  height: 15vh;
  position: absolute;
  bottom: 5px;
  overflow: scroll;
}

.operations-panel {
  width: 100%;
  text-align: center;
}
</style>
