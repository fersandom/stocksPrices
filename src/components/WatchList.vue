<script setup>
import { inject } from 'vue';
import ChartStore from '../store/ChartStore';
import TradingStore from '../store/TradingStore';
import Title from './Title.vue';
inject[TradingStore, ChartStore]
</script>

<template>
    <div class="list-container">
        <Title text="Short List" />
        <h5 v-for="(item, index) in TradingStore.state.watchListItems" :key="item.id">
            <div class="item">
                <p class="name" @click="ChartStore.methods.fetchChartData(item.name)">{{ item.name }}</p>
                <p class="remove-button" @click="TradingStore.methods.removeFromShorList(index)">X</p>
            </div>
        </h5>
    </div>
</template>

<style scoped>
.list-container {
    text-align: center;
}

.item {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.item p {
    margin: 0;
    padding: 0;
}

.name {
    color: #384E77;
    cursor: pointer;
}

.remove-button {
    cursor: pointer;
}
</style>