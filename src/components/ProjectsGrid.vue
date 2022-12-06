<template>
  <div class="flex flex-col mt-10">
    <h1 class="header-mid">Projects</h1>
    <div
      class="max-w-fit mt-12 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-min self-center place-content-center"
    >
      <project-cards></project-cards>
    </div>
    <div class="grid place-content-center mt-4">
      <router-link to="/portfolio/projects"
        ><base-button text="More Projects"></base-button
      ></router-link>
    </div>
  </div>
</template>

<script>
import ProjectCards from '../components/ProjectCards.vue';

export default {
  components: {
    ProjectCards,
  },
};
</script>
