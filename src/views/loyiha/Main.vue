<template>
    <div data-aos="fade-left"
         data-aos-anchor="#example-anchor"
         data-aos-offset="500"
         data-aos-duration="500">
        <button @click="count++">ADD</button>
        <p>{{ count }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const count =ref(0)
</script>
<style scoped>
    
</style>