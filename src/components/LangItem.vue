<template>
  <li
    class="p-5 m-3 border-black rounded border-2 dark:border-white flex flex-row justify-start w-[10rem] md:w-[12rem]"
  >
    <icon-svg :icon="decideIcon" width="23"></icon-svg>
    <span class="font-semibold text-sm mx-1 grid place-content-center">{{
      lang
    }}</span>
  </li>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  props: ['lang'],
  components: {
    IconSvg: Icon,
  },
  computed: {
    decideIcon() {
      const lang = this.lang.toLowerCase();

      switch (lang) {
        case 'vue':
          return 'mdi:vuejs';
        case 'html':
          return 'html5';
        case 'css':
          return 'css3';
      }
      if (lang === 'tailwind') {
        return 'mdi:tailwind';
      }
      return 'mdi:language-' + lang;
    },
  },
};
</script>
