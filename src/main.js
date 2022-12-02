import { createApp } from 'vue';
import './styles/tailwind.css';
import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';
import router from './router/index.js';
// Components
import Button from './components/ui/Button.vue';

const app = createApp(App);

app.component('base-button', Button);

app.use(MotionPlugin);
app.use(router);
app.mount('#app');
