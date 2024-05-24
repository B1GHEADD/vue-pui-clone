<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

let atasan_wanita = ref([]);
let id_categori = ref("c8ce4ca3-d4ac-456c-822a-9b92042ecc26");

const editPopUp = ref(false);
const addPopUp = ref(false);

const editedProduct = ref({
  id: "",
  category_id: "",
  name: "",
  price: 0,
});

const addProduct = ref({
  id: "",
  name: "",
  price: "",
  image: null,
});

async function getProduct() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/product`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    atasan_wanita.value = response.data.data.filter((data) => data.category_id === id_categori.value);
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

async function updateProduct(productId) {
  try {
    const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/product/update/${productId}`, editedProduct, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data);
    getProduct();
    editPopUp.value = false;
  } catch (error) {
    // console.error("Error");
    console.log(error);
  }
}

async function deleteProduct(productId) {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/product/${productId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response);
    getProduct();
  } catch (error) {
    console.error("Error");
  }
}

function openEditPopup(product) {
  editedProduct.value = { ...product };
  editPopUp.value = true;
}

function openAddPopup(product) {
  addProduct.value = { ...product };
  addPopUp.value = true;
}

onMounted(() => {
  // created();
  getProduct();
});
</script>

<template>
  <div>
    <div class="bg-white w-full h-screen text-black">
      <div class="text-center flex flex-row items-center">
        <span class="text-3xl justify-center">Atasan Wanita</span>
        <div class="ml-auto">
          <button class="bg-blue-500 px-3 w-32 rounded-md font-bold text-white" @click="openAddPopup(items)">Add Item</button>
        </div>
      </div>
      <div class="grid grid-cols-5 items-center justify-items-center">
        <div v-for="items in atasan_wanita" :key="items.id" class="text-center mt-4">
          <img class="size-40 shadow-lg" :src="items.picture_url" />
          <h1 class="text-xl mt-3">{{ items.name }}</h1>
          <h1 class="text-md">{{ items.price }}</h1>
          <div class="flex flex-col items-center">
            <button class="bg-yellow-500 px-3 mt-1 w-32 rounded-md font-bold text-white" @click="openEditPopup(items)">Edit</button>
            <button class="bg-red-500 px-3 mt-1 w-32 rounded-md font-bold text-white" @click="deleteProduct(items.id)">Delete</button>
          </div>
        </div>
      </div>

      <!-- Layout popup edit produk -->

      <div v-show="editPopUp" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button class="rounded-full bg-gray-500 absolute top-4 right-4" @click="editPopUp = !editPopUp">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
        </button>
        <form class="w-96 p-6 shadow-lg bg-gray-300 rounded-md" @submit.prevent="updateProduct(productId)">
          <h1 class="text-black text-3xl block text-center font-semibold">Edit Product</h1>
          <hr class="mt-3" />
          <div class="mt-3">
            <label class="block text-base mb-2 text-black">Product ID</label>
            <input type="text" v-model="editedProduct.id" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" disabled />
          </div>
          <div class="mt-3">
            <label class="block text-base mb-2 text-black">Category ID</label>
            <input type="text" v-model="editedProduct.category_id" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" disabled />
          </div>
          <div class="mt-3">
            <label class="block text-base mb-2 text-black">Product Name</label>
            <input type="text" v-model="editedProduct.name" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" placeholder="Enter Product Name" />
          </div>
          <div class="mt-3">
            <label class="block text-base mb-2 text-black">Price</label>
            <input type="number" v-model="editedProduct.price" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" placeholder="Enter Price" />
          </div>
          <div class="mt-5">
            <button class="bg-indigo-500 text-white px-5 py-3 w-full rounded-md font-semibold" type="submit">Submit</button>
          </div>
        </form>
      </div>

      <!-- layout popup add produk -->

      <div v-show="addPopUp" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button class="rounded-full bg-gray-500 absolute top-4 right-4" @click="addPopUp = !addPopUp">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
        </button>
        <form class="w-96 p-6 shadow-lg bg-gray-300 rounded-md" @submit.prevent="updateProduk(productId)">
          <h1 class="text-black text-3xl block text-center font-semibold">Add Product</h1>
          <hr class="mt-3" />
          <div class="mt-3">
            <label class="block text-base mb-2 text-black">Category ID</label>
            <input type="text" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" disabled />
          </div>
          <div class="mt-3">
            <label class="block text-base mb-2 text-black">Product Name</label>
            <input type="text" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" placeholder="Enter Product Name" />
          </div>
          <div class="mt-3">
            <label class="block text-base mb-2 text-black">Price</label>
            <input type="number" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" placeholder="Enter Price" />
          </div>
          <div class="mt-3">
            <label class="block text-base mb-2 text-black">Picture</label>
            <input type="image" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" placeholder="Enter Price" />
          </div>
          <div class="mt-5">
            <button class="bg-indigo-500 text-white px-5 py-3 w-full rounded-md font-semibold" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
