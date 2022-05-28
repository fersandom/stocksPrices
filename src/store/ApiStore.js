import PrivateStore from "../private/PrivateStore";
import axios from "axios";
import { reactive } from "vue";

const state = reactive({
    stockChartData: Object

});

const methods = {
    saludo(nombre) {
        console.log("Hola " + nombre);
    },
    async fetchApple() {
        await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=D&count=500&token=${PrivateStore.token}`)
            .then(response => { state.stockChartData = response.data });
        console.log(state.stockChartData);
    }
};

export default {
    state,
    methods
}