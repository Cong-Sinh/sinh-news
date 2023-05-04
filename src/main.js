import { createApp } from 'vue';
import './assets/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from '@/stores';
import VueSocialSharing from 'vue-social-sharing';

const app = createApp(App);
app.config.devtools = true;
app.use(VueSocialSharing);
app.use(router);
app.use(store);
app.mount('#app');
// createApp(App).mount("#app");
