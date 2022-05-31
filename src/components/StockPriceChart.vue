<script setup>
import { inject } from 'vue';
import ApiStore from '../store/ApiStore';

import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
} from 'chart.js';
ChartJS.register(
    Title,
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

<style>
</style>