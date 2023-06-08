<template>
  <div class="relative">
    <button
      disabled
      class="px-4 py-2 ring-1 ring-inset ring-orange-500 rounded-md text-transparent"
    >
      <slot />
    </button>
    <button
      :disabled="disable"
      class="absolute top-0 left-0 px-4 py-2 transition-all rounded-md text-white"
      :class="disable ? 'bg-orange-200' : 'hover:-top-1 hover:-left-1.5 bg-orange-500 ring-1 ring-orange-500'"
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
