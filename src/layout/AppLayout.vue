<template >
    <!-- component -->
        <div class="container flex" style="margin: 0 auto;">
           <div class="h-screen sticky top-0 left-0">
             <AppNavigation/>
           </div>
            <div class="w-full rounded-md bg-blue-100">
                 <header class="sticky top-0 z-50">
                <Nav/>
            </header>
                <div class="rounded-md p-3">
                    <RouterView/>
                </div>
            </div>
        </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import AppNavigation from '../components/Nav/AppNavigation.vue'
import Nav from "../components/Nav/Navbar.vue"
import { ref } from 'vue';

const modal = ref(localStorage.getItem('modal'))
console.log(modal.value);

</script>
