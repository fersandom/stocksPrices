<script setup>
import { inject } from 'vue';
import TradingStore from '../store/TradingStore';
inject[TradingStore]
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
    <td>{{trade.orderId}}</td>
    <td>{{trade.date}}</td>
    <td>{{trade.typeOfPosition}}</td>
    <td>{{trade.symbol}}</td>
    <td>{{trade.amount}}</td>
    <td>{{trade.price}}</td>
    <td>{{trade.currentPrice}}</td>
    <td>{{Math.round(((trade.currentPrice - trade.price) * trade.amount)*100)/100}} $</td>
    <td @click="TradingStore.methods.closeTrade(trade.orderId)">X</td>
</tr>

</table>
</template>

<style scoped></style>