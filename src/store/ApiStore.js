import PrivateStore from "./PrivateStore";
import axios from "axios";
import { reactive } from "vue";

const state = reactive({
    stockChartData: Object,
    searchQuery: "",
    searchResults: Object,
    searchReady: false

});

const methods = {

    async fetchApple() {
        await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=IBML&resolution=D&count=500&token=${PrivateStore.token}`)
            .then(response => { state.stockChartData = response.data });
    },

    async searchSymbol() {
        state.searchReady = false
        await axios.get(`https://finnhub.io/api/v1/search?q=${state.searchQuery}&token=${PrivateStore.token}`)
            .then(response => { state.searchResults = response.data })
        state.searchReady = true
    }
};

export default {
    state,
    methods
}