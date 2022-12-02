<template>
  <div class="grid place-content-center mt-3">
    <button class="w-36 border-2 py-2 px-3 font-semibold border-solid rounded">
      <router-link :to="path">{{ text }}</router-link>
    </button>
  </div>
</template>

<script>
export default {
  props: ['text', 'path'],
};
</script>
