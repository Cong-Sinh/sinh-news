import { createApp } from "vue";
import "./assets/styles/index.scss";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.devtools = true
app.use(router);
app.mount("#app");
// createApp(App).mount("#app");
