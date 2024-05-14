<script setup>
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  email: null,
  password: null,
});

const submit = () => {
  axios
    .post(`${import.meta.env.VITE_BASE_URL}/login`, form.value)
    .then(function (response) {
      localStorage.setItem("token", response.data.data.token);
      if (response.data.data) {
        router.replace({
          name: "Home",
        });
        Swal.fire({
          title: "success",
          text: response.data.data.name,
          icon: "success",
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
    });
};
</script>

<template>
  <main>
    <div class="flex justify-center items-center h-screen">
      <form class="w-96 p-6 shadow-lg bg-white rounded-md" @submit.prevent="submit()">
        <h1 class="text-black text-3xl block text-center font-semibold">Login</h1>
        <hr class="mt-3" />
        <div class="mt-3">
          <label for="email" class="block text-base mb-2 text-black">email</label>
          <input type="email" name="email" v-model="form.email" id="email" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" placeholder="Enter Email" />
        </div>
        <div class="mt-3">
          <label for="password" class="block text-base mb-2 text-black">Password</label>
          <input type="password" name="password" v-model="form.password" id="password" class="bg-white border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md" placeholder="Enter Password" />
        </div>
        <div class="mt-3 flex justify-between items-center">
          <div>
            <input type="checkbox" />
            <label class="text-black ml-2">Remember Me</label>
          </div>
          <div></div>
        </div>
        <div class="mt-5">
          <button class="bg-indigo-500 text-white px-5 py-3 w-full rounded-md font-semibold" type="submit">Login</button>
        </div>
      </form>
    </div>
  </main>
</template>
