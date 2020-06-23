<template>
    <div class="h-100">
        <b-container class="text-center h-100"> 
            <b-form @submit.prevent="addUserInput" @reset="onReset" class="userInputForm">    
                <transition name="slide-fade"> 
                    <div v-show="show">
                        <h2 class="mb-3 label">Find n-th of Fibonnaci number</h2>       
                        <b-form-input
                            id="input-2"
                            type="number"
                            step="0.01"
                            v-model.number="number"
                            required
                            class="w-25 mx-auto mb-5 shadow"
                            @keyup.enter="addUserInput"
                        ></b-form-input>
                        <b-button type="submit" variant="light" size="lg" class="px-5 py-1">
                            <span v-if="!showLoading">Find</span>
                            <b-spinner small pr-2 v-if="showLoading"></b-spinner>
                            <span v-if="showLoading">Finding...</span>
                        </b-button>
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
            showLoading: false
        }
    },
    methods: {
        onReset(evt) {
            evt.preventDefault()
            // Reset form values
            this.number
        },
        //filter and pass an user input to store.js, and show the result
        async addUserInput(){
            try{
                if(this.number % 1 === 0 && this.number >= 0 && this.number <= 25){
                    this.loading();
                    await this.findFibonacci()
                    await this.success()
                //this filter is because when userInput is too big, the process gets slow and stuck. 
                } else if (this.number > 25) {
                    this.bigNumError();
                    return;
                //this will fire when there is decimal or when user enters negative number
                } else {
                    this.decimalError();
                    return;
                }
            } catch(err) {
                console.log(err)
            }
        },
        //This will shift the button to "finding" 
        loading() {
            this.showLoading = true;
        },
        findFibonacci() {
            setTimeout(() => {
                this.$store.dispatch('getUserInput', this.number);
            }, 500)
        },
        success () {        
            setTimeout(
            () => {
                this.showLoading = false;
                this.$swal.fire({
                icon: 'success',
                title: `${this.number}th Fibonacci number is ${this.$store.state.number}`,
            })
            }, 1000
                )
        },
        decimalError (){
                this.$swal.fire({
                icon: 'error',
                title: 'Negative Number or Decimal Number Is Entered.',
                text: 'Please enter positive integer!',
            })
        },
        bigNumError (){
                this.$swal.fire({
                icon: 'error',
                title:'Entered Number is Too Big.',
                text: 'Please enter a number less than 25!',
            })
        },
    },
    //this triggers animation
    mounted (){
        this.show = true;
    }
  }
</script>

<style scoped>
    .userInputForm {
        transform: translateY(35vh);
    }

    .slide-fade-enter-active {
        transition: all 0.8s ease-in-out;
        
    }
    .slide-fade-enter{
        transform: translateY(10px);
        opacity: 0;
        
    }
    
    
    /*
    ::::::::::::::::::::::::::::::::::::::::::::::::::::
    Bootstrap 4 breakpoints
    */
    /* Small devices (landscape phones, 544px and up) */
    @media (max-width: 544px) {  
        h2 {font-size:1.5rem;} /*1rem = 16px*/
    }
    
    /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
    @media (min-width: 768px) {  
        h2 {font-size:2rem;} /*1rem = 16px*/
    }
    
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        h2 {font-size:2.5rem;} /*1rem = 16px*/
    }
    
</style>