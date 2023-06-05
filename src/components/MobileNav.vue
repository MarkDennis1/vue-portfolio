<template>
  <nav
    class="fixed w-full transition-all bottom-0"
    :class="isExpand ? '-bottom-0' : '-bottom-28 md:-bottom-14'"
  >
    <button
      @click="handleExpandClick"
      class="flex w-full justify-center bg-gray-100 pt-2 rounded-tl-2xl rounded-tr-2xl"
    >
      <ChevronDownIcon v-if="isExpand" />
      <ChevronUpIcon v-else />
    </button>
    <ul class="grid grid-cols-4 md:grid-cols-5 text-xs bg-gray-100 p-2">
      <li>
        <a
          class="flex flex-col py-2 hover:bg-gray-200 rounded-md justify-center items-center"
          :href="Routes.HOME"
        >
          <HomeIcon />
          <p>Home</p>
        </a>
      </li>
      <li>
        <a
          class="flex flex-col py-2 hover:bg-gray-200 rounded-md justify-center items-center"
          :href="Routes.ABOUT"
        >
          <AboutIcon />
          <p>About</p>
        </a>
      </li>
      <li>
        <a
          class="flex flex-col py-2 hover:bg-gray-200 rounded-md justify-center items-center"
          :href="Routes.SKILLS"
        >
          <SkillsIcon />
          <p>Skills</p>
        </a>
      </li>
      <li>
        <a
          class="flex flex-col py-2 hover:bg-gray-200 rounded-md justify-center items-center"
          :href="Routes.PROJECTS"
        >
          <ProjectsIcon />
          <p>Projects</p>
        </a>
      </li>
      <li>
        <a
          class="flex flex-col py-2 hover:bg-gray-200 rounded-md justify-center items-center"
          :href="Routes.CONTACT"
        >
          <ContactIcon />
          <p>Contact</p>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Routes } from "@/helpers";
import {
  HomeIcon,
  AboutIcon,
  SkillsIcon,
  ProjectsIcon,
  ContactIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@/components/icons";

const isExpand = ref(false);

const handleExpandClick = () => {
  isExpand.value = !isExpand.value;
};
</script>
