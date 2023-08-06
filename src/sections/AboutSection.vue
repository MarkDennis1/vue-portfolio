<template>
  <section :id="Routes.ABOUT.id" class="min-h-[80vh] grid place-items-center">
    <div class="flex flex-col gap-4 px-4 max-w-4xl mx-auto">
      <div class="md:grid grid-cols-2">
        <div class="flex justify-center">
          <img
            class="hidden md:block h-48 w-48 rounded-full shadow-md aspect-square object-cover"
            src="@/assets/images/heroimage.jpg"
            alt="mark-dennis-profile"
          />
          <!-- https://assets4.lottiefiles.com/packages/lf20_l9d3f6vk.json -->
        </div>
        <div>
          <h1 class="text-2xl font-semibold text-heavyAccent">About Me</h1>
          <p class="text-justify">
            I am an aspiring full-stack developer who is passionate about
            utilizing Laravel, Node.js, Vue.js, and React to build intuitive and
            efficient web applications. With a strong foundation in both
            frontend and backend development, I am dedicated to honing my skills
            and expanding my knowledge in order to create seamless and
            user-friendly digital experiences.
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-4 md:grid md:grid-cols-2">
        <!-- Experience -->
        <div>
          <h2 class="text-lg font-semibold text-heavyAccent">Experience</h2>
          <ul class="flex flex-col gap-4">
            <div
              v-for="exp in experiences"
              class="flex flex-col rounded-md p-4"
            >
              <div>
                <div>{{ exp.title }}</div>
                <div class="flex mb-4 justify-between leading-none">
                  <p class="text-xs leading-none">{{ exp.at }}</p>
                  <p class="text-xs leading-none">
                    {{ exp.during }}
                  </p>
                </div>
              </div>
              <ul class="pl-4 space-y-2 overflow-hidden">
                <hr class="h-1 w-full" />
                <li
                  v-for="encounter in exp.encounters"
                  class="relative text-sm text-justify"
                >
                  <span
                    class="absolute -left-4 top-2 h-1 w-1 flex-shrink-0 rounded-full bg-400"
                  />
                  {{ encounter }}
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <!-- Education -->
        <div>
          <h2 class="text-lg font-semibold text-heavyAccent">Education</h2>
          <ul class="flex flex-col gap-4">
            <div
              v-for="ed in education"
              class="p-4 rounded-md"
            >
              <div>
                <p>
                  {{ ed.course }}
                </p>
              </div>
              <div class="flex mb-4 justify-between leading-none">
                <p class="text-xs leading-none">{{ ed.at }}</p>
                <p class="text-xs leading-none whitespace-nowrap">
                  {{ ed.during }}
                </p>
              </div>
              <ul class="pl-4 space-y-2 overflow-hidden">
                <hr class="h-1 w-full" />
                <li
                  v-for="achievement in ed.achievements"
                  class="relative text-sm text-justify"
                >
                  <span
                    class="absolute -left-4 top-2 h-1 w-1 flex-shrink-0 rounded-full bg-400"
                  />
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
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
      "Learned some of the advance concepts of Laravel.",
    ],
  },
];

const education = [
  {
    course: "Bachelor of Science in Information Technology",
    at: "University of Rizal System Binangonan",
    during: "2019 - 2023",
    achievements: [
      "Deans Lister for 3 years.",
      "1st Place in URSB C# Programming Competition 2023.",
      "Co-developer of POS D'Creamy Milktea House.",
    ],
  },
  {
    course: "Information and Communication Technologies",
    at: "Trent Information First Technical Career Institute",
    during: "2017 - 2019",
    achievements: ["Passed NC2 exam"],
  },
];
</script>
