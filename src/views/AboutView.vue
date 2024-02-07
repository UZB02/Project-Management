<template lang="">
<!-- component -->
   <section class="font-poppins antialiased">
     <div
      id="view"
      class="w-screen flex flex-row"
      x-data="{ sidenav: true }"
    >
      <div
        id="sidebar"
        class="bg-white h-screen md:block shadow-xl  w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
        @click.away="sidenav = false"
      >
        <div class="space-y-6 md:space-y-10 mt-10">
          <!-- <div id="profile" class="">
            <div class='flex items-center justify-center'>
              <h2
                class="font-medium md:text-sm text-center text-teal-500"
              >
                <samp class=''>PM</samp>
              </h2>
           </div>
          </div> -->
     
          <div id="menu" class="flex flex-col mt-11 space-y-2">
            <a
              href=""
              class="text-sm  font-medium text-gray-700 py-2 px-5 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                class="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="pl-1">Loyiha indikator (ko’rsatkichlar) ma’lumoti paneli</span>
            </a>
            <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-5 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                class="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                ></path>
              </svg>
              <span class="pl-1">Loyiha bazaviy ma’lumotlari panel</span>
            </a>
            <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-5 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                class="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="pl-1">Joriy haftadagi topshiriqlar ro’yxati paneli</span>
            </a>
            <a
              href=""
              class="text-sm  font-medium text-gray-700 py-2 px-5 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
            <svg xmlns="http://www.w3.org/2000/svg"   class="w-6 h-6 fill-current inline-block"
                fill="currentColor"  viewBox="0 0 24 24"><path d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z"/></svg>
              <span class="pl-1">Loyihaga sarflangan va rejalangan vaqt ma’lumotlari paneli</span>
            </a>
            <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-5 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
           <svg xmlns="http://www.w3.org/2000/svg"  class="w-6 h-6 fill-current inline-block"
                fill="currentColor" viewBox="0 0 24 24"><path d="M16.488 20l3.414 4h-2.627l-3.42-4h2.633zm1.512-14h-4v1h4v-1zm-7 18h2v-4h-2v4zm-6.918 0h2.628l3.42-4h-2.633l-3.415 4zm13.918-16h-4v1h4v-1zm0 2h-4v1h4v-1zm-8.5 3c1.762 0 3.205-1.306 3.45-3h-3.95v-3.95c-1.694.245-3 1.688-3 3.45 0 1.933 1.567 3.5 3.5 3.5zm.5-6.95v2.95h2.95c-.221-1.529-1.421-2.729-2.95-2.95zm8 5.95h-4v1h4v-1zm5-9h-1v15h-20v-15h-1v-3h22v3zm-3 0h-16v13h16v-13z"/></svg>
              <span class="pl-1">Ijrochilar reyting tizimi ma’lumoti paneli</span>
            </a>
            <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-5 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                class="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="pl-1">Bugungi topshiriqlar va bildirishnomalar paneli</span>
            </a>
             <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-5 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                class="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="pl-1">Kalendar va taqvim ma’lumotlari paneli</span>
            </a>
            <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-5 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                class="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                ></path>
              </svg>
              <span class="pl-1">Loyiha jamoasi a’zolari ma’lumoti paneli</span>
            </a>
          </div>
        </div>
      </div>
     
    </div>
   </section>
</template>
<script>
</script>
<style scoped>
  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: rgb(6 148 162 / var(--tw-bg-opacity));
    border-radius: 30px;
  }
</style>