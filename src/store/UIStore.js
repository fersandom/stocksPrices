import { reactive, readonly } from "vue";

const state = reactive({
    showChart: false,
    showSearchResults: false,

});

const methods = {
    resetBoard(){
        state.showChart = false;
        state.showSearchResults = false;
    },

    showChart(){
        this.resetBoard();
        state.showChart = true;
    },

    showSearchResults() {
        this.resetBoard();
        state.showSearchResults = true;
    }
}

export default { state: readonly(state), methods }