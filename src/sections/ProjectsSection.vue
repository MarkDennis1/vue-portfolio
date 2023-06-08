<template>
  <section :id="Routes.PROJECTS.id" class="flex flex-col gap-4 px-4">
    <h1 class="text-2xl font-semibold">Projects</h1>
    <div class="flex flex-col gap-4">
      <div
        class="p-4 space-y-4 rounded-md bg-cardPrimary"
        v-for="proj in projects"
        :key="proj.title"
      >
        <!-- <img :src="proj.thumbnails" :alt="proj.title" /> -->
        <swiper
          :loop="true"
          :grabCursor="true"
          :pagination="true"
          :navigation="true"
          :modules="modules"
          :effect="'cube'"
          class="mySwiper"
        >
          <swiper-slide v-for="(thumb, index) in proj.thumbnails" :key="index">
            <img :src="thumb" :alt="proj.title" />
          </swiper-slide>
        </swiper>
        <h2 class="text-lg font-semibold">{{ proj.title }}</h2>
        <div class="flex justify-between">
          <a
            :href="!proj.links.repo ? 'javascript:void(0)' : proj.links.repo"
            class="text-lg flex items-center gap-2"
            :class="
              !proj.links.repo
                ? 'text-200 pointer-events-none'
                : 'hover:underline'
            "
          >
            code <new-tab-icon class="w-4 h-4 flex-shrink-0" />
          </a>
          <a
            :href="!proj.links.live ? 'javascript:void(0)' : proj.links.live"
            class="text-lg flex items-center gap-2"
            :class="
              !proj.links.live
                ? 'text-200 pointer-events-none'
                : 'hover:underline'
            "
          >
            demo <new-tab-icon class="w-4 h-4 flex-shrink-0" />
          </a>
          <button @click="proj.expand.value = !proj.expand.value">
            <x-mark-icon
              class="transition-all text-heavyAccent"
              :class="!proj.expand.value ? 'rotate-45' : 'rotate-0'"
            />
          </button>
        </div>
        <p v-if="proj.expand.value" class="text-sm text-justify">
          {{ proj.description }}
        </p>
        <div class="flex flex-wrap gap-x-2 gap-y-1 text-xs leading-none">
          <div
            class="px-2 py-1 rounded-full lowercase bg-lightAccent text-heavyAccent hover:bg-heavyAccent hover:text-white transition-all cursor-pointer font-light"
            v-for="(technology, index) in proj.technologies"
            :key="index"
          >
            {{ technology }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules
import { EffectCube, Pagination } from "swiper";

import { Routes } from "@/helpers";
import { NewTabIcon } from "@/components/icons";
import { XMarkIcon } from "@/components/icons";
import { ref, type Ref } from "vue";

const modules = [EffectCube, Pagination];

const projects = [
  {
    thumbnails: [
      "src/assets/images/project01.png",
      "src/assets/images/project01.1.png",
      "src/assets/images/project01.2.png",
    ],
    title: "D'Creamy Milktea House POS (Back-End)",
    description: `A point of sale (POS) system created using VB.net with MySQL for database. This was created for the store "D'Creamy Milktea House" as a capstone project.`,
    technologies: ["Visual Basic", ".NET", "MySQL"],
    links: {
      repo: "https://github.com/MarkDennis1/XploreTech-POS",
      live: "",
    },
    expand: ref(false),
  },
  {
    thumbnails: ["src/assets/images/project02.png"],
    title: "The Cat House (Full-Stack)",
    description: "A scheduling system catering specifically to cat adoptions",
    technologies: ["Laravel", "Vue", "Inertia", "TailwindCSS", "MySQL"],
    links: {
      repo: "https://github.com/MarkDennis1/the-cat-house",
      live: "",
    },
    expand: ref(false),
  },
  {
    thumbnails: [
      "src/assets/images/project03.png",
      "src/assets/images/project03.1.png",
    ],
    title: "Netflix UI Clone (Front-End)",
    description:
      "I built a Netflix UI clone to practice React, I used TMDB API for fetching tv-shows and movies.",
    technologies: ["React"],
    links: {
      repo: "https://github.com/MarkDennis1/react-netflix-ui",
      live: "https://markdennis1.github.io/react-netflix-ui/",
    },
    expand: ref(false),
  },
  {
    thumbnails: [
      "src/assets/images/project04.png",
      "src/assets/images/project04.1.png",
      "src/assets/images/project04.2.png",
      "src/assets/images/project04.3.png",
    ],
    title: "Student Management CRUD (Back-End)",
    description:
      "Project in IT Elec 2 - Web System Technologies 2 - a simple crud application for managing student list.",
    technologies: ["PHP", "MySQL", "MVC", "OOP"],
    links: {
      repo: "https://github.com/MarkDennis1/PHP-CRUD_Project",
      live: "",
    },
    expand: ref(false),
  },
];
</script>
