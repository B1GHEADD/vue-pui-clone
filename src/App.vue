<script setup>
import SectionNavbar from "./components/Section/SectionNavbar.vue";
import SectionMain from "./components/Section/SectionMain.vue";
</script>

<template>
  <div class="flex flex-col w-screen h-screen">
    <SectionNavbar />
    <div class="flex h-screen w-screen">
      <SectionMain />
    </div>
  </div>
</template>
