<template>
    <!-- component -->
        <section class="flex">
           <div class="h-screen z-40 sticky top-0 left-0">
             <AppNavigation/>
           </div>
            <div class="w-full flex flex-col z-10 rounded-md bg-gray-100">
                 <header class="sticky top-0 z-20">
                <Nav/>
            </header>
                <div class="w-full flex items-center rounded-md p-1">
                    <RouterView/>
                </div>
            </div>
        </section>
</template>
<script setup>
import { RouterView } from 'vue-router';
import AppNavigation from '../components/Nav/AppNavigation.vue'
import Nav from "../components/Nav/Navbar.vue"
import { ref } from 'vue';

const modal = ref(localStorage.getItem('modal'))
console.log(modal.value);

</script>
