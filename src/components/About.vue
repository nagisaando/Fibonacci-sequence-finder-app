<template>
    <b-container class="text-center pb-6 container position-relative">
        <h2 class="mb-5">What is Fibonacci sequence?</h2>
        <p class="text-secondary">
            Fibonacci is a set of numbers, 
            starting with zero and one, is created 
            by adding the previous two numbers. 
            For example, the early part of the 
            sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,144, 233, 377, and so on. 
        </p>
        <b-button type="button" variant="light" size="lg" class="px-5 py-1 mt-3" :to="'/'">
                Try Fibonacci Generator
        </b-button>


    </b-container>
</template>

<style scoped>
.container {
    top: 30%;
}
</style>