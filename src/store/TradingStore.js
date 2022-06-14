import axios from "axios";
import { inject, reactive, readonly } from "vue";
import PrivateStore from "./PrivateStore";
import ApiStore from "./ApiStore";

inject[PrivateStore, ApiStore]

const state = reactive ({
    currentPrice: Number,
    currentTrades: [],
});

const methods = {
    async getCurrentPrice(stock){
        await axios.get(`https://finnhub.io/api/v1//quote?symbol=${stock}&token=${PrivateStore.state.token}`)
        .then(response => {
            state.currentPrice = response.data.c
        })
    },

    openTrade(symbol, price, typeOfPosition, amount){
        let date = new Date();
        let newTrade = {
            "symbol": symbol,
            "price:": price,
            "typeOfPosition": typeOfPosition,
            "amount": amount,
            "date": date.getTime()
        }
        state.currentTrades.push(newTrade);
        console.log(state.currentTrades);
    }
};

export default {state: readonly(state), methods};