<script setup>
defineProps(["listTab"]);
const active = defineModel();
</script>
<template>
  <div class="flex w-fit overflow-hidden rounded-t-xl">
    <button v-for="list in listTab" :key="list" class="items-center" @click="active = list" :class="active.name == list.name ? 'bg-gray-300 text-black' : 'bg-gray-600 text-white'">
      {{ list.name }}
    </button>
  </div>
</template>
