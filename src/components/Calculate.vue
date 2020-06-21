<template>
  <div class="h-100">


    <b-container class="text-center h-100">
        
        <b-form @submit.prevent="addUserInput" @reset="onReset" class="userInputForm">    
            <transition name="slide-fade"> 
                <div v-show="show">
                   <h2 class="mb-3 label">Find nth of Fibonnaci number</h2>       
                    <b-form-input
                        id="input-2"
                        v-model="number"
                        required
                        class="w-25 mx-auto mb-5 shadow"
                    ></b-form-input>
                    <b-button type="submit" variant="light" size="lg" class="px-5">Find</b-button>
                </div> 
            </transition>            
        </b-form>
             
    </b-container>

    

  </div>
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
        onSubmit() {
          console.log(typeof this.number)
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset form values
            this.number
        },
         addUserInput () {
             console.log(this.show)
            let userInput = this.number
            parseInt(userInput)
            console.log(userInput)
            this.$store.dispatch('getUserInput', userInput)
        },
        vanillaJs: function fib(n) {
                if (n < 2){
                return n
            }
        return fib(n - 1) + fib (n - 2)
        }
    },
    mounted (){
        // console.log(this.vanillaJs(40))
        this.show = true;
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
    .slide-fade-enter-active {
        transition: all 0.8s ease-in-out;
        
    }
    .slide-fade-enter{
        transform: translateY(10px);
        opacity: 0;
        
    }
   
</style>