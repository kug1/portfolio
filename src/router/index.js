import { createRouter, createWebHistory } from 'vue-router';
// Components
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';
import About from '../components/About.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import ProjectsGrid from '../components/ProjectsGrid.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/portfolio/',
      components: {
        header: TheHeader,
        about: About,
        projects: ProjectsGrid,
        footer: TheFooter,
      },
      meta: { transition: 'slide-left' },
    },
    {
      name: 'projects',
      path: '/portfolio/projects',
      components: { projects: ProjectsPage, footer: TheFooter },
      meta: { transition: 'slide-right' },
    },
    // { path: '/:notFound(.*)', component: NotFound } // Just learned that github has a default 404 page. No need to make our own here.
  ],
});

export default router;
