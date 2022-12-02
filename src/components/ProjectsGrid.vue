<template>
  <div class="flex flex-col mt-10">
    <h1
      class="text-center text-2xl md:text-3xl lg:text-[2.10rem] font-bold my-8 underline decoration-blue-600 dark:decoration-github-blue decoration-2 md:decoration-3 underline-offset-4"
    >
      Projects
    </h1>
    <div
      class="max-w-fit flex my-4 self-center flex-wrap align-center justify-center"
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
    <base-button text="More Projects" path="/portfolio/projects"></base-button>
  </div>
</template>

<script>
import ProjectItem from '../components/ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  async setup() {
    const res = await fetch(
      `https://api.github.com/users/kug1/repos?type=owner`
    );
    const projects = await res.json();
    // this.projects = data;
    return {
      projects,
    };
  },
};
</script>
