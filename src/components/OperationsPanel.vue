<script setup>
import { inject } from 'vue';
import ChartStore from '../store/ChartStore';
import TradingStore from '../store/TradingStore';
inject[TradingStore, ChartStore]
</script>

<template>
    <table>
        <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Position</th>
            <th>Symbol</th>
            <th>Volume</th>
            <th>Purchase Price</th>
            <th>Current Price</th>
            <th>P/L</th>
            <th>Close</th>
        </tr>
        <tr v-for="(trade) in TradingStore.state.currentTrades" :key="trade.orderId">
            <td>{{ trade.orderId }}</td>
            <td>{{ trade.date }}</td>
            <td>{{ trade.typeOfPosition }}</td>
            <td class="stock-name" @click="ChartStore.methods.fetchChartData(trade.symbol)">{{ trade.symbol }}</td>
            <td>{{ trade.amount }}</td>
            <td>{{ trade.price }}</td>
            <td>{{ trade.currentPrice }}</td>
            <td>{{ Math.round(((trade.currentPrice - trade.price) * trade.amount) * 100) / 100 }} $</td>
            <td @click="TradingStore.methods.closeTrade(trade.orderId)" class="close-button">X</td>
        </tr>

    </table>
</template>

<style scoped>
.close-button {
    cursor: pointer;
}

.stock-name {
    color: #384E77;
    cursor: pointer;
}
</style>