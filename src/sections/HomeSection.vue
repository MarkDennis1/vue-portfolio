<template>
  <section :id="Routes.HOME.id" class="flex flex-col gap-4 px-4">
    <div>
      <h1 class="text-2xl font-semibold">Mark Dennis Sanchez</h1>
      <p class="text-300 font-bold">Software Developer</p>
    </div>
    <p class="text-md text-justify">
      I am a graduating student pursuing a Bachelor of Science degree in
      Information Technology, with a strong passion for becoming a Full Stack
      Developer.
    </p>
    <div
      class="mx-auto space-y-4 p-4 pb-10 rounded-md border-2 border-cardPrimary"
    >
      <div class="w-full overflow-hidden rounded-md">
        <img src="@/assets/images/image01.png" alt="photo" />
        <!-- https://assets4.lottiefiles.com/packages/lf20_l9d3f6vk.json -->
      </div>
      <p class="text-xs text-center">
        <i
          >"My code doesn't always work, but when it does, I don't know why." -
          Anonymous</i
        >
      </p>
      <div class="flex justify-around">
        <a :href="Routes.CONTACT.href">
          <PrimaryButton> Contact </PrimaryButton>
        </a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/19XGdxn6VmLX1Qk7pcmyB0FZJLMZRjC7u/view"
        >
          <SecondaryButton> Resume </SecondaryButton>
        </a>
      </div>
    </div>
    <div class="relative h-10">
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
