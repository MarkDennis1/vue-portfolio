<template>
  <div
    id="top-bar"
    class="z-10 lg:px-[21%] fixed top-0 left-0 flex justify-between items-center h-12 w-full px-4 overflow-hidden transition-all backdrop-blur-lg shadow-lg"
  >
    <a class="h-[70%] overflow-hidden flex-shrink-0 rounded-md" href="#home">
      <img
        class="aspect-square object-contain w-full h-full"
        src="https://ui-avatars.com/api/?name=Mark+Dennis&background=645307&color=F9FAFB"
        alt="Mark Dennis"
      />
    </a>
    <div class="hidden lg:flex gap-4 text-heavyAccent">
      <a
        class="top-bar-link hover:underline"
        v-for="route in Routes.ROUTES_LIST"
        :key="route.id"
        :href="route.href"
        >{{ route.name }}</a
      >
    </div>
    <a
      target="_blank"
      href="https://drive.google.com/file/d/19XGdxn6VmLX1Qk7pcmyB0FZJLMZRjC7u/view"
    >
      <PrimaryButton class="text-xs">Resume</PrimaryButton>
    </a>
  </div>
</template>
<script setup lang="ts">
import { PrimaryButton } from "@/components";
import { Routes } from "@/helpers";
</script>
