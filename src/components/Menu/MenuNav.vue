<script setup>
defineProps(["to", "name"]);
</script>
<template>
  <router-link :class="$route.name == name" class="px-1 py-3 ease-in duration-300 hover:bg-gray-300 rounded-md w-32 font-medium text-center" :to="to">
    {{ name }}
  </router-link>
</template>
