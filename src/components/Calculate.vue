<template>
  <div></div>
</template>

<script>
  export default {
    data() {
        return {
            number: '',
            show: false,   
            visibilityStyle: {
                visibility: 'hidden'
            } 
        }
    },
    methods: {
        vanillaJs: function fib(n) {
                if (n < 2){
                return n
            }
        return fib(n - 1) + fib (n - 2)
        }
    },
    mounted (){
        this.$store.dispatch('getUserInput', 20)
        console.log(this.vanillaJs(19))

    }
  }
</script>

<style scoped>
    .userInputForm {
        transform: translateY(35vh);
    }
    h2 {
        font-size: 4vw;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;

      
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
   
</style>