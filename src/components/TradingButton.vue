<script setup>
import { inject } from 'vue';
import ApiStore from '../store/ApiStore';
import TradingStore from '../store/TradingStore';
inject[TradingStore, ApiStore]
const props = defineProps({
    text: String,
    color: String,
    amount: Number,
})

const typeOfPosition = (text) => {
    switch(text){
        case "Buy":
            return "long";
            break;
        case "Sell":
            return "short"
            break;
    }
}
//Mirar el tema de clases y estilos.
</script>

<template>
    <button type="button" @click="TradingStore.methods.openTrade(ApiStore.state.selectedStock ,TradingStore.state.currentPrice, typeOfPosition(props.text), props.amount)">{{ props.text }}</button>
</template>

<style scoped>



</style>