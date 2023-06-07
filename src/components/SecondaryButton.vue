<template>
  <div class="relative">
    <button
      disabled
      class="px-4 py-2 ring-1 ring-inset ring-orange-500 rounded-md"
    >
      <slot />
    </button>
    <button
      class="absolute top-0 left-0 px-4 py-2 hover:-top-1 hover:-left-1.5 transition-all rounded-md bg-white ring-1 ring-orange-500 text-orange-500"
    >
      <slot />
    </button>
  </div>
</template>
