<template>
  <dark-mode v-motion-slide-right></dark-mode>
  <header v-motion-slide-top>
    <router-view name="header"></router-view>
  </header>
  <main v-motion-slide-top>
    <router-view name="about"></router-view>
    <Suspense>
      <router-view name="projects"> </router-view>
    </Suspense>
  </main>
  <footer v-motion-slide-top>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
import DarkMode from './components/ui/DarkMode.vue';

export default {
  components: {
    DarkMode,
  },
};
</script>

<style>
html.dark {
  color-scheme: dark;
}

body {
  height: 100%;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  @apply bg-[#ffffff] text-[#0b0f10] dark:bg-[#0b0f10] dark:text-white;
}

footer {
  height: 100%;
}
</style>
