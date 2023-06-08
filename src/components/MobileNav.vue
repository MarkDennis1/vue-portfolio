<template>
  <nav
    v-if="screenWidth < 1024"
    class="fixed w-full transition-all z-10"
    :class="
      isExpand ? '-bottom-0' : screenWidth < 768 ? '-bottom-14' : '-bottom-0' //hide 5th navlink on small screen
    "
  >
    <div v-if="screenWidth < 768" class="relative h-10">
      <button
        @click="toggleExpand"
        class="absolute left-0 right-0 top-1/2 m-auto flex justify-center items-center ring-1 ring-orange-500 h-10 w-10 rounded-full bg-white hover:bg-gray-200"
      >
        <ChevronDownIcon v-if="isExpand" />
        <ChevronUpIcon v-else />
      </button>
    </div>
    <ul
      class="grid grid-cols-4 md:grid-cols-5 text-xs bg-white p-2 ring-1 ring-orange-500"
    >
      <li v-for="route in Routes.ROUTES_LIST">
        <a
          @click="isExpand = false"
          class="nav-link flex flex-col py-2 rounded-md justify-center items-center text-300 hover:text-400 hover:bg-cardPrimary"
          :href="route.href"
        >
          <component :is="route.icon" />
          <p>{{ route.name }}</p>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Routes } from "@/helpers";
import { ChevronUpIcon, ChevronDownIcon } from "@/components/icons";

const isExpand = ref(false);

const toggleExpand = () => {
  isExpand.value = !isExpand.value;
};

defineProps({
  screenWidth: {
    type: Number,
    required: true,
  },
});

//add active class on nav-link if section is on screen
window.addEventListener("scroll", () => {
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
});
</script>
