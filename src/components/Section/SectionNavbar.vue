<script setup>
import MenuNav from "@/components/Menu/MenuNav.vue";
import "flowbite";
import { ref } from "vue";

const cart = ref(false);
</script>

<template>
  <nav class="flex items-center justify-between p-1 mx-5 shadow-lg">
    <div class="text-blue-400 font-bold text-3xl">
      <span>LOGO</span>
    </div>
    <div class="flex gap-5 mr-auto mx-10 items-center">
      <MenuNav to="/" name="Home" />
      <ul class="flex">
        <li>
          <button
            id="dropdownDelayButtonWanita"
            data-dropdown-toggle="dropdownDelayWanita"
            data-dropdown-delay="300"
            data-dropdown-trigger="hover"
            class="text-black hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center w-32"
            type="button"
          >
            Wanita
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdownDelayWanita" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButtonWanita">
              <li>
                <router-link to="/wanita-atasan" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Atasan</router-link>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bawahan</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <button
            id="dropdownDelayButtonPria"
            data-dropdown-toggle="dropdownDelayPria"
            data-dropdown-delay="300"
            data-dropdown-trigger="hover"
            class="text-black hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center w-32"
            type="button"
          >
            Pria
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdownDelayPria" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButtonPria">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Atasan</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bawahan</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <button
            id="dropdownDelayButtonAnak"
            data-dropdown-toggle="dropdownDelayAnak"
            data-dropdown-delay="300"
            data-dropdown-trigger="hover"
            class="text-black hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center w-32"
            type="button"
          >
            Anak
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdownDelayAnak" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButtonAnak">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Atasan</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bawahan</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <button
            id="dropdownDelayButtonBayi"
            data-dropdown-toggle="dropdownDelayBayi"
            data-dropdown-delay="300"
            data-dropdown-trigger="hover"
            class="text-black hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center w-32"
            type="button"
          >
            Bayi
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdownDelayBayi" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButtonBayi">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Atasan</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bawahan</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <ul class="flex gap-16 text-center items-center mx-5">
        <li class="size-5">
          <svg class="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
        </li>
        <li class="size-5 text-left">
          <button id="dropdownDelayButtonAuth" data-dropdown-toggle="dropdownDelayAuth" data-dropdown-delay="300" data-dropdown-trigger="hover" class="hover:bg-gray-300 rounded-full" type="button">
            <svg class="w-6 h-6 items-center text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>

          <div id="dropdownDelayAuth" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButtonAuth">
              <li>
                <router-link to="/login" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</router-link>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="size-5">
          <svg class="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
          </svg>
        </li>
        <li class="size-5">
          <button @click="cart = !cart">
            <svg class="w-6 h-6 text-gray-800 dark:text-gray-500 relative" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
            </svg>
          </button>
          <span class="flex absolute justify-center bg-gray-300 items-center rounded-full px-1 -mt-3 ml-3">0</span>
        </li>
      </ul>
    </div>
  </nav>
  <div v-show="cart" class="bg-gray-800 w-[480px] text-white fixed right-0 bottom-0 top-0 left-auto grid grid-rows-[70px_1fr_70px]">
    <h1 class="text-2xl m-0 p-5">Shopping Cart</h1>
    <div class="gap-3 mx-3 overflow-auto">
      <div class="grid grid-cols-[70px_150px_50px_1fr] text-center items-center">
        <div>
          <img class="w-full" src="../asset/img/rok.png" alt="" />
        </div>
        <div>Name</div>
        <div>Rp 19000</div>
        <div class="space-x-2">
          <span class="inline-block rounded-[50%] w-[25px] h-[25px] bg-gray-500 cursor-pointer">-</span>
          <span class="inline-block rounded-[50%] w-[25px] h-[25px] bg-gray-500 cursor-pointer">1</span>
          <span class="inline-block rounded-[50%] w-[25px] h-[25px] bg-gray-500 cursor-pointer">+</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-[repeat(2,1fr)] text-black font-bold">
      <button class="bg-white border-none" @click="cart = !cart">CLOSE</button>
      <button class="bg-yellow-400 border-none">CHECK OUT</button>
    </div>
  </div>
</template>
