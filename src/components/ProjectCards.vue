<template>
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
