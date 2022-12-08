<template>
  <button
    class="w-38 border-2 py-2 px-4 font-semibold border-solid rounded border-black dark:border-white shadow shadow-black/75 dark:shadow-white/60 dark:shadow-md transition-all ease-out"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
};
</script>
