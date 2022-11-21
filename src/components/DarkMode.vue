<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex justify-end">
    <button
      @click="toggleDark()"
      class="px-4 py-2 mt-2 mr-2 text-black dark:text-white border-black rounded dark:bg-transparent dark:border-white border-2 font-semibold"
    >
      Toggle Dark Mode
    </button>
  </div>
</template>
