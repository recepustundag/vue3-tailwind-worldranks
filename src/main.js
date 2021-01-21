import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import './index.css';

const recep = createApp(App);
recep.use(router);
recep.use(router);
recep.mount('#app');
