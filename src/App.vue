<template>
  <header>
    <MobileNav v-if="screenWidth < 1024" />
  </header>
  <main></main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MobileNav from "@/components/MobileNav.vue";
const screenWidth = ref(window.innerWidth);

window.addEventListener("resize", () => {
  screenWidth.value = window.innerWidth;
});
</script>
