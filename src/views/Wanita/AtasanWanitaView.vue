<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

let atasan_wanita = ref([]);
let id_categori = ref("c8ce4ca3-d4ac-456c-822a-9b92042ecc26");

async function created() {
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/product`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res);
      atasan_wanita.value = res.data.data.filter((data) => data.category_id === id_categori.value);
    });
}

onMounted(() => {
  created();
});
</script>

<template>
  <div id="list_array">
    <div class="bg-white w-full h-screen text-black">
      <div class="text-center">
        <span class="text-3xl">Atasan Wanita</span>
      </div>
      <div class="grid grid-cols-4 items-center justify-items-center">
        <div v-for="items in atasan_wanita" :key="items.id" class="text-center mt-4">
          <img class="size-40 shadow-lg" :src="items.picture_url" />
          <h1 class="text-xl mt-3">{{ items.name }}</h1>
          <h1 class="text-md">{{ items.price }}</h1>
          <div class="flex flex-col items-center">
            <button class="bg-gray-700 px-3 mt-1 w-32 rounded-lg font-bold text-white">Add</button>
            <button class="bg-red-700 px-3 mt-1 w-32 rounded-lg font-bold text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
