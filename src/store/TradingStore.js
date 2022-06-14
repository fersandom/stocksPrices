import axios from "axios";
import { inject, reactive, readonly } from "vue";
import PrivateStore from "./PrivateStore";
import ApiStore from "./ApiStore";
import uniqid from 'uniqid';

inject[PrivateStore, ApiStore]

const state = reactive({
    currentPrice: Number,
    currentTrades: [],
    closedTrades: []
});

const methods = {
    async getCurrentPrice(stock) {
        await axios.get(`https://finnhub.io/api/v1//quote?symbol=${stock}&token=${PrivateStore.state.token}`)
            .then(response => {
                state.currentPrice = response.data.c
            })
    },

    async getTradesCurrentPrice() {
        await state.currentTrades.forEach(e => {
            axios.get(`https://finnhub.io/api/v1//quote?symbol=${e.symbol}&token=${PrivateStore.state.token}`)
                .then(response => {
                    e.currentPrice = response.data.c;
                })
        })
    },

    openTrade(symbol, price, typeOfPosition, amount) {
        let date = new Date();
        let newTrade = {
            "orderId": uniqid(),
            "symbol": symbol,
            "price": price,
            "currentPrice": state.currentPrice,
            "typeOfPosition": typeOfPosition,
            "amount": amount,
            "date": date.getTime()
        }
        state.currentTrades.push(newTrade);
        console.log(state.currentTrades);

        this.updateTrades();
    },

    updateTrades() {
        localStorage.setItem("trades", JSON.stringify(state.currentTrades));
    },

    updateClosedTrades() {
        localStorage.setItem("closedTrades", JSON.stringify(state.closedTrades))
    },

    updateLocalStorage() {
        this.updateTrades();
        this.updateClosedTrades();
    },

    closeTrade(id) {
        const closedTradeIndex = state.currentTrades.findIndex(e => e.orderId === id);
        console.log(closedTradeIndex);
        state.closedTrades.push(state.currentTrades[closedTradeIndex]);
        state.currentTrades.splice(closedTradeIndex, 1);
        console.log(state.closedTrades);
        this.updateLocalStorage();
    },

    loadTrades() {
        state.currentTrades = JSON.parse(localStorage.trades);
    },

    loadClosedTrades() {
        state.closedTrades = JSON.parse(localStorage.closedTrades);
    }
};

export default { state: readonly(state), methods };