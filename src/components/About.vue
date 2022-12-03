<template>
  <div class="flex flex-col">
    <h1 class="header-mid">About</h1>

    <div class="max-w-2xl self-center flex flex-col mt-10">
      <p class="text-center text-base font-medium px-2">
        Hello! Im a high-schooler who likes coding. I like making CLI tools,
        customizing Linux environment, designing websites and creating them from
        scratch. I use the following languages and frameworks while coding.
      </p>
      <div class="mt-12">
        <ul class="flex flex-wrap justify-center align-center">
          <lang-item v-for="lang in langs" :key="lang" :lang="lang"></lang-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LangItem from './LangItem.vue';

export default {
  components: {
    LangItem,
  },
  data() {
    return {
      langs: ['Typescript', 'Javascript', 'Vue', 'Tailwind', 'Rust'],
    };
  },
};
</script>
