<template>
  <header>
    <MobileNav :screen-width="screenWidth" />
  </header>
  <main class="space-y-5">
    <template v-for="(section, index) in sections">
      <component :is="section" :class="index % 2 == 0 ? 'bg-white' : 'bg-cardSecondary py-8'" />
    </template>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MobileNav from "@/components/MobileNav.vue";
import HomeSection from "@/sections/HomeSection.vue";
import AboutSection from "@/sections/AboutSection.vue";
import SkillsSection from "@/sections/SkillsSection.vue";
import ProjectsSection from "@/sections/ProjectsSection.vue";
import ContactSection from "@/sections/ContactSection.vue";
const screenWidth = ref(window.innerWidth);

const sections = [
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
];

window.addEventListener("resize", () => {
  screenWidth.value = window.innerWidth;
});
</script>
