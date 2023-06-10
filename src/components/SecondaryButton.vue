<template>
  <div class="relative">
    <button
      disabled
      class="px-4 py-2 ring-1 ring-inset ring-heavyAccent rounded-md"
    >
      <slot />
    </button>
    <button
      :disabled="disable"
      class="absolute top-0 left-0 px-4 py-2 transition-all rounded-md bg-white ring-1"
      :class="
        disable
          ? 'text-orange-200 ring-orange-200'
          : 'hover:-top-1 hover:-left-1.5 text-heavyAccent ring-heavyAccent'
      "
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  disable: {
    type: Boolean,
    default: false,
  },
});
</script>
