<template>
  <dark-mode v-motion-slide-right></dark-mode>
  <header v-motion-slide-top>
    <router-view name="header"> </router-view>
  </header>
  <main v-motion-slide-top>
    <router-view name="about"> </router-view>
    <router-view name="projects"></router-view>
  </main>
  <footer v-motion-slide-top>
    <the-footer></the-footer>
  </footer>
</template>

<script>
import TheFooter from './components/layouts/TheFooter.vue';

import DarkMode from './components/ui/DarkMode.vue';

export default {
  components: {
    TheFooter,
    DarkMode,
  },
};
</script>

<style>
html.dark {
  color-scheme: dark;
}

body {
  min-height: 100%;
  transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  @apply bg-[#ffffff] text-dark dark:bg-dark dark:text-white;
}
</style>
