<template>
  <section :id="Routes.HOME.id">
    <div
      class="flex flex-col gap-4 px-4 pt-16 max-w-4xl mx-auto lg:flex-row lg:items-center lg:h-[80vh]"
    >
      <!-- hero left -->
      <div class="flex flex-col gap-4 w-full">
        <div>
          <p class="text-heavyAccent font-bold leading-none">
            Software Developer
          </p>
          <h1 class="text-2xl font-semibold leading-none">
            Mark Dennis Sanchez
          </h1>
        </div>
        <p class="text-md text-justify">
          I am a graduating student pursuing a Bachelor of Science degree in
          Information Technology, with a strong passion for becoming a Full
          Stack Developer.
        </p>
          <!-- buttons  -->
          <div class="hidden lg:flex gap-4 text-sm">
            <a :href="Routes.ABOUT.href">
              <PrimaryButton> Learn more </PrimaryButton>
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/19XGdxn6VmLX1Qk7pcmyB0FZJLMZRjC7u/view"
            >
              <SecondaryButton> View resume </SecondaryButton>
            </a>
          </div>
          <!-- socials -->
          <div class="hidden lg:flex gap-4">
            <a
              v-for="(social, index) in socials"
              :key="index"
              target="_blank"
              :href="social.href"
              class="relative h-10 w-10"
            >
              <component
                :is="social.icon"
                class="absolute h-10 flex-shrink-0 duration-300 hover:text-lightAccent hover:-left-1 hover:-top-1 rounded-full"
              />
              <component :is="social.icon" class="h-10 flex-shrink-0" />
            </a>
          </div>
      </div>
      <!-- hero right -->
      <div class="hidden lg:flex flex-col gap-4 w-full items-center">
        <div class="h-80 w-80 aspect-square overflow-hidden">
          <img src="@/assets/images/heroimage.jpg" alt="mark-dennis-profile" />
          <!-- https://assets4.lottiefiles.com/packages/lf20_l9d3f6vk.json -->
        </div>
        <p class="text-xs text-center w-1/2">
          <i
            >"Coding is not just about writing code, it's about creating a
            solution."</i
          >
          <p><i> - Kathy Sierra</i></p>
        </p>
      </div>
      <!-- mobile card -->
      <div
        class="mx-auto space-y-4 p-4 pb-10 rounded-md border-2 border-cardPrimary lg:hidden"
      >
        <div class="w-full overflow-hidden rounded-md md:h-[50dvh] md:aspect-square">
          <img src="@/assets/images/image01.png" alt="mark-dennis-profile" />
          <!-- https://assets4.lottiefiles.com/packages/lf20_l9d3f6vk.json -->
        </div>
        <p class="text-xs text-center">
          <i
            >"Coding is not just about writing code, it's about creating a
            solution."</i
          >
          <p><i> - Kathy Sierra</i></p>
        </p>
        <div class="flex justify-around gap-4 md:justify-center text-sm">
          <a :href="Routes.ABOUT.href">
            <PrimaryButton> Learn more </PrimaryButton>
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/19XGdxn6VmLX1Qk7pcmyB0FZJLMZRjC7u/view"
          >
            <SecondaryButton> View resume </SecondaryButton>
          </a>
        </div>
      </div>
      <!-- mobile socials -->
      <div class="relative h-10 lg:hidden">
        <div
          class="absolute left-0 right-0 -top-10 mx-auto flex justify-center gap-4"
        >
          <a
            v-for="(social, index) in socials"
            :key="index"
            target="_blank"
            :href="social.href"
            class="relative h-10 w-10"
          >
            <component
              :is="social.icon"
              class="absolute h-10 flex-shrink-0 duration-300 hover:text-lightAccent hover:-left-0.5 hover:-top-0.5 rounded-full"
            />
            <component :is="social.icon" class="h-10 flex-shrink-0" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Routes } from "@/helpers";
import { PrimaryButton, SecondaryButton } from "@/components";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  GithubIcon,
} from "@/components/icons";

const socials = [
  { href: "https://www.fb.com/sanchez.markdennis", icon: FacebookIcon },
  { href: "https://www.instagram.com/ig.markdennis", icon: InstagramIcon },
  {
    href: "https://www.linkedin.com/in/sanchez-markdennis",
    icon: LinkedInIcon,
  },
  { href: "https://www.github.com/markdennis1", icon: GithubIcon },
];
</script>
