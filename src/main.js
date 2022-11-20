import { createApp } from "vue";
import "./styles/tailwind.css";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use(MotionPlugin);
app.mount("#app");
