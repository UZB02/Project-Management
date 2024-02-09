<template>
    <aside id="default-sidebar" style="transition: all .3s linear;" :class="isOpen ? 'w-20  sticky  left-0 z-40 h-screen transition-transform  sm:translate-x-0' : 'sidebar w-60  sticky left-0 z-40 h-screen transition-transform  sm:translate-x-0'" aria-label="Sidebar">
   <div class="h-full px-3 overflow-y-auto bg-white dark:bg-gray-800">
    <div :class="isOpen ? 'flex flex-col-reverse w-full py-3 gap-2 items-center justify-center' : 'w-full  flex items-center py-3 justify-between'">
       <button @click="toggleOpen" class="bg-gray-100 p-2 rounded-md">
                        <svg width="24" height="24" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
      <h1 class='text-blue-500 font-sans text-2xl font-bold text-center uppercase' style='text-shadow:0 0 1px gray'>PM</h1>
    </div>
      <ul v-for="item in AppNavUrl" class="flex items-center justify-center space-y-2 font-medium">
        <RouterLink :data-tooltip-target="item.id" data-tooltip-placement="right"  :to="item.url" :class="isOpen ? 'ifrouter w-10 router mt-2 flex items-center p-2 text-gray-900  hover:bg-blue-500 rounded-lg' : 'router w-full mt-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700 group'">
           <div v-html="item.svg" style="fill: gray;"></div>
            <span :class="isOpen ? 'hidden' : 'ms-3 text-xs'">{{ item.name }}</span>
            <!-- <span :class="isOpen ? 'absolute  translate-x-10 ' : 'hidden'">{{ item.name }}</span> -->
        </RouterLink>
           <span :id="item.id"  role="tooltip" :class="isOpen ? 'absolute z-10 invisible inline-block px-3 py-2 text-sm w-48 font-medium text-white bg-blue-500 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700' : 'hidden'">
        {{ item.name }}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </span>
      </ul>
   </div>
</aside>
</template>
<script setup>
import { RouterLink } from "vue-router"
import { AppNavUrl } from '../../data/AppNvaUrl';
import { ref } from "vue";

const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
};
  
console.log(AppNavUrl);

</script>
<style>
a.router-link-active{
  transition: all .3s linear;
  color: white;
background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}
a.router-link-active svg{
 fill: white;
}
a.router-link-active:hover svg{
  fill: white;
}
.router:hover svg{
  fill: white;
}
/* .ifrouter:hover svg{
  fill: gray;
} */
</style>