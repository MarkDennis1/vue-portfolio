<template>
  <section :id="Routes.SKILLS.id" class="min-h-[80vh] grid place-items-center">
    <div class="flex flex-col gap-4 px-4 max-w-4xl mx-auto w-full">
      <div class="w-full flex justify-center items-center relative mb-4">
        <div
          class="w-32 h-32 rounded-full md:h-44 md:w-44 bg-gradient-to-r from-red-200 to-blue-200 animate-spin-slow"
        ></div>
        <div
          class="absolute md:w-[50%] text-center font-bold text-400 md:text-2xl"
        >
          Crafting captivating web experiences with a passion for innovation and
          a commitment to continuous learning.
        </div>
      </div>
      <h1 class="text-2xl font-semibold text-heavyAccent">Tech Stack</h1>
      <div class="flex flex-col gap-4 md:grid md:grid-cols-2">
        <div>
          <h2 class="text-lg font-semibold text-heavyAccent">Languages</h2>
          <ul class="pl-4">
            <li v-for="lang in techstack.languages" class="relative">
              <span
                class="absolute -left-4 top-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-heavyAccent"
              />
              {{ lang }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-heavyAccent">
            Framework / Library
          </h2>
          <ul class="pl-4">
            <li v-for="framework in techstack.frameworks" class="relative">
              <span
                class="absolute -left-4 top-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-heavyAccent"
              />
              {{ framework }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-heavyAccent">Database</h2>
          <ul class="pl-4">
            <li v-for="database in techstack.databases" class="relative">
              <span
                class="absolute -left-4 top-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-heavyAccent"
              />
              {{ database }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-heavyAccent">Tools</h2>
          <ul class="pl-4">
            <li v-for="tool in techstack.tools" class="relative">
              <span
                class="absolute -left-4 top-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-heavyAccent"
              />
              {{ tool }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Routes } from "@/helpers";
const techstack = {
  languages: ["Javascript / Typescript", "Visual Basic", "PHP", "C#"],
  frameworks: ["TailwindCSS", "Laravel", "Express", "React", "Vue", ".NET"],
  databases: ["MySQL", "MongoDB"],
  tools: ["Visual Studio Code", "Chrome DevTools", "Postman", "Git"],
};
</script>
