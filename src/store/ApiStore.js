import PrivateStore from "./PrivateStore";
import axios from "axios";
import { inject, reactive, readonly } from "vue";
import UIStore from "./UIStore";

inject[PrivateStore, UIStore]

const state = reactive({
    selectedStock: "",
    validResults: [],
    //stockChartData: Object,
    searchResults: Object,

});

const methods = {

    async fetchApple() {
        await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=IBML&resolution=D&count=500&token=${PrivateStore.state.token}`)
            .then(response => { state.stockChartData = response.data });
    },

    async searchSymbol(query) {
        state.validResults = [];
        UIStore.methods.resetBoard();
        await axios.get(`https://finnhub.io/api/v1/search?q=${query}&token=${PrivateStore.state.token}`)
            .then(response => { state.searchResults = response.data });

        this.addToValidResults(state.searchResults);

        UIStore.methods.showSearchResults();
    },

    checkDot(stockSymbol) {
        if (stockSymbol.includes(".")) {
            return false;
        }
        else {
            return true;
        }
    },

    addToValidResults(){
        state.searchResults.result.forEach(e => {
           if(this.checkDot(e.displaySymbol)) {
               state.validResults.push(e);
           }
        })
        console.log(state.validResults);
    },

    setSelectedStock(symbol){
        state.selectedStock = symbol;
    }

    // async fetchChartData(symbol) {
    //     await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&count=100&token=${PrivateStore.state.token}`)
    //         .then(response => { state.stockChartData = response.data });
    // },

    //TODO Refactor this mess
    // async setSelectedStockAndFetchChartData(stock) {
    //     if (stock.includes(".")) {
    //         state.selectedStock = stock.split("."[0]);
    //         await this.fetchChartData(state.selectedStock)
    //         console.log(state.selectedStock);
    //         console.log(state.stockChartData);
    //     } else {
    //         state.selectedStock = stock;
    //         await this.fetchChartData(state.selectedStock)
    //         console.log(state.selectedStock);
    //         console.log(state.stockChartData);
    //     }
    //     UIStore.methods.resetBoard();
    //     UIStore.methods.showChart();
    // },


};

export default {
    state: readonly(state),
    methods
}