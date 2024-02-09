<template >
    <!-- component -->
    <div class="container flex items-center justify-between">
           <div class="left">
        <AppNavigation />
            </div>
        <div class="right"  style="width: 95%;">
            <div class="top sticky top-0 z-50">
                <Nav/>
            </div>
              <div class="p-4  rounded-md bg-gray-100 min-h-screen">
                <RouterView />
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
