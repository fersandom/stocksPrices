<script setup>
import { inject } from 'vue';
import ApiStore from '../store/ApiStore';

import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    //Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
} from 'chart.js';
import ChartStore from '../store/ChartStore';
ChartJS.register(
    Title,
    //Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
);

inject[ChartStore, ApiStore];

let chartData = {
    labels: ChartStore.state.stockChartData.t,
    datasets: [{
        data: ChartStore.state.stockChartData.c,
        label: `${ApiStore.state.selectedStock} Price`,
        borderColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgb(0, 0, 0)',
        borderWidth: 1,
        pointRadius: 0,
        fill: false
    }]
};
let chartOptions = {
    responsive: true,
};



</script>

<template>
    <Line :chart-options="chartOptions" :chart-data="chartData" />
</template>

<style scoped>
</style>