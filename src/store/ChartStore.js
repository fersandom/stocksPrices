import axios from "axios";
import { inject, reactive, readonly } from "vue";
import PrivateStore from "./PrivateStore";
import UIStore from "./UIStore";
inject[PrivateStore, UIStore]

const state = reactive({
    stockChartData: Object,

});

const methods = {
    async fetchChartData(symbol) {
        await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&count=100&token=${PrivateStore.state.token}`)
            .then(response => { state.stockChartData = response.data });
        console.log(state.stockChartData)
        UIStore.methods.resetBoard();
        UIStore.methods.showChart();
    },

}

export default { state: readonly(state), methods }