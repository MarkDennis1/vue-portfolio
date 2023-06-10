<template>
  <section :id="Routes.SKILLS.id" class="">
    <div class="flex flex-col gap-4 px-4 max-w-4xl mx-auto">
      <h1 class="text-2xl font-semibold text-heavyAccent">Technologies I use</h1>
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
          <h2 class="text-lg font-semibold text-heavyAccent">Framework / Library</h2>
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
