<template>
  <section
    id="footer"
    class="max-w-4xl mx-auto px-4 h-24 pb-96 md:pb-0 grid place-items-center min-h-[20vh]"
  >
    <div
      class="w-full py-4 flex flex-col text-sm gap-4 md:grid md:grid-cols-3 mb-4 md:mb-0"
    >
      <div>
        <div>+63 939 727 1117</div>
        <div>
          <a class="hover:underline" href="mailto:markdennissanchez1@gmail.com"
            >markdennissanchez1@gmail.com</a
          >
        </div>
      </div>
      <div class="hidden md:flex items-center">
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
      <div class="flex flex-col gap-2 md:flex-row md:divide-x-2 md:items-center">
        <a
          target="_blank"
          v-for="(social, index) in socials"
          class="hover:underline"
          :class="index > 0 && 'md:pl-2'"
          :href="social.href"
          >{{ social.name }}</a
        >
      </div>
      <div class="md:hidden">
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
    <div class="w-full text-center">
      <hr />
      <p class="py-4 text-xs">
        © 2023 <a class="hover:underline" href="/">Mark Dennis</a>. All rights
        reserved.
      </p>
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
