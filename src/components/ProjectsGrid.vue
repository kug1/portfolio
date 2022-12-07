<template>
  <div class="flex flex-col mt-10">
    <h1 class="header-mid">Projects</h1>
    <div
      class="max-w-fit mt-12 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-min self-center place-content-center"
    >
      <Suspense>
        <project-cards></project-cards>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
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
import Loading from '../components/ui/Loading.vue';

export default {
  components: {
    ProjectCards,
    Loading,
  },
};
</script>
