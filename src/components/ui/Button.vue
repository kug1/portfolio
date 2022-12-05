<template>
  <button
    class="w-36 border-2 py-2 px-3 font-semibold border-solid rounded border-black dark:border-white hover:shadow-md shadow-blue-600 dark:shadow-github-blue/75 transition-all duration-[400ms] ease-out"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
};
</script>
