<script setup>
import ApiStore from './store/ApiStore';
import SearchForm from './components/SearchForm.vue';
import SearchResults from "./components/SearchResults.vue"
</script>

<template>
  <SearchForm />
  <div v-if="ApiStore.state.searchReady === true">
  <SearchResults :results="ApiStore.state.searchResults.result"/>
  </div>
</template>

<style>
* {
  font-family: 'Karla', sans-serif;
}
</style>
