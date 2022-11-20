<template>
  <div class="flex flex-col">
    <h1
      class="text-center text-2xl md:text-3xl lg:text-[2.10rem] font-bold my-6"
    >
      Projects
    </h1>
    <div class="max-w-fit flex my-4 self-center">
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
  </div>
</template>

<script>
import projects from "../data/projects.js";
import ProjectItem from "../components/ProjectItem.vue";

export default {
  data() {
    return {
      projects: projects,
    };
  },
  components: {
    ProjectItem,
  },
};
</script>
