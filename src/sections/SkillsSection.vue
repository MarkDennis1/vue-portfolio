<template>
  <section :id="Routes.SKILLS.id" class="flex flex-col gap-4 px-4">
    <h1 class="text-2xl font-semibold">Technologies I use</h1>
    <div>
      <h2 class="text-lg font-semibold">Languages</h2>
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
      <h2 class="text-lg font-semibold">Framework / Library</h2>
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
      <h2 class="text-lg font-semibold">Database</h2>
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
      <h2 class="text-lg font-semibold">Tools</h2>
      <ul class="pl-4">
        <li v-for="tool in techstack.tools" class="relative">
          <span
            class="absolute -left-4 top-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-heavyAccent"
          />
          {{ tool }}
        </li>
      </ul>
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
