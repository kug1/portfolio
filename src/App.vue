<template>
  <dark-mode v-motion-slide-right></dark-mode>
  <header v-motion-slide-top>
    <the-header></the-header>
  </header>
  <main v-motion-slide-top>
    <Suspense>
      <projects-grid></projects-grid>
      <template #fallback>
        <span class="font-semibold text-center">Loading...</span>
      </template>
    </Suspense>
  </main>
  <footer v-motion-slide-top>
    <the-footer></the-footer>
  </footer>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

import DarkMode from "./components/DarkMode.vue";
import ProjectsGrid from "./components/ProjectsGrid.vue";

export default {
  components: {
    DarkMode,
    TheHeader,
    TheFooter,
    ProjectsGrid,
  },
};
</script>

<style>
html.dark {
  color-scheme: dark;
}

body {
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  @apply bg-[#ffffff] text-[#0b0f10] dark:bg-[#0b0f10] dark:text-white;
}
</style>
