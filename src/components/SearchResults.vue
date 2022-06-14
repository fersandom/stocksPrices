<script setup>
import { inject } from 'vue';
import ApiStore from '../store/ApiStore';
import ChartStore from '../store/ChartStore';
inject[ApiStore, ChartStore];
const props = defineProps({
    results: Array
})
</script>

<template>
    <div class="container">
        <div class="stock-list" v-for="(result, index) in props.results" :key="index">
            <div class="stock-container">
                <p>{{ result.description }}</p>
                <p class="stock-symbol" @click="ChartStore.methods.fetchChartData(result.displaySymbol)">{{ result.displaySymbol }}</p>
            </div>
            <div class="icons-container">
                <p>L</p>
                <p>A</p>
                <p>G</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(5, 20% [col-start]);
}

.stock-list {
    border-bottom: 1px solid black;
    width: 90%;
    display: flex;
}
.stock-container{
    width: 85%;
    display: block;
}

.stock-symbol{
    color: #384E77;
    cursor: pointer;
    font-weight: 700;
}

.icons-container{
    width: 15%;
    display: block;
}

</style>