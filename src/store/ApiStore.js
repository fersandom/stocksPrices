import PrivateStore from "./PrivateStore";
import axios from "axios";
import { inject, reactive, readonly } from "vue";

inject[PrivateStore]

const state = reactive({
    selectedStock: "",
    stockChartData: Object,
    searchResults: Object,
    showSearchResults: false,
    showChart: false
});

const methods = {

    async fetchApple() {
        await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=IBML&resolution=D&count=500&token=${PrivateStore.state.token}`)
            .then(response => { state.stockChartData = response.data });
    },

    async searchSymbol(query) {
        this.resetBoard();
        state.searchReady = false
        await axios.get(`https://finnhub.io/api/v1/search?q=${query}&token=${PrivateStore.state.token}`)
            .then(response => { state.searchResults = response.data })
        state.showSearchResults = true
    },

    async fetchChartData(symbol) {
        await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&count=500&token=${PrivateStore.state.token}`)
            .then(response => { state.stockChartData = response.data });
    },

    //TODO Refactor this mess
    async setSelectedStockAndFetchChartData(stock) {
        if (stock.includes(".")) {
            state.selectedStock = stock.split("."[0]);
            await this.fetchChartData(state.selectedStock)
            console.log(state.selectedStock);
            console.log(state.stockChartData);
        } else {
            state.selectedStock = stock;
            await this.fetchChartData(state.selectedStock)
            console.log(state.selectedStock);
            console.log(state.stockChartData);
        }
        this.resetBoard();
        this.showChart();
    },

    resetBoard() {
        state.showSearchResults = false;
        state.showChart = false;
    },

    showChart() {
        this.resetBoard();
        state.showChart = true;
    }


};

export default {
    state: readonly(state),
    methods
}