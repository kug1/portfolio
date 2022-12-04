<template>
  <section class="grid place-content-center overflow-hidden">
    <h1 class="header-mid mt-24">All Projects</h1>
    <div
      class="max-w-fit flex flex-wrap mt-12 lg:mt-24 justify-center align-center self-center"
    >
      <project-cards></project-cards>
    </div>
  </section>
</template>
<script>
import ProjectCards from './ProjectCards.vue';

export default {
  components: {
    ProjectCards,
  },
};
</script>
