<template>
  <section id="footer" class="px-4 h-24 pb-40 md:pb-0 text-xs">
    <div
      class="max-w-4xl mx-auto flex flex-col gap-4 items-center md:flex-row md:justify-between"
    >
      <p>
        © 2023 <a class="hover:underline" href="/">Mark Dennis</a>. All rights
        reserved.
      </p>
      <div class="flex gap-2 divide-x-2">
        <a
          target="_blank"
          v-for="(social, index) in socials"
          class="hover:underline"
          :class="index > 0 && 'pl-2'"
          :href="social.href"
          >{{ social.name }}</a
        >
      </div>
      <div>
        <p>
          <a
            class="hover:underline"
            target="_blank"
            href="https://www.freepik.com/free-vector/static-asset-illustration-concept_6195516.htm#page=2&query=programming%20greenish&position=3&from_view=search&track=ais"
            >Image by storyset</a
          >
          on Freepik
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const socials = [
  { href: "https://www.fb.com/sanchez.markdennis", name: "Facebook" },
  { href: "https://www.instagram.com/ig.markdennis", name: "Instagram" },
  {
    href: "https://www.linkedin.com/in/sanchez-markdennis",
    name: "LinkedIn",
  },
  { href: "https://www.github.com/markdennis1", name: "Github" },
];
</script>
