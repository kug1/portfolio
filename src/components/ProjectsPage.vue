<template>
  <section>
    <!-- <projects-grid></projects-grid>
    <base-button>Go Back</base-button> -->
    <h1 class="header-mid">All Projects</h1>
    <div class="grid"></div>
  </section>
</template>

<script>
import Projects from './Projects.vue';

export default {
  components: {
    'projects-grid': Projects,
  },
};
</script>
