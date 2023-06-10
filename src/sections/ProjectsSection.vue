<template>
  <section :id="Routes.PROJECTS.id" class="">
    <div class="flex flex-col gap-4 px-4 max-w-4xl mx-auto">
      <h1 class="text-2xl font-semibold text-heavyAccent">Projects</h1>
      <div class="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        <div
          class="p-4 space-y-4 rounded-md shadow-md bg-cardPrimary"
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
            :effect="'creative'"
            :creativeEffect="{
              prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
            class="mySwiper"
          >
            <swiper-slide
              v-for="(thumb, index) in proj.thumbnails"
              :key="index"
            >
              <img
                class="object-cover h-full w-full aspect-video"
                :src="thumb"
                :alt="proj.title"
              />
            </swiper-slide>
          </swiper>
          <h2 class="text-lg font-semibold truncate">{{ proj.title }}</h2>

          <!-- medium screen buttons -->
          <div class="hidden md:flex justify-between">
            <div class="flex gap-4">
              <a
                target="_blank"
                :href="
                  !proj.links.repo ? 'javascript:void(0)' : proj.links.repo
                "
                class="flex items-center gap-2"
                :class="
                  !proj.links.repo
                    ? 'text-200 pointer-events-none'
                    : 'hover:underline'
                "
              >
                code <new-tab-icon />
              </a>
              <a
                target="_blank"
                :href="
                  !proj.links.live ? 'javascript:void(0)' : proj.links.live
                "
                class="flex items-center gap-2"
                :class="
                  !proj.links.live
                    ? 'text-200 pointer-events-none'
                    : 'hover:underline'
                "
              >
                demo <new-tab-icon />
              </a>
            </div>
            <button @click="proj.expand.value = !proj.expand.value">
              <x-mark-icon
                class="transition-all text-heavyAccent"
                :class="!proj.expand.value ? 'rotate-45' : 'rotate-0'"
              />
            </button>
          </div>
          <!-- Small screen buttons -->
          <div class="flex justify-between md:hidden">
            <a
              target="_blank"
              :href="!proj.links.repo ? 'javascript:void(0)' : proj.links.repo"
              class="flex items-center gap-2"
              :class="
                !proj.links.repo
                  ? 'text-200 pointer-events-none'
                  : 'hover:underline'
              "
            >
              code <new-tab-icon />
            </a>
            <a
              target="_blank"
              :href="!proj.links.live ? 'javascript:void(0)' : proj.links.live"
              class="flex items-center gap-2"
              :class="
                !proj.links.live
                  ? 'text-200 pointer-events-none'
                  : 'hover:underline'
              "
            >
              demo <new-tab-icon />
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
          <div
            class="flex flex-wrap gap-x-2 gap-y-1 text-xs leading-none"
          >
            <div
              class="px-2 py-1 rounded-full lowercase bg-100 hover:bg-heavyAccent hover:text-white transition-all cursor-pointer font-light"
              v-for="(technology, index) in proj.technologies"
              :key="index"
            >
              {{ technology }}
            </div>
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
import "swiper/css/effect-creative";
import "swiper/css/pagination";
// import required modules
import { EffectCreative, Pagination, Navigation } from "swiper";

import { Routes } from "@/helpers";
import { NewTabIcon } from "@/components/icons";
import { XMarkIcon } from "@/components/icons";
import { ref } from "vue";
import {
  project01,
  project01_1,
  project01_2,
  project02,
  project03,
  project03_1,
  project04,
  project04_1,
  project04_2,
  project04_3,
} from "@/assets/images";
const modules = [EffectCreative, Pagination, Navigation];

const projects = [
  {
    thumbnails: [project01, project01_1, project01_2],
    title: "D'Creamy Milktea House POS (Back-End)",
    description: `A point of sale (POS) system created using VB.net with MySQL for database. This was created for the store "D'Creamy Milktea House" as a capstone project.`,
    technologies: ["Desktop", "Visual Basic", ".NET", "MySQL"],
    links: {
      repo: "https://github.com/MarkDennis1/XploreTech-POS",
      live: "",
    },
    expand: ref(false),
  },
  {
    thumbnails: [project02],
    title: "The Cat House (Full-Stack)",
    description: "A scheduling system catering specifically to cat adoptions",
    technologies: [
      "Web",
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
      "Laravel",
      "Vue",
      "Inertia",
      "TailwindCSS",
      "MySQL",
    ],
    links: {
      repo: "https://github.com/MarkDennis1/the-cat-house",
      live: "",
    },
    expand: ref(false),
  },
  {
    thumbnails: [project03, project03_1],
    title: "Netflix UI Clone (Front-End)",
    description:
      "I built a Netflix UI clone to practice React, I used TMDB API for fetching tv-shows and movies.",
    technologies: ["Web", "HTML", "CSS", "Javascript", "React"],
    links: {
      repo: "https://github.com/MarkDennis1/react-netflix-ui",
      live: "https://markdennis1.github.io/react-netflix-ui/",
    },
    expand: ref(false),
  },
  {
    thumbnails: [project04, project04_1, project04_2, project04_3],
    title: "Student Management CRUD (Back-End)",
    description:
      "Project in IT Elec 2 - Web System Technologies 2 - a simple crud application for managing student list.",
    technologies: [
      "Web",
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
      "MySQL",
      "MVC",
      "OOP",
    ],
    links: {
      repo: "https://github.com/MarkDennis1/PHP-CRUD_Project",
      live: "",
    },
    expand: ref(false),
  },
];
</script>
