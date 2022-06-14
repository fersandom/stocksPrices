<script setup>
import StockPriceChart from './StockPriceChart.vue';
import TradingButton from './TradingButton.vue';
import PricePanel from './PricePanel.vue';
import { inject, ref } from 'vue';
import TradingStore from '../store/TradingStore';
import ApiStore from '../store/ApiStore';
inject[TradingStore]
let amount = ref(10);

TradingStore.methods.getCurrentPrice(ApiStore.state.selectedStock);
</script>

<template>
  <div class="dashboard-container">
    <StockPriceChart class="stock-chart" />
    <div class="dashboard-info">
      <h3>Current price</h3>
      <PricePanel :price="TradingStore.state.currentPrice" />
      <form @submit.prevent="">
        <label for="amount">Amount of stocks</label>
        <input id="amount" type="number" v-model="amount"/>
        <div class="buttons">
          <TradingButton class="button" :text="'Buy'" :amount="amount" :color="'#45CB85'" />
          <TradingButton class="button" :text="'Sell'" :amount="amount" :color="'#F71735'" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.stock-chart {
  width: 400px;
}

.dashboard-container {
  display: flex;
  justify-content: space-around;
  height: 70vh;
  width: 80%;
  margin: 60px auto;
}

.dashboard-info h3 {
  text-align: center;
}

.dashboard-info form{
  margin: 15px;
}

.buttons {
  display: block;
  margin: 15px;
}

.button {
  font-size: 18px;
  padding: 15px;
  font-weight: 700;
}
</style>