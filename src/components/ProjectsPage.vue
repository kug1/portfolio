<template>
  <section class="grid place-content-center overflow-hidden">
    <h1 class="header-mid mt-24">All Projects</h1>
    <div
      class="max-w-fit flex flex-wrap mt-12 lg:mt-24 justify-center align-center self-center"
    >
      <project-cards></project-cards>
    </div>
  </section>
  <div class="grid place-content-center mt-8">
    <router-link to="/portfolio/"
      ><base-button text="Back Home"></base-button
    ></router-link>
  </div>
</template>

<script>
import ProjectCards from './ProjectCards.vue';

export default {
  components: {
    ProjectCards,
  },
};
</script>
