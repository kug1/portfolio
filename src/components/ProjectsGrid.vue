<template>
  <div class="flex flex-col mt-10">
    <h1 class="header-mid">Projects</h1>
    <div
      class="max-w-fit mt-12 mb-4 flex flex-wrap self-center align-center justify-center"
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
