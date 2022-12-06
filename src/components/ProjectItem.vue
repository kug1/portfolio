<template>
  <div
    class="rounded border-2 border-black dark:border-white flex flex-col p-5 overflow-hidden w-[20rem] md:w-[21.50rem] m-3"
  >
    <div class="flex flex-row flex-wrap justify-between content-center h-6">
      <a
        class="flex flex-row text-blue-600 dark:text-github-blue"
        :href="url"
        target="_blank"
      >
        <icon-svg
          icon="ri:link-m"
          width="16"
          class="fill-blue-600 mr-1 self-center"
        />
        <h1 class="text-center font-semibold">{{ name }}</h1>
      </a>
      <div class="flex flex-row items-center">
        <span class="p-1 text-sm font-medium">{{ stars }}</span>
        <icon-svg icon="mdi:star" />
      </div>
    </div>
    <div class="h-full flex flex-col justify-between mt-1">
      <p class="text-sm font-thin">{{ desc }}</p>
      <div class="flex flex-row mt-3">
        <icon-svg :icon="decideIcon" width="20" />
        <span class="text-sm font-medium ml-1">{{ language }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  data() {
    return {};
  },
  props: {
    name: String,
    url: String,
    desc: String,
    stars: Number,
    language: String,
  },
  components: {
    IconSvg: Icon,
  },
  computed: {
    decideIcon() {
      const lang = this.language.toLowerCase();

      switch (lang) {
        case 'vue':
          return 'mdi:vuejs';
        case 'html':
          return 'html5';
        case 'css':
          return 'css3';
      }
      return 'mdi:language-' + lang;
    },
  },
};
</script>
