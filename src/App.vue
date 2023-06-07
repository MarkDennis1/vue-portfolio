<template>
  <header>
    <MobileNav :screen-width="screenWidth" />
  </header>
  <main class="px-4 pt-10">
    <HomeSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
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

window.addEventListener("resize", () => {
  screenWidth.value = window.innerWidth;
});
</script>
