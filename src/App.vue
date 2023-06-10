<template>
  <header class="max-w-4xl mx-auto">
    <TopBar />
    <MobileNav :screen-width="screenWidth" />
  </header>
  <main class="space-y-5">
    <template v-for="(section, index) in sections">
      <component
        :is="section"
        :class="index % 2 == 0 ? 'bg-white' : 'bg-cardSecondary py-8'"
      />
    </template>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MobileNav from "@/components/MobileNav.vue";
import TopBar from "@/components/TopBar.vue";
import HomeSection from "@/sections/HomeSection.vue";
import AboutSection from "@/sections/AboutSection.vue";
import SkillsSection from "@/sections/SkillsSection.vue";
import ProjectsSection from "@/sections/ProjectsSection.vue";
import ContactSection from "@/sections/FooterSection.vue";
const screenWidth = ref(window.innerWidth);
const previousScrollTop = ref(3);

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

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const topBar: HTMLElement | null = document.getElementById("top-bar");
  // Compare the scroll position with the previous position to determine scrolling direction
  if (scrollTop < previousScrollTop.value) {
    // Determine if the user is scrolling upward

    topBar?.classList.remove("h-0");
    topBar?.classList.add("h-12");
  } else {
    topBar?.classList.add("h-0");
    topBar?.classList.remove("h-12");
  }
  previousScrollTop.value = scrollTop;

  //Determine what section the user is viewing
  let current = "";

  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY + 80 >= sectionTop) {
      current = section.getAttribute("id") || "";
    }
  });

  const navLinks: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll(".nav-link");
  navLinks.forEach((li) => {
    li.classList.add("text-300");
    li.classList.remove("text-400");
    li.classList.remove("bg-cardPrimary");
    if (li.href.includes(current)) {
      li.classList.remove("text-300");
      li.classList.add("text-400");
      li.classList.add("bg-cardPrimary");
    }
  });
  const topBarLink: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll(".top-bar-link");
  topBarLink.forEach((li) => {
    li.classList.remove("underline");
    if (li.href.includes(current)) {
      li.classList.add("underline");
    }
  });
});
</script>
