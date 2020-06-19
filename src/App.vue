<template>
  <div class="h-100">
    <app-header></app-header>
    <app-calculate></app-calculate>
    <app-result></app-result>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import Calculate from './components/Calculate.vue'
import Result from './components/Result.vue'


export default {
  
  components: {
    appHeader: Header,
    appCalculate: Calculate,
    appResult: Result
    
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html, body {
height: 100%;
}
</style>
