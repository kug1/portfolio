<template>
  <div class="flex flex-col mt-10">
    <h1 class="header-mid">Projects</h1>
    <div
      class="max-w-fit flex mt-8 mb-4 self-center flex-wrap align-center justify-center"
    >
      <template v-for="project in projects" :key="project.id">
        <project-item
          v-if="!project.fork"
          :name="project.name"
          :url="project.html_url"
          :desc="project.description"
          :stars="project.stargazers_count"
          :language="project.language"
        >
        </project-item>
      </template>
    </div>
    <router-link to="/portfolio/projects"
      ><base-button text="More Projects"></base-button
    ></router-link>
  </div>
</template>

<script>
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  async setup() {
    const res = await fetch(
      `https://api.github.com/users/kug1/repos?type=owner`
    );
    const projects = await res.json();
    return {
      projects,
    };
  },
};
</script>
