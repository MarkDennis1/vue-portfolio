<template>
  <section :id="Routes.HOME.id" class="flex flex-col gap-4">
    <div>
      <h1 class="text-2xl font-semibold">Mark Dennis Sanchez</h1>
      <p class="font-bold text-gray-600">Web Developer</p>
    </div>
    <p class="text-md">
      Graduating student in Bachelor of Science in Information Technology.
      Aspiring to become a Full Stack Developer.
    </p>
    <div class="mx-auto space-y-4 p-4 pb-10 border rounded-md">
      <div class="w-full overflow-hidden rounded-md">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets4.lottiefiles.com/packages/lf20_l9d3f6vk.json"
        >
        </lottie-player>
      </div>
      <p class="text-xs text-center">
        <i
          >"My code doesn't always work, but when it does, I don't know why." -
          Anonymous</i
        >
      </p>
      <div class="flex justify-around">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/19XGdxn6VmLX1Qk7pcmyB0FZJLMZRjC7u/view"
        >
          <SecondaryButton> Resume </SecondaryButton>
        </a>
        <a :href="Routes.CONTACT.href">
          <PrimaryButton> Contact </PrimaryButton>
        </a>
      </div>
    </div>
    <div class="relative h-10">
      <div
        class="absolute left-0 right-0 -top-10 mx-auto flex justify-center gap-4 text-gray-500"
      >
        <a
          v-for="(social, index) in socials"
          :key="index"
          target="_blank"
          :href="social.href"
          class="h-10 w-10 rounded-full overflow-hidden bg-white hover:text-orange-500"
        >
          <component :is="social.icon" class="h-10 flex-shrink-0" />
        </a>
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
