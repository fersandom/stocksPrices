<script setup>
import { inject } from 'vue';
import ApiStore from '../store/ApiStore';

import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
} from 'chart.js';
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
);

inject[ApiStore];

let chartData = {
    labels: ApiStore.state.stockChartData.t,
    datasets: [{
        data: ApiStore.state.stockChartData.c,
        label: `${ApiStore.state.selectedStock} Price`,

    }]
};
let chartOptions = {
    responsive: true
};



</script>

<template>
    <Line :chart-options="chartOptions" :chart-data="chartData" />
</template>

<style>
</style>