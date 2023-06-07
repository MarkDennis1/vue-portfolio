<template>
  <section :id="Routes.ABOUT.id" class="flex flex-col gap-4">
    <h1 class="text-2xl font-semibold">About Me</h1>
    <p class="text-justify">
      I am an aspiring full-stack developer who is passionate about utilizing
      Laravel, Node.js, Vue.js, and React to build intuitive and efficient web
      applications. With a strong foundation in both frontend and backend
      development, I am dedicated to honing my skills and expanding my knowledge
      in order to create seamless and user-friendly digital experiences.
    </p>
    <div>
      <h2 class="text-lg font-semibold">Experience</h2>
      <ul class="pl-4">
        <div v-for="exp in experiences">
          <li class="list-disc">{{ exp.title }}</li>
          <div class="flex mb-4 justify-between leading-none">
            <p class="text-gray-500 text-xs leading-none">{{ exp.at }}</p>
            <p class="text-gray-500 text-xs leading-none">
              {{ exp.during }}
            </p>
          </div>
          <ul class="pl-4 space-y-2">
            <li v-for="encounter in exp.encounters" class="list-disc text-sm text-justify">
              {{ encounter }}.
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Routes } from "@/helpers";

const experiences = [
  {
    title: "Web Developer Intern",
    at: "Neksjob Corp",
    during: "Feb 2023 - Apr 2023",
    encounters: [
      "Built a REST API using Laravel.",
      "Collaborated with a team to define API endpoints, design database, and implement efficient data retrieval and manipulation process.",
      "Collaborated with the front-end team to ensure seamless integration of the API with the user interface.",
      "Used mailtrap for email testing.",
      "Used bitbucket as our web-based version control repository hosting service.",
      "Learned some of the advance concepts of Laravel",
    ],
  },
];
</script>
